---
title: 1.3 Độ phức tạp thời gian
type: docs
weight: 3
---

# Độ phức tạp thời gian và độ phức tạp không gian


## I. Quy mô dữ liệu theo độ phức tạp thời gian

Quy mô dữ liệu có thể giải được trong 1s: {{< katex >}}10^6 \sim 10^7{{< /katex >}}

- Thuật toán {{< katex >}}O(n^2){{< /katex >}} có thể xử lý quy mô dữ liệu cỡ {{< katex >}}10^4{{< /katex >}} (ước lượng bảo thủ: chắc chắn xử lý tốt các bài cỡ 1000).
- Thuật toán {{< katex >}}O(n){{< /katex >}} có thể xử lý quy mô dữ liệu cỡ {{< katex >}}10^8{{< /katex >}} (ước lượng bảo thủ: chắc chắn xử lý tốt các bài cỡ {{< katex >}}10^7{{< /katex >}}).
- Thuật toán {{< katex >}}O(n log n){{< /katex >}} có thể xử lý quy mô dữ liệu cỡ {{< katex >}}10^7{{< /katex >}} (ước lượng bảo thủ: chắc chắn xử lý tốt các bài cỡ {{< katex >}}10^6{{< /katex >}}).

| | Quy mô dữ liệu | Độ phức tạp thời gian | Ví dụ thuật toán |
|:------:|:------:|:------:|:------:|
|1|10|{{< katex >}}O(n!){{< /katex >}}|Hoán vị (Permutation)|
|2|20~30|{{< katex >}}O(2^n){{< /katex >}}|Tổ hợp (Combination)|
|3|50|{{< katex >}}O(n^4){{< /katex >}}|Tìm kiếm DFS (Depth-First Search), DP (Dynamic Programming)|
|4|100|{{< katex >}}O(n^3){{< /katex >}}|Đường đi ngắn nhất mọi cặp (All-Pairs Shortest Path), DP (Dynamic Programming)|
|5|1000|{{< katex >}}O(n^2){{< /katex >}}|Đồ thị dày (Dense Graph), DP (Dynamic Programming)|
|6|{{< katex >}}10^6{{< /katex >}}|{{< katex >}}O(n log n){{< /katex >}}|Sắp xếp (Sorting), Heap (Heap), Đệ quy (Recursion) và Chia để trị (Divide and Conquer)|
|7|{{< katex >}}10^7{{< /katex >}}|{{< katex >}}O(n){{< /katex >}}|DP (Dynamic Programming), Duyệt đồ thị (Graph Traversal), Sắp xếp topo (Topological Sort), Duyệt cây (Tree Traversal)|
|8|{{< katex >}}10^9{{< /katex >}}|{{< katex >}}O(\sqrt{n}){{< /katex >}}|Sàng số nguyên tố (Prime Sieve), tính căn bậc hai (Square Root)|
|9|{{< katex >}}10^{10}{{< /katex >}}|{{< katex >}}O(log n){{< /katex >}}|Tìm kiếm nhị phân (Binary Search)|
|10|{{< katex >}}+\infty{{< /katex >}}|{{< katex >}}O(1){{< /katex >}}|Thuật toán liên quan toán học (Math-related Algorithms)|
|-------------------|-----------------|--------------------------------|------------------------------------|


Một vài ví dụ dễ gây nhầm lẫn:

```c
void hello (int n){
    for( int sz = 1 ; sz < n ; sz += sz )
        for( int i = 1 ; i < n ; i ++ )
            cout << "Hello" << endl;
}
```

Đoạn code trên có độ phức tạp thời gian là {{< katex >}}O(n log n){{< /katex >}}, **không phải** {{< katex >}}O(n^2){{< /katex >}}.

```c
bool isPrime (int n){
    if (num <= 1) return false;
    for( int x = 2 ; x * x <= n ; x ++ )
        if( n % x == 0 )
            return false;
    return true;
}
```

Đoạn code trên có độ phức tạp thời gian là {{< katex >}}O(\sqrt{n}){{< /katex >}}, **không phải** {{< katex >}}O(n){{< /katex >}}.

Thêm một ví dụ nữa: có một mảng chuỗi; ta sắp xếp **từng chuỗi** theo thứ tự chữ cái, sau đó sắp xếp **cả mảng chuỗi** theo thứ tự từ điển. Độ phức tạp thời gian tổng của hai bước là bao nhiêu?

Nếu trả lời là {{< katex >}}O(n \cdot n log n + n log n) = O(n^2 log n){{< /katex >}} thì **sai**. Độ dài chuỗi và độ dài mảng là hai biến độc lập, nên cần tính riêng. Giả sử độ dài chuỗi lớn nhất là {{< katex >}}s{{< /katex >}}, trong mảng có {{< katex >}}n{{< /katex >}} chuỗi. Sắp xếp mỗi chuỗi có độ phức tạp {{< katex >}}O(s log s){{< /katex >}}, vậy sắp xếp tất cả chuỗi theo thứ tự chữ cái là {{< katex >}}O(n \cdot s log s){{< /katex >}}.

Sắp xếp cả mảng chuỗi theo thứ tự từ điển có độ phức tạp là {{< katex >}}O(s \cdot n log n){{< /katex >}}. Trong thuật toán sắp xếp, {{< katex >}}O(n log n){{< /katex >}} là số lần so sánh; nếu so sánh số nguyên thì mỗi lần là {{< katex >}}O(1){{< /katex >}}. Nhưng so sánh chuỗi theo thứ tự từ điển là {{< katex >}}O(s){{< /katex >}}. Vì vậy, sắp xếp mảng chuỗi theo thứ tự từ điển là {{< katex >}}O(s \cdot n log n){{< /katex >}}. Do đó, tổng độ phức tạp là {{< katex >}}O(n \cdot s log s) + O(s \cdot n log n) = O(n \cdot s log s + s \cdot n log n) = O(n \cdot s \cdot (log s + log n)) = O(n \cdot s \cdot log(n \cdot s)){{< /katex >}}.

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

Thuật toán trên có độ phức tạp thời gian {{< katex >}}O(n){{< /katex >}}, độ phức tạp không gian {{< katex >}}O(1){{< /katex >}}.

```c
int sum( int n ){
    assert( n >= 0 )
    if ( n == 0 )
        return 0;
    return n + sum( n - 1 );
}
```

Thuật toán trên có độ phức tạp thời gian {{< katex >}}O(n){{< /katex >}}, độ phức tạp không gian {{< katex >}}O(n){{< /katex >}}.

## III. Độ phức tạp thời gian của đệ quy

### 1. Chỉ có một lần gọi đệ quy

Nếu trong hàm đệ quy chỉ gọi lại chính nó **một lần**, và độ sâu đệ quy là `depth`, mỗi lần gọi tốn thời gian {{< katex >}}T{{< /katex >}}, thì tổng độ phức tạp thời gian là {{< katex >}}O(T \cdot depth){{< /katex >}}.

Ví dụ:

```c
int binarySearch(int arr[], int l, int r, int target){
	if( l > r )
	    return -1;
    int mid = l + ( r - l ) / 2; // Chống tràn
    if(arr[mid] == target)
        return mid;
    else if (arr[mid] > target)
        return binarySearch(arr,l,mid-1,target);
    else
        return binarySearch(arr,mid+1,r,target);
}

```

Trong hiện thực đệ quy của tìm kiếm nhị phân (Binary Search), hàm chỉ gọi lại chính nó. Độ sâu đệ quy là {{< katex >}}log n{{< /katex >}}, và mỗi lần gọi tốn {{< katex >}}O(1){{< /katex >}}, nên độ phức tạp thời gian là {{< katex >}}O(log n){{< /katex >}}.


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

Tổng số lần gọi đệ quy trong trường hợp này là {{< katex display>}}2^0 + 2^1 + 2^2 + ... + 2^n = 2^{n+1} - 1 = O(2^n){{< /katex >}}.


> Với phân tích độ phức tạp của các bài đệ quy phức tạp hơn, hãy tham khảo **Định lý Master (Master Theorem)**. Định lý này đưa ra kết luận đúng cho nhiều trường hợp phức tạp khác nhau.

