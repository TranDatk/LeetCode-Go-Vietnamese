---
title: 3.4 Bộ nhớ đệm LFU (LFU Cache)
type: docs
weight: 4
---

# Bộ nhớ đệm LFU (LFU Cache)

![](/images/chuong-3/3.4.1.png)

LFU là viết tắt của **Least Frequently Used (LFU)**, nghĩa là **ít được dùng nhất theo tần suất**. Đây cũng là một thuật toán thay thế trang (page replacement algorithm) phổ biến: ta sẽ loại bỏ trang có bộ đếm truy cập nhỏ nhất. Như hình dưới, mỗi trang trong bộ nhớ đệm đều có một bộ đếm.


![](/images/chuong-3/3.4.2.png)

Theo chiến lược LFU, mỗi lần truy cập đều phải cập nhật bộ đếm.  
Khi “chèn” (put/insert) B, ta thấy B đã có trong cache (cache hit), nên tăng bộ đếm của B và di chuyển B đến vị trí phù hợp theo thứ tự tần suất. Chèn D cũng tương tự: cập nhật bộ đếm rồi di chuyển.  
Khi chèn F, cache chưa có F (cache miss) nên phải loại trang có bộ đếm nhỏ nhất → loại A. Lúc này F nằm ở dưới cùng với bộ đếm bằng 1.

![](/images/chuong-3/3.4.3.png)

LFU có một điểm “đặc biệt” so với LRU:  
Nếu có nhiều trang có cùng số lần truy cập và cần loại bỏ, thì chọn trang **cũ nhất** trong nhóm đó (thường là trang nằm gần cuối hơn). Trong hình, A/B/C đều có tần suất 1. Khi cần chèn F (F chưa có trong cache), ta loại A. F là trang mới, tần suất 1, được xếp “trước” C. Nói cách khác: **cùng frequency thì xét thêm thứ tự cũ–mới (recency), loại trang cũ nhất**. Đây là khác biệt lớn nhất so với LRU.

Ta có thể thấy: **với LFU, cập nhật và chèn trang mới có thể xảy ra ở bất kỳ vị trí nào trong danh sách; còn xóa/loại vẫn diễn ra ở cuối danh sách**.


## Cách 1: Get {{< katex >}}O(1){{< /katex >}} / Put {{< katex >}}O(1){{< /katex >}}

LFU cũng yêu cầu truy vấn thật nhanh, tốt nhất trong {{< katex >}}O(1){{< /katex >}}. Ta tiếp tục dùng **map** để tra cứu theo key. Thao tác sửa và xóa cũng cần {{< katex >}}O(1){{< /katex >}}, nên tiếp tục dùng **danh sách liên kết đôi (doubly linked list)**, và có thể tái sử dụng `container/list`.  
Vì LFU cần lưu số lần truy cập (frequency), nên mỗi nút (node) ngoài `key` và `value` sẽ lưu thêm `frequency`.

Ta còn một vấn đề nữa: làm sao “sắp” theo frequency? Với cùng frequency thì lại phải theo thứ tự cũ–mới.  
Nếu bắt đầu nghĩ tới thuật toán sắp xếp (sorting) thì bạn đang đi lệch hướng, vì sorting ít nhất cũng {{< katex >}}O(n \log n){{< /katex >}}. Nhìn lại cơ chế LFU sẽ thấy: nó chỉ quan tâm tới **frequency nhỏ nhất** (min frequency). Thứ tự giữa các frequency khác nhau không cần "sắp" toàn cục.  
Vì vậy, ta dùng một biến `min` để lưu **tần suất nhỏ nhất (min frequency)**. Khi cần loại bỏ, chỉ cần nhìn `min` là biết nhóm cần xoá.  
Với các phần tử cùng frequency, ta dùng danh sách liên kết đôi để giữ thứ tự cũ–mới: thứ tự chèn trong list chính là thứ tự thời gian. Mỗi frequency tương ứng một danh sách; vì có thể có nhiều frequency nên sẽ có nhiều danh sách. Ta dùng một map để ánh xạ `frequency -> list`. Khi xóa theo `min`, ta lấy đúng list tương ứng và xóa phần tử “cũ nhất” ở cuối list. Như vậy giải quyết được thao tác xóa của LFU.

Phần cập nhật của LFU cũng giống LRU ở chỗ: cần một map nữa để ánh xạ `key -> node`. Node trong list sẽ lưu bộ ba `key-value-frequency`. Khi cần xóa, ta dùng `key` trong node để xóa ngược lại khỏi map.

Định nghĩa cấu trúc dữ liệu cho `LFUCache`:

```go

import "container/list"

type LFUCache struct {
	nodes    map[int]*list.Element
	lists    map[int]*list.List
	capacity int
	min      int
}

type node struct {
	key       int
	value     int
	frequency int
}

func Constructor(capacity int) LFUCache {
	return LFUCache{nodes: make(map[int]*list.Element),
		lists:    make(map[int]*list.List),
		capacity: capacity,
		min:      0,
	}
}

```

Hàm `Get` của LFU sẽ cập nhật `frequency` và đụng tới 2 map:
- Từ `nodes` map, lấy node theo `key`.
- Từ `lists`, xóa node khỏi danh sách của `frequency` hiện tại.
- Tăng `frequency++`.
- Đưa node sang danh sách của `frequency` mới: nếu list chưa tồn tại thì tạo mới.
- Cập nhật lại `nodes[key]` trỏ tới phần tử mới trong list.
- Cuối cùng cập nhật `min`: nếu list ở `frequency` cũ (đặc biệt khi nó bằng `min`) bị rỗng thì `min++`.

```go
func (this *LFUCache) Get(key int) int {
	value, ok := this.nodes[key]
	if !ok {
		return -1
	}
	currentNode := value.Value.(*node)
	this.lists[currentNode.frequency].Remove(value)
	currentNode.frequency++
	if _, ok := this.lists[currentNode.frequency]; !ok {
		this.lists[currentNode.frequency] = list.New()
	}
	newList := this.lists[currentNode.frequency]
	newNode := newList.PushFront(currentNode)
	this.nodes[key] = newNode
	if currentNode.frequency-1 == this.min && this.lists[currentNode.frequency-1].Len() == 0 {
		this.min++
	}
	return currentNode.value
}

```

`Put` có nhiều nhánh hơn một chút:
- Nếu key đã tồn tại trong `nodes`: cập nhật `value`, rồi gọi `Get(key)` để dùng lại logic cập nhật `frequency`.
- Nếu key chưa tồn tại: cần chèn mới, nhưng trước đó phải kiểm tra dung lượng (capacity). Nếu cache đã đầy, thực hiện evict: lấy list ứng với `min` và xóa phần tử ở cuối (oldest) trong list đó; đồng thời xóa `key` khỏi `nodes`.

Vì phần tử mới chèn vào có `frequency = 1`, nên đặt `min = 1`. Tạo node mới và chèn vào cả 2 map.

```go

func (this *LFUCache) Put(key int, value int) {
	if this.capacity == 0 {
		return
	}
	// Nếu đã tồn tại thì cập nhật số lần truy cập	
	if currentValue, ok := this.nodes[key]; ok {
		currentNode := currentValue.Value.(*node)
		currentNode.value = value
		this.Get(key)
		return
	}
	// Nếu chưa tồn tại và cache đã đầy thì cần xóa bớt
	if this.capacity == len(this.nodes) {
		currentList := this.lists[this.min]
		backNode := currentList.Back()
		delete(this.nodes, backNode.Value.(*node).key)
		currentList.Remove(backNode)
	}
	
	// Tạo node mới, chèn vào 2 map
	this.min = 1
	currentNode := &node{
		key:       key,
		value:     value,
		frequency: 1,
	}
	if _, ok := this.lists[1]; !ok {
		this.lists[1] = list.New()
	}
	newList := this.lists[1]
	newNode := newList.PushFront(currentNode)
	this.nodes[key] = newNode
}

```

Tóm lại, LFU là một cấu trúc gồm **2 map** và một biến `min`:
- Một map ánh xạ `frequency -> doubly linked list`: dùng để giữ thứ tự cũ–mới trong cùng frequency, nhằm xóa phần tử “cũ nhất” ở cuối list.
- Một map ánh xạ `key -> node`: node lưu `key-value-frequency` (so với LRU thì thêm `frequency`).
Danh sách liên kết đôi ở đây đóng vai trò tương tự LRU: dựa vào key để cập nhật node, và dựa vào key/frequency trong node để cập nhật ngược lại các map. Minh hoạ:

![](/images/chuong-3/3.4.4.png)

Sau khi submit, code đã qua toàn bộ test.


![](/images/chuong-3/3.4.5.png)


## Cách 2: Get {{< katex >}}O(capacity){{< /katex >}} / Put {{< katex >}}O(capacity){{< /katex >}}

Một hướng khác cho LFU là dùng [Index Priority Queue](https://algs4.cs.princeton.edu/24pq/). Đừng bị cái tên làm “hù”: Index Priority Queue = **map + hàng đợi ưu tiên (Priority Queue)**, chỉ vậy thôi.

Dùng Priority Queue để duy trì một **min-heap (minimum heap)**, trong đó phần tử ở đỉnh heap (heap top) là phần tử có `frequency` nhỏ nhất. `map` sẽ lưu con trỏ tới node trong hàng đợi ưu tiên.

```go
import "container/heap"

type LFUCache struct {
	capacity int
	pq       PriorityQueue
	hash     map[int]*Item
	counter  int
}

func Constructor(capacity int) LFUCache {
	lfu := LFUCache{
		pq:       PriorityQueue{},
		hash:     make(map[int]*Item, capacity),
		capacity: capacity,
	}
	return lfu
}

```

Để Get/Put nhanh, có 2 vấn đề cần giải:
- Khi `frequency` bằng nhau, làm sao loại phần tử “cũ nhất” (oldest)?
- Khi `frequency` thay đổi, làm sao điều chỉnh heap nhanh?
Để giải quyết, ta định nghĩa cấu trúc sau:

```go
// Item - phần tử được quản lý trong hàng đợi ưu tiên (priority queue)
type Item struct {
	value     int // giá trị (value) của item
	key       int
	frequency int // độ ưu tiên (priority) trong queue: frequency nhỏ hơn sẽ ưu tiên bị pop
	count     int // dùng để loại phần tử cũ nhất (evicting the oldest element)
	// index cần cho việc update (heap.Fix) và được duy trì bởi heap.Interface
	index int // vị trí (index) của item trong heap
}

```

Node trong heap lưu 5 giá trị. `count` dùng để xác định phần tử nào “cũ nhất”, giống như một dấu thời gian (timestamp). `index` dùng để re-heapify (điều chỉnh heap) khi cập nhật. Tiếp theo là các hàm của `PriorityQueue`:

```go
// PriorityQueue triển khai heap.Interface và chứa các Item
type PriorityQueue []*Item

func (pq PriorityQueue) Len() int { return len(pq) }

func (pq PriorityQueue) Less(i, j int) bool {
	// Ưu tiên theo frequency nhỏ hơn; nếu bằng nhau thì ưu tiên theo count nhỏ hơn (cũ hơn)
	if pq[i].frequency == pq[j].frequency {
		return pq[i].count < pq[j].count
	}
	return pq[i].frequency < pq[j].frequency
}

func (pq PriorityQueue) Swap(i, j int) {
	pq[i], pq[j] = pq[j], pq[i]
	pq[i].index = i
	pq[j].index = j
}

func (pq *PriorityQueue) Push(x interface{}) {
	n := len(*pq)
	item := x.(*Item)
	item.index = n
	*pq = append(*pq, item)
}

func (pq *PriorityQueue) Pop() interface{} {
	old := *pq
	n := len(old)
	item := old[n-1]
	old[n-1] = nil  // avoid memory leak
	item.index = -1 // for safety
	*pq = old[0 : n-1]
	return item
}

// update - cập nhật value/priority của Item rồi gọi heap.Fix để điều chỉnh heap
func (pq *PriorityQueue) update(item *Item, value int, frequency int, count int) {
	item.value = value
	item.count = count
	item.frequency = frequency
	heap.Fix(pq, item.index)
}
```

Trong `Less()`, `frequency` được so theo tăng dần; nếu `frequency` bằng nhau thì so `count` tăng dần. Vì vậy phần tử có `frequency` nhỏ nhất sẽ ở đỉnh heap; nếu `frequency` bằng nhau thì phần tử có `count` nhỏ nhất (cũ nhất) gần đỉnh hơn.

Trong `Swap()`, nhớ cập nhật `index`. Trong `Push()`, `index` của phần tử mới chính là độ dài queue trước khi append.  
`update()` gọi `heap.Fix()`. `Fix()` rẻ hơn so với `Remove()` rồi `Push()` lại một item mới, nên thường được ưu tiên. Thao tác này có độ phức tạp {{< katex >}}O(\log n){{< /katex >}}.

Như vậy ta đã duy trì được một Index Priority Queue tối thiểu. Hàm `Get` rất đơn giản:

```go
func (this *LFUCache) Get(key int) int {
	if this.capacity == 0 {
		return -1
	}
	if item, ok := this.hash[key]; ok {
		this.counter++
		this.pq.update(item, item.value, item.frequency+1, this.counter)
		return item.value
	}
	return -1
}

```

Tra `key` trong hash map. Nếu tồn tại: tăng `counter` (dấu thời gian), rồi gọi `update()` để tăng `frequency` và điều chỉnh heap.

```go
func (this *LFUCache) Put(key int, value int) {
	if this.capacity == 0 {
		return
	}
	this.counter++
	// Nếu đã tồn tại: tăng frequency rồi điều chỉnh heap
	if item, ok := this.hash[key]; ok {
		this.pq.update(item, value, item.frequency+1, this.counter)
		return
	}
	// Nếu chưa tồn tại và cache đã đầy: xóa trong cả hash map và pq
	if len(this.pq) == this.capacity {
		item := heap.Pop(&this.pq).(*Item)
		delete(this.hash, item.key)
	}
	// Tạo item mới, thêm vào hash map và pq
	item := &Item{
		value: value,
		key:   key,
		count: this.counter,
	}
	heap.Push(&this.pq, item)
	this.hash[key] = item
}
```


Với cách dùng min-heap, phần tác giả ghi rằng Put có độ phức tạp {{< katex >}}O(capacity){{< /katex >}}, Get cũng {{< katex >}}O(capacity){{< /katex >}}, kém hơn bản dùng 2 map. Nhưng khá thú vị là phiên bản min-heap lại "beats 100%".

![](/images/chuong-3/3.4.6.png)


## Mẫu code (Template)


```go
import "container/list"

type LFUCache struct {
	nodes    map[int]*list.Element
	lists    map[int]*list.List
	capacity int
	min      int
}

type node struct {
	key       int
	value     int
	frequency int
}

func Constructor(capacity int) LFUCache {
	return LFUCache{nodes: make(map[int]*list.Element),
		lists:    make(map[int]*list.List),
		capacity: capacity,
		min:      0,
	}
}

func (this *LFUCache) Get(key int) int {
	value, ok := this.nodes[key]
	if !ok {
		return -1
	}
	currentNode := value.Value.(*node)
	this.lists[currentNode.frequency].Remove(value)
	currentNode.frequency++
	if _, ok := this.lists[currentNode.frequency]; !ok {
		this.lists[currentNode.frequency] = list.New()
	}
	newList := this.lists[currentNode.frequency]
	newNode := newList.PushBack(currentNode)
	this.nodes[key] = newNode
	if currentNode.frequency-1 == this.min && this.lists[currentNode.frequency-1].Len() == 0 {
		this.min++
	}
	return currentNode.value
}

func (this *LFUCache) Put(key int, value int) {
	if this.capacity == 0 {
		return
	}
	if currentValue, ok := this.nodes[key]; ok {
		currentNode := currentValue.Value.(*node)
		currentNode.value = value
		this.Get(key)
		return
	}
	if this.capacity == len(this.nodes) {
		currentList := this.lists[this.min]
		frontNode := currentList.Front()
		delete(this.nodes, frontNode.Value.(*node).key)
		currentList.Remove(frontNode)
	}
	this.min = 1
	currentNode := &node{
		key:       key,
		value:     value,
		frequency: 1,
	}
	if _, ok := this.lists[1]; !ok {
		this.lists[1] = list.New()
	}
	newList := this.lists[1]
	newNode := newList.PushBack(currentNode)
	this.nodes[key] = newNode
}

```


----------------------------------------------
<div style="display: flex;justify-content: space-between;align-items: center;">
<p><a href="https://books.halfrost.com/leetcode/ChapterThree/LRUCache/">⬅️上一页</a></p>
<p><a href="https://books.halfrost.com/leetcode/ChapterFour/">下一章➡️</a></p>
</div>
