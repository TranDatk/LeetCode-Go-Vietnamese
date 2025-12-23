---
title: 2.04 ✅ Danh sách liên kết (Linked List)
type: docs
weight: 4
---

# Danh sách liên kết (Linked List)

![](https://img.halfrost.com/Leetcode/Linked_List.png)


- Khéo léo dựng **nút đầu giả (dummy head / sentinel node)** để giúp logic duyệt/xử lý thống nhất và dễ viết hơn.
- Linh hoạt dùng **đệ quy (recursion)**: xây dựng điều kiện dừng/điều kiện chuyển, đệ quy có thể giúp giải bài rất “gọn”. Tuy nhiên cần chú ý: có bài **không nên dùng đệ quy** vì độ sâu quá lớn có thể gây TLE hoặc **tràn ngăn xếp (stack overflow)**.
- Đảo ngược một đoạn trong danh sách liên kết. Bài 92.
- Tìm **nút giữa (middle node)** của danh sách liên kết. Bài 876. Tìm **nút thứ n từ cuối (nth node from the end)**. Bài 19. Chỉ cần 1 lần duyệt là ra đáp án.
- Gộp **K danh sách liên kết đã sắp xếp (merge k sorted lists)**. Bài 21, 23.
- Phân nhóm/phân loại danh sách liên kết. Bài 86, 328.
- Sắp xếp danh sách liên kết với yêu cầu thời gian \(O(n \log n)\), bộ nhớ \(O(1)\). Cách điển hình là **sắp xếp trộn (merge sort)**, trộn **từ trên xuống (top-down merge)**. Bài 148.
- Kiểm tra danh sách liên kết có **chu trình (cycle)** hay không; nếu có, tìm **điểm vào chu trình (cycle entry / intersection point)**. Đồng thời kiểm tra 2 danh sách liên kết có **giao nhau (intersection)** hay không; nếu có, tìm **nút giao (intersection node)**. Các bài: 141, 142, 160.




| STT      | Tiêu đề | Lời giải  | Độ khó  | Độ phức tạp thời gian | Độ phức tạp bộ nhớ  |Yêu thích | Tỷ lệ AC (Acceptance) |
|:--------:|:------- | :--------: | :----------: | :----: | :-----: | :-----: |:-----: |
|0002|Add Two Numbers|[Go]({{< relref "/ChapterFour/0001~0099/0002.Add-Two-Numbers.md" >}})|Medium| O(n)| O(1)||40.4%|
|0019|Remove Nth Node From End of List|[Go]({{< relref "/ChapterFour/0001~0099/0019.Remove-Nth-Node-From-End-of-List.md" >}})|Medium| O(n)| O(1)||41.1%|
|0021|Merge Two Sorted Lists|[Go]({{< relref "/ChapterFour/0001~0099/0021.Merge-Two-Sorted-Lists.md" >}})|Easy| O(log n)| O(1)||62.5%|
|0023|Merge k Sorted Lists|[Go]({{< relref "/ChapterFour/0001~0099/0023.Merge-k-Sorted-Lists.md" >}})|Hard| O(log n)| O(1)|❤️|49.8%|
|0024|Swap Nodes in Pairs|[Go]({{< relref "/ChapterFour/0001~0099/0024.Swap-Nodes-in-Pairs.md" >}})|Medium| O(n)| O(1)||61.3%|
|0025|Reverse Nodes in k-Group|[Go]({{< relref "/ChapterFour/0001~0099/0025.Reverse-Nodes-in-k-Group.md" >}})|Hard| O(log n)| O(1)|❤️|54.7%|
|0061|Rotate List|[Go]({{< relref "/ChapterFour/0001~0099/0061.Rotate-List.md" >}})|Medium| O(n)| O(1)||36.1%|
|0082|Remove Duplicates from Sorted List II|[Go]({{< relref "/ChapterFour/0001~0099/0082.Remove-Duplicates-from-Sorted-List-II.md" >}})|Medium| O(n)| O(1)||45.9%|
|0083|Remove Duplicates from Sorted List|[Go]({{< relref "/ChapterFour/0001~0099/0083.Remove-Duplicates-from-Sorted-List.md" >}})|Easy| O(n)| O(1)||50.6%|
|0086|Partition List|[Go]({{< relref "/ChapterFour/0001~0099/0086.Partition-List.md" >}})|Medium| O(n)| O(1)|❤️|52.0%|
|0092|Reverse Linked List II|[Go]({{< relref "/ChapterFour/0001~0099/0092.Reverse-Linked-List-II.md" >}})|Medium| O(n)| O(1)|❤️|45.4%|
|0109|Convert Sorted List to Binary Search Tree|[Go]({{< relref "/ChapterFour/0100~0199/0109.Convert-Sorted-List-to-Binary-Search-Tree.md" >}})|Medium| O(log n)| O(n)||60.2%|
|0114|Flatten Binary Tree to Linked List|[Go]({{< relref "/ChapterFour/0100~0199/0114.Flatten-Binary-Tree-to-Linked-List.md" >}})|Medium||||61.8%|
|0116|Populating Next Right Pointers in Each Node|[Go]({{< relref "/ChapterFour/0100~0199/0116.Populating-Next-Right-Pointers-in-Each-Node.md" >}})|Medium||||60.4%|
|0138|Copy List with Random Pointer|[Go]({{< relref "/ChapterFour/0100~0199/0138.Copy-List-with-Random-Pointer.md" >}})|Medium||||51.4%|
|0141|Linked List Cycle|[Go]({{< relref "/ChapterFour/0100~0199/0141.Linked-List-Cycle.md" >}})|Easy| O(n)| O(1)|❤️|47.5%|
|0142|Linked List Cycle II|[Go]({{< relref "/ChapterFour/0100~0199/0142.Linked-List-Cycle-II.md" >}})|Medium| O(n)| O(1)|❤️|48.8%|
|0143|Reorder List|[Go]({{< relref "/ChapterFour/0100~0199/0143.Reorder-List.md" >}})|Medium| O(n)| O(1)|❤️|52.6%|
|0146|LRU Cache|[Go]({{< relref "/ChapterFour/0100~0199/0146.LRU-Cache.md" >}})|Medium||||40.7%|
|0147|Insertion Sort List|[Go]({{< relref "/ChapterFour/0100~0199/0147.Insertion-Sort-List.md" >}})|Medium| O(n)| O(1)|❤️|51.1%|
|0148|Sort List|[Go]({{< relref "/ChapterFour/0100~0199/0148.Sort-List.md" >}})|Medium| O(n log n)| O(n)|❤️|55.1%|
|0160|Intersection of Two Linked Lists|[Go]({{< relref "/ChapterFour/0100~0199/0160.Intersection-of-Two-Linked-Lists.md" >}})|Easy| O(n)| O(1)|❤️|54.4%|
|0203|Remove Linked List Elements|[Go]({{< relref "/ChapterFour/0200~0299/0203.Remove-Linked-List-Elements.md" >}})|Easy| O(n)| O(1)||46.0%|
|0206|Reverse Linked List|[Go]({{< relref "/ChapterFour/0200~0299/0206.Reverse-Linked-List.md" >}})|Easy| O(n)| O(1)||73.6%|
|0234|Palindrome Linked List|[Go]({{< relref "/ChapterFour/0200~0299/0234.Palindrome-Linked-List.md" >}})|Easy| O(n)| O(1)||50.2%|
|0237|Delete Node in a Linked List|[Go]({{< relref "/ChapterFour/0200~0299/0237.Delete-Node-in-a-Linked-List.md" >}})|Medium| O(n)| O(1)||76.0%|
|0328|Odd Even Linked List|[Go]({{< relref "/ChapterFour/0300~0399/0328.Odd-Even-Linked-List.md" >}})|Medium| O(n)| O(1)||61.3%|
|0382|Linked List Random Node|[Go]({{< relref "/ChapterFour/0300~0399/0382.Linked-List-Random-Node.md" >}})|Medium||||62.8%|
|0445|Add Two Numbers II|[Go]({{< relref "/ChapterFour/0400~0499/0445.Add-Two-Numbers-II.md" >}})|Medium| O(n)| O(n)||59.6%|
|0460|LFU Cache|[Go]({{< relref "/ChapterFour/0400~0499/0460.LFU-Cache.md" >}})|Hard||||43.0%|
|0622|Design Circular Queue|[Go]({{< relref "/ChapterFour/0600~0699/0622.Design-Circular-Queue.md" >}})|Medium||||51.5%|
|0705|Design HashSet|[Go]({{< relref "/ChapterFour/0700~0799/0705.Design-HashSet.md" >}})|Easy||||65.6%|
|0706|Design HashMap|[Go]({{< relref "/ChapterFour/0700~0799/0706.Design-HashMap.md" >}})|Easy||||64.7%|
|0707|Design Linked List|[Go]({{< relref "/ChapterFour/0700~0799/0707.Design-Linked-List.md" >}})|Medium| O(n)| O(1)||27.7%|
|0725|Split Linked List in Parts|[Go]({{< relref "/ChapterFour/0700~0799/0725.Split-Linked-List-in-Parts.md" >}})|Medium| O(n)| O(1)||57.2%|
|0817|Linked List Components|[Go]({{< relref "/ChapterFour/0800~0899/0817.Linked-List-Components.md" >}})|Medium| O(n)| O(1)||57.7%|
|0876|Middle of the Linked List|[Go]({{< relref "/ChapterFour/0800~0899/0876.Middle-of-the-Linked-List.md" >}})|Easy| O(n)| O(1)|❤️|75.7%|
|1019|Next Greater Node In Linked List|[Go]({{< relref "/ChapterFour/1000~1099/1019.Next-Greater-Node-In-Linked-List.md" >}})|Medium| O(n)| O(1)||59.9%|
|1171|Remove Zero Sum Consecutive Nodes from Linked List|[Go]({{< relref "/ChapterFour/1100~1199/1171.Remove-Zero-Sum-Consecutive-Nodes-from-Linked-List.md" >}})|Medium||||43.2%|
|1290|Convert Binary Number in a Linked List to Integer|[Go]({{< relref "/ChapterFour/1200~1299/1290.Convert-Binary-Number-in-a-Linked-List-to-Integer.md" >}})|Easy||||82.1%|
|1669|Merge In Between Linked Lists|[Go]({{< relref "/ChapterFour/1600~1699/1669.Merge-In-Between-Linked-Lists.md" >}})|Medium||||73.7%|
|1670|Design Front Middle Back Queue|[Go]({{< relref "/ChapterFour/1600~1699/1670.Design-Front-Middle-Back-Queue.md" >}})|Medium||||57.2%|
|1721|Swapping Nodes in a Linked List|[Go]({{< relref "/ChapterFour/1700~1799/1721.Swapping-Nodes-in-a-Linked-List.md" >}})|Medium||||67.1%|
|2181|Merge Nodes in Between Zeros|[Go]({{< relref "/ChapterFour/2100~2199/2181.Merge-Nodes-in-Between-Zeros.md" >}})|Medium||||86.3%|
|----------|--------------------------------------------|-------| ----------| ------------|----------|--------|---------|
