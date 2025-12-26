---
title: 2.03 ✅ Hai con trỏ (Two Pointers)
type: docs
weight: 3
---

# Hai con trỏ (Two Pointers)

![](/images/chuong-2/2.03.png)

- Cách viết kinh điển của **hai con trỏ + cửa sổ trượt (two pointers + sliding window)**. Con trỏ phải liên tục dịch sang phải cho đến khi không thể dịch tiếp (điều kiện cụ thể tuỳ bài). Khi con trỏ phải chạm biên phải, bắt đầu dịch con trỏ trái để “nhả” biên trái của cửa sổ. Các bài: 3, 76, 209, 424, 438, 567, 713, 763, 845, 881, 904, 978, 992, 1004, 1040, 1052.

```c
	left, right := 0, -1

	for left < len(s) {
		if right+1 < len(s) && freq[s[right+1]-'a'] == 0 {
			freq[s[right+1]-'a']++
			right++
		} else {
			freq[s[left]-'a']--
			left++
		}
		result = max(result, right-left+1)
	}
```

- **Con trỏ nhanh/chậm (fast/slow pointers)** có thể dùng để tìm số bị lặp, độ phức tạp thời gian \(O(n)\). Bài 287.
- Sau khi thay thế ký tự, tìm độ dài lớn nhất của đoạn liên tiếp gồm cùng một ký tự. Bài 424.
- Bộ bài toán **SUM (SUM problems)**. Các bài: 1, 15, 16, 18, 167, 923, 1074.


| STT      | Tiêu đề | Lời giải  | Độ khó  | Độ phức tạp thời gian | Độ phức tạp bộ nhớ  |Yêu thích | Tỷ lệ AC (Acceptance) |
|:--------:|:------- | :--------: | :----------: | :----: | :-----: | :-----: |:-----: |
|0011|Thùng chứa nhiều nước nhất (Container With Most Water)|[Go]({{< relref "/ChapterFour/0001~0099/0011.Container-With-Most-Water.md" >}})|Medium| O(n)| O(1)||54.0%|
|0015|Tổng 3 số (3Sum)|[Go]({{< relref "/ChapterFour/0001~0099/0015.3Sum.md" >}})|Medium| O(n^2)| O(n)|❤️|32.6%|
|0016|Tổng 3 số gần nhất (3Sum Closest)|[Go]({{< relref "/ChapterFour/0001~0099/0016.3Sum-Closest.md" >}})|Medium| O(n^2)| O(1)|❤️|45.8%|
|0018|Tổng 4 số (4Sum)|[Go]({{< relref "/ChapterFour/0001~0099/0018.4Sum.md" >}})|Medium| O(n^3)| O(n^2)|❤️|35.9%|
|0019|Xóa nút thứ N từ cuối danh sách (Remove Nth Node From End of List)|[Go]({{< relref "/ChapterFour/0001~0099/0019.Remove-Nth-Node-From-End-of-List.md" >}})|Medium| O(n)| O(1)||41.0%|
|0026|Xóa phần tử trùng trong mảng đã sắp xếp (Remove Duplicates from Sorted Array)|[Go]({{< relref "/ChapterFour/0001~0099/0026.Remove-Duplicates-from-Sorted-Array.md" >}})|Easy| O(n)| O(1)||51.5%|
|0027|Xóa phần tử (Remove Element)|[Go]({{< relref "/ChapterFour/0001~0099/0027.Remove-Element.md" >}})|Easy| O(n)| O(1)||53.0%|
|0028|Tìm vị trí xuất hiện đầu tiên của chuỗi con (Find the Index of the First Occurrence in a String)|[Go]({{< relref "/ChapterFour/0001~0099/0028.Find-the-Index-of-the-First-Occurrence-in-a-String.md" >}})|Easy| O(n)| O(1)||39.0%|
|0031|Hoán vị kế tiếp (Next Permutation)|[Go]({{< relref "/ChapterFour/0001~0099/0031.Next-Permutation.md" >}})|Medium||||37.5%|
|0042|Hứng nước mưa (Trapping Rain Water)|[Go]({{< relref "/ChapterFour/0001~0099/0042.Trapping-Rain-Water.md" >}})|Hard| O(n)| O(1)|❤️|59.2%|
|0061|Xoay danh sách liên kết (Rotate List)|[Go]({{< relref "/ChapterFour/0001~0099/0061.Rotate-List.md" >}})|Medium| O(n)| O(1)||36.1%|
|0075|Sắp xếp màu (Sort Colors)|[Go]({{< relref "/ChapterFour/0001~0099/0075.Sort-Colors.md" >}})|Medium| O(n)| O(1)|❤️|58.5%|
|0080|Xóa phần tử trùng trong mảng đã sắp xếp II (Remove Duplicates from Sorted Array II)|[Go]({{< relref "/ChapterFour/0001~0099/0080.Remove-Duplicates-from-Sorted-Array-II.md" >}})|Medium| O(n)| O(1)||52.3%|
|0082|Xóa phần tử trùng trong danh sách đã sắp xếp II (Remove Duplicates from Sorted List II)|[Go]({{< relref "/ChapterFour/0001~0099/0082.Remove-Duplicates-from-Sorted-List-II.md" >}})|Medium||||45.9%|
|0086|Phân hoạch danh sách (Partition List)|[Go]({{< relref "/ChapterFour/0001~0099/0086.Partition-List.md" >}})|Medium| O(n)| O(1)|❤️|52.0%|
|0088|Trộn hai mảng đã sắp xếp (Merge Sorted Array)|[Go]({{< relref "/ChapterFour/0001~0099/0088.Merge-Sorted-Array.md" >}})|Easy| O(n)| O(1)|❤️|46.6%|
|0125|Palindrome hợp lệ (Valid Palindrome)|[Go]({{< relref "/ChapterFour/0100~0199/0125.Valid-Palindrome.md" >}})|Easy| O(n)| O(1)||44.3%|
|0141|Chu trình trong danh sách liên kết (Linked List Cycle)|[Go]({{< relref "/ChapterFour/0100~0199/0141.Linked-List-Cycle.md" >}})|Easy| O(n)| O(1)|❤️|47.4%|
|0142|Chu trình trong danh sách liên kết II (Linked List Cycle II)|[Go]({{< relref "/ChapterFour/0100~0199/0142.Linked-List-Cycle-II.md" >}})|Medium| O(n)| O(1)|❤️|48.7%|
|0143|Sắp xếp lại danh sách (Reorder List)|[Go]({{< relref "/ChapterFour/0100~0199/0143.Reorder-List.md" >}})|Medium||||52.5%|
|0148|Sắp xếp danh sách (Sort List)|[Go]({{< relref "/ChapterFour/0100~0199/0148.Sort-List.md" >}})|Medium||||55.1%|
|0151|Đảo thứ tự các từ trong chuỗi (Reverse Words in a String)|[Go]({{< relref "/ChapterFour/0100~0199/0151.Reverse-Words-in-a-String.md" >}})|Medium||||32.7%|
|0160|Giao nhau của hai danh sách liên kết (Intersection of Two Linked Lists)|[Go]({{< relref "/ChapterFour/0100~0199/0160.Intersection-of-Two-Linked-Lists.md" >}})|Easy||||54.3%|
|0167|Hai tổng II - Mảng đầu vào đã sắp xếp (Two Sum II - Input Array Is Sorted)|[Go]({{< relref "/ChapterFour/0100~0199/0167.Two-Sum-II-Input-Array-Is-Sorted.md" >}})|Medium| O(n)| O(1)||60.0%|
|0189|Xoay mảng (Rotate Array)|[Go]({{< relref "/ChapterFour/0100~0199/0189.Rotate-Array.md" >}})|Medium||||39.4%|
|0202|Số hạnh phúc (Happy Number)|[Go]({{< relref "/ChapterFour/0200~0299/0202.Happy-Number.md" >}})|Easy||||54.8%|
|0234|Danh sách liên kết đối xứng (Palindrome Linked List)|[Go]({{< relref "/ChapterFour/0200~0299/0234.Palindrome-Linked-List.md" >}})|Easy| O(n)| O(1)||50.2%|
|0283|Dồn các số 0 về cuối (Move Zeroes)|[Go]({{< relref "/ChapterFour/0200~0299/0283.Move-Zeroes.md" >}})|Easy| O(n)| O(1)||61.4%|
|0287|Tìm số bị lặp (Find the Duplicate Number)|[Go]({{< relref "/ChapterFour/0200~0299/0287.Find-the-Duplicate-Number.md" >}})|Medium| O(n)| O(1)|❤️|59.1%|
|0344|Đảo chuỗi (Reverse String)|[Go]({{< relref "/ChapterFour/0300~0399/0344.Reverse-String.md" >}})|Easy| O(n)| O(1)||76.7%|
|0345|Đảo nguyên âm trong chuỗi (Reverse Vowels of a String)|[Go]({{< relref "/ChapterFour/0300~0399/0345.Reverse-Vowels-of-a-String.md" >}})|Easy| O(n)| O(1)||50.1%|
|0349|Giao của hai mảng (Intersection of Two Arrays)|[Go]({{< relref "/ChapterFour/0300~0399/0349.Intersection-of-Two-Arrays.md" >}})|Easy| O(n)| O(n) ||70.9%|
|0350|Giao của hai mảng II (Intersection of Two Arrays II)|[Go]({{< relref "/ChapterFour/0300~0399/0350.Intersection-of-Two-Arrays-II.md" >}})|Easy| O(n)| O(n) ||56.0%|
|0392|Có phải là dãy con (Is Subsequence)|[Go]({{< relref "/ChapterFour/0300~0399/0392.Is-Subsequence.md" >}})|Easy||||47.6%|
|0455|Phân phát bánh quy (Assign Cookies)|[Go]({{< relref "/ChapterFour/0400~0499/0455.Assign-Cookies.md" >}})|Easy||||49.9%|
|0457|Vòng lặp mảng vòng tròn (Circular Array Loop)|[Go]({{< relref "/ChapterFour/0400~0499/0457.Circular-Array-Loop.md" >}})|Medium||||32.6%|
|0475|Máy sưởi (Heaters)|[Go]({{< relref "/ChapterFour/0400~0499/0475.Heaters.md" >}})|Medium||||36.5%|
|0524|Từ dài nhất trong từ điển bằng cách xóa (Longest Word in Dictionary through Deleting)|[Go]({{< relref "/ChapterFour/0500~0599/0524.Longest-Word-in-Dictionary-through-Deleting.md" >}})|Medium| O(n)| O(1) ||51.0%|
|0532|Các cặp K-diff trong mảng (K-diff Pairs in an Array)|[Go]({{< relref "/ChapterFour/0500~0599/0532.K-diff-Pairs-in-an-Array.md" >}})|Medium| O(n)| O(n)||41.2%|
|0541|Đảo chuỗi II (Reverse String II)|[Go]({{< relref "/ChapterFour/0500~0599/0541.Reverse-String-II.md" >}})|Easy||||50.5%|
|0557|Đảo các từ trong chuỗi III (Reverse Words in a String III)|[Go]({{< relref "/ChapterFour/0500~0599/0557.Reverse-Words-in-a-String-III.md" >}})|Easy||||81.9%|
|0567|Hoán vị trong chuỗi (Permutation in String)|[Go]({{< relref "/ChapterFour/0500~0599/0567.Permutation-in-String.md" >}})|Medium| O(n)| O(1)|❤️|44.3%|
|0581|Mảng con liên tục chưa sắp xếp ngắn nhất (Shortest Unsorted Continuous Subarray)|[Go]({{< relref "/ChapterFour/0500~0599/0581.Shortest-Unsorted-Continuous-Subarray.md" >}})|Medium||||36.4%|
|0611|Số tam giác hợp lệ (Valid Triangle Number)|[Go]({{< relref "/ChapterFour/0600~0699/0611.Valid-Triangle-Number.md" >}})|Medium||||50.5%|
|0633|Tổng của các số chính phương (Sum of Square Numbers)|[Go]({{< relref "/ChapterFour/0600~0699/0633.Sum-of-Square-Numbers.md" >}})|Medium||||34.4%|
|0653|Hai tổng IV - Đầu vào là BST (Two Sum IV - Input is a BST)|[Go]({{< relref "/ChapterFour/0600~0699/0653.Two-Sum-IV-Input-is-a-BST.md" >}})|Easy||||61.0%|
|0658|Tìm K phần tử gần nhất (Find K Closest Elements)|[Go]({{< relref "/ChapterFour/0600~0699/0658.Find-K-Closest-Elements.md" >}})|Medium||||46.8%|
|0696|Đếm chuỗi con nhị phân (Count Binary Substrings)|[Go]({{< relref "/ChapterFour/0600~0699/0696.Count-Binary-Substrings.md" >}})|Easy||||65.5%|
|0719|Tìm khoảng cách cặp nhỏ nhất thứ K (Find K-th Smallest Pair Distance)|[Go]({{< relref "/ChapterFour/0700~0799/0719.Find-K-th-Smallest-Pair-Distance.md" >}})|Hard||||36.7%|
|0763|Phân hoạch nhãn (Partition Labels)|[Go]({{< relref "/ChapterFour/0700~0799/0763.Partition-Labels.md" >}})|Medium| O(n)| O(1)|❤️|79.7%|
|0795|Số mảng con có giá trị lớn nhất bị chặn (Number of Subarrays with Bounded Maximum)|[Go]({{< relref "/ChapterFour/0700~0799/0795.Number-of-Subarrays-with-Bounded-Maximum.md" >}})|Medium||||52.8%|
|0821|Khoảng cách ngắn nhất tới một ký tự (Shortest Distance to a Character)|[Go]({{< relref "/ChapterFour/0800~0899/0821.Shortest-Distance-to-a-Character.md" >}})|Easy||||71.3%|
|0825|Bạn bè có độ tuổi phù hợp (Friends Of Appropriate Ages)|[Go]({{< relref "/ChapterFour/0800~0899/0825.Friends-Of-Appropriate-Ages.md" >}})|Medium||||46.3%|
|0826|Phân công công việc có lợi nhuận cao nhất (Most Profit Assigning Work)|[Go]({{< relref "/ChapterFour/0800~0899/0826.Most-Profit-Assigning-Work.md" >}})|Medium| O(n log n)| O(n)||44.9%|
|0832|Lật ảnh (Flipping an Image)|[Go]({{< relref "/ChapterFour/0800~0899/0832.Flipping-an-Image.md" >}})|Easy||||80.8%|
|0838|Đẩy quân domino (Push Dominoes)|[Go]({{< relref "/ChapterFour/0800~0899/0838.Push-Dominoes.md" >}})|Medium| O(n)| O(n)||57.0%|
|0844|So sánh chuỗi với phím backspace (Backspace String Compare)|[Go]({{< relref "/ChapterFour/0800~0899/0844.Backspace-String-Compare.md" >}})|Easy| O(n)| O(n) ||48.1%|
|0845|Núi dài nhất trong mảng (Longest Mountain in Array)|[Go]({{< relref "/ChapterFour/0800~0899/0845.Longest-Mountain-in-Array.md" >}})|Medium| O(n)| O(1) ||40.2%|
|0870|Xáo trộn để có lợi thế (Advantage Shuffle)|[Go]({{< relref "/ChapterFour/0800~0899/0870.Advantage-Shuffle.md" >}})|Medium||||51.8%|
|0876|Nút giữa của danh sách liên kết (Middle of the Linked List)|[Go]({{< relref "/ChapterFour/0800~0899/0876.Middle-of-the-Linked-List.md" >}})|Easy||||75.6%|
|0881|Thuyền cứu người (Boats to Save People)|[Go]({{< relref "/ChapterFour/0800~0899/0881.Boats-to-Save-People.md" >}})|Medium| O(n log n)| O(1) ||53.1%|
|0922|Sắp xếp mảng theo tính chẵn/lẻ II (Sort Array By Parity II)|[Go]({{< relref "/ChapterFour/0900~0999/0922.Sort-Array-By-Parity-II.md" >}})|Easy||||70.7%|
|0923|Tổng 3 số với bội số (3Sum With Multiplicity)|[Go]({{< relref "/ChapterFour/0900~0999/0923.3Sum-With-Multiplicity.md" >}})|Medium| O(n^2)| O(n) ||45.3%|
|0925|Tên bị nhấn giữ (Long Pressed Name)|[Go]({{< relref "/ChapterFour/0900~0999/0925.Long-Pressed-Name.md" >}})|Easy| O(n)| O(1)||33.1%|
|0942|Ghép chuỗi DI (DI String Match)|[Go]({{< relref "/ChapterFour/0900~0999/0942.DI-String-Match.md" >}})|Easy||||77.3%|
|0969|Sắp xếp pancake (Pancake Sorting)|[Go]({{< relref "/ChapterFour/0900~0999/0969.Pancake-Sorting.md" >}})|Medium||||70.1%|
|0977|Bình phương của mảng đã sắp xếp (Squares of a Sorted Array)|[Go]({{< relref "/ChapterFour/0900~0999/0977.Squares-of-a-Sorted-Array.md" >}})|Easy| O(n)| O(1)||71.9%|
|0986|Giao nhau của các danh sách đoạn (Interval List Intersections)|[Go]({{< relref "/ChapterFour/0900~0999/0986.Interval-List-Intersections.md" >}})|Medium| O(n)| O(1)||71.3%|
|1040|Di chuyển đá đến khi liên tiếp II (Moving Stones Until Consecutive II)|[Go]({{< relref "/ChapterFour/1000~1099/1040.Moving-Stones-Until-Consecutive-II.md" >}})|Medium||||55.9%|
|1048|Chuỗi từ dài nhất (Longest String Chain)|[Go]({{< relref "/ChapterFour/1000~1099/1048.Longest-String-Chain.md" >}})|Medium||||59.2%|
|1089|Nhân đôi số 0 (Duplicate Zeros)|[Go]({{< relref "/ChapterFour/1000~1099/1089.Duplicate-Zeros.md" >}})|Easy||||51.5%|
|1332|Xóa các dãy con đối xứng (Remove Palindromic Subsequences)|[Go]({{< relref "/ChapterFour/1300~1399/1332.Remove-Palindromic-Subsequences.md" >}})|Easy||||76.2%|
|1385|Tìm giá trị khoảng cách giữa hai mảng (Find the Distance Value Between Two Arrays)|[Go]({{< relref "/ChapterFour/1300~1399/1385.Find-the-Distance-Value-Between-Two-Arrays.md" >}})|Easy||||66.5%|
|1679|Số lượng tối đa các cặp có tổng K (Max Number of K-Sum Pairs)|[Go]({{< relref "/ChapterFour/1600~1699/1679.Max-Number-of-K-Sum-Pairs.md" >}})|Medium||||57.3%|
|1721|Hoán đổi các nút trong danh sách liên kết (Swapping Nodes in a Linked List)|[Go]({{< relref "/ChapterFour/1700~1799/1721.Swapping-Nodes-in-a-Linked-List.md" >}})|Medium||||67.2%|
|1877|Giảm thiểu tổng cặp lớn nhất trong mảng (Minimize Maximum Pair Sum in Array)|[Go]({{< relref "/ChapterFour/1800~1899/1877.Minimize-Maximum-Pair-Sum-in-Array.md" >}})|Medium||||79.9%|
|----------|----------------------------|-------| ---------------| -----------|-----------|----------|------------|
