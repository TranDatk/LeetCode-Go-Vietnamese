#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Script để tìm tất cả ảnh trong markdown files của chapter-four,
tải về thư mục chuong-4, và thay thế đường dẫn.
"""

import os
import re
import shutil
import urllib.request
import urllib.parse
from pathlib import Path
from typing import List, Tuple

# Đường dẫn
CHAPTER_FOUR_DIR = Path("public/asssets/content/chapter-four")
IMAGES_DIR = Path("public/images/chuong-4")

# Đảm bảo thư mục images tồn tại
IMAGES_DIR.mkdir(parents=True, exist_ok=True)


def extract_image_urls(content: str) -> List[Tuple[str, str]]:
    """
    Trích xuất tất cả URL ảnh từ nội dung markdown.
    Trả về list các tuple (original_pattern, url)
    """
    images = []
    
    # Pattern 1: Markdown image ![alt](url) hoặc ![](url)
    markdown_pattern = r'!\[([^\]]*)\]\(([^)]+)\)'
    for match in re.finditer(markdown_pattern, content):
        alt_text = match.group(1)
        url = match.group(2)
        # Loại bỏ query parameters và fragments
        url = url.split('?')[0].split('#')[0]
        if url.lower().endswith(('.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp')):
            images.append((match.group(0), url))
    
    # Pattern 2: HTML img tag <img src='url'> hoặc <img src="url">
    html_pattern = r'<img[^>]+src=["\']([^"\']+)["\']'
    for match in re.finditer(html_pattern, content, re.IGNORECASE):
        url = match.group(1)
        url = url.split('?')[0].split('#')[0]
        if url.lower().endswith(('.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp')):
            # Tìm toàn bộ thẻ img để thay thế
            img_tag_match = re.search(r'<img[^>]*>', content[match.start():match.end()+100])
            if img_tag_match:
                images.append((img_tag_match.group(0), url))
    
    return images


def download_image(url: str, output_path: Path) -> bool:
    """
    Tải ảnh từ URL về local file.
    """
    try:
        # Xử lý URL có thể không có protocol
        if not url.startswith(('http://', 'https://')):
            if url.startswith('//'):
                url = 'https:' + url
            elif url.startswith('/'):
                # URL tương đối, bỏ qua vì đã là local
                return False
        
        # Tải ảnh
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
        request = urllib.request.Request(url, headers=headers)
        
        with urllib.request.urlopen(request, timeout=10) as response:
            with open(output_path, 'wb') as f:
                shutil.copyfileobj(response, f)
        return True
    except Exception as e:
        print(f"  ❌ Lỗi khi tải {url}: {e}")
        return False


def get_filename_from_url(url: str) -> str:
    """
    Lấy tên file từ URL.
    """
    # Nếu là URL local (bắt đầu bằng /), lấy phần cuối
    if url.startswith('/'):
        return os.path.basename(url)
    
    # Parse URL
    parsed = urllib.parse.urlparse(url)
    filename = os.path.basename(parsed.path)
    
    # Nếu không có extension, thử lấy từ path
    if not filename or '.' not in filename:
        path_parts = [p for p in parsed.path.split('/') if p]
        if path_parts:
            filename = path_parts[-1]
    
    # Đảm bảo có extension
    if '.' not in filename:
        filename = filename + '.png'
    
    # Làm sạch tên file (loại bỏ ký tự đặc biệt)
    filename = re.sub(r'[^\w\-_\.]', '_', filename)
    
    return filename


def process_markdown_file(file_path: Path) -> int:
    """
    Xử lý một file markdown: tìm ảnh, tải về, và cập nhật đường dẫn.
    Trả về số lượng ảnh đã xử lý.
    """
    print(f"\n📄 Xử lý: {file_path}")
    
    # Đọc nội dung
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        print(f"  ❌ Lỗi đọc file: {e}")
        return 0
    
    # Trích xuất ảnh
    images = extract_image_urls(content)
    
    if not images:
        print(f"  ℹ️  Không có ảnh")
        return 0
    
    print(f"  🔍 Tìm thấy {len(images)} ảnh")
    
    updated_content = content
    processed_count = 0
    
    for original_pattern, url in images:
        # Bỏ qua nếu đã là đường dẫn local đúng format
        if url.startswith('/images/chuong-4/'):
            print(f"  ✓ Đã đúng format: {url}")
            continue
        
        # Lấy tên file
        filename = get_filename_from_url(url)
        local_path = IMAGES_DIR / filename
        
        # Tải ảnh nếu chưa tồn tại
        if not local_path.exists():
            if url.startswith('/'):
                # URL local, copy từ public
                source_path = Path("public") / url.lstrip('/')
                if source_path.exists():
                    shutil.copy2(source_path, local_path)
                    print(f"  ✓ Copy local: {filename}")
                else:
                    print(f"  ⚠️  Không tìm thấy: {source_path}")
                    continue
            else:
                # URL từ internet, tải về
                print(f"  ⬇️  Tải: {url}")
                if not download_image(url, local_path):
                    continue
                print(f"  ✓ Đã tải: {filename}")
        else:
            print(f"  ✓ Đã tồn tại: {filename}")
        
        # Tạo đường dẫn mới
        new_path = f"/images/chuong-4/{filename}"
        
        # Thay thế trong nội dung
        if original_pattern.startswith('<img'):
            # HTML img tag - thay thế src
            new_pattern = re.sub(
                r'src=["\'][^"\']+["\']',
                f'src="{new_path}"',
                original_pattern
            )
        else:
            # Markdown image - giữ alt text, thay URL
            alt_match = re.match(r'!\[([^\]]*)\]', original_pattern)
            alt_text = alt_match.group(1) if alt_match else ''
            new_pattern = f"![{alt_text}]({new_path})"
        
        updated_content = updated_content.replace(original_pattern, new_pattern)
        processed_count += 1
        print(f"  🔄 Đã cập nhật: {new_path}")
    
    # Ghi lại file nếu có thay đổi
    if updated_content != content:
        try:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(updated_content)
            print(f"  ✅ Đã lưu file")
        except Exception as e:
            print(f"  ❌ Lỗi ghi file: {e}")
    
    return processed_count


def main():
    """
    Hàm chính: duyệt tất cả markdown files trong chapter-four.
    """
    print("🚀 Bắt đầu xử lý ảnh trong chapter-four...")
    print(f"📁 Thư mục nguồn: {CHAPTER_FOUR_DIR}")
    print(f"📁 Thư mục đích: {IMAGES_DIR}")
    
    # Tìm tất cả file .md
    md_files = list(CHAPTER_FOUR_DIR.rglob("*.md"))
    
    print(f"\n📊 Tìm thấy {len(md_files)} file markdown")
    
    total_images = 0
    for md_file in md_files:
        count = process_markdown_file(md_file)
        total_images += count
    
    print(f"\n✨ Hoàn thành!")
    print(f"📊 Tổng số ảnh đã xử lý: {total_images}")
    print(f"📁 Ảnh được lưu tại: {IMAGES_DIR}")


if __name__ == "__main__":
    main()

