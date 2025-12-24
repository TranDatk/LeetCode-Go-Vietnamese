---
title: 2.10 Tìm kiếm theo chiều rộng (Breadth First Search)
type: docs
weight: 10
---

# Tìm kiếm theo chiều rộng (Breadth First Search)


| STT      | Tiêu đề | Lời giải  | Độ khó  | Độ phức tạp thời gian | Độ phức tạp bộ nhớ  |Yêu thích | Tỷ lệ AC (Acceptance) |
|:--------:|:------- | :--------: | :----------: | :----: | :-----: | :-----: |:-----: |
|0100|Cùng cây (Same Tree)|[Go]({{< relref "/ChapterFour/0100~0199/0100.Same-Tree.md" >}})|Easy||||58.2%|
|0101|Cây đối xứng (Symmetric Tree)|[Go]({{< relref "/ChapterFour/0100~0199/0101.Symmetric-Tree.md" >}})|Easy| O(n)| O(1)||54.3%|
|0102|Duyệt theo tầng cây nhị phân (Binary Tree Level Order Traversal)|[Go]({{< relref "/ChapterFour/0100~0199/0102.Binary-Tree-Level-Order-Traversal.md" >}})|Medium| O(n)| O(1)||64.4%|
|0103|Duyệt theo tầng zigzag cây nhị phân (Binary Tree Zigzag Level Order Traversal)|[Go]({{< relref "/ChapterFour/0100~0199/0103.Binary-Tree-Zigzag-Level-Order-Traversal.md" >}})|Medium| O(n)| O(n)||56.9%|
|0104|Độ sâu tối đa của cây nhị phân (Maximum Depth of Binary Tree)|[Go]({{< relref "/ChapterFour/0100~0199/0104.Maximum-Depth-of-Binary-Tree.md" >}})|Easy||||73.9%|
|0107|Duyệt theo tầng cây nhị phân II (Binary Tree Level Order Traversal II)|[Go]({{< relref "/ChapterFour/0100~0199/0107.Binary-Tree-Level-Order-Traversal-II.md" >}})|Medium| O(n)| O(1)||61.2%|
|0111|Độ sâu tối thiểu của cây nhị phân (Minimum Depth of Binary Tree)|[Go]({{< relref "/ChapterFour/0100~0199/0111.Minimum-Depth-of-Binary-Tree.md" >}})|Easy| O(n)| O(1)||44.5%|
|0112|Tổng đường đi (Path Sum)|[Go]({{< relref "/ChapterFour/0100~0199/0112.Path-Sum.md" >}})|Easy||||48.3%|
|0116|Gán con trỏ next sang phải cho mỗi nút (Populating Next Right Pointers in Each Node)|[Go]({{< relref "/ChapterFour/0100~0199/0116.Populating-Next-Right-Pointers-in-Each-Node.md" >}})|Medium||||60.4%|
|0126|Thang từ II (Word Ladder II)|[Go]({{< relref "/ChapterFour/0100~0199/0126.Word-Ladder-II.md" >}})|Hard| O(n)| O(n^2)|❤️|27.5%|
|0127|Thang từ (Word Ladder)|[Go]({{< relref "/ChapterFour/0100~0199/0127.Word-Ladder.md" >}})|Hard| O(n)| O(n)||37.2%|
|0130|Vùng bị bao quanh (Surrounded Regions)|[Go]({{< relref "/ChapterFour/0100~0199/0130.Surrounded-Regions.md" >}})|Medium||||36.8%|
|0199|Nhìn từ bên phải của cây nhị phân (Binary Tree Right Side View)|[Go]({{< relref "/ChapterFour/0100~0199/0199.Binary-Tree-Right-Side-View.md" >}})|Medium| O(n)| O(1)||61.6%|
|0200|Số lượng hòn đảo (Number of Islands)|[Go]({{< relref "/ChapterFour/0200~0299/0200.Number-of-Islands.md" >}})|Medium| O(n^2)| O(n^2)||57.0%|
|0207|Lịch trình khóa học (Course Schedule)|[Go]({{< relref "/ChapterFour/0200~0299/0207.Course-Schedule.md" >}})|Medium| O(n^2)| O(n^2)||45.4%|
|0210|Lịch trình khóa học II (Course Schedule II)|[Go]({{< relref "/ChapterFour/0200~0299/0210.Course-Schedule-II.md" >}})|Medium| O(n^2)| O(n^2)||48.5%|
|0226|Đảo cây nhị phân (Invert Binary Tree)|[Go]({{< relref "/ChapterFour/0200~0299/0226.Invert-Binary-Tree.md" >}})|Easy||||74.7%|
|0279|Các số chính phương hoàn hảo (Perfect Squares)|[Go]({{< relref "/ChapterFour/0200~0299/0279.Perfect-Squares.md" >}})|Medium||||52.7%|
|0297|Tuần tự hóa và giải tuần tự cây nhị phân (Serialize and Deserialize Binary Tree)|[Go]({{< relref "/ChapterFour/0200~0299/0297.Serialize-and-Deserialize-Binary-Tree.md" >}})|Hard||||55.4%|
|0301|Loại bỏ dấu ngoặc không hợp lệ (Remove Invalid Parentheses)|[Go]({{< relref "/ChapterFour/0300~0399/0301.Remove-Invalid-Parentheses.md" >}})|Hard||||47.2%|
|0322|Đổi tiền (Coin Change)|[Go]({{< relref "/ChapterFour/0300~0399/0322.Coin-Change.md" >}})|Medium||||42.1%|
|0329|Đường đi tăng dần dài nhất trong ma trận (Longest Increasing Path in a Matrix)|[Go]({{< relref "/ChapterFour/0300~0399/0329.Longest-Increasing-Path-in-a-Matrix.md" >}})|Hard||||52.4%|
|0399|Tính giá trị phép chia (Evaluate Division)|[Go]({{< relref "/ChapterFour/0300~0399/0399.Evaluate-Division.md" >}})|Medium||||59.7%|
|0404|Tổng lá trái (Sum of Left Leaves)|[Go]({{< relref "/ChapterFour/0400~0499/0404.Sum-of-Left-Leaves.md" >}})|Easy||||56.7%|
|0417|Dòng chảy Thái Bình Dương - Đại Tây Dương (Pacific Atlantic Water Flow)|[Go]({{< relref "/ChapterFour/0400~0499/0417.Pacific-Atlantic-Water-Flow.md" >}})|Medium||||54.4%|
|0429|Duyệt theo tầng cây N nhánh (N-ary Tree Level Order Traversal)|[Go]({{< relref "/ChapterFour/0400~0499/0429.N-ary-Tree-Level-Order-Traversal.md" >}})|Medium||||70.7%|
|0433|Đột biến gen tối thiểu (Minimum Genetic Mutation)|[Go]({{< relref "/ChapterFour/0400~0499/0433.Minimum-Genetic-Mutation.md" >}})|Medium||||52.4%|
|0463|Chu vi đảo (Island Perimeter)|[Go]({{< relref "/ChapterFour/0400~0499/0463.Island-Perimeter.md" >}})|Easy||||69.7%|
|0488|Trò chơi Zuma (Zuma Game)|[Go]({{< relref "/ChapterFour/0400~0499/0488.Zuma-Game.md" >}})|Hard||||33.9%|
|0513|Tìm giá trị cây dưới cùng bên trái (Find Bottom Left Tree Value)|[Go]({{< relref "/ChapterFour/0500~0599/0513.Find-Bottom-Left-Tree-Value.md" >}})|Medium||||66.9%|
|0515|Tìm giá trị lớn nhất của mỗi hàng (Find Largest Value in Each Tree Row)|[Go]({{< relref "/ChapterFour/0500~0599/0515.Find-Largest-Value-in-Each-Tree-Row.md" >}})|Medium| O(n)| O(n)||64.6%|
|0529|Dò mìn (Minesweeper)|[Go]({{< relref "/ChapterFour/0500~0599/0529.Minesweeper.md" >}})|Medium||||65.7%|
|0530|Hiệu tuyệt đối nhỏ nhất trong BST (Minimum Absolute Difference in BST)|[Go]({{< relref "/ChapterFour/0500~0599/0530.Minimum-Absolute-Difference-in-BST.md" >}})|Easy||||57.3%|
|0542|Ma trận 01 (01 Matrix)|[Go]({{< relref "/ChapterFour/0500~0599/0542.01-Matrix.md" >}})|Medium| O(n)| O(1)||44.8%|
|0547|Số lượng tỉnh thành (Number of Provinces)|[Go]({{< relref "/ChapterFour/0500~0599/0547.Number-of-Provinces.md" >}})|Medium||||63.8%|
|0559|Độ sâu tối đa của cây N nhánh (Maximum Depth of N-ary Tree)|[Go]({{< relref "/ChapterFour/0500~0599/0559.Maximum-Depth-of-N-ary-Tree.md" >}})|Easy||||71.7%|
|0617|Gộp hai cây nhị phân (Merge Two Binary Trees)|[Go]({{< relref "/ChapterFour/0600~0699/0617.Merge-Two-Binary-Trees.md" >}})|Easy||||78.7%|
|0623|Thêm một hàng vào cây (Add One Row to Tree)|[Go]({{< relref "/ChapterFour/0600~0699/0623.Add-One-Row-to-Tree.md" >}})|Medium||||59.5%|
|0637|Trung bình các tầng của cây nhị phân (Average of Levels in Binary Tree)|[Go]({{< relref "/ChapterFour/0600~0699/0637.Average-of-Levels-in-Binary-Tree.md" >}})|Easy||||71.7%|
|0653|Hai tổng IV - Đầu vào là BST (Two Sum IV - Input is a BST)|[Go]({{< relref "/ChapterFour/0600~0699/0653.Two-Sum-IV-Input-is-a-BST.md" >}})|Easy||||61.0%|
|0662|Độ rộng tối đa của cây nhị phân (Maximum Width of Binary Tree)|[Go]({{< relref "/ChapterFour/0600~0699/0662.Maximum-Width-of-Binary-Tree.md" >}})|Medium||||40.7%|
|0684|Kết nối dư thừa (Redundant Connection)|[Go]({{< relref "/ChapterFour/0600~0699/0684.Redundant-Connection.md" >}})|Medium||||62.2%|
|0685|Kết nối dư thừa II (Redundant Connection II)|[Go]({{< relref "/ChapterFour/0600~0699/0685.Redundant-Connection-II.md" >}})|Hard||||34.1%|
|0690|Tầm quan trọng của nhân viên (Employee Importance)|[Go]({{< relref "/ChapterFour/0600~0699/0690.Employee-Importance.md" >}})|Medium||||65.6%|
|0695|Diện tích đảo lớn nhất (Max Area of Island)|[Go]({{< relref "/ChapterFour/0600~0699/0695.Max-Area-of-Island.md" >}})|Medium||||71.8%|
|0721|Gộp tài khoản (Accounts Merge)|[Go]({{< relref "/ChapterFour/0700~0799/0721.Accounts-Merge.md" >}})|Medium||||56.3%|
|0733|Tô màu loang (Flood Fill)|[Go]({{< relref "/ChapterFour/0700~0799/0733.Flood-Fill.md" >}})|Easy||||62.0%|
|0752|Mở khóa (Open the Lock)|[Go]({{< relref "/ChapterFour/0700~0799/0752.Open-the-Lock.md" >}})|Medium||||55.6%|
|0756|Ma trận chuyển tiếp kim tự tháp (Pyramid Transition Matrix)|[Go]({{< relref "/ChapterFour/0700~0799/0756.Pyramid-Transition-Matrix.md" >}})|Medium||||52.7%|
|0765|Các cặp đôi nắm tay (Couples Holding Hands)|[Go]({{< relref "/ChapterFour/0700~0799/0765.Couples-Holding-Hands.md" >}})|Hard||||56.6%|
|0778|Bơi trong nước dâng (Swim in Rising Water)|[Go]({{< relref "/ChapterFour/0700~0799/0778.Swim-in-Rising-Water.md" >}})|Hard||||59.8%|
|0783|Khoảng cách tối thiểu giữa các nút BST (Minimum Distance Between BST Nodes)|[Go]({{< relref "/ChapterFour/0700~0799/0783.Minimum-Distance-Between-BST-Nodes.md" >}})|Easy||||59.3%|
|0785|Đồ thị có phải lưỡng phân không? (Is Graph Bipartite?)|[Go]({{< relref "/ChapterFour/0700~0799/0785.Is-Graph-Bipartite.md" >}})|Medium||||53.1%|
|0802|Tìm các trạng thái an toàn cuối cùng (Find Eventual Safe States)|[Go]({{< relref "/ChapterFour/0800~0899/0802.Find-Eventual-Safe-States.md" >}})|Medium||||56.6%|
|0815|Các tuyến xe buýt (Bus Routes)|[Go]({{< relref "/ChapterFour/0800~0899/0815.Bus-Routes.md" >}})|Hard||||45.6%|
|0839|Nhóm chuỗi tương tự (Similar String Groups)|[Go]({{< relref "/ChapterFour/0800~0899/0839.Similar-String-Groups.md" >}})|Hard||||48.0%|
|0841|Chìa khóa và căn phòng (Keys and Rooms)|[Go]({{< relref "/ChapterFour/0800~0899/0841.Keys-and-Rooms.md" >}})|Medium||||71.5%|
|0863|Tất cả nút cách K trong cây nhị phân (All Nodes Distance K in Binary Tree)|[Go]({{< relref "/ChapterFour/0800~0899/0863.All-Nodes-Distance-K-in-Binary-Tree.md" >}})|Medium||||62.3%|
|0864|Đường đi ngắn nhất để lấy tất cả chìa khóa (Shortest Path to Get All Keys)|[Go]({{< relref "/ChapterFour/0800~0899/0864.Shortest-Path-to-Get-All-Keys.md" >}})|Hard||||45.6%|
|0909|Rắn và thang (Snakes and Ladders)|[Go]({{< relref "/ChapterFour/0900~0999/0909.Snakes-and-Ladders.md" >}})|Medium||||45.1%|
|0924|Giảm thiểu lây lan mã độc (Minimize Malware Spread)|[Go]({{< relref "/ChapterFour/0900~0999/0924.Minimize-Malware-Spread.md" >}})|Hard||||42.1%|
|0928|Giảm thiểu lây lan mã độc II (Minimize Malware Spread II)|[Go]({{< relref "/ChapterFour/0900~0999/0928.Minimize-Malware-Spread-II.md" >}})|Hard||||42.8%|
|0958|Kiểm tra tính hoàn chỉnh của cây nhị phân (Check Completeness of a Binary Tree)|[Go]({{< relref "/ChapterFour/0900~0999/0958.Check-Completeness-of-a-Binary-Tree.md" >}})|Medium||||56.2%|
|0959|Các vùng bị cắt bởi dấu gạch chéo (Regions Cut By Slashes)|[Go]({{< relref "/ChapterFour/0900~0999/0959.Regions-Cut-By-Slashes.md" >}})|Medium||||69.1%|
|0987|Duyệt theo cột dọc của cây nhị phân (Vertical Order Traversal of a Binary Tree)|[Go]({{< relref "/ChapterFour/0900~0999/0987.Vertical-Order-Traversal-of-a-Binary-Tree.md" >}})|Hard||||45.1%|
|0993|Anh em họ trong cây nhị phân (Cousins in Binary Tree)|[Go]({{< relref "/ChapterFour/0900~0999/0993.Cousins-in-Binary-Tree.md" >}})|Easy| O(n)| O(1)||54.6%|
|1020|Số lượng vùng đất bị cô lập (Number of Enclaves)|[Go]({{< relref "/ChapterFour/1000~1099/1020.Number-of-Enclaves.md" >}})|Medium||||65.6%|
|1034|Tô màu đường biên (Coloring A Border)|[Go]({{< relref "/ChapterFour/1000~1099/1034.Coloring-A-Border.md" >}})|Medium||||49.2%|
|1091|Đường đi ngắn nhất trong ma trận nhị phân (Shortest Path in Binary Matrix)|[Go]({{< relref "/ChapterFour/1000~1099/1091.Shortest-Path-in-Binary-Matrix.md" >}})|Medium||||44.7%|
|1123|Tổ tiên chung thấp nhất của các lá sâu nhất (Lowest Common Ancestor of Deepest Leaves)|[Go]({{< relref "/ChapterFour/1100~1199/1123.Lowest-Common-Ancestor-of-Deepest-Leaves.md" >}})|Medium||||70.9%|
|1202|Chuỗi nhỏ nhất sau khi hoán đổi (Smallest String With Swaps)|[Go]({{< relref "/ChapterFour/1200~1299/1202.Smallest-String-With-Swaps.md" >}})|Medium||||57.7%|
|1203|Sắp xếp item theo nhóm và phụ thuộc (Sort Items by Groups Respecting Dependencies)|[Go]({{< relref "/ChapterFour/1200~1299/1203.Sort-Items-by-Groups-Respecting-Dependencies.md" >}})|Hard||||51.2%|
|1254|Số lượng đảo khép kín (Number of Closed Islands)|[Go]({{< relref "/ChapterFour/1200~1299/1254.Number-of-Closed-Islands.md" >}})|Medium||||66.9%|
|1293|Đường đi ngắn nhất trong lưới có thể loại bỏ chướng ngại (Shortest Path in a Grid with Obstacles Elimination)|[Go]({{< relref "/ChapterFour/1200~1299/1293.Shortest-Path-in-a-Grid-with-Obstacles-Elimination.md" >}})|Hard||||45.3%|
|1302|Tổng các lá sâu nhất (Deepest Leaves Sum)|[Go]({{< relref "/ChapterFour/1300~1399/1302.Deepest-Leaves-Sum.md" >}})|Medium||||86.6%|
|1306|Trò chơi nhảy III (Jump Game III)|[Go]({{< relref "/ChapterFour/1300~1399/1306.Jump-Game-III.md" >}})|Medium||||63.5%|
|1319|Số thao tác để kết nối mạng (Number of Operations to Make Network Connected)|[Go]({{< relref "/ChapterFour/1300~1399/1319.Number-of-Operations-to-Make-Network-Connected.md" >}})|Medium||||62.1%|
|1609|Cây chẵn lẻ (Even Odd Tree)|[Go]({{< relref "/ChapterFour/1600~1699/1609.Even-Odd-Tree.md" >}})|Medium||||54.4%|
|1631|Đường đi với nỗ lực tối thiểu (Path With Minimum Effort)|[Go]({{< relref "/ChapterFour/1600~1699/1631.Path-With-Minimum-Effort.md" >}})|Medium||||55.7%|
|1654|Số lần nhảy tối thiểu để về nhà (Minimum Jumps to Reach Home)|[Go]({{< relref "/ChapterFour/1600~1699/1654.Minimum-Jumps-to-Reach-Home.md" >}})|Medium||||29.1%|
|------------|-------------------------------------------------------|-------| ----------------| ---------------|-------------|-------------|-------------|

