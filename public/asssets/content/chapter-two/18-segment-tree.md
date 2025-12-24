---
title: 2.18 ✅ Cây đoạn (Segment Tree)
type: docs
weight: 18
---

# Cây đoạn (Segment Tree)

![](https://img.halfrost.com/Leetcode/Segment_Tree.png)

- Cách hiện thực **cây đoạn bằng mảng (array-based segment tree)**: trừu tượng hoá phần `pushUp` (gộp 2 node) để có thể áp dụng cho nhiều phép toán (cộng, `max`, `min`, ...). Bài 218, 303, 307, 699.
- Cách viết kinh điển của **cây đoạn đếm (counting segment tree)**. Bài 315, 327, 493.
- Hiện thực **cây đoạn dạng cây (tree-based segment tree)**. Bài 715, 732.
- **Lazy propagation** (cập nhật lười theo đoạn). Bài 218, 699.
- **Rời rạc hoá (discretization)**. Cần chú ý trường hợp đặc biệt: giả sử có 3 đoạn \([1,10]\), \([1,4]\), \([6,10]\). Nếu rời rạc hoá thành `x[1]=1,x[2]=4,x[3]=6,x[4]=10` thì:
	- đoạn 1 thành \([1,4]\)
	- đoạn 2 thành \([1,2]\)
	- đoạn 3 thành \([3,4]\)
  Khi đó “đoạn 1 = đoạn 2 + đoạn 3” (trong không gian rời rạc), nhưng trước khi rời rạc hoá thì rõ ràng đoạn 1 **>** đoạn 2 + đoạn 3. Cách đúng: chèn thêm 1 điểm khi khoảng cách > 1, ví dụ giữa `1 4 6 10` chèn `5` → `x[1]=1,x[2]=4,x[3]=5,x[4]=6,x[5]=10`. Khi đó đoạn 1 là `1-5`, đoạn 2 là `1-2`, đoạn 3 là `4-5`.
- Xây dựng cây đoạn linh hoạt: mỗi node có thể lưu nhiều thông tin, `pushUp` cũng có thể đa dạng. Bài 850, 1157.


Cây đoạn – [các dạng bài](https://blog.csdn.net/xuechelingxiao/article/details/38313105) từ dễ đến khó:

1. Cập nhật điểm (single point update):  
	[HDU 1166 敌兵布阵](http://acm.hdu.edu.cn/showproblem.php?pid=1166) update: tăng/giảm 1 điểm, query: tổng đoạn  
	[HDU 1754 I Hate It](http://acm.hdu.edu.cn/showproblem.php?pid=1754) update: thay thế 1 điểm, query: giá trị lớn nhất/nhỏ nhất trên đoạn  
	[HDU 1394 Minimum Inversion Number](http://acm.hdu.edu.cn/showproblem.php?pid=1394) update: tăng/giảm 1 điểm, query: tổng đoạn  
	[HDU 2795 Billboard](http://acm.hdu.edu.cn/showproblem.php?pid=2795) query: tìm vị trí có giá trị lớn nhất trong đoạn (thực hiện update ngay trong query)
2. Cập nhật đoạn (range update):  
	[HDU 1698 Just a Hook](http://acm.hdu.edu.cn/showproblem.php?pid=1698) update: thay thế theo đoạn (vì chỉ query 1 lần toàn đoạn nên có thể in trực tiếp thông tin node gốc)  
	[POJ 3468 A Simple Problem with Integers](http://poj.org/problem?id=3468) update: tăng/giảm theo đoạn, query: tổng đoạn  
	[POJ 2528 Mayor’s posters](http://poj.org/problem?id=2528) rời rạc hoá + update: thay thế theo đoạn, query: hash đơn giản  
	[POJ 3225 Help with Intervals](http://poj.org/problem?id=3225) update: thay thế theo đoạn, XOR theo đoạn, query: hash đơn giản
3. Gộp đoạn (range merge) — loại bài hỏi “đoạn liên tiếp dài nhất thỏa điều kiện”, nên `pushUp` phải gộp thông tin của 2 con trái/phải:  
	[POJ 3667 Hotel](http://poj.org/problem?id=3667) update: thay thế theo đoạn, query: điểm trái nhất thỏa điều kiện
4. Scanline (đường quét) — cần sắp xếp các thao tác và quét từ trái sang phải; kinh điển là hợp diện tích/chu vi hình chữ nhật:  
	[HDU 1542 Atlantis](http://acm.hdu.edu.cn/showproblem.php?pid=1542) update: tăng/giảm theo đoạn, query: lấy trực tiếp giá trị ở node gốc  
	[HDU 1828 Picture](http://acm.hdu.edu.cn/showproblem.php?pid=1828) update: tăng/giảm theo đoạn, query: lấy trực tiếp giá trị ở node gốc


| STT      | Tiêu đề | Lời giải  | Độ khó  | Độ phức tạp thời gian | Độ phức tạp bộ nhớ  |Yêu thích | Tỷ lệ AC (Acceptance) |
|:--------:|:------- | :--------: | :----------: | :----: | :-----: | :-----: |:-----: |
|0218|Bài toán đường chân trời (The Skyline Problem)|[Go]({{< relref "/ChapterFour/0200~0299/0218.The-Skyline-Problem.md" >}})|Hard| O(n log n)| O(n)|❤️|41.9%|
|0307|Truy vấn tổng đoạn - có thể thay đổi (Range Sum Query - Mutable)|[Go]({{< relref "/ChapterFour/0300~0399/0307.Range-Sum-Query-Mutable.md" >}})|Medium| O(1)| O(n)||40.7%|
|0315|Đếm số nhỏ hơn ở phía sau (Count of Smaller Numbers After Self)|[Go]({{< relref "/ChapterFour/0300~0399/0315.Count-of-Smaller-Numbers-After-Self.md" >}})|Hard| O(n log n)| O(n)||42.6%|
|0327|Đếm tổng đoạn (Count of Range Sum)|[Go]({{< relref "/ChapterFour/0300~0399/0327.Count-of-Range-Sum.md" >}})|Hard| O(n log n)| O(n)|❤️|35.8%|
|0493|Cặp đảo ngược (Reverse Pairs)|[Go]({{< relref "/ChapterFour/0400~0499/0493.Reverse-Pairs.md" >}})|Hard| O(n log n)| O(n)||30.9%|
|0699|Các hình vuông rơi xuống (Falling Squares)|[Go]({{< relref "/ChapterFour/0600~0699/0699.Falling-Squares.md" >}})|Hard| O(n log n)| O(n)|❤️|44.7%|
|0715|Mô-đun đoạn (Range Module)|[Go]({{< relref "/ChapterFour/0700~0799/0715.Range-Module.md" >}})|Hard| O(log n)| O(n)|❤️|44.6%|
|0729|Lịch của tôi I (My Calendar I)|[Go]({{< relref "/ChapterFour/0700~0799/0729.My-Calendar-I.md" >}})|Medium||||56.8%|
|0732|Lịch của tôi III (My Calendar III)|[Go]({{< relref "/ChapterFour/0700~0799/0732.My-Calendar-III.md" >}})|Hard| O(log n)| O(n)|❤️|71.5%|
|0850|Diện tích hình chữ nhật II (Rectangle Area II)|[Go]({{< relref "/ChapterFour/0800~0899/0850.Rectangle-Area-II.md" >}})|Hard| O(n log n)| O(n)|❤️|53.9%|
|1157|Phần tử chiếm đa số trực tuyến trong mảng con (Online Majority Element In Subarray)|[Go]({{< relref "/ChapterFour/1100~1199/1157.Online-Majority-Element-In-Subarray.md" >}})|Hard| O(log n)| O(n)|❤️|41.8%|
|1649|Tạo mảng đã sắp xếp qua hướng dẫn (Create Sorted Array through Instructions)|[Go]({{< relref "/ChapterFour/1600~1699/1649.Create-Sorted-Array-through-Instructions.md" >}})|Hard||||37.5%|
|------------|-------------------------------------------------------|-------| ----------------| ---------------|-------------|-------------|-------------|


----------------------------------------------
<div style="display: flex;justify-content: space-between;align-items: center;">
<p><a href="https://books.halfrost.com/leetcode/ChapterTwo/Sliding_Window/">⬅️上一页</a></p>
<p><a href="https://books.halfrost.com/leetcode/ChapterTwo/Binary_Indexed_Tree/">下一页➡️</a></p>
</div>
