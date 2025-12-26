---
title: 2.14 ✅ Sắp xếp (Sorting)
type: docs
weight: 14
---

# Sắp xếp (Sorting)

![](/images/chuong-2/2.14.png)

- Hiểu sâu về **quicksort nhiều đường (multi-way quicksort)**. Bài 75.
- Sắp xếp **danh sách liên kết**: **sắp xếp chèn** (bài 147) và **sắp xếp trộn** (bài 148).
- **Sắp xếp theo thùng (bucket sort)** và **sắp xếp theo cơ số (radix sort)**. Bài 164.
- **Sắp xếp lắc lư** (Wiggle sort). Bài 324.
- Sắp xếp sao cho **các phần tử giống nhau không kề nhau**. Bài 767, 1054.
- **Sắp xếp bánh kếp** (Pancake sort). Bài 969.


| STT      | Tiêu đề | Lời giải  | Độ khó  | Độ phức tạp thời gian | Độ phức tạp bộ nhớ  |Yêu thích | Tỷ lệ AC (Acceptance) |
|:--------:|:------- | :--------: | :----------: | :----: | :-----: | :-----: |:-----: |
|0015|Tổng 3 số (3Sum)|[Go]({{< relref "/ChapterFour/0001~0099/0015.3Sum.md" >}})|Medium||||32.6%|
|0016|Tổng 3 số gần nhất (3Sum Closest)|[Go]({{< relref "/ChapterFour/0001~0099/0016.3Sum-Closest.md" >}})|Medium||||45.8%|
|0018|Tổng 4 số (4Sum)|[Go]({{< relref "/ChapterFour/0001~0099/0018.4Sum.md" >}})|Medium||||35.9%|
|0049|Nhóm các từ đảo chữ (Group Anagrams)|[Go]({{< relref "/ChapterFour/0001~0099/0049.Group-Anagrams.md" >}})|Medium||||66.7%|
|0056|Gộp các đoạn (Merge Intervals)|[Go]({{< relref "/ChapterFour/0001~0099/0056.Merge-Intervals.md" >}})|Medium| O(n log n)| O(log n)||46.2%|
|0075|Sắp xếp màu (Sort Colors)|[Go]({{< relref "/ChapterFour/0001~0099/0075.Sort-Colors.md" >}})|Medium| O(n)| O(1)|❤️|58.5%|
|0088|Trộn hai mảng đã sắp xếp (Merge Sorted Array)|[Go]({{< relref "/ChapterFour/0001~0099/0088.Merge-Sorted-Array.md" >}})|Easy||||46.6%|
|0147|Sắp xếp chèn danh sách liên kết (Insertion Sort List)|[Go]({{< relref "/ChapterFour/0100~0199/0147.Insertion-Sort-List.md" >}})|Medium| O(n^2)| O(1) |❤️|51.0%|
|0148|Sắp xếp danh sách (Sort List)|[Go]({{< relref "/ChapterFour/0100~0199/0148.Sort-List.md" >}})|Medium|O(n log n)| O(log n)|❤️|55.1%|
|0164|Khoảng cách lớn nhất (Maximum Gap)|[Go]({{< relref "/ChapterFour/0100~0199/0164.Maximum-Gap.md" >}})|Hard| O(n log n)| O(log n) |❤️|43.3%|
|0169|Phần tử chiếm đa số (Majority Element)|[Go]({{< relref "/ChapterFour/0100~0199/0169.Majority-Element.md" >}})|Easy||||63.9%|
|0179|Số lớn nhất (Largest Number)|[Go]({{< relref "/ChapterFour/0100~0199/0179.Largest-Number.md" >}})|Medium| O(n log n)| O(log n) |❤️|34.5%|
|0215|Phần tử lớn thứ K trong mảng (Kth Largest Element in an Array)|[Go]({{< relref "/ChapterFour/0200~0299/0215.Kth-Largest-Element-in-an-Array.md" >}})|Medium||||66.1%|
|0217|Có phần tử trùng (Contains Duplicate)|[Go]({{< relref "/ChapterFour/0200~0299/0217.Contains-Duplicate.md" >}})|Easy||||61.4%|
|0220|Có phần tử trùng III (Contains Duplicate III)|[Go]({{< relref "/ChapterFour/0200~0299/0220.Contains-Duplicate-III.md" >}})|Hard| O(n log n)| O(1) |❤️|22.1%|
|0229|Phần tử chiếm đa số II (Majority Element II)|[Go]({{< relref "/ChapterFour/0200~0299/0229.Majority-Element-II.md" >}})|Medium||||45.0%|
|0242|Anagram hợp lệ (Valid Anagram)|[Go]({{< relref "/ChapterFour/0200~0299/0242.Valid-Anagram.md" >}})|Easy| O(n)| O(n) ||63.0%|
|0268|Số bị thiếu (Missing Number)|[Go]({{< relref "/ChapterFour/0200~0299/0268.Missing-Number.md" >}})|Easy||||62.5%|
|0274|Chỉ số H (H-Index)|[Go]({{< relref "/ChapterFour/0200~0299/0274.H-Index.md" >}})|Medium|  O(n)| O(n) ||38.3%|
|0324|Sắp xếp lắc lư II (Wiggle Sort II)|[Go]({{< relref "/ChapterFour/0300~0399/0324.Wiggle-Sort-II.md" >}})|Medium| O(n)| O(n)|❤️|33.3%|
|0347|Top K phần tử xuất hiện nhiều nhất (Top K Frequent Elements)|[Go]({{< relref "/ChapterFour/0300~0399/0347.Top-K-Frequent-Elements.md" >}})|Medium||||64.2%|
|0349|Giao của hai mảng (Intersection of Two Arrays)|[Go]({{< relref "/ChapterFour/0300~0399/0349.Intersection-of-Two-Arrays.md" >}})|Easy| O(n)| O(n) ||70.9%|
|0350|Giao của hai mảng II (Intersection of Two Arrays II)|[Go]({{< relref "/ChapterFour/0300~0399/0350.Intersection-of-Two-Arrays-II.md" >}})|Easy| O(n)| O(n) ||56.0%|
|0354|Phong bì búp bê Nga (Russian Doll Envelopes)|[Go]({{< relref "/ChapterFour/0300~0399/0354.Russian-Doll-Envelopes.md" >}})|Hard||||38.0%|
|0368|Tập con chia hết lớn nhất (Largest Divisible Subset)|[Go]({{< relref "/ChapterFour/0300~0399/0368.Largest-Divisible-Subset.md" >}})|Medium||||41.5%|
|0378|Phần tử nhỏ thứ K trong ma trận đã sắp xếp (Kth Smallest Element in a Sorted Matrix)|[Go]({{< relref "/ChapterFour/0300~0399/0378.Kth-Smallest-Element-in-a-Sorted-Matrix.md" >}})|Medium||||61.7%|
|0389|Tìm ký tự khác biệt (Find the Difference)|[Go]({{< relref "/ChapterFour/0300~0399/0389.Find-the-Difference.md" >}})|Easy||||59.9%|
|0414|Số lớn thứ ba (Third Maximum Number)|[Go]({{< relref "/ChapterFour/0400~0499/0414.Third-Maximum-Number.md" >}})|Easy||||33.2%|
|0435|Các đoạn không chồng lấp (Non-overlapping Intervals)|[Go]({{< relref "/ChapterFour/0400~0499/0435.Non-overlapping-Intervals.md" >}})|Medium||||50.3%|
|0436|Tìm đoạn bên phải (Find Right Interval)|[Go]({{< relref "/ChapterFour/0400~0499/0436.Find-Right-Interval.md" >}})|Medium||||50.8%|
|0451|Sắp xếp ký tự theo tần suất (Sort Characters By Frequency)|[Go]({{< relref "/ChapterFour/0400~0499/0451.Sort-Characters-By-Frequency.md" >}})|Medium||||70.1%|
|0455|Phân phát bánh quy (Assign Cookies)|[Go]({{< relref "/ChapterFour/0400~0499/0455.Assign-Cookies.md" >}})|Easy||||49.9%|
|0462|Số bước tối thiểu để làm các phần tử bằng nhau II (Minimum Moves to Equal Array Elements II)|[Go]({{< relref "/ChapterFour/0400~0499/0462.Minimum-Moves-to-Equal-Array-Elements-II.md" >}})|Medium||||60.0%|
|0475|Máy sưởi (Heaters)|[Go]({{< relref "/ChapterFour/0400~0499/0475.Heaters.md" >}})|Medium||||36.5%|
|0506|Xếp hạng tương đối (Relative Ranks)|[Go]({{< relref "/ChapterFour/0500~0599/0506.Relative-Ranks.md" >}})|Easy||||60.5%|
|0524|Từ dài nhất trong từ điển bằng cách xóa (Longest Word in Dictionary through Deleting)|[Go]({{< relref "/ChapterFour/0500~0599/0524.Longest-Word-in-Dictionary-through-Deleting.md" >}})|Medium| O(n)| O(1) ||51.0%|
|0532|Các cặp K-diff trong mảng (K-diff Pairs in an Array)|[Go]({{< relref "/ChapterFour/0500~0599/0532.K-diff-Pairs-in-an-Array.md" >}})|Medium||||41.2%|
|0561|Chia mảng (Array Partition)|[Go]({{< relref "/ChapterFour/0500~0599/0561.Array-Partition.md" >}})|Easy||||77.2%|
|0581|Mảng con liên tục chưa sắp xếp ngắn nhất (Shortest Unsorted Continuous Subarray)|[Go]({{< relref "/ChapterFour/0500~0599/0581.Shortest-Unsorted-Continuous-Subarray.md" >}})|Medium||||36.4%|
|0594|Dãy con hài hòa dài nhất (Longest Harmonious Subsequence)|[Go]({{< relref "/ChapterFour/0500~0599/0594.Longest-Harmonious-Subsequence.md" >}})|Easy||||53.5%|
|0611|Số tam giác hợp lệ (Valid Triangle Number)|[Go]({{< relref "/ChapterFour/0600~0699/0611.Valid-Triangle-Number.md" >}})|Medium||||50.5%|
|0628|Tích lớn nhất của ba số (Maximum Product of Three Numbers)|[Go]({{< relref "/ChapterFour/0600~0699/0628.Maximum-Product-of-Three-Numbers.md" >}})|Easy||||45.9%|
|0632|Khoảng nhỏ nhất bao phủ phần tử từ K danh sách (Smallest Range Covering Elements from K Lists)|[Go]({{< relref "/ChapterFour/0600~0699/0632.Smallest-Range-Covering-Elements-from-K-Lists.md" >}})|Hard||||61.0%|
|0645|Sai lệch tập hợp (Set Mismatch)|[Go]({{< relref "/ChapterFour/0600~0699/0645.Set-Mismatch.md" >}})|Easy||||42.7%|
|0658|Tìm K phần tử gần nhất (Find K Closest Elements)|[Go]({{< relref "/ChapterFour/0600~0699/0658.Find-K-Closest-Elements.md" >}})|Medium||||46.8%|
|0692|Top K từ xuất hiện nhiều nhất (Top K Frequent Words)|[Go]({{< relref "/ChapterFour/0600~0699/0692.Top-K-Frequent-Words.md" >}})|Medium||||57.2%|
|0710|Chọn ngẫu nhiên với danh sách đen (Random Pick with Blacklist)|[Go]({{< relref "/ChapterFour/0700~0799/0710.Random-Pick-with-Blacklist.md" >}})|Hard| O(n)| O(n)  ||33.5%|
|0719|Tìm khoảng cách cặp nhỏ nhất thứ K (Find K-th Smallest Pair Distance)|[Go]({{< relref "/ChapterFour/0700~0799/0719.Find-K-th-Smallest-Pair-Distance.md" >}})|Hard||||36.7%|
|0720|Từ dài nhất trong từ điển (Longest Word in Dictionary)|[Go]({{< relref "/ChapterFour/0700~0799/0720.Longest-Word-in-Dictionary.md" >}})|Medium||||52.0%|
|0726|Số lượng nguyên tử (Number of Atoms)|[Go]({{< relref "/ChapterFour/0700~0799/0726.Number-of-Atoms.md" >}})|Hard||||52.1%|
|0747|Số lớn nhất ít nhất gấp đôi các số còn lại (Largest Number At Least Twice of Others)|[Go]({{< relref "/ChapterFour/0700~0799/0747.Largest-Number-At-Least-Twice-of-Others.md" >}})|Easy||||47.1%|
|0767|Sắp xếp lại chuỗi (Reorganize String)|[Go]({{< relref "/ChapterFour/0700~0799/0767.Reorganize-String.md" >}})|Medium| O(n log n)| O(log n)  |❤️|52.9%|
|0786|Phân số nguyên tố nhỏ thứ K (K-th Smallest Prime Fraction)|[Go]({{< relref "/ChapterFour/0700~0799/0786.K-th-Smallest-Prime-Fraction.md" >}})|Medium||||51.6%|
|0791|Sắp xếp chuỗi tùy chỉnh (Custom Sort String)|[Go]({{< relref "/ChapterFour/0700~0799/0791.Custom-Sort-String.md" >}})|Medium||||69.1%|
|0792|Số lượng dãy con khớp (Number of Matching Subsequences)|[Go]({{< relref "/ChapterFour/0700~0799/0792.Number-of-Matching-Subsequences.md" >}})|Medium||||51.6%|
|0825|Bạn bè có độ tuổi phù hợp (Friends Of Appropriate Ages)|[Go]({{< relref "/ChapterFour/0800~0899/0825.Friends-Of-Appropriate-Ages.md" >}})|Medium||||46.3%|
|0826|Phân công công việc có lợi nhuận cao nhất (Most Profit Assigning Work)|[Go]({{< relref "/ChapterFour/0800~0899/0826.Most-Profit-Assigning-Work.md" >}})|Medium||||44.9%|
|0846|Xếp bài liên tiếp (Hand of Straights)|[Go]({{< relref "/ChapterFour/0800~0899/0846.Hand-of-Straights.md" >}})|Medium||||56.2%|
|0853|Đoàn xe (Car Fleet)|[Go]({{< relref "/ChapterFour/0800~0899/0853.Car-Fleet.md" >}})|Medium| O(n log n)| O(log n)  ||50.3%|
|0869|Sắp xếp lại lũy thừa của 2 (Reordered Power of 2)|[Go]({{< relref "/ChapterFour/0800~0899/0869.Reordered-Power-of-2.md" >}})|Medium||||63.5%|
|0870|Xáo trộn để có lợi thế (Advantage Shuffle)|[Go]({{< relref "/ChapterFour/0800~0899/0870.Advantage-Shuffle.md" >}})|Medium||||51.8%|
|0881|Thuyền cứu người (Boats to Save People)|[Go]({{< relref "/ChapterFour/0800~0899/0881.Boats-to-Save-People.md" >}})|Medium||||53.1%|
|0888|Đổi kẹo công bằng (Fair Candy Swap)|[Go]({{< relref "/ChapterFour/0800~0899/0888.Fair-Candy-Swap.md" >}})|Easy||||60.7%|
|0891|Tổng độ rộng dãy con (Sum of Subsequence Widths)|[Go]({{< relref "/ChapterFour/0800~0899/0891.Sum-of-Subsequence-Widths.md" >}})|Hard||||36.6%|
|0910|Khoảng nhỏ nhất II (Smallest Range II)|[Go]({{< relref "/ChapterFour/0900~0999/0910.Smallest-Range-II.md" >}})|Medium||||35.1%|
|0922|Sắp xếp mảng theo tính chẵn/lẻ II (Sort Array By Parity II)|[Go]({{< relref "/ChapterFour/0900~0999/0922.Sort-Array-By-Parity-II.md" >}})|Easy| O(n)| O(1) ||70.7%|
|0923|Tổng 3 số với bội số (3Sum With Multiplicity)|[Go]({{< relref "/ChapterFour/0900~0999/0923.3Sum-With-Multiplicity.md" >}})|Medium||||45.3%|
|0969|Sắp xếp pancake (Pancake Sorting)|[Go]({{< relref "/ChapterFour/0900~0999/0969.Pancake-Sorting.md" >}})|Medium| O(n log n)| O(log n) |❤️|70.1%|
|0973|K điểm gần gốc tọa độ nhất (K Closest Points to Origin)|[Go]({{< relref "/ChapterFour/0900~0999/0973.K-Closest-Points-to-Origin.md" >}})|Medium| O(n log n)| O(log n) ||65.7%|
|0976|Chu vi tam giác lớn nhất (Largest Perimeter Triangle)|[Go]({{< relref "/ChapterFour/0900~0999/0976.Largest-Perimeter-Triangle.md" >}})|Easy| O(n log n)| O(log n) ||54.6%|
|0977|Bình phương của mảng đã sắp xếp (Squares of a Sorted Array)|[Go]({{< relref "/ChapterFour/0900~0999/0977.Squares-of-a-Sorted-Array.md" >}})|Easy||||71.9%|
|1005|Tối đa hóa tổng mảng sau K lần đổi dấu (Maximize Sum Of Array After K Negations)|[Go]({{< relref "/ChapterFour/1000~1099/1005.Maximize-Sum-Of-Array-After-K-Negations.md" >}})|Easy||||50.9%|
|1030|Các ô ma trận theo thứ tự khoảng cách (Matrix Cells in Distance Order)|[Go]({{< relref "/ChapterFour/1000~1099/1030.Matrix-Cells-in-Distance-Order.md" >}})|Easy| O(n^2)| O(1) ||69.7%|
|1040|Di chuyển đá đến khi liên tiếp II (Moving Stones Until Consecutive II)|[Go]({{< relref "/ChapterFour/1000~1099/1040.Moving-Stones-Until-Consecutive-II.md" >}})|Medium||||55.9%|
|1051|Kiểm tra chiều cao (Height Checker)|[Go]({{< relref "/ChapterFour/1000~1099/1051.Height-Checker.md" >}})|Easy||||75.6%|
|1054|Mã vạch cách xa nhau (Distant Barcodes)|[Go]({{< relref "/ChapterFour/1000~1099/1054.Distant-Barcodes.md" >}})|Medium| O(n log n)| O(log n) |❤️|45.8%|
|1122|Sắp xếp tương đối mảng (Relative Sort Array)|[Go]({{< relref "/ChapterFour/1100~1199/1122.Relative-Sort-Array.md" >}})|Easy||||68.6%|
|1170|So sánh chuỗi theo tần suất của ký tự nhỏ nhất (Compare Strings by Frequency of the Smallest Character)|[Go]({{< relref "/ChapterFour/1100~1199/1170.Compare-Strings-by-Frequency-of-the-Smallest-Character.md" >}})|Medium||||61.5%|
|1200|Hiệu tuyệt đối nhỏ nhất (Minimum Absolute Difference)|[Go]({{< relref "/ChapterFour/1200~1299/1200.Minimum-Absolute-Difference.md" >}})|Easy||||69.6%|
|1235|Lợi nhuận tối đa khi xếp lịch công việc (Maximum Profit in Job Scheduling)|[Go]({{< relref "/ChapterFour/1200~1299/1235.Maximum-Profit-in-Job-Scheduling.md" >}})|Hard||||53.4%|
|1296|Chia mảng thành các bộ K số liên tiếp (Divide Array in Sets of K Consecutive Numbers)|[Go]({{< relref "/ChapterFour/1200~1299/1296.Divide-Array-in-Sets-of-K-Consecutive-Numbers.md" >}})|Medium||||56.5%|
|1300|Tổng mảng đã biến đổi gần mục tiêu nhất (Sum of Mutated Array Closest to Target)|[Go]({{< relref "/ChapterFour/1300~1399/1300.Sum-of-Mutated-Array-Closest-to-Target.md" >}})|Medium||||43.6%|
|1305|Tất cả phần tử trong hai cây nhị phân tìm kiếm (All Elements in Two Binary Search Trees)|[Go]({{< relref "/ChapterFour/1300~1399/1305.All-Elements-in-Two-Binary-Search-Trees.md" >}})|Medium||||79.8%|
|1329|Sắp xếp ma trận theo đường chéo (Sort the Matrix Diagonally)|[Go]({{< relref "/ChapterFour/1300~1399/1329.Sort-the-Matrix-Diagonally.md" >}})|Medium||||83.3%|
|1337|K hàng yếu nhất trong ma trận (The K Weakest Rows in a Matrix)|[Go]({{< relref "/ChapterFour/1300~1399/1337.The-K-Weakest-Rows-in-a-Matrix.md" >}})|Easy||||72.1%|
|1353|Số sự kiện tối đa có thể tham dự (Maximum Number of Events That Can Be Attended)|[Go]({{< relref "/ChapterFour/1300~1399/1353.Maximum-Number-of-Events-That-Can-Be-Attended.md" >}})|Medium||||32.5%|
|1383|Hiệu suất tối đa của một đội (Maximum Performance of a Team)|[Go]({{< relref "/ChapterFour/1300~1399/1383.Maximum-Performance-of-a-Team.md" >}})|Hard||||48.5%|
|1385|Tìm giá trị khoảng cách giữa hai mảng (Find the Distance Value Between Two Arrays)|[Go]({{< relref "/ChapterFour/1300~1399/1385.Find-the-Distance-Value-Between-Two-Arrays.md" >}})|Easy||||66.5%|
|1464|Tích lớn nhất của hai phần tử trong mảng (Maximum Product of Two Elements in an Array)|[Go]({{< relref "/ChapterFour/1400~1499/1464.Maximum-Product-of-Two-Elements-in-an-Array.md" >}})|Easy||||79.9%|
|1465|Diện tích lớn nhất của miếng bánh sau khi cắt ngang và dọc (Maximum Area of a Piece of Cake After Horizontal and Vertical Cuts)|[Go]({{< relref "/ChapterFour/1400~1499/1465.Maximum-Area-of-a-Piece-of-Cake-After-Horizontal-and-Vertical-Cuts.md" >}})|Medium||||40.9%|
|1608|Mảng đặc biệt với X phần tử >= X (Special Array With X Elements Greater Than or Equal X)|[Go]({{< relref "/ChapterFour/1600~1699/1608.Special-Array-With-X-Elements-Greater-Than-or-Equal-X.md" >}})|Easy||||60.5%|
|1619|Trung bình mảng sau khi loại bỏ một số phần tử (Mean of Array After Removing Some Elements)|[Go]({{< relref "/ChapterFour/1600~1699/1619.Mean-of-Array-After-Removing-Some-Elements.md" >}})|Easy||||65.7%|
|1636|Sắp xếp mảng theo tần suất tăng dần (Sort Array by Increasing Frequency)|[Go]({{< relref "/ChapterFour/1600~1699/1636.Sort-Array-by-Increasing-Frequency.md" >}})|Easy||||69.5%|
|1647|Số lần xóa tối thiểu để tần suất ký tự là duy nhất (Minimum Deletions to Make Character Frequencies Unique)|[Go]({{< relref "/ChapterFour/1600~1699/1647.Minimum-Deletions-to-Make-Character-Frequencies-Unique.md" >}})|Medium||||59.1%|
|1648|Bán bóng màu giảm giá trị (Sell Diminishing-Valued Colored Balls)|[Go]({{< relref "/ChapterFour/1600~1699/1648.Sell-Diminishing-Valued-Colored-Balls.md" >}})|Medium||||30.5%|
|1657|Xác định hai chuỗi có gần nhau không (Determine if Two Strings Are Close)|[Go]({{< relref "/ChapterFour/1600~1699/1657.Determine-if-Two-Strings-Are-Close.md" >}})|Medium||||56.3%|
|1665|Năng lượng ban đầu tối thiểu để hoàn thành công việc (Minimum Initial Energy to Finish Tasks)|[Go]({{< relref "/ChapterFour/1600~1699/1665.Minimum-Initial-Energy-to-Finish-Tasks.md" >}})|Hard||||56.3%|
|1679|Số lượng tối đa các cặp có tổng K (Max Number of K-Sum Pairs)|[Go]({{< relref "/ChapterFour/1600~1699/1679.Max-Number-of-K-Sum-Pairs.md" >}})|Medium||||57.3%|
|1691|Chiều cao tối đa bằng cách xếp khối hộp (Maximum Height by Stacking Cuboids)|[Go]({{< relref "/ChapterFour/1600~1699/1691.Maximum-Height-by-Stacking-Cuboids.md" >}})|Hard||||54.4%|
|1710|Số đơn vị tối đa trên xe tải (Maximum Units on a Truck)|[Go]({{< relref "/ChapterFour/1700~1799/1710.Maximum-Units-on-a-Truck.md" >}})|Easy||||73.8%|
|1818|Hiệu tổng tuyệt đối nhỏ nhất (Minimum Absolute Sum Difference)|[Go]({{< relref "/ChapterFour/1800~1899/1818.Minimum-Absolute-Sum-Difference.md" >}})|Medium||||30.4%|
|1846|Phần tử lớn nhất sau khi giảm và sắp xếp lại (Maximum Element After Decreasing and Rearranging)|[Go]({{< relref "/ChapterFour/1800~1899/1846.Maximum-Element-After-Decreasing-and-Rearranging.md" >}})|Medium||||58.9%|
|1877|Giảm thiểu tổng cặp lớn nhất trong mảng (Minimize Maximum Pair Sum in Array)|[Go]({{< relref "/ChapterFour/1800~1899/1877.Minimize-Maximum-Pair-Sum-in-Array.md" >}})|Medium||||79.9%|
|1984|Chênh lệch nhỏ nhất giữa điểm cao nhất và thấp nhất của K điểm (Minimum Difference Between Highest and Lowest of K Scores)|[Go]({{< relref "/ChapterFour/1900~1999/1984.Minimum-Difference-Between-Highest-and-Lowest-of-K-Scores.md" >}})|Easy||||54.4%|
|2037|Số bước tối thiểu để sắp chỗ cho mọi người (Minimum Number of Moves to Seat Everyone)|[Go]({{< relref "/ChapterFour/2000~2099/2037.Minimum-Number-of-Moves-to-Seat-Everyone.md" >}})|Easy||||82.1%|
|2164|Sắp xếp chỉ số chẵn và lẻ độc lập (Sort Even and Odd Indices Independently)|[Go]({{< relref "/ChapterFour/2100~2199/2164.Sort-Even-and-Odd-Indices-Independently.md" >}})|Easy||||65.0%|
|2165|Giá trị nhỏ nhất của số sau khi sắp xếp lại (Smallest Value of the Rearranged Number)|[Go]({{< relref "/ChapterFour/2100~2199/2165.Smallest-Value-of-the-Rearranged-Number.md" >}})|Medium||||51.4%|
|2171|Xóa tối thiểu số hạt đậu ma thuật (Removing Minimum Number of Magic Beans)|[Go]({{< relref "/ChapterFour/2100~2199/2171.Removing-Minimum-Number-of-Magic-Beans.md" >}})|Medium||||42.1%|
|------------|-------------------------------------------------------|-------| ----------------| ---------------|-------------|-------------|-------------|


----------------------------------------------
<div style="display: flex;justify-content: space-between;align-items: center;">
<p><a href="https://books.halfrost.com/leetcode/ChapterTwo/Hash_Table/">⬅️上一页</a></p>
<p><a href="https://books.halfrost.com/leetcode/ChapterTwo/Bit_Manipulation/">下一页➡️</a></p>
</div>
