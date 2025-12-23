## Giới thiệu ngắn

Repo này là một **website đọc tài liệu/blog** viết bằng **Next.js (App Router)** để hiển thị “LeetCode Cookbook - Analysis in Go” từ các file Markdown.

- **UI/Tech**: Next.js + React, TailwindCSS, Radix UI; render Markdown (kèm syntax highlight + KaTeX)
- **Nguồn nội dung**: `public/asssets/content/`

## Nguồn gốc & quyền tác giả (Attribution)

- **Nội dung cookbook/LeetCode**: đây là **bản Việt hoá** do **TranDatk** thực hiện, dựa trên repo gốc của **halfrost**:
  - Repo gốc: [`https://github.com/halfrost/LeetCode-Go`](https://github.com/halfrost/LeetCode-Go)
  - Nội dung trong repo có thể tham chiếu hình ảnh/liên kết từ `books.halfrost.com`.
- **Bản quyền bài toán LeetCode**: thuộc về **LeetCode** và các bên liên quan; repo này **không tuyên bố sở hữu nội dung gốc**, chỉ chịu trách nhiệm phần dịch/VN hoá.

Chi tiết thông báo Việt hoá & ghi nhận nằm tại `public/asssets/content/_index.md`.

## Chạy local

```bash
npm install
npm run dev
```

Mở [`http://localhost:3000`](http://localhost:3000).
