---
title: 2.17 ✅ Cửa sổ trượt (Sliding Window)
type: docs
weight: 17
---

# Cửa sổ trượt (Sliding Window)

![](https://img.halfrost.com/Leetcode/Sliding_Window.png)

- Cách viết kinh điển của **cửa sổ trượt (sliding window) với hai con trỏ**: con trỏ phải liên tục dịch sang phải đến khi không thể dịch tiếp (điều kiện tuỳ bài). Khi con trỏ phải chạm biên phải, bắt đầu dịch con trỏ trái để “nhả” biên trái của cửa sổ. Các bài: 3, 76, 209, 424, 438, 567, 713, 763, 845, 881, 904, 978, 992, 1004, 1040, 1052.

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
- Các bài kinh điển của cửa sổ trượt: 239, 480.


| STT      | Tiêu đề | Lời giải  | Độ khó  | Độ phức tạp thời gian | Độ phức tạp bộ nhớ  |Yêu thích | Tỷ lệ AC (Acceptance) |
|:--------:|:------- | :--------: | :----------: | :----: | :-----: | :-----: |:-----: |
|0003|Chuỗi con dài nhất không lặp ký tự (Longest Substring Without Repeating Characters)|[Go]({{< relref "/ChapterFour/0001~0099/0003.Longest-Substring-Without-Repeating-Characters.md" >}})|Medium| O(n)| O(1)|❤️|33.8%|
|0030|Chuỗi con là phép nối tất cả các từ (Substring with Concatenation of All Words)|[Go]({{< relref "/ChapterFour/0001~0099/0030.Substring-with-Concatenation-of-All-Words.md" >}})|Hard||||31.2%|
|0076|Chuỗi con cửa sổ nhỏ nhất (Minimum Window Substring)|[Go]({{< relref "/ChapterFour/0001~0099/0076.Minimum-Window-Substring.md" >}})|Hard| O(n)| O(n)|❤️|40.9%|
|0187|Các chuỗi DNA lặp lại (Repeated DNA Sequences)|[Go]({{< relref "/ChapterFour/0100~0199/0187.Repeated-DNA-Sequences.md" >}})|Medium||||47.0%|
|0209|Tổng mảng con tối thiểu đạt ngưỡng (Minimum Size Subarray Sum)|[Go]({{< relref "/ChapterFour/0200~0299/0209.Minimum-Size-Subarray-Sum.md" >}})|Medium||||45.0%|
|0219|Có phần tử trùng II (Contains Duplicate II)|[Go]({{< relref "/ChapterFour/0200~0299/0219.Contains-Duplicate-II.md" >}})|Easy||||42.6%|
|0220|Có phần tử trùng III (Contains Duplicate III)|[Go]({{< relref "/ChapterFour/0200~0299/0220.Contains-Duplicate-III.md" >}})|Hard||||22.1%|
|0239|Giá trị lớn nhất của cửa sổ trượt (Sliding Window Maximum)|[Go]({{< relref "/ChapterFour/0200~0299/0239.Sliding-Window-Maximum.md" >}})|Hard| O(n * k)| O(n)|❤️|46.3%|
|0395|Chuỗi con dài nhất có ít nhất K ký tự lặp lại (Longest Substring with At Least K Repeating Characters)|[Go]({{< relref "/ChapterFour/0300~0399/0395.Longest-Substring-with-At-Least-K-Repeating-Characters.md" >}})|Medium||||44.8%|
|0424|Thay thế để có chuỗi lặp lại dài nhất (Longest Repeating Character Replacement)|[Go]({{< relref "/ChapterFour/0400~0499/0424.Longest-Repeating-Character-Replacement.md" >}})|Medium| O(n)| O(1) ||52.0%|
|0438|Tìm tất cả anagram trong chuỗi (Find All Anagrams in a String)|[Go]({{< relref "/ChapterFour/0400~0499/0438.Find-All-Anagrams-in-a-String.md" >}})|Medium||||50.2%|
|0480|Trung vị cửa sổ trượt (Sliding Window Median)|[Go]({{< relref "/ChapterFour/0400~0499/0480.Sliding-Window-Median.md" >}})|Hard| O(n * log k)| O(k)|❤️|41.1%|
|0567|Hoán vị trong chuỗi (Permutation in String)|[Go]({{< relref "/ChapterFour/0500~0599/0567.Permutation-in-String.md" >}})|Medium| O(n)| O(1)|❤️|44.3%|
|0632|Khoảng nhỏ nhất bao phủ phần tử từ K danh sách (Smallest Range Covering Elements from K Lists)|[Go]({{< relref "/ChapterFour/0600~0699/0632.Smallest-Range-Covering-Elements-from-K-Lists.md" >}})|Hard||||61.0%|
|0643|Trung bình lớn nhất của mảng con I (Maximum Average Subarray I)|[Go]({{< relref "/ChapterFour/0600~0699/0643.Maximum-Average-Subarray-I.md" >}})|Easy||||43.7%|
|0658|Tìm K phần tử gần nhất (Find K Closest Elements)|[Go]({{< relref "/ChapterFour/0600~0699/0658.Find-K-Closest-Elements.md" >}})|Medium||||46.8%|
|0713|Tích mảng con nhỏ hơn K (Subarray Product Less Than K)|[Go]({{< relref "/ChapterFour/0700~0799/0713.Subarray-Product-Less-Than-K.md" >}})|Medium||||45.8%|
|0718|Độ dài tối đa của mảng con lặp lại (Maximum Length of Repeated Subarray)|[Go]({{< relref "/ChapterFour/0700~0799/0718.Maximum-Length-of-Repeated-Subarray.md" >}})|Medium||||51.3%|
|0862|Mảng con ngắn nhất có tổng ít nhất K (Shortest Subarray with Sum at Least K)|[Go]({{< relref "/ChapterFour/0800~0899/0862.Shortest-Subarray-with-Sum-at-Least-K.md" >}})|Hard||||26.0%|
|0904|Trái cây vào giỏ (Fruit Into Baskets)|[Go]({{< relref "/ChapterFour/0900~0999/0904.Fruit-Into-Baskets.md" >}})|Medium||||43.7%|
|0930|Mảng con nhị phân có tổng (Binary Subarrays With Sum)|[Go]({{< relref "/ChapterFour/0900~0999/0930.Binary-Subarrays-With-Sum.md" >}})|Medium||||52.2%|
|0978|Mảng con biến động dài nhất (Longest Turbulent Subarray)|[Go]({{< relref "/ChapterFour/0900~0999/0978.Longest-Turbulent-Subarray.md" >}})|Medium| O(n)| O(1)|❤️|47.2%|
|0992|Mảng con có K số nguyên khác nhau (Subarrays with K Different Integers)|[Go]({{< relref "/ChapterFour/0900~0999/0992.Subarrays-with-K-Different-Integers.md" >}})|Hard| O(n)| O(n)|❤️|54.6%|
|0995|Số lần lật bit liên tiếp K tối thiểu (Minimum Number of K Consecutive Bit Flips)|[Go]({{< relref "/ChapterFour/0900~0999/0995.Minimum-Number-of-K-Consecutive-Bit-Flips.md" >}})|Hard| O(n)| O(1)|❤️|51.2%|
|1004|Số 1 liên tiếp tối đa III (Max Consecutive Ones III)|[Go]({{< relref "/ChapterFour/1000~1099/1004.Max-Consecutive-Ones-III.md" >}})|Medium| O(n)| O(1) ||63.2%|
|1052|Chủ tiệm sách khó chịu (Grumpy Bookstore Owner)|[Go]({{< relref "/ChapterFour/1000~1099/1052.Grumpy-Bookstore-Owner.md" >}})|Medium| O(n log n)| O(1) ||57.1%|
|1208|Lấy các chuỗi con bằng nhau trong ngân sách (Get Equal Substrings Within Budget)|[Go]({{< relref "/ChapterFour/1200~1299/1208.Get-Equal-Substrings-Within-Budget.md" >}})|Medium||||48.6%|
|1234|Thay chuỗi con để chuỗi cân bằng (Replace the Substring for Balanced String)|[Go]({{< relref "/ChapterFour/1200~1299/1234.Replace-the-Substring-for-Balanced-String.md" >}})|Medium||||37.2%|
|1423|Điểm tối đa có thể lấy từ các lá bài (Maximum Points You Can Obtain from Cards)|[Go]({{< relref "/ChapterFour/1400~1499/1423.Maximum-Points-You-Can-Obtain-from-Cards.md" >}})|Medium||||52.2%|
|1438|Mảng con liên tục dài nhất có chênh lệch tuyệt đối không vượt quá giới hạn (Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit)|[Go]({{< relref "/ChapterFour/1400~1499/1438.Longest-Continuous-Subarray-With-Absolute-Diff-Less-Than-or-Equal-to-Limit.md" >}})|Medium||||48.3%|
|1658|Số thao tác tối thiểu để giảm X về 0 (Minimum Operations to Reduce X to Zero)|[Go]({{< relref "/ChapterFour/1600~1699/1658.Minimum-Operations-to-Reduce-X-to-Zero.md" >}})|Medium||||37.6%|
|1695|Giá trị xóa tối đa (Maximum Erasure Value)|[Go]({{< relref "/ChapterFour/1600~1699/1695.Maximum-Erasure-Value.md" >}})|Medium||||57.6%|
|1696|Trò chơi nhảy VI (Jump Game VI)|[Go]({{< relref "/ChapterFour/1600~1699/1696.Jump-Game-VI.md" >}})|Medium||||46.1%|
|1763|Chuỗi con "nice" dài nhất (Longest Nice Substring)|[Go]({{< relref "/ChapterFour/1700~1799/1763.Longest-Nice-Substring.md" >}})|Easy||||61.5%|
|1984|Chênh lệch nhỏ nhất giữa điểm cao nhất và thấp nhất của K điểm (Minimum Difference Between Highest and Lowest of K Scores)|[Go]({{< relref "/ChapterFour/1900~1999/1984.Minimum-Difference-Between-Highest-and-Lowest-of-K-Scores.md" >}})|Easy||||54.5%|
|------------|-------------------------------------------------------|-------| ----------------| ---------------|-------------|-------------|-------------|


----------------------------------------------
<div style="display: flex;justify-content: space-between;align-items: center;">
<p><a href="https://books.halfrost.com/leetcode/ChapterTwo/Union_Find/">⬅️上一页</a></p>
<p><a href="https://books.halfrost.com/leetcode/ChapterTwo/Segment_Tree/">下一页➡️</a></p>
</div>
