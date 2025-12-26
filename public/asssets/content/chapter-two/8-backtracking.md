---
title: 2.08 ✅ Quay lui (Backtracking)
type: docs
weight: 8
---

# Quay lui (Backtracking)

![](/images/chuong-2/2.08.png)

Các dạng bài toán:
- Hoán vị (Permutations): Bài 46, 47, 60, 526, 996
- Tổ hợp (Combination): Bài 39, 40, 77, 216
- Bài toán lai giữa hoán vị và tổ hợp: Bài 1079
- N-Queens – lời giải tối ưu (dùng bit): Bài 51, 52
- Sudoku: Bài 37
- Tìm kiếm 4 hướng: Bài 79, 212, 980
- Tập con (Subsets): Bài 78, 90
- Trie: Bài 208, 211
- Tối ưu BFS: Bài 126, 127
- Mẫu DFS: (chỉ là ví dụ, không gắn với bài cụ thể nào)

```go
func combinationSum2(candidates []int, target int) [][]int {
	if len(candidates) == 0 {
		return [][]int{}
	}
	c, res := []int{}, [][]int{}
	sort.Ints(candidates)
	findcombinationSum2(candidates, target, 0, c, &res)
	return res
}

func findcombinationSum2(nums []int, target, index int, c []int, res *[][]int) {
	if target == 0 {
		b := make([]int, len(c))
		copy(b, c)
		*res = append(*res, b)
		return
	}
	for i := index; i < len(nums); i++ {
		if i > index && nums[i] == nums[i-1] {  // Đây là logic then chốt để loại bỏ trùng lặp
			continue
		}
		if target >= nums[i] {
			c = append(c, nums[i])
			findcombinationSum2(nums, target-nums[i], i+1, c, res)
			c = c[:len(c)-1]
		}
	}
}
```
- Mẫu BFS: (chỉ là ví dụ minh họa, không tương ứng với bài cụ thể nào)

```go
func updateMatrix_BFS(matrix [][]int) [][]int {
	res := make([][]int, len(matrix))
	if len(matrix) == 0 || len(matrix[0]) == 0 {
		return res
	}
	queue := make([][]int, 0)
	for i, _ := range matrix {
		res[i] = make([]int, len(matrix[0]))
		for j, _ := range res[i] {
			if matrix[i][j] == 0 {
				res[i][j] = -1
				queue = append(queue, []int{i, j})
			}
		}
	}
	level := 1
	for len(queue) > 0 {
		size := len(queue)
		for size > 0 {
			size -= 1
			node := queue[0]
			queue = queue[1:]
			i, j := node[0], node[1]
			for _, direction := range [][]int{{-1, 0}, {1, 0}, {0, 1}, {0, -1}} {
				x := i + direction[0]
				y := j + direction[1]
				if x < 0 || x >= len(matrix) || y < 0 || y >= len(matrix[0]) || res[x][y] < 0 || res[x][y] > 0 {
					continue
				}
				res[x][y] = level
				queue = append(queue, []int{x, y})
			}
		}
		level++
	}
	for i, row := range res {
		for j, cell := range row {
			if cell == -1 {
				res[i][j] = 0
			}
		}
	}
	return res
}
```

| STT      | Tiêu đề | Lời giải  | Độ khó  | Độ phức tạp thời gian | Độ phức tạp bộ nhớ  |Yêu thích | Tỷ lệ AC (Acceptance) |
|:--------:|:------- | :--------: | :----------: | :----: | :-----: | :-----: |:-----: |
|0017|Tổ hợp chữ cái của số điện thoại (Letter Combinations of a Phone Number)|[Go]({{< relref "/ChapterFour/0001~0099/0017.Letter-Combinations-of-a-Phone-Number.md" >}})|Medium| O(log n)| O(1)||56.6%|
|0022|Sinh dấu ngoặc (Generate Parentheses)|[Go]({{< relref "/ChapterFour/0001~0099/0022.Generate-Parentheses.md" >}})|Medium| O(log n)| O(1)||72.5%|
|0037|Giải Sudoku (Sudoku Solver)|[Go]({{< relref "/ChapterFour/0001~0099/0037.Sudoku-Solver.md" >}})|Hard| O(n^2)| O(n^2)|❤️|57.7%|
|0039|Tổng tổ hợp (Combination Sum)|[Go]({{< relref "/ChapterFour/0001~0099/0039.Combination-Sum.md" >}})|Medium| O(n log n)| O(n)||68.6%|
|0040|Tổng tổ hợp II (Combination Sum II)|[Go]({{< relref "/ChapterFour/0001~0099/0040.Combination-Sum-II.md" >}})|Medium| O(n log n)| O(n)||53.4%|
|0046|Hoán vị (Permutations)|[Go]({{< relref "/ChapterFour/0001~0099/0046.Permutations.md" >}})|Medium| O(n)| O(n)|❤️|75.7%|
|0047|Hoán vị II (Permutations II)|[Go]({{< relref "/ChapterFour/0001~0099/0047.Permutations-II.md" >}})|Medium| O(n^2)| O(n)|❤️|57.4%|
|0051|Bài toán N quân hậu (N-Queens)|[Go]({{< relref "/ChapterFour/0001~0099/0051.N-Queens.md" >}})|Hard| O(n!)| O(n)|❤️|64.2%|
|0052|Bài toán N quân hậu II (N-Queens II)|[Go]({{< relref "/ChapterFour/0001~0099/0052.N-Queens-II.md" >}})|Hard| O(n!)| O(n)|❤️|71.6%|
|0077|Tổ hợp (Combinations)|[Go]({{< relref "/ChapterFour/0001~0099/0077.Combinations.md" >}})|Medium| O(n)| O(n)|❤️|67.0%|
|0078|Các tập con (Subsets)|[Go]({{< relref "/ChapterFour/0001~0099/0078.Subsets.md" >}})|Medium| O(n^2)| O(n)|❤️|74.9%|
|0079|Tìm từ (Word Search)|[Go]({{< relref "/ChapterFour/0001~0099/0079.Word-Search.md" >}})|Medium| O(n^2)| O(n^2)|❤️|40.2%|
|0089|Mã Gray (Gray Code)|[Go]({{< relref "/ChapterFour/0001~0099/0089.Gray-Code.md" >}})|Medium| O(n)| O(1)||57.2%|
|0090|Các tập con II (Subsets II)|[Go]({{< relref "/ChapterFour/0001~0099/0090.Subsets-II.md" >}})|Medium| O(n^2)| O(n)|❤️|55.9%|
|0093|Khôi phục địa chỉ IP (Restore IP Addresses)|[Go]({{< relref "/ChapterFour/0001~0099/0093.Restore-IP-Addresses.md" >}})|Medium| O(n)| O(n)|❤️|47.4%|
|0095|Cây nhị phân tìm kiếm duy nhất II (Unique Binary Search Trees II)|[Go]({{< relref "/ChapterFour/0001~0099/0095.Unique-Binary-Search-Trees-II.md" >}})|Medium||||52.4%|
|0113|Tổng đường đi II (Path Sum II)|[Go]({{< relref "/ChapterFour/0100~0199/0113.Path-Sum-II.md" >}})|Medium||||57.1%|
|0126|Thang từ II (Word Ladder II)|[Go]({{< relref "/ChapterFour/0100~0199/0126.Word-Ladder-II.md" >}})|Hard| O(n)| O(n^2)|❤️|27.5%|
|0131|Phân hoạch chuỗi đối xứng (Palindrome Partitioning)|[Go]({{< relref "/ChapterFour/0100~0199/0131.Palindrome-Partitioning.md" >}})|Medium| O(n)| O(n^2)|❤️|64.9%|
|0212|Tìm từ II (Word Search II)|[Go]({{< relref "/ChapterFour/0200~0299/0212.Word-Search-II.md" >}})|Hard| O(n^2)| O(n^2)|❤️|36.4%|
|0216|Tổng tổ hợp III (Combination Sum III)|[Go]({{< relref "/ChapterFour/0200~0299/0216.Combination-Sum-III.md" >}})|Medium| O(n)| O(1)|❤️|67.6%|
|0257|Các đường đi của cây nhị phân (Binary Tree Paths)|[Go]({{< relref "/ChapterFour/0200~0299/0257.Binary-Tree-Paths.md" >}})|Easy||||61.4%|
|0301|Loại bỏ dấu ngoặc không hợp lệ (Remove Invalid Parentheses)|[Go]({{< relref "/ChapterFour/0300~0399/0301.Remove-Invalid-Parentheses.md" >}})|Hard||||47.2%|
|0306|Số cộng dồn (Additive Number)|[Go]({{< relref "/ChapterFour/0300~0399/0306.Additive-Number.md" >}})|Medium| O(n^2)| O(1)|❤️|31.1%|
|0357|Đếm số có chữ số duy nhất (Count Numbers with Unique Digits)|[Go]({{< relref "/ChapterFour/0300~0399/0357.Count-Numbers-with-Unique-Digits.md" >}})|Medium| O(1)| O(1)||51.9%|
|0401|Đồng hồ nhị phân (Binary Watch)|[Go]({{< relref "/ChapterFour/0400~0499/0401.Binary-Watch.md" >}})|Easy| O(1)| O(1)||52.3%|
|0473|Diêm que tạo hình vuông (Matchsticks to Square)|[Go]({{< relref "/ChapterFour/0400~0499/0473.Matchsticks-to-Square.md" >}})|Medium||||40.2%|
|0491|Các dãy con không giảm (Non-decreasing Subsequences)|[Go]({{< relref "/ChapterFour/0400~0499/0491.Non-decreasing-Subsequences.md" >}})|Medium||||60.2%|
|0494|Tổng mục tiêu (Target Sum)|[Go]({{< relref "/ChapterFour/0400~0499/0494.Target-Sum.md" >}})|Medium||||45.7%|
|0526|Sắp xếp đẹp (Beautiful Arrangement)|[Go]({{< relref "/ChapterFour/0500~0599/0526.Beautiful-Arrangement.md" >}})|Medium| O(n^2)| O(1)|❤️|64.4%|
|0638|Ưu đãi mua sắm (Shopping Offers)|[Go]({{< relref "/ChapterFour/0600~0699/0638.Shopping-Offers.md" >}})|Medium||||53.3%|
|0784|Hoán vị chữ hoa/thường (Letter Case Permutation)|[Go]({{< relref "/ChapterFour/0700~0799/0784.Letter-Case-Permutation.md" >}})|Medium| O(n)| O(n)||73.8%|
|0816|Tọa độ mơ hồ (Ambiguous Coordinates)|[Go]({{< relref "/ChapterFour/0800~0899/0816.Ambiguous-Coordinates.md" >}})|Medium||||56.4%|
|0842|Chia mảng thành dãy Fibonacci (Split Array into Fibonacci Sequence)|[Go]({{< relref "/ChapterFour/0800~0899/0842.Split-Array-into-Fibonacci-Sequence.md" >}})|Medium| O(n^2)| O(1)|❤️|38.4%|
|0980|Số đường đi duy nhất III (Unique Paths III)|[Go]({{< relref "/ChapterFour/0900~0999/0980.Unique-Paths-III.md" >}})|Hard| O(n log n)| O(n)||81.7%|
|0996|Số lượng mảng squareful (Number of Squareful Arrays)|[Go]({{< relref "/ChapterFour/0900~0999/0996.Number-of-Squareful-Arrays.md" >}})|Hard| O(n log n)| O(n) ||49.2%|
|1079|Số khả năng sắp xếp gạch chữ (Letter Tile Possibilities)|[Go]({{< relref "/ChapterFour/1000~1099/1079.Letter-Tile-Possibilities.md" >}})|Medium| O(n^2)| O(1)|❤️|76.0%|
|1239|Độ dài tối đa của chuỗi ghép có ký tự duy nhất (Maximum Length of a Concatenated String with Unique Characters)|[Go]({{< relref "/ChapterFour/1200~1299/1239.Maximum-Length-of-a-Concatenated-String-with-Unique-Characters.md" >}})|Medium||||52.2%|
|1655|Phân phối số nguyên lặp lại (Distribute Repeating Integers)|[Go]({{< relref "/ChapterFour/1600~1699/1655.Distribute-Repeating-Integers.md" >}})|Hard||||39.3%|
|------------|-------------------------------------------------------|-------| ----------------| ---------------|-------------|-------------|-------------|


----------------------------------------------
<div style="display: flex;justify-content: space-between;align-items: center;">
<p><a href="https://books.halfrost.com/leetcode/ChapterTwo/Dynamic_Programming/">⬅️上一页</a></p>
<p><a href="https://books.halfrost.com/leetcode/ChapterTwo/Depth_First_Search/">下一页➡️</a></p>
</div>
