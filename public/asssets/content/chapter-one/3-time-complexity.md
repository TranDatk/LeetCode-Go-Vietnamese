---
title: 1.3 Độ phức tạp thời gian
type: docs
weight: 3
---

# Độ phức tạp thời gian và độ phức tạp không gian


## I. Quy mô dữ liệu theo độ phức tạp thời gian

Quy mô dữ liệu có thể giải được trong 1s: 10^6 ~ 10^7

- Thuật toán O(n^2) có thể xử lý quy mô dữ liệu cỡ 10^4 (ước lượng bảo thủ: chắc chắn xử lý tốt các bài cỡ 1000).
- Thuật toán O(n) có thể xử lý quy mô dữ liệu cỡ 10^8 (ước lượng bảo thủ: chắc chắn xử lý tốt các bài cỡ 10^7).
- Thuật toán O(nlog n) có thể xử lý quy mô dữ liệu cỡ 10^7 (ước lượng bảo thủ: chắc chắn xử lý tốt các bài cỡ 10^6).

| | Quy mô dữ liệu | Độ phức tạp thời gian | Ví dụ thuật toán |
|:------:|:------:|:------:|:------:|
|1|10|O(n!)|Hoán vị (Permutation)|
|2|20~30|O(2^n)|Tổ hợp (Combination)|
|3|50|O(n^4)|Tìm kiếm DFS (Depth-First Search), DP (Dynamic Programming)|
|4|100|O(n^3)|Đường đi ngắn nhất mọi cặp (All-Pairs Shortest Path), DP (Dynamic Programming)|
|5|1000|O(n^2)|Đồ thị dày (Dense Graph), DP (Dynamic Programming)|
|6|10^6|O(nlog n)|Sắp xếp (Sorting), Heap (Heap), Đệ quy (Recursion) và Chia để trị (Divide and Conquer)|
|7|10^7|O(n)|DP (Dynamic Programming), Duyệt đồ thị (Graph Traversal), Sắp xếp topo (Topological Sort), Duyệt cây (Tree Traversal)|
|8|10^9|O(sqrt(n))|Sàng số nguyên tố (Prime Sieve), tính căn bậc hai (Square Root)|
|9|10^10|O(log n)|Tìm kiếm nhị phân (Binary Search)|
|10|+∞|O(1)|Thuật toán liên quan toán học (Math-related Algorithms)|
|-------------------|-----------------|--------------------------------|------------------------------------|


Một vài ví dụ dễ gây nhầm lẫn:

```c
void hello (int n){
    for( int sz = 1 ; sz < n ; sz += sz )
        for( int i = 1 ; i < n ; i ++ )
            cout << "Hello" << endl;
}
```

Đoạn code trên có độ phức tạp thời gian là O(nlog n), **không phải** O(n^2).

```c
bool isPrime (int n){
    if (num <= 1) return false;
    for( int x = 2 ; x * x <= n ; x ++ )
        if( n % x == 0 )
            return false;
    return true;
}
```

Đoạn code trên có độ phức tạp thời gian là O(sqrt(n)), **không phải** O(n).

Thêm một ví dụ nữa: có một mảng chuỗi; ta sắp xếp **từng chuỗi** theo thứ tự chữ cái, sau đó sắp xếp **cả mảng chuỗi** theo thứ tự từ điển. Độ phức tạp thời gian tổng của hai bước là bao nhiêu?

Nếu trả lời là O(n*nlog n + nlog n) = O(n^2log n) thì **sai**. Độ dài chuỗi và độ dài mảng là hai biến độc lập, nên cần tính riêng. Giả sử độ dài chuỗi lớn nhất là s, trong mảng có n chuỗi. Sắp xếp mỗi chuỗi có độ phức tạp O(slog s), vậy sắp xếp tất cả chuỗi theo thứ tự chữ cái là O(n * slog s).

Sắp xếp cả mảng chuỗi theo thứ tự từ điển có độ phức tạp là O(s * nlog n). Trong thuật toán sắp xếp, O(nlog n) là số lần so sánh; nếu so sánh số nguyên thì mỗi lần là O(1). Nhưng so sánh chuỗi theo thứ tự từ điển là O(s). Vì vậy, sắp xếp mảng chuỗi theo thứ tự từ điển là O(s * nlog n). Do đó, tổng độ phức tạp là O(n * slog s) + O(s * nlog n) = O(n\*slog s + s\*nlogn) = O(n\*s\*(log s + log n)) = O(n\*s\*log(n\*s)).

## II. Độ phức tạp không gian

Lời gọi đệ quy có “chi phí” bộ nhớ: thuật toán đệ quy cần lưu thông tin ngăn xếp đệ quy (recursion stack), vì vậy độ phức tạp không gian thường cao hơn so với thuật toán không đệ quy.

```c
int sum( int n ){
    assert( n >= 0 )
    int ret = 0;
    for ( int i = 0 ; i <= n ; i ++ )
        ret += i;
    return ret;
}
```

Thuật toán trên có độ phức tạp thời gian O(n), độ phức tạp không gian O(1).

```c
int sum( int n ){
    assert( n >= 0 )
    if ( n == 0 )
        return 0;
    return n + sum( n - 1 );
}
```

Thuật toán trên có độ phức tạp thời gian O(n), độ phức tạp không gian O(n).

## III. Độ phức tạp thời gian của đệ quy

### 1. Chỉ có một lần gọi đệ quy

Nếu trong hàm đệ quy chỉ gọi lại chính nó **một lần**, và độ sâu đệ quy là `depth`, mỗi lần gọi tốn thời gian T, thì tổng độ phức tạp thời gian là O(T * depth).

Ví dụ:

```c
int binarySearch(int arr[], int l, int r, int target){
	if( l > r )
	    return -1;
    int mid = l + ( r - l ) / 2; // 防溢出
    if(arr[mid] == target)
        return mid;
    else if (arr[mid] > target)
        return binarySearch(arr,l,mid-1,target);
    else
        return binarySearch(arr,mid+1,r,target);
}

```

Trong hiện thực đệ quy của tìm kiếm nhị phân (Binary Search), hàm chỉ gọi lại chính nó. Độ sâu đệ quy là log n, và mỗi lần gọi tốn O(1), nên độ phức tạp thời gian là O(log n).


### 2. Có nhiều lần gọi đệ quy

Với trường hợp có nhiều lần gọi đệ quy, ta cần xem số lượng lời gọi được tạo ra. Thường có thể vẽ cây đệ quy (recursion tree) để phân tích. Ví dụ:

```c
int f(int n){
    assert( n >= 0 );
    if( n == 0 )
        return 1;
    return f( n - 1 ) + f ( n - 1 );
}
```

Tổng số lần gọi đệ quy trong trường hợp này là 2^0^ + 2^1^ + 2^2^ + …… + 2^n^ = 2^n+1^ - 1 = O(2^n).


> Với phân tích độ phức tạp của các bài đệ quy phức tạp hơn, hãy tham khảo **Định lý Master (Master Theorem)**. Định lý này đưa ra kết luận đúng cho nhiều trường hợp phức tạp khác nhau.

