---
title: 2.05 ✅ Ngăn xếp (Stack)
type: docs
weight: 5
---

# Ngăn xếp (Stack)

![](/images/chuong-2/2.05.png)

- Bài toán **khớp dấu ngoặc (parentheses matching)** và các bài tương tự. Bài 20, 921, 1021.
- Các thao tác cơ bản của ngăn xếp: **đẩy (push)** và **lấy ra (pop)**. Bài 71, 150, 155, 224, 225, 232, 946, 1047.
- Dùng ngăn xếp để xử lý các bài toán **mã hoá/giải mã (encoding/decoding)**. Bài 394, 682, 856, 880.
- **Ngăn xếp đơn điệu (monotonic stack)**: **dùng stack để duy trì một mảng chỉ số (index array) đơn điệu tăng hoặc giảm**. Bài 84, 456, 496, 503, 739, 901, 907, 1019.



| STT      | Tiêu đề | Lời giải  | Độ khó  | Độ phức tạp thời gian | Độ phức tạp bộ nhớ  |Yêu thích | Tỷ lệ AC (Acceptance) |
|:--------:|:------- | :--------: | :----------: | :----: | :-----: | :-----: |:-----: |
|0020|Dấu ngoặc hợp lệ (Valid Parentheses)|[Go]({{< relref "/ChapterFour/0001~0099/0020.Valid-Parentheses.md" >}})|Easy| O(log n)| O(1)||40.2%|
|0032|Chuỗi dấu ngoặc hợp lệ dài nhất (Longest Valid Parentheses)|[Go]({{< relref "/ChapterFour/0001~0099/0032.Longest-Valid-Parentheses.md" >}})|Hard||||32.8%|
|0042|Hứng nước mưa (Trapping Rain Water)|[Go]({{< relref "/ChapterFour/0001~0099/0042.Trapping-Rain-Water.md" >}})|Hard| O(n)| O(1)|❤️|59.2%|
|0071|Rút gọn đường dẫn (Simplify Path)|[Go]({{< relref "/ChapterFour/0001~0099/0071.Simplify-Path.md" >}})|Medium| O(n)| O(n)|❤️|39.3%|
|0084|Hình chữ nhật lớn nhất trong histogram (Largest Rectangle in Histogram)|[Go]({{< relref "/ChapterFour/0001~0099/0084.Largest-Rectangle-in-Histogram.md" >}})|Hard| O(n)| O(n)|❤️|42.6%|
|0094|Duyệt trung thứ tự cây nhị phân (Binary Tree Inorder Traversal)|[Go]({{< relref "/ChapterFour/0001~0099/0094.Binary-Tree-Inorder-Traversal.md" >}})|Easy| O(n)| O(1)||73.8%|
|0114|Làm phẳng cây nhị phân thành danh sách liên kết (Flatten Binary Tree to Linked List)|[Go]({{< relref "/ChapterFour/0100~0199/0114.Flatten-Binary-Tree-to-Linked-List.md" >}})|Medium||||61.8%|
|0143|Sắp xếp lại danh sách (Reorder List)|[Go]({{< relref "/ChapterFour/0100~0199/0143.Reorder-List.md" >}})|Medium||||52.5%|
|0144|Duyệt tiền thứ tự cây nhị phân (Binary Tree Preorder Traversal)|[Go]({{< relref "/ChapterFour/0100~0199/0144.Binary-Tree-Preorder-Traversal.md" >}})|Easy| O(n)| O(1)||66.8%|
|0145|Duyệt hậu thứ tự cây nhị phân (Binary Tree Postorder Traversal)|[Go]({{< relref "/ChapterFour/0100~0199/0145.Binary-Tree-Postorder-Traversal.md" >}})|Easy| O(n)| O(1)||67.9%|
|0150|Tính biểu thức ký pháp Ba Lan ngược (Evaluate Reverse Polish Notation)|[Go]({{< relref "/ChapterFour/0100~0199/0150.Evaluate-Reverse-Polish-Notation.md" >}})|Medium| O(n)| O(1)||45.7%|
|0155|Ngăn xếp min (Min Stack)|[Go]({{< relref "/ChapterFour/0100~0199/0155.Min-Stack.md" >}})|Medium| O(n)| O(n)||52.3%|
|0173|Bộ lặp cây nhị phân tìm kiếm (Binary Search Tree Iterator)|[Go]({{< relref "/ChapterFour/0100~0199/0173.Binary-Search-Tree-Iterator.md" >}})|Medium| O(n)| O(1)||69.7%|
|0224|Máy tính cơ bản (Basic Calculator)|[Go]({{< relref "/ChapterFour/0200~0299/0224.Basic-Calculator.md" >}})|Hard| O(n)| O(n)||42.4%|
|0225|Cài đặt ngăn xếp bằng hàng đợi (Implement Stack using Queues)|[Go]({{< relref "/ChapterFour/0200~0299/0225.Implement-Stack-using-Queues.md" >}})|Easy| O(n)| O(n)||58.6%|
|0227|Máy tính cơ bản II (Basic Calculator II)|[Go]({{< relref "/ChapterFour/0200~0299/0227.Basic-Calculator-II.md" >}})|Medium||||42.4%|
|0232|Cài đặt hàng đợi bằng ngăn xếp (Implement Queue using Stacks)|[Go]({{< relref "/ChapterFour/0200~0299/0232.Implement-Queue-using-Stacks.md" >}})|Easy| O(n)| O(n)||63.2%|
|0234|Danh sách liên kết đối xứng (Palindrome Linked List)|[Go]({{< relref "/ChapterFour/0200~0299/0234.Palindrome-Linked-List.md" >}})|Easy||||50.2%|
|0331|Xác minh tuần tự hóa tiền thứ tự của cây nhị phân (Verify Preorder Serialization of a Binary Tree)|[Go]({{< relref "/ChapterFour/0300~0399/0331.Verify-Preorder-Serialization-of-a-Binary-Tree.md" >}})|Medium| O(n)| O(1)||44.6%|
|0341|Trình lặp danh sách lồng nhau (Flatten Nested List Iterator)|[Go]({{< relref "/ChapterFour/0300~0399/0341.Flatten-Nested-List-Iterator.md" >}})|Medium||||61.8%|
|0385|Trình phân tích cú pháp mini (Mini Parser)|[Go]({{< relref "/ChapterFour/0300~0399/0385.Mini-Parser.md" >}})|Medium||||36.9%|
|0394|Giải mã chuỗi (Decode String)|[Go]({{< relref "/ChapterFour/0300~0399/0394.Decode-String.md" >}})|Medium| O(n)| O(n)||57.9%|
|0402|Xóa K chữ số (Remove K Digits)|[Go]({{< relref "/ChapterFour/0400~0499/0402.Remove-K-Digits.md" >}})|Medium| O(n)| O(1)||30.6%|
|0445|Cộng hai số II (Add Two Numbers II)|[Go]({{< relref "/ChapterFour/0400~0499/0445.Add-Two-Numbers-II.md" >}})|Medium||||59.6%|
|0456|Mẫu 132 (132 Pattern)|[Go]({{< relref "/ChapterFour/0400~0499/0456.132-Pattern.md" >}})|Medium| O(n)| O(n)||32.4%|
|0496|Phần tử lớn hơn tiếp theo I (Next Greater Element I)|[Go]({{< relref "/ChapterFour/0400~0499/0496.Next-Greater-Element-I.md" >}})|Easy| O(n)| O(n)||71.4%|
|0503|Phần tử lớn hơn tiếp theo II (Next Greater Element II)|[Go]({{< relref "/ChapterFour/0500~0599/0503.Next-Greater-Element-II.md" >}})|Medium| O(n)| O(n)||63.2%|
|0581|Mảng con liên tục chưa sắp xếp ngắn nhất (Shortest Unsorted Continuous Subarray)|[Go]({{< relref "/ChapterFour/0500~0599/0581.Shortest-Unsorted-Continuous-Subarray.md" >}})|Medium||||36.4%|
|0589|Duyệt tiền thứ tự cây N nhánh (N-ary Tree Preorder Traversal)|[Go]({{< relref "/ChapterFour/0500~0599/0589.N-ary-Tree-Preorder-Traversal.md" >}})|Easy||||75.9%|
|0636|Thời gian độc quyền của các hàm (Exclusive Time of Functions)|[Go]({{< relref "/ChapterFour/0600~0699/0636.Exclusive-Time-of-Functions.md" >}})|Medium| O(n)| O(n)||61.2%|
|0682|Trò chơi bóng chày (Baseball Game)|[Go]({{< relref "/ChapterFour/0600~0699/0682.Baseball-Game.md" >}})|Easy| O(n)| O(n)||74.3%|
|0726|Số lượng nguyên tử (Number of Atoms)|[Go]({{< relref "/ChapterFour/0700~0799/0726.Number-of-Atoms.md" >}})|Hard| O(n)| O(n) |❤️|52.1%|
|0735|Va chạm tiểu hành tinh (Asteroid Collision)|[Go]({{< relref "/ChapterFour/0700~0799/0735.Asteroid-Collision.md" >}})|Medium| O(n)| O(n) ||44.4%|
|0739|Nhiệt độ hằng ngày (Daily Temperatures)|[Go]({{< relref "/ChapterFour/0700~0799/0739.Daily-Temperatures.md" >}})|Medium| O(n)| O(n) ||66.3%|
|0844|So sánh chuỗi với phím backspace (Backspace String Compare)|[Go]({{< relref "/ChapterFour/0800~0899/0844.Backspace-String-Compare.md" >}})|Easy| O(n)| O(n) ||48.1%|
|0853|Đoàn xe (Car Fleet)|[Go]({{< relref "/ChapterFour/0800~0899/0853.Car-Fleet.md" >}})|Medium||||50.3%|
|0856|Điểm số của dấu ngoặc (Score of Parentheses)|[Go]({{< relref "/ChapterFour/0800~0899/0856.Score-of-Parentheses.md" >}})|Medium| O(n)| O(n)||64.8%|
|0880|Ký tự tại chỉ số trong chuỗi đã giải mã (Decoded String at Index)|[Go]({{< relref "/ChapterFour/0800~0899/0880.Decoded-String-at-Index.md" >}})|Medium| O(n)| O(n)||28.3%|
|0895|Ngăn xếp tần suất lớn nhất (Maximum Frequency Stack)|[Go]({{< relref "/ChapterFour/0800~0899/0895.Maximum-Frequency-Stack.md" >}})|Hard| O(n)| O(n)  ||66.6%|
|0897|Cây tìm kiếm theo thứ tự tăng dần (Increasing Order Search Tree)|[Go]({{< relref "/ChapterFour/0800~0899/0897.Increasing-Order-Search-Tree.md" >}})|Easy||||78.4%|
|0901|Biên độ cổ phiếu trực tuyến (Online Stock Span)|[Go]({{< relref "/ChapterFour/0900~0999/0901.Online-Stock-Span.md" >}})|Medium| O(n)| O(n)  ||65.2%|
|0907|Tổng giá trị nhỏ nhất của mảng con (Sum of Subarray Minimums)|[Go]({{< relref "/ChapterFour/0900~0999/0907.Sum-of-Subarray-Minimums.md" >}})|Medium| O(n)| O(n)|❤️|35.8%|
|0921|Số lần thêm tối thiểu để dấu ngoặc hợp lệ (Minimum Add to Make Parentheses Valid)|[Go]({{< relref "/ChapterFour/0900~0999/0921.Minimum-Add-to-Make-Parentheses-Valid.md" >}})|Medium| O(n)| O(n)||75.8%|
|0946|Xác thực chuỗi ngăn xếp (Validate Stack Sequences)|[Go]({{< relref "/ChapterFour/0900~0999/0946.Validate-Stack-Sequences.md" >}})|Medium| O(n)| O(n)||67.7%|
|1003|Kiểm tra từ hợp lệ sau khi thay thế (Check If Word Is Valid After Substitutions)|[Go]({{< relref "/ChapterFour/1000~1099/1003.Check-If-Word-Is-Valid-After-Substitutions.md" >}})|Medium| O(n)| O(1)||58.2%|
|1006|Giai thừa vụng về (Clumsy Factorial)|[Go]({{< relref "/ChapterFour/1000~1099/1006.Clumsy-Factorial.md" >}})|Medium||||55.4%|
|1019|Nút lớn hơn kế tiếp trong danh sách liên kết (Next Greater Node In Linked List)|[Go]({{< relref "/ChapterFour/1000~1099/1019.Next-Greater-Node-In-Linked-List.md" >}})|Medium| O(n)| O(1)||59.9%|
|1021|Xóa dấu ngoặc ngoài cùng (Remove Outermost Parentheses)|[Go]({{< relref "/ChapterFour/1000~1099/1021.Remove-Outermost-Parentheses.md" >}})|Easy| O(n)| O(1)||80.6%|
|1047|Xóa các ký tự trùng kề nhau trong chuỗi (Remove All Adjacent Duplicates In String)|[Go]({{< relref "/ChapterFour/1000~1099/1047.Remove-All-Adjacent-Duplicates-In-String.md" >}})|Easy| O(n)| O(1)||69.7%|
|1111|Độ sâu lồng tối đa của hai chuỗi ngoặc hợp lệ (Maximum Nesting Depth of Two Valid Parentheses Strings)|[Go]({{< relref "/ChapterFour/1100~1199/1111.Maximum-Nesting-Depth-of-Two-Valid-Parentheses-Strings.md" >}})|Medium||||73.0%|
|1190|Đảo chuỗi con giữa mỗi cặp dấu ngoặc (Reverse Substrings Between Each Pair of Parentheses)|[Go]({{< relref "/ChapterFour/1100~1199/1190.Reverse-Substrings-Between-Each-Pair-of-Parentheses.md" >}})|Medium||||65.9%|
|1209|Xóa các ký tự trùng kề nhau trong chuỗi II (Remove All Adjacent Duplicates in String II)|[Go]({{< relref "/ChapterFour/1200~1299/1209.Remove-All-Adjacent-Duplicates-in-String-II.md" >}})|Medium||||56.2%|
|1249|Xóa tối thiểu để dấu ngoặc hợp lệ (Minimum Remove to Make Valid Parentheses)|[Go]({{< relref "/ChapterFour/1200~1299/1249.Minimum-Remove-to-Make-Valid-Parentheses.md" >}})|Medium||||65.8%|
|1614|Độ sâu lồng tối đa của dấu ngoặc (Maximum Nesting Depth of the Parentheses)|[Go]({{< relref "/ChapterFour/1600~1699/1614.Maximum-Nesting-Depth-of-the-Parentheses.md" >}})|Easy||||82.3%|
|1653|Số lần xóa tối thiểu để chuỗi cân bằng (Minimum Deletions to Make String Balanced)|[Go]({{< relref "/ChapterFour/1600~1699/1653.Minimum-Deletions-to-Make-String-Balanced.md" >}})|Medium||||58.9%|
|1673|Tìm dãy con cạnh tranh nhất (Find the Most Competitive Subsequence)|[Go]({{< relref "/ChapterFour/1600~1699/1673.Find-the-Most-Competitive-Subsequence.md" >}})|Medium||||49.3%|
|1700|Số học sinh không ăn được bữa trưa (Number of Students Unable to Eat Lunch)|[Go]({{< relref "/ChapterFour/1700~1799/1700.Number-of-Students-Unable-to-Eat-Lunch.md" >}})|Easy||||68.7%|
|------------|-------------------------------------------------------|-------| ----------------| ---------------|-------------|-------------|-------------|
