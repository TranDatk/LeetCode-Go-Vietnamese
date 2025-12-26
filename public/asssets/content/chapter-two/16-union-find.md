---
title: 2.16 ✅ Hợp nhất - tìm đại diện (Union Find)
type: docs
weight: 16
---

# Hợp nhất - tìm đại diện (Union Find)

![](/images/chuong-2/2.16.png)

- Dùng linh hoạt tư duy **Union Find / DSU** và nắm vững [template]({{< relref "/ChapterThree/UnionFind.md" >}}). Trong template có 2 cách triển khai:
	- **Path compression + union by rank**
	- **Đếm số phần tử trong mỗi tập + kích thước tập lớn nhất**
  Mỗi phiên bản phù hợp với từng dạng bài khác nhau.
	- Dạng 1 dùng tốt cho các bài: 128, 130, 547, 684, 721, 765, 778, 839, 924, 928, 947, 952, 959, 990.
	- Dạng 2 dùng tốt cho các bài: 803, 952. (Bài 803 rất dễ TLE nếu không tối ưu rank/đếm tập.)
- Union Find là **một tư duy**, không phải lúc nào cũng “nhét template” là xong. Ví dụ bài 399 có thể làm theo kiểu **stringUnionFind**: mỗi node là chuỗi + map, không chỉ đánh số node bằng `int`.
- Có bài nếu áp template “cứng” lại không ra. Ví dụ bài 685 không nên dùng path compression/union by rank vì liên quan **đồ thị có hướng** và cần biết **tiền nhiệm** của node; nén đường đi sẽ làm mất thông tin cần thiết.
- Biết cách trừu tượng dữ liệu đề bài và **đánh số hợp lý**, kết hợp `map` để giảm thời gian (ví dụ bài 721, 959).
- Với các bài dạng bản đồ/gạch/lưới, có thể thêm **một node đặc biệt** và `union()` toàn bộ ô ở biên vào node này (ví dụ bài 130, 803).
- Nhiều bài dùng Union Find cũng có thể giải bằng DFS/BFS, nhưng thường **tốn thời gian hơn**.



| STT      | Tiêu đề | Lời giải  | Độ khó  | Độ phức tạp thời gian | Độ phức tạp bộ nhớ  |Yêu thích | Tỷ lệ AC (Acceptance) |
|:--------:|:------- | :--------: | :----------: | :----: | :-----: | :-----: |:-----: |
|0128|Dãy liên tiếp dài nhất (Longest Consecutive Sequence)|[Go]({{< relref "/ChapterFour/0100~0199/0128.Longest-Consecutive-Sequence.md" >}})|Medium| O(n)| O(n)|❤️|48.5%|
|0130|Vùng bị bao quanh (Surrounded Regions)|[Go]({{< relref "/ChapterFour/0100~0199/0130.Surrounded-Regions.md" >}})|Medium| O(m\*n)| O(m\*n)||36.7%|
|0200|Số lượng hòn đảo (Number of Islands)|[Go]({{< relref "/ChapterFour/0200~0299/0200.Number-of-Islands.md" >}})|Medium| O(m\*n)| O(m\*n)||57.0%|
|0399|Tính giá trị phép chia (Evaluate Division)|[Go]({{< relref "/ChapterFour/0300~0399/0399.Evaluate-Division.md" >}})|Medium| O(n)| O(n)||59.6%|
|0547|Số lượng tỉnh thành (Number of Provinces)|[Go]({{< relref "/ChapterFour/0500~0599/0547.Number-of-Provinces.md" >}})|Medium| O(n^2)| O(n)||63.7%|
|0684|Kết nối dư thừa (Redundant Connection)|[Go]({{< relref "/ChapterFour/0600~0699/0684.Redundant-Connection.md" >}})|Medium| O(n)| O(n)||62.2%|
|0685|Kết nối dư thừa II (Redundant Connection II)|[Go]({{< relref "/ChapterFour/0600~0699/0685.Redundant-Connection-II.md" >}})|Hard| O(n)| O(n)||34.1%|
|0695|Diện tích đảo lớn nhất (Max Area of Island)|[Go]({{< relref "/ChapterFour/0600~0699/0695.Max-Area-of-Island.md" >}})|Medium||||71.8%|
|0721|Gộp tài khoản (Accounts Merge)|[Go]({{< relref "/ChapterFour/0700~0799/0721.Accounts-Merge.md" >}})|Medium| O(n)| O(n)|❤️|56.3%|
|0765|Các cặp đôi nắm tay (Couples Holding Hands)|[Go]({{< relref "/ChapterFour/0700~0799/0765.Couples-Holding-Hands.md" >}})|Hard| O(n)| O(n)|❤️|56.6%|
|0778|Bơi trong nước dâng (Swim in Rising Water)|[Go]({{< relref "/ChapterFour/0700~0799/0778.Swim-in-Rising-Water.md" >}})|Hard| O(n^2)| O(n)|❤️|59.8%|
|0785|Đồ thị có phải lưỡng phân không? (Is Graph Bipartite?)|[Go]({{< relref "/ChapterFour/0700~0799/0785.Is-Graph-Bipartite.md" >}})|Medium||||53.1%|
|0803|Gạch rơi khi bị đánh (Bricks Falling When Hit)|[Go]({{< relref "/ChapterFour/0800~0899/0803.Bricks-Falling-When-Hit.md" >}})|Hard| O(n^2)| O(n)|❤️|34.4%|
|0839|Nhóm chuỗi tương tự (Similar String Groups)|[Go]({{< relref "/ChapterFour/0800~0899/0839.Similar-String-Groups.md" >}})|Hard| O(n^2)| O(n)||48.0%|
|0924|Giảm thiểu lây lan mã độc (Minimize Malware Spread)|[Go]({{< relref "/ChapterFour/0900~0999/0924.Minimize-Malware-Spread.md" >}})|Hard| O(m\*n)| O(n)||42.1%|
|0928|Giảm thiểu lây lan mã độc II (Minimize Malware Spread II)|[Go]({{< relref "/ChapterFour/0900~0999/0928.Minimize-Malware-Spread-II.md" >}})|Hard| O(m\*n)| O(n)|❤️|42.7%|
|0947|Loại bỏ nhiều đá nhất với cùng hàng hoặc cột (Most Stones Removed with Same Row or Column)|[Go]({{< relref "/ChapterFour/0900~0999/0947.Most-Stones-Removed-with-Same-Row-or-Column.md" >}})|Medium| O(n)| O(n)||58.9%|
|0952|Kích thước thành phần lớn nhất theo ước chung (Largest Component Size by Common Factor)|[Go]({{< relref "/ChapterFour/0900~0999/0952.Largest-Component-Size-by-Common-Factor.md" >}})|Hard| O(n)| O(n)|❤️|40.0%|
|0959|Các vùng bị cắt bởi dấu gạch chéo (Regions Cut By Slashes)|[Go]({{< relref "/ChapterFour/0900~0999/0959.Regions-Cut-By-Slashes.md" >}})|Medium| O(n^2)| O(n^2)|❤️|69.1%|
|0990|Khả năng thỏa mãn các phương trình đẳng thức (Satisfiability of Equality Equations)|[Go]({{< relref "/ChapterFour/0900~0999/0990.Satisfiability-of-Equality-Equations.md" >}})|Medium| O(n)| O(n)||50.5%|
|1020|Số lượng vùng đất bị cô lập (Number of Enclaves)|[Go]({{< relref "/ChapterFour/1000~1099/1020.Number-of-Enclaves.md" >}})|Medium||||65.5%|
|1202|Chuỗi nhỏ nhất sau khi hoán đổi (Smallest String With Swaps)|[Go]({{< relref "/ChapterFour/1200~1299/1202.Smallest-String-With-Swaps.md" >}})|Medium||||57.7%|
|1254|Số lượng đảo khép kín (Number of Closed Islands)|[Go]({{< relref "/ChapterFour/1200~1299/1254.Number-of-Closed-Islands.md" >}})|Medium||||64.1%|
|1319|Số thao tác để kết nối mạng (Number of Operations to Make Network Connected)|[Go]({{< relref "/ChapterFour/1300~1399/1319.Number-of-Operations-to-Make-Network-Connected.md" >}})|Medium||||62.1%|
|1579|Loại bỏ tối đa số cạnh để đồ thị vẫn duyệt được hoàn toàn (Remove Max Number of Edges to Keep Graph Fully Traversable)|[Go]({{< relref "/ChapterFour/1500~1599/1579.Remove-Max-Number-of-Edges-to-Keep-Graph-Fully-Traversable.md" >}})|Hard||||53.2%|
|1631|Đường đi với nỗ lực tối thiểu (Path With Minimum Effort)|[Go]({{< relref "/ChapterFour/1600~1699/1631.Path-With-Minimum-Effort.md" >}})|Medium||||55.7%|
|------------|-------------------------------------------------------|-------| ----------------| ---------------|-------------|-------------|-------------|


----------------------------------------------
<div style="display: flex;justify-content: space-between;align-items: center;">
<p><a href="https://books.halfrost.com/leetcode/ChapterTwo/Bit_Manipulation/">⬅️上一页</a></p>
<p><a href="https://books.halfrost.com/leetcode/ChapterTwo/Sliding_Window/">下一页➡️</a></p>
</div>
