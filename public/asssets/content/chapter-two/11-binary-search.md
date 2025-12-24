---
title: 2.11 Tìm kiếm nhị phân (Binary Search)
type: docs
weight: 11
---

# Tìm kiếm nhị phân (Binary Search)

- Cách viết kinh điển của tìm kiếm nhị phân. Cần chú ý 3 điểm:
	1. Điều kiện thoát vòng lặp: chú ý là `low <= high`, không phải `low < high`.
	2. Cách tính `mid`: `mid := low + (high-low)>>1`
	3. Cách cập nhật `low` và `high`: `low = mid + 1`, `high = mid - 1`.

```go
func binarySearchMatrix(nums []int, target int) int {
	low, high := 0, len(nums)-1
	for low <= high {
		mid := low + (high-low)>>1
		if nums[mid] == target {
			return mid
		} else if nums[mid] > target {
			high = mid - 1
		} else {
			low = mid + 1
		}
	}
	return -1
}
```

- Biến thể của tìm kiếm nhị phân. Có 4 biến thể cơ bản:
	1. Tìm phần tử đầu tiên bằng `target`, độ phức tạp {{< katex >}}O(log n){{< /katex >}}
	2. Tìm phần tử cuối cùng bằng `target`, độ phức tạp {{< katex >}}O(log n){{< /katex >}}
	3. Tìm phần tử đầu tiên lớn hơn hoặc bằng `target`, độ phức tạp {{< katex >}}O(log n){{< /katex >}}
	4. Tìm phần tử cuối cùng nhỏ hơn hoặc bằng `target`, độ phức tạp {{< katex >}}O(log n){{< /katex >}}

```go
// Tìm kiếm nhị phân phần tử đầu tiên bằng target, độ phức tạp O(logn)
func searchFirstEqualElement(nums []int, target int) int {
	low, high := 0, len(nums)-1
	for low <= high {
		mid := low + ((high - low) >> 1)
		if nums[mid] > target {
			high = mid - 1
		} else if nums[mid] < target {
			low = mid + 1
		} else {
			if (mid == 0) || (nums[mid-1] != target) { // Tìm phần tử đầu tiên bằng target
				return mid
			}
			high = mid - 1
		}
	}
	return -1
}

// Tìm kiếm nhị phân phần tử cuối cùng bằng target, độ phức tạp O(logn)
func searchLastEqualElement(nums []int, target int) int {
	low, high := 0, len(nums)-1
	for low <= high {
		mid := low + ((high - low) >> 1)
		if nums[mid] > target {
			high = mid - 1
		} else if nums[mid] < target {
			low = mid + 1
		} else {
			if (mid == len(nums)-1) || (nums[mid+1] != target) { // Tìm phần tử cuối cùng bằng target
				return mid
			}
			low = mid + 1
		}
	}
	return -1
}

// Tìm kiếm nhị phân phần tử đầu tiên >= target, độ phức tạp O(logn)
func searchFirstGreaterElement(nums []int, target int) int {
	low, high := 0, len(nums)-1
	for low <= high {
		mid := low + ((high - low) >> 1)
		if nums[mid] >= target {
			if (mid == 0) || (nums[mid-1] < target) { // Tìm phần tử đầu tiên >= target
				return mid
			}
			high = mid - 1
		} else {
			low = mid + 1
		}
	}
	return -1
}

// Tìm kiếm nhị phân phần tử cuối cùng <= target, độ phức tạp O(logn)
func searchLastLessElement(nums []int, target int) int {
	low, high := 0, len(nums)-1
	for low <= high {
		mid := low + ((high - low) >> 1)
		if nums[mid] <= target {
			if (mid == len(nums)-1) || (nums[mid+1] > target) { // Tìm phần tử cuối cùng <= target
				return mid
			}
			low = mid + 1
		} else {
			high = mid - 1
		}
	}
	return -1
}
```

- Dùng tìm kiếm nhị phân trong mảng “gần như có thứ tự”. Có thể giải bằng cách kinh điển hoặc các biến thể. Dạng bài hay gặp: tìm đỉnh trong mảng núi, tìm điểm phân chia trong mảng đã sắp xếp bị xoay. Bài 33, 81, 153, 154, 162, 852.

```go
func peakIndexInMountainArray(A []int) int {
	low, high := 0, len(A)-1
	for low < high {
		mid := low + (high-low)>>1
		// Nếu A[mid] > A[mid+1] thì đỉnh nằm bên trái (kể cả mid) => high = mid
		// Ngược lại đỉnh nằm bên phải => low = mid + 1
		if A[mid] > A[mid+1] {
			high = mid
		} else {
			low = mid + 1
		}
	}
	return low
}
```

- Dạng bài “tối thiểu hóa giá trị lớn nhất” (max-min). Tìm giá trị lớn nhất nhỏ nhất sao cho thỏa điều kiện. Bài 410, 875, 1011, 1283.


| STT      | Tiêu đề | Lời giải  | Độ khó  | Độ phức tạp thời gian | Độ phức tạp bộ nhớ  |Yêu thích | Tỷ lệ AC (Acceptance) |
|:--------:|:------- | :--------: | :----------: | :----: | :-----: | :-----: |:-----: |
|0004|Trung vị của hai mảng đã sắp xếp (Median of Two Sorted Arrays)|[Go]({{< relref "/ChapterFour/0001~0099/0004.Median-of-Two-Sorted-Arrays.md" >}})|Hard||||36.2%|
|0033|Tìm kiếm trong mảng đã sắp xếp bị xoay (Search in Rotated Sorted Array)|[Go]({{< relref "/ChapterFour/0001~0099/0033.Search-in-Rotated-Sorted-Array.md" >}})|Medium||||39.0%|
|0034|Tìm vị trí đầu và cuối của phần tử trong mảng đã sắp xếp (Find First and Last Position of Element in Sorted Array)|[Go]({{< relref "/ChapterFour/0001~0099/0034.Find-First-and-Last-Position-of-Element-in-Sorted-Array.md" >}})|Medium||||41.9%|
|0035|Vị trí chèn (Search Insert Position)|[Go]({{< relref "/ChapterFour/0001~0099/0035.Search-Insert-Position.md" >}})|Easy||||43.4%|
|0069|Căn bậc hai (Sqrt(x))|[Go]({{< relref "/ChapterFour/0001~0099/0069.Sqrtx.md" >}})|Easy| {{< katex >}}O(log n){{< /katex >}}| {{< katex >}}O(1){{< /katex >}}||37.4%|
|0074|Tìm kiếm trong ma trận 2D (Search a 2D Matrix)|[Go]({{< relref "/ChapterFour/0001~0099/0074.Search-a-2D-Matrix.md" >}})|Medium||||47.7%|
|0081|Tìm kiếm trong mảng đã sắp xếp bị xoay II (Search in Rotated Sorted Array II)|[Go]({{< relref "/ChapterFour/0001~0099/0081.Search-in-Rotated-Sorted-Array-II.md" >}})|Medium||||35.7%|
|0153|Tìm giá trị nhỏ nhất trong mảng đã sắp xếp bị xoay (Find Minimum in Rotated Sorted Array)|[Go]({{< relref "/ChapterFour/0100~0199/0153.Find-Minimum-in-Rotated-Sorted-Array.md" >}})|Medium||||48.9%|
|0154|Tìm giá trị nhỏ nhất trong mảng đã sắp xếp bị xoay II (Find Minimum in Rotated Sorted Array II)|[Go]({{< relref "/ChapterFour/0100~0199/0154.Find-Minimum-in-Rotated-Sorted-Array-II.md" >}})|Hard||||43.5%|
|0162|Tìm phần tử đỉnh (Find Peak Element)|[Go]({{< relref "/ChapterFour/0100~0199/0162.Find-Peak-Element.md" >}})|Medium||||46.0%|
|0167|Hai tổng II - Mảng đầu vào đã sắp xếp (Two Sum II - Input Array Is Sorted)|[Go]({{< relref "/ChapterFour/0100~0199/0167.Two-Sum-II-Input-Array-Is-Sorted.md" >}})|Medium| {{< katex >}}O(n){{< /katex >}}| {{< katex >}}O(1){{< /katex >}}||60.0%|
|0209|Tổng mảng con tối thiểu đạt ngưỡng (Minimum Size Subarray Sum)|[Go]({{< relref "/ChapterFour/0200~0299/0209.Minimum-Size-Subarray-Sum.md" >}})|Medium| {{< katex >}}O(n){{< /katex >}}| {{< katex >}}O(1){{< /katex >}}||45.0%|
|0222|Đếm số nút của cây hoàn chỉnh (Count Complete Tree Nodes)|[Go]({{< relref "/ChapterFour/0200~0299/0222.Count-Complete-Tree-Nodes.md" >}})|Medium| {{< katex >}}O(n){{< /katex >}}| {{< katex >}}O(1){{< /katex >}}||60.6%|
|0240|Tìm kiếm trong ma trận 2D II (Search a 2D Matrix II)|[Go]({{< relref "/ChapterFour/0200~0299/0240.Search-a-2D-Matrix-II.md" >}})|Medium||||51.0%|
|0268|Số bị thiếu (Missing Number)|[Go]({{< relref "/ChapterFour/0200~0299/0268.Missing-Number.md" >}})|Easy||||62.6%|
|0275|Chỉ số H II (H-Index II)|[Go]({{< relref "/ChapterFour/0200~0299/0275.H-Index-II.md" >}})|Medium||||37.5%|
|0278|Phiên bản xấu đầu tiên (First Bad Version)|[Go]({{< relref "/ChapterFour/0200~0299/0278.First-Bad-Version.md" >}})|Easy||||43.3%|
|0287|Tìm số bị lặp (Find the Duplicate Number)|[Go]({{< relref "/ChapterFour/0200~0299/0287.Find-the-Duplicate-Number.md" >}})|Medium| {{< katex >}}O(n){{< /katex >}}| {{< katex >}}O(1){{< /katex >}}|❤️|59.1%|
|0300|Dãy con tăng dần dài nhất (Longest Increasing Subsequence)|[Go]({{< relref "/ChapterFour/0300~0399/0300.Longest-Increasing-Subsequence.md" >}})|Medium| {{< katex >}}O(n log n){{< /katex >}}| {{< katex >}}O(n){{< /katex >}}||52.2%|
|0315|Đếm số nhỏ hơn ở phía sau (Count of Smaller Numbers After Self)|[Go]({{< relref "/ChapterFour/0300~0399/0315.Count-of-Smaller-Numbers-After-Self.md" >}})|Hard||||42.6%|
|0327|Đếm tổng đoạn (Count of Range Sum)|[Go]({{< relref "/ChapterFour/0300~0399/0327.Count-of-Range-Sum.md" >}})|Hard||||35.8%|
|0349|Giao của hai mảng (Intersection of Two Arrays)|[Go]({{< relref "/ChapterFour/0300~0399/0349.Intersection-of-Two-Arrays.md" >}})|Easy| {{< katex >}}O(n){{< /katex >}}| {{< katex >}}O(n){{< /katex >}} ||70.9%|
|0350|Giao của hai mảng II (Intersection of Two Arrays II)|[Go]({{< relref "/ChapterFour/0300~0399/0350.Intersection-of-Two-Arrays-II.md" >}})|Easy| {{< katex >}}O(n){{< /katex >}}| {{< katex >}}O(n){{< /katex >}} ||56.0%|
|0352|Luồng dữ liệu như các đoạn rời nhau (Data Stream as Disjoint Intervals)|[Go]({{< relref "/ChapterFour/0300~0399/0352.Data-Stream-as-Disjoint-Intervals.md" >}})|Hard||||59.7%|
|0354|Phong bì búp bê Nga (Russian Doll Envelopes)|[Go]({{< relref "/ChapterFour/0300~0399/0354.Russian-Doll-Envelopes.md" >}})|Hard||||37.9%|
|0367|Số chính phương hoàn hảo hợp lệ (Valid Perfect Square)|[Go]({{< relref "/ChapterFour/0300~0399/0367.Valid-Perfect-Square.md" >}})|Easy||||43.3%|
|0374|Đoán số cao hơn hay thấp hơn (Guess Number Higher or Lower)|[Go]({{< relref "/ChapterFour/0300~0399/0374.Guess-Number-Higher-or-Lower.md" >}})|Easy||||51.9%|
|0378|Phần tử nhỏ thứ K trong ma trận đã sắp xếp (Kth Smallest Element in a Sorted Matrix)|[Go]({{< relref "/ChapterFour/0300~0399/0378.Kth-Smallest-Element-in-a-Sorted-Matrix.md" >}})|Medium||||61.8%|
|0400|Chữ số thứ N (Nth Digit)|[Go]({{< relref "/ChapterFour/0400~0499/0400.Nth-Digit.md" >}})|Medium||||34.1%|
|0410|Chia mảng để tổng lớn nhất nhỏ nhất (Split Array Largest Sum)|[Go]({{< relref "/ChapterFour/0400~0499/0410.Split-Array-Largest-Sum.md" >}})|Hard||||53.5%|
|0436|Tìm đoạn bên phải (Find Right Interval)|[Go]({{< relref "/ChapterFour/0400~0499/0436.Find-Right-Interval.md" >}})|Medium||||50.8%|
|0441|Sắp xếp tiền xu (Arranging Coins)|[Go]({{< relref "/ChapterFour/0400~0499/0441.Arranging-Coins.md" >}})|Easy||||46.2%|
|0456|Mẫu 132 (132 Pattern)|[Go]({{< relref "/ChapterFour/0400~0499/0456.132-Pattern.md" >}})|Medium||||32.4%|
|0475|Máy sưởi (Heaters)|[Go]({{< relref "/ChapterFour/0400~0499/0475.Heaters.md" >}})|Medium||||36.5%|
|0483|Cơ số tốt nhỏ nhất (Smallest Good Base)|[Go]({{< relref "/ChapterFour/0400~0499/0483.Smallest-Good-Base.md" >}})|Hard||||38.8%|
|0493|Cặp đảo ngược (Reverse Pairs)|[Go]({{< relref "/ChapterFour/0400~0499/0493.Reverse-Pairs.md" >}})|Hard||||30.9%|
|0497|Điểm ngẫu nhiên trong các hình chữ nhật không chồng lấp (Random Point in Non-overlapping Rectangles)|[Go]({{< relref "/ChapterFour/0400~0499/0497.Random-Point-in-Non-overlapping-Rectangles.md" >}})|Medium||||39.4%|
|0528|Chọn ngẫu nhiên theo trọng số (Random Pick with Weight)|[Go]({{< relref "/ChapterFour/0500~0599/0528.Random-Pick-with-Weight.md" >}})|Medium||||46.1%|
|0532|Các cặp K-diff trong mảng (K-diff Pairs in an Array)|[Go]({{< relref "/ChapterFour/0500~0599/0532.K-diff-Pairs-in-an-Array.md" >}})|Medium||||41.2%|
|0540|Phần tử duy nhất trong mảng đã sắp xếp (Single Element in a Sorted Array)|[Go]({{< relref "/ChapterFour/0500~0599/0540.Single-Element-in-a-Sorted-Array.md" >}})|Medium||||59.1%|
|0611|Số tam giác hợp lệ (Valid Triangle Number)|[Go]({{< relref "/ChapterFour/0600~0699/0611.Valid-Triangle-Number.md" >}})|Medium||||50.6%|
|0633|Tổng của các số chính phương (Sum of Square Numbers)|[Go]({{< relref "/ChapterFour/0600~0699/0633.Sum-of-Square-Numbers.md" >}})|Medium||||34.4%|
|0658|Tìm K phần tử gần nhất (Find K Closest Elements)|[Go]({{< relref "/ChapterFour/0600~0699/0658.Find-K-Closest-Elements.md" >}})|Medium||||46.8%|
|0668|Số nhỏ thứ K trong bảng nhân (Kth Smallest Number in Multiplication Table)|[Go]({{< relref "/ChapterFour/0600~0699/0668.Kth-Smallest-Number-in-Multiplication-Table.md" >}})|Hard||||51.4%|
|0704|Tìm kiếm nhị phân (Binary Search)|[Go]({{< relref "/ChapterFour/0700~0799/0704.Binary-Search.md" >}})|Easy||||56.1%|
|0710|Chọn ngẫu nhiên với danh sách đen (Random Pick with Blacklist)|[Go]({{< relref "/ChapterFour/0700~0799/0710.Random-Pick-with-Blacklist.md" >}})|Hard| {{< katex >}}O(n){{< /katex >}}| {{< katex >}}O(n){{< /katex >}}  ||33.5%|
|0718|Độ dài tối đa của mảng con lặp lại (Maximum Length of Repeated Subarray)|[Go]({{< relref "/ChapterFour/0700~0799/0718.Maximum-Length-of-Repeated-Subarray.md" >}})|Medium||||51.3%|
|0719|Tìm khoảng cách cặp nhỏ nhất thứ K (Find K-th Smallest Pair Distance)|[Go]({{< relref "/ChapterFour/0700~0799/0719.Find-K-th-Smallest-Pair-Distance.md" >}})|Hard||||36.7%|
|0729|Lịch của tôi I (My Calendar I)|[Go]({{< relref "/ChapterFour/0700~0799/0729.My-Calendar-I.md" >}})|Medium||||56.8%|
|0732|Lịch của tôi III (My Calendar III)|[Go]({{< relref "/ChapterFour/0700~0799/0732.My-Calendar-III.md" >}})|Hard||||71.5%|
|0744|Tìm chữ cái nhỏ nhất lớn hơn mục tiêu (Find Smallest Letter Greater Than Target)|[Go]({{< relref "/ChapterFour/0700~0799/0744.Find-Smallest-Letter-Greater-Than-Target.md" >}})|Easy||||45.8%|
|0778|Bơi trong nước dâng (Swim in Rising Water)|[Go]({{< relref "/ChapterFour/0700~0799/0778.Swim-in-Rising-Water.md" >}})|Hard||||59.8%|
|0786|Phân số nguyên tố nhỏ thứ K (K-th Smallest Prime Fraction)|[Go]({{< relref "/ChapterFour/0700~0799/0786.K-th-Smallest-Prime-Fraction.md" >}})|Medium||||51.7%|
|0793|Kích thước tiền ảnh của hàm số lượng số 0 của giai thừa (Preimage Size of Factorial Zeroes Function)|[Go]({{< relref "/ChapterFour/0700~0799/0793.Preimage-Size-of-Factorial-Zeroes-Function.md" >}})|Hard||||43.2%|
|0825|Bạn bè có độ tuổi phù hợp (Friends Of Appropriate Ages)|[Go]({{< relref "/ChapterFour/0800~0899/0825.Friends-Of-Appropriate-Ages.md" >}})|Medium||||46.3%|
|0826|Phân công công việc có lợi nhuận cao nhất (Most Profit Assigning Work)|[Go]({{< relref "/ChapterFour/0800~0899/0826.Most-Profit-Assigning-Work.md" >}})|Medium||||44.9%|
|0852|Chỉ số đỉnh trong mảng núi (Peak Index in a Mountain Array)|[Go]({{< relref "/ChapterFour/0800~0899/0852.Peak-Index-in-a-Mountain-Array.md" >}})|Medium||||69.0%|
|0862|Mảng con ngắn nhất có tổng ít nhất K (Shortest Subarray with Sum at Least K)|[Go]({{< relref "/ChapterFour/0800~0899/0862.Shortest-Subarray-with-Sum-at-Least-K.md" >}})|Hard||||26.0%|
|0875|Koko ăn chuối (Koko Eating Bananas)|[Go]({{< relref "/ChapterFour/0800~0899/0875.Koko-Eating-Bananas.md" >}})|Medium||||52.1%|
|0878|Số ma thuật thứ N (Nth Magical Number)|[Go]({{< relref "/ChapterFour/0800~0899/0878.Nth-Magical-Number.md" >}})|Hard||||35.4%|
|0887|Siêu thả trứng (Super Egg Drop)|[Go]({{< relref "/ChapterFour/0800~0899/0887.Super-Egg-Drop.md" >}})|Hard||||27.1%|
|0888|Đổi kẹo công bằng (Fair Candy Swap)|[Go]({{< relref "/ChapterFour/0800~0899/0888.Fair-Candy-Swap.md" >}})|Easy||||60.7%|
|0911|Bầu cử trực tuyến (Online Election)|[Go]({{< relref "/ChapterFour/0900~0999/0911.Online-Election.md" >}})|Medium||||52.2%|
|0981|Kho lưu trữ key-value theo thời gian (Time Based Key-Value Store)|[Go]({{< relref "/ChapterFour/0900~0999/0981.Time-Based-Key-Value-Store.md" >}})|Medium||||52.2%|
|1004|Số 1 liên tiếp tối đa III (Max Consecutive Ones III)|[Go]({{< relref "/ChapterFour/1000~1099/1004.Max-Consecutive-Ones-III.md" >}})|Medium||||63.2%|
|1011|Sức chứa để chuyển hàng trong D ngày (Capacity To Ship Packages Within D Days)|[Go]({{< relref "/ChapterFour/1000~1099/1011.Capacity-To-Ship-Packages-Within-D-Days.md" >}})|Medium||||67.7%|
|1157|Phần tử chiếm đa số trực tuyến trong mảng con (Online Majority Element In Subarray)|[Go]({{< relref "/ChapterFour/1100~1199/1157.Online-Majority-Element-In-Subarray.md" >}})|Hard||||41.8%|
|1170|So sánh chuỗi theo tần suất của ký tự nhỏ nhất (Compare Strings by Frequency of the Smallest Character)|[Go]({{< relref "/ChapterFour/1100~1199/1170.Compare-Strings-by-Frequency-of-the-Smallest-Character.md" >}})|Medium||||61.5%|
|1201|Số xấu III (Ugly Number III)|[Go]({{< relref "/ChapterFour/1200~1299/1201.Ugly-Number-III.md" >}})|Medium||||28.9%|
|1208|Lấy các chuỗi con bằng nhau trong ngân sách (Get Equal Substrings Within Budget)|[Go]({{< relref "/ChapterFour/1200~1299/1208.Get-Equal-Substrings-Within-Budget.md" >}})|Medium||||48.6%|
|1235|Lợi nhuận tối đa khi xếp lịch công việc (Maximum Profit in Job Scheduling)|[Go]({{< relref "/ChapterFour/1200~1299/1235.Maximum-Profit-in-Job-Scheduling.md" >}})|Hard||||53.4%|
|1283|Tìm ước số nhỏ nhất với ngưỡng cho trước (Find the Smallest Divisor Given a Threshold)|[Go]({{< relref "/ChapterFour/1200~1299/1283.Find-the-Smallest-Divisor-Given-a-Threshold.md" >}})|Medium||||56.2%|
|1300|Tổng mảng đã biến đổi gần mục tiêu nhất (Sum of Mutated Array Closest to Target)|[Go]({{< relref "/ChapterFour/1300~1399/1300.Sum-of-Mutated-Array-Closest-to-Target.md" >}})|Medium||||43.6%|
|1337|K hàng yếu nhất trong ma trận (The K Weakest Rows in a Matrix)|[Go]({{< relref "/ChapterFour/1300~1399/1337.The-K-Weakest-Rows-in-a-Matrix.md" >}})|Easy||||72.1%|
|1385|Tìm giá trị khoảng cách giữa hai mảng (Find the Distance Value Between Two Arrays)|[Go]({{< relref "/ChapterFour/1300~1399/1385.Find-the-Distance-Value-Between-Two-Arrays.md" >}})|Easy||||66.6%|
|1439|Tìm tổng nhỏ thứ K của ma trận có các hàng đã sắp xếp (Find the Kth Smallest Sum of a Matrix With Sorted Rows)|[Go]({{< relref "/ChapterFour/1400~1499/1439.Find-the-Kth-Smallest-Sum-of-a-Matrix-With-Sorted-Rows.md" >}})|Hard||||61.4%|
|1482|Số ngày tối thiểu để làm m bó hoa (Minimum Number of Days to Make m Bouquets)|[Go]({{< relref "/ChapterFour/1400~1499/1482.Minimum-Number-of-Days-to-Make-m-Bouquets.md" >}})|Medium||||54.0%|
|1539|Số dương bị thiếu thứ K (Kth Missing Positive Number)|[Go]({{< relref "/ChapterFour/1500~1599/1539.Kth-Missing-Positive-Number.md" >}})|Easy||||58.6%|
|1608|Mảng đặc biệt với X phần tử >= X (Special Array With X Elements Greater Than or Equal X)|[Go]({{< relref "/ChapterFour/1600~1699/1608.Special-Array-With-X-Elements-Greater-Than-or-Equal-X.md" >}})|Easy||||60.5%|
|1631|Đường đi với nỗ lực tối thiểu (Path With Minimum Effort)|[Go]({{< relref "/ChapterFour/1600~1699/1631.Path-With-Minimum-Effort.md" >}})|Medium||||55.7%|
|1648|Bán bóng màu giảm giá trị (Sell Diminishing-Valued Colored Balls)|[Go]({{< relref "/ChapterFour/1600~1699/1648.Sell-Diminishing-Valued-Colored-Balls.md" >}})|Medium||||30.4%|
|1649|Tạo mảng đã sắp xếp qua hướng dẫn (Create Sorted Array through Instructions)|[Go]({{< relref "/ChapterFour/1600~1699/1649.Create-Sorted-Array-through-Instructions.md" >}})|Hard||||37.5%|
|1658|Số thao tác tối thiểu để giảm X về 0 (Minimum Operations to Reduce X to Zero)|[Go]({{< relref "/ChapterFour/1600~1699/1658.Minimum-Operations-to-Reduce-X-to-Zero.md" >}})|Medium||||37.6%|
|1818|Hiệu tổng tuyệt đối nhỏ nhất (Minimum Absolute Sum Difference)|[Go]({{< relref "/ChapterFour/1800~1899/1818.Minimum-Absolute-Sum-Difference.md" >}})|Medium||||30.4%|
|------------|-------------------------------------------------------|-------| ----------------| ---------------|-------------|-------------|-------------|


----------------------------------------------
<div style="display: flex;justify-content: space-between;align-items: center;">
<p><a href="https://books.halfrost.com/leetcode/ChapterTwo/Breadth_First_Search/">⬅️上一页</a></p>
<p><a href="https://books.halfrost.com/leetcode/ChapterTwo/Math/">下一页➡️</a></p>
</div>
