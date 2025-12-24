---
title: 2.15 ✅ Thao tác bit (Bit Manipulation)
type: docs
weight: 15
---

# Thao tác bit (Bit Manipulation)

![](https://img.halfrost.com/Leetcode/Bit_Manipulation.png)

- Đặc tính của phép **XOR**. Bài 136, 268, 389, 421.

```go
x ^ 0 = x
x ^ 11111……1111 = ~x
x ^ (~x) = 11111……1111
x ^ x = 0
a ^ b = c  => a ^ c = b  => b ^ c = a (Tính giao hoán)
a ^ b ^ c = a ^ (b ^ c) = (a ^ b）^ c (Tính kết hợp)
```

- Xây dựng **mask** đặc biệt, đặt các vị trí cần thiết thành 0 hoặc 1.

```go
Dọn sạch n bit ngoài cùng bên phải của x: x & ( ~0 << n )
Lấy giá trị bit thứ n của x (0 hoặc 1): (x >> n) & 1
Lấy giá trị lũy thừa ứng với bit thứ n: x & (1 << (n - 1))
Chỉ đặt bit thứ n thành 1: x | (1 << n)
Chỉ đặt bit thứ n thành 0: x & (~(1 << n))
Dọn sạch từ bit cao nhất đến bit thứ n (bao gồm n): x & ((1 << n) - 1)
Dọn sạch từ bit thứ n đến bit 0 (bao gồm 0): x & (~((1 << (n + 1)) - 1))
```

- Các phép toán bit **AND (&)** có ý nghĩa đặc biệt. Bài 260, 201, 318, 371, 397, 461, 693.

```go
X & 1 == 1: kiểm tra số lẻ (chẵn)
X &= (X - 1): xoá bit 1 thấp nhất (LSB)
X & -X: lấy bit 1 thấp nhất (LSB)
X & ~X = 0
```



| STT      | Tiêu đề | Lời giải  | Độ khó  | Độ phức tạp thời gian | Độ phức tạp bộ nhớ  |Yêu thích | Tỷ lệ AC (Acceptance) |
|:--------:|:------- | :--------: | :----------: | :----: | :-----: | :-----: |:-----: |
|0029|Chia hai số nguyên (Divide Two Integers)|[Go]({{< relref "/ChapterFour/0001~0099/0029.Divide-Two-Integers.md" >}})|Medium||||17.2%|
|0067|Cộng nhị phân (Add Binary)|[Go]({{< relref "/ChapterFour/0001~0099/0067.Add-Binary.md" >}})|Easy||||52.4%|
|0078|Các tập con (Subsets)|[Go]({{< relref "/ChapterFour/0001~0099/0078.Subsets.md" >}})|Medium| O(n^2)| O(n)|❤️|74.9%|
|0089|Mã Gray (Gray Code)|[Go]({{< relref "/ChapterFour/0001~0099/0089.Gray-Code.md" >}})|Medium||||57.2%|
|0090|Các tập con II (Subsets II)|[Go]({{< relref "/ChapterFour/0001~0099/0090.Subsets-II.md" >}})|Medium||||55.9%|
|0136|Số duy nhất (Single Number)|[Go]({{< relref "/ChapterFour/0100~0199/0136.Single-Number.md" >}})|Easy| O(n)| O(1)||70.7%|
|0137|Số duy nhất II (Single Number II)|[Go]({{< relref "/ChapterFour/0100~0199/0137.Single-Number-II.md" >}})|Medium| O(n)| O(1)|❤️|58.5%|
|0187|Các chuỗi DNA lặp lại (Repeated DNA Sequences)|[Go]({{< relref "/ChapterFour/0100~0199/0187.Repeated-DNA-Sequences.md" >}})|Medium| O(n)| O(1)||47.0%|
|0190|Đảo bit (Reverse Bits)|[Go]({{< relref "/ChapterFour/0100~0199/0190.Reverse-Bits.md" >}})|Easy| O(n)| O(1)|❤️|54.0%|
|0191|Số lượng bit 1 (Number of 1 Bits)|[Go]({{< relref "/ChapterFour/0100~0199/0191.Number-of-1-Bits.md" >}})|Easy| O(n)| O(1)||66.6%|
|0201|AND theo bit của đoạn số (Bitwise AND of Numbers Range)|[Go]({{< relref "/ChapterFour/0200~0299/0201.Bitwise-AND-of-Numbers-Range.md" >}})|Medium| O(n)| O(1)|❤️|42.5%|
|0231|Lũy thừa của 2 (Power of Two)|[Go]({{< relref "/ChapterFour/0200~0299/0231.Power-of-Two.md" >}})|Easy| O(1)| O(1)||46.0%|
|0260|Số duy nhất III (Single Number III)|[Go]({{< relref "/ChapterFour/0200~0299/0260.Single-Number-III.md" >}})|Medium| O(n)| O(1)|❤️|67.7%|
|0268|Số bị thiếu (Missing Number)|[Go]({{< relref "/ChapterFour/0200~0299/0268.Missing-Number.md" >}})|Easy| O(n)| O(1)||62.6%|
|0287|Tìm số bị lặp (Find the Duplicate Number)|[Go]({{< relref "/ChapterFour/0200~0299/0287.Find-the-Duplicate-Number.md" >}})|Medium||||59.1%|
|0318|Tích lớn nhất của độ dài từ (Maximum Product of Word Lengths)|[Go]({{< relref "/ChapterFour/0300~0399/0318.Maximum-Product-of-Word-Lengths.md" >}})|Medium| O(n)| O(1)||59.9%|
|0338|Đếm bit (Counting Bits)|[Go]({{< relref "/ChapterFour/0300~0399/0338.Counting-Bits.md" >}})|Easy| O(n)| O(n)||75.8%|
|0342|Lũy thừa của 4 (Power of Four)|[Go]({{< relref "/ChapterFour/0300~0399/0342.Power-of-Four.md" >}})|Easy| O(n)| O(1)||46.2%|
|0371|Tổng của hai số nguyên (Sum of Two Integers)|[Go]({{< relref "/ChapterFour/0300~0399/0371.Sum-of-Two-Integers.md" >}})|Medium| O(n)| O(1)||50.7%|
|0389|Tìm ký tự khác biệt (Find the Difference)|[Go]({{< relref "/ChapterFour/0300~0399/0389.Find-the-Difference.md" >}})|Easy| O(n)| O(1)||59.9%|
|0393|Xác thực UTF-8 (UTF-8 Validation)|[Go]({{< relref "/ChapterFour/0300~0399/0393.UTF-8-Validation.md" >}})|Medium| O(n)| O(1)||45.1%|
|0397|Thay thế số nguyên (Integer Replacement)|[Go]({{< relref "/ChapterFour/0300~0399/0397.Integer-Replacement.md" >}})|Medium| O(n)| O(1)||35.2%|
|0401|Đồng hồ nhị phân (Binary Watch)|[Go]({{< relref "/ChapterFour/0400~0499/0401.Binary-Watch.md" >}})|Easy| O(1)| O(1)||52.3%|
|0405|Chuyển số sang hệ thập lục phân (Convert a Number to Hexadecimal)|[Go]({{< relref "/ChapterFour/0400~0499/0405.Convert-a-Number-to-Hexadecimal.md" >}})|Easy| O(n)| O(1)||46.8%|
|0421|XOR lớn nhất của hai số trong mảng (Maximum XOR of Two Numbers in an Array)|[Go]({{< relref "/ChapterFour/0400~0499/0421.Maximum-XOR-of-Two-Numbers-in-an-Array.md" >}})|Medium| O(n)| O(1)|❤️|54.0%|
|0461|Khoảng cách Hamming (Hamming Distance)|[Go]({{< relref "/ChapterFour/0400~0499/0461.Hamming-Distance.md" >}})|Easy| O(n)| O(1)||75.0%|
|0473|Diêm que tạo hình vuông (Matchsticks to Square)|[Go]({{< relref "/ChapterFour/0400~0499/0473.Matchsticks-to-Square.md" >}})|Medium||||40.2%|
|0476|Phần bù của số (Number Complement)|[Go]({{< relref "/ChapterFour/0400~0499/0476.Number-Complement.md" >}})|Easy| O(n)| O(1)||67.4%|
|0477|Tổng khoảng cách Hamming (Total Hamming Distance)|[Go]({{< relref "/ChapterFour/0400~0499/0477.Total-Hamming-Distance.md" >}})|Medium| O(n)| O(1)||52.2%|
|0491|Các dãy con không giảm (Non-decreasing Subsequences)|[Go]({{< relref "/ChapterFour/0400~0499/0491.Non-decreasing-Subsequences.md" >}})|Medium||||60.2%|
|0526|Sắp xếp đẹp (Beautiful Arrangement)|[Go]({{< relref "/ChapterFour/0500~0599/0526.Beautiful-Arrangement.md" >}})|Medium||||64.4%|
|0638|Ưu đãi mua sắm (Shopping Offers)|[Go]({{< relref "/ChapterFour/0600~0699/0638.Shopping-Offers.md" >}})|Medium||||53.3%|
|0645|Sai lệch tập hợp (Set Mismatch)|[Go]({{< relref "/ChapterFour/0600~0699/0645.Set-Mismatch.md" >}})|Easy||||42.7%|
|0693|Số nhị phân với bit xen kẽ (Binary Number with Alternating Bits)|[Go]({{< relref "/ChapterFour/0600~0699/0693.Binary-Number-with-Alternating-Bits.md" >}})|Easy| O(n)| O(1)|❤️|61.6%|
|0756|Ma trận chuyển tiếp kim tự tháp (Pyramid Transition Matrix)|[Go]({{< relref "/ChapterFour/0700~0799/0756.Pyramid-Transition-Matrix.md" >}})|Medium| O(n log n)| O(n)||52.7%|
|0762|Số nguyên tố của bit được bật trong biểu diễn nhị phân (Prime Number of Set Bits in Binary Representation)|[Go]({{< relref "/ChapterFour/0700~0799/0762.Prime-Number-of-Set-Bits-in-Binary-Representation.md" >}})|Easy| O(n)| O(1)||68.0%|
|0784|Hoán vị chữ hoa/thường (Letter Case Permutation)|[Go]({{< relref "/ChapterFour/0700~0799/0784.Letter-Case-Permutation.md" >}})|Medium| O(n)| O(1)||73.8%|
|0810|Trò chơi XOR bảng phấn (Chalkboard XOR Game)|[Go]({{< relref "/ChapterFour/0800~0899/0810.Chalkboard-XOR-Game.md" >}})|Hard||||55.8%|
|0864|Đường đi ngắn nhất để lấy tất cả chìa khóa (Shortest Path to Get All Keys)|[Go]({{< relref "/ChapterFour/0800~0899/0864.Shortest-Path-to-Get-All-Keys.md" >}})|Hard||||45.6%|
|0898|OR bit của các mảng con (Bitwise ORs of Subarrays)|[Go]({{< relref "/ChapterFour/0800~0899/0898.Bitwise-ORs-of-Subarrays.md" >}})|Medium| O(n)| O(1)||37.2%|
|0980|Số đường đi duy nhất III (Unique Paths III)|[Go]({{< relref "/ChapterFour/0900~0999/0980.Unique-Paths-III.md" >}})|Hard||||81.7%|
|0995|Số lần lật bit liên tiếp K tối thiểu (Minimum Number of K Consecutive Bit Flips)|[Go]({{< relref "/ChapterFour/0900~0999/0995.Minimum-Number-of-K-Consecutive-Bit-Flips.md" >}})|Hard||||51.2%|
|0996|Số lượng mảng squareful (Number of Squareful Arrays)|[Go]({{< relref "/ChapterFour/0900~0999/0996.Number-of-Squareful-Arrays.md" >}})|Hard||||49.2%|
|1009|Phần bù của số nguyên cơ số 10 (Complement of Base 10 Integer)|[Go]({{< relref "/ChapterFour/1000~1099/1009.Complement-of-Base-10-Integer.md" >}})|Easy||||61.5%|
|1178|Số từ hợp lệ cho mỗi câu đố (Number of Valid Words for Each Puzzle)|[Go]({{< relref "/ChapterFour/1100~1199/1178.Number-of-Valid-Words-for-Each-Puzzle.md" >}})|Hard||||46.3%|
|1239|Độ dài tối đa của chuỗi ghép có ký tự duy nhất (Maximum Length of a Concatenated String with Unique Characters)|[Go]({{< relref "/ChapterFour/1200~1299/1239.Maximum-Length-of-a-Concatenated-String-with-Unique-Characters.md" >}})|Medium||||52.2%|
|1310|Truy vấn XOR của mảng con (XOR Queries of a Subarray)|[Go]({{< relref "/ChapterFour/1300~1399/1310.XOR-Queries-of-a-Subarray.md" >}})|Medium||||72.3%|
|1442|Đếm bộ ba tạo hai mảng có XOR bằng nhau (Count Triplets That Can Form Two Arrays of Equal XOR)|[Go]({{< relref "/ChapterFour/1400~1499/1442.Count-Triplets-That-Can-Form-Two-Arrays-of-Equal-XOR.md" >}})|Medium||||76.1%|
|1461|Kiểm tra chuỗi có chứa tất cả mã nhị phân độ dài K không (Check If a String Contains All Binary Codes of Size K)|[Go]({{< relref "/ChapterFour/1400~1499/1461.Check-If-a-String-Contains-All-Binary-Codes-of-Size-K.md" >}})|Medium||||56.6%|
|1486|Phép toán XOR trong mảng (XOR Operation in an Array)|[Go]({{< relref "/ChapterFour/1400~1499/1486.XOR-Operation-in-an-Array.md" >}})|Easy||||84.6%|
|1655|Phân phối số nguyên lặp lại (Distribute Repeating Integers)|[Go]({{< relref "/ChapterFour/1600~1699/1655.Distribute-Repeating-Integers.md" >}})|Hard||||39.3%|
|1659|Tối đa hóa hạnh phúc trên lưới (Maximize Grid Happiness)|[Go]({{< relref "/ChapterFour/1600~1699/1659.Maximize-Grid-Happiness.md" >}})|Hard||||38.8%|
|1680|Nối các số nhị phân liên tiếp (Concatenation of Consecutive Binary Numbers)|[Go]({{< relref "/ChapterFour/1600~1699/1680.Concatenation-of-Consecutive-Binary-Numbers.md" >}})|Medium||||57.0%|
|1681|Độ không tương thích tối thiểu (Minimum Incompatibility)|[Go]({{< relref "/ChapterFour/1600~1699/1681.Minimum-Incompatibility.md" >}})|Hard||||37.8%|
|1684|Đếm số chuỗi nhất quán (Count the Number of Consistent Strings)|[Go]({{< relref "/ChapterFour/1600~1699/1684.Count-the-Number-of-Consistent-Strings.md" >}})|Easy||||82.3%|
|1720|Giải mã mảng XOR (Decode XORed Array)|[Go]({{< relref "/ChapterFour/1700~1799/1720.Decode-XORed-Array.md" >}})|Easy||||85.8%|
|1734|Giải mã hoán vị XOR (Decode XORed Permutation)|[Go]({{< relref "/ChapterFour/1700~1799/1734.Decode-XORed-Permutation.md" >}})|Medium||||63.0%|
|1738|Tìm giá trị tọa độ XOR lớn thứ K (Find Kth Largest XOR Coordinate Value)|[Go]({{< relref "/ChapterFour/1700~1799/1738.Find-Kth-Largest-XOR-Coordinate-Value.md" >}})|Medium||||61.0%|
|1763|Chuỗi con "nice" dài nhất (Longest Nice Substring)|[Go]({{< relref "/ChapterFour/1700~1799/1763.Longest-Nice-Substring.md" >}})|Easy||||61.5%|
|------------|-------------------------------------------------------|-------| ----------------| ---------------|-------------|-------------|-------------|


----------------------------------------------
<div style="display: flex;justify-content: space-between;align-items: center;">
<p><a href="https://books.halfrost.com/leetcode/ChapterTwo/Sorting/">⬅️上一页</a></p>
<p><a href="https://books.halfrost.com/leetcode/ChapterTwo/Union_Find/">下一页➡️</a></p>
</div>
