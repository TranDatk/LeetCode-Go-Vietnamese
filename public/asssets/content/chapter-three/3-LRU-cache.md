---
title: 3.3 Bộ nhớ đệm LRU (LRU Cache)
type: docs
weight: 3
---

# Bộ nhớ đệm LRU (LRU Cache)

![](/images/chuong-3/3.3.1.png)

LRU là viết tắt của **Least Recently Used (LRU)**, nghĩa là **ít được dùng gần đây nhất**. Đây là một thuật toán thay thế trang (page replacement algorithm) rất phổ biến: khi bộ nhớ đệm đầy, ta sẽ loại bỏ mục đã lâu không được dùng nhất. Như hình trên, khi cần chèn trang F thì phải loại bớt một trang cũ.

![](/images/chuong-3/3.3.2.png)

Theo chiến lược LRU, mỗi lần luôn loại trang ít được dùng gần đây nhất, nên đầu tiên ta loại A. Khi chèn C, ta thấy C đã có trong cache (cache hit), lúc này cần đưa C lên đầu vì nó vừa được dùng. Tương tự:
- Chèn G: G là trang mới (cache miss) → loại B.
- Chèn H: H là trang mới → loại D.
- Chèn E: E đã có trong cache → đưa E lên đầu.
- Chèn I: I là trang mới → loại F.

Ta có thể thấy: **cập nhật (update) và chèn (insert) đều diễn ra ở đầu danh sách liên kết (linked list), còn xóa/loại (delete/evict) diễn ra ở cuối**.

## Cách 1: Get \(O(1)\) / Put \(O(1)\)

LRU yêu cầu truy vấn thật nhanh, lý tưởng là \(O(1)\). Vì vậy ta chọn **bảng băm (hash map / map)** để tra cứu theo key trong \(O(1)\). Đồng thời, thao tác cập nhật và xóa cũng cần càng gần \(O(1)\) càng tốt. Trong các cấu trúc quen thuộc (danh sách liên kết, ngăn xếp, hàng đợi, cây, đồ thị), ta loại cây/đồ thị; ngăn xếp/hàng đợi thì không xóa “giữa” được. Do đó, lựa chọn hợp lý là **danh sách liên kết (linked list)**.  
Tuy nhiên, nếu dùng **danh sách liên kết đơn (singly linked list)**, muốn xóa một nút phải tìm nút trước (prev) → \(O(n)\). Vì vậy ta dùng **danh sách liên kết đôi (doubly linked list)** để xóa \(O(1)\).

Trong Go, `container/list` được cài đặt bằng danh sách liên kết đôi (doubly linked list), nên có thể dùng trực tiếp. Cấu trúc dữ liệu cho `LRUCache` như sau:

```go
import "container/list"

type LRUCache struct {
    Cap  int
    Keys map[int]*list.Element
    List *list.List
}

type pair struct {
    K, V int
}

func Constructor(capacity int) LRUCache {
    return LRUCache{
        Cap: capacity,
        Keys: make(map[int]*list.Element),
        List: list.New(),
    }
}

```

Có 2 điểm cần làm rõ:
- `list` đang lưu cái gì trong `Value`?
- `pair` dùng để làm gì?

```go
type Element struct {
	// Con trỏ next và prev trong danh sách liên kết đôi các phần tử.
	// Để đơn giản hóa việc hiện thực, bên trong danh sách l được cài đặt
	// dưới dạng một vòng (ring), sao cho &l.root vừa là phần tử kế tiếp
	// của phần tử cuối cùng trong danh sách (l.Back()),
	// vừa là phần tử đứng trước của phần tử đầu tiên (l.Front()).
	next, prev *Element

	// Danh sách mà phần tử này thuộc về.
	list *List

	// Giá trị được lưu trữ trong phần tử này.
	Value interface{}
}
```

Trong `container/list`, mỗi nút (node) của danh sách liên kết đôi là một `Element`. `Element` có con trỏ `prev/next`, con trỏ tới danh sách (`list`), và trường `Value`. `Value` có kiểu `interface{}`, nên ta có thể lưu bất cứ gì. Ở đây, tác giả lưu một `pair{K, V}` vào `Value`, tức là list lưu cặp key-value.

Vì sao phải lưu cả `pair` (cả key lẫn value), mà không chỉ lưu mỗi `value`?  
Vì khi LRUCache **loại bỏ** (evict) phần tử ở cuối danh sách, ta cần đồng thời cập nhật **hai cấu trúc**: xóa nút khỏi danh sách liên kết đôi và xóa key tương ứng khỏi map. Nếu trong nút của danh sách không lưu key, thì lúc xóa khỏi map sẽ rất “khó chịu”: phải lần ngược từ con trỏ `Element` để tìm ra key tương ứng trong map (thường phải duyệt toàn bộ map) → \(O(n)\), không đạt \(O(1)\). Vì vậy `Value` cần chứa `pair{K, V}`.

Hàm `Get` rất đơn giản: tra key trong map để lấy ra nút của danh sách liên kết đôi.  
Nếu tồn tại (hit), đưa nút đó lên đầu danh sách (vì vừa được dùng) và trả về `value`; nếu không tồn tại (miss) thì trả `-1`.

```go 
func (c *LRUCache) Get(key int) int {
	if el, ok := c.Keys[key]; ok {
		c.List.MoveToFront(el)
		return el.Value.(pair).V
	}
	return -1
}
```

Hàm `Put` cũng không khó:
- Nếu key đã tồn tại: cập nhật `value` và đưa nút lên đầu danh sách.
- Nếu key chưa tồn tại: tạo nút mới, thêm vào đầu danh sách và thêm vào map.
- Cuối cùng, đảm bảo không vượt quá dung lượng (capacity/cap). Nếu vượt, loại nút cuối danh sách, đồng thời xóa key khỏi map.

```go
func (c *LRUCache) Put(key int, value int) {
	if el, ok := c.Keys[key]; ok {
		el.Value = pair{K: key, V: value}
		c.List.MoveToFront(el)
	} else {
		el := c.List.PushFront(pair{K: key, V: value})
		c.Keys[key] = el
	}
	if c.List.Len() > c.Cap {
		el := c.List.Back()
		c.List.Remove(el)
		delete(c.Keys, el.Value.(pair).K)
	}
}

```

Tóm lại, LRU được ghép từ **map** và **danh sách liên kết đôi**:
- Trong map: `key -> *list.Element` (trỏ tới nút trong danh sách).
- Trong danh sách: mỗi nút lưu `pair{key, value}`.
- Đầu danh sách (front): cập nhật/đánh dấu vừa dùng (most recently used).
- Cuối danh sách (back): loại bỏ (least recently used).

![](/images/chuong-3/3.3.3.png)

Sau khi submit, code đã qua toàn bộ test.

![](/images/chuong-3/3.3.4.png)


## Cách 2: Get \(O(1)\) / Put \(O(1)\)

Về mặt cấu trúc dữ liệu thì không có “chiêu” khác, nhưng nhìn vào phần trăm hiệu năng (beats %) có vẻ vẫn còn tối ưu hằng số (constant-factor optimization). Tác giả đoán phần tốn thời gian có thể nằm ở việc ép kiểu từ `interface{}`. Vì vậy thử tự viết danh sách liên kết đôi thay vì dùng `container/list`:

```go

type LRUCache struct {
	head, tail *Node
	keys       map[int]*Node
	capacity   int
}

type Node struct {
	key, val   int
	prev, next *Node
}

func ConstructorLRU(capacity int) LRUCache {
	return LRUCache{keys: make(map[int]*Node), capacity: capacity}
}

func (this *LRUCache) Get(key int) int {
	if node, ok := this.keys[key]; ok {
		this.Remove(node)
		this.Add(node)
		return node.val
	}
	return -1
}

func (this *LRUCache) Put(key int, value int) {
	if node, ok := this.keys[key]; ok {
		node.val = value
		this.Remove(node)
		this.Add(node)
		return
	} else {
		node = &Node{key: key, val: value}
		this.keys[key] = node
		this.Add(node)
	}
	if len(this.keys) > this.capacity {
		delete(this.keys, this.tail.key)
		this.Remove(this.tail)
	}
}

func (this *LRUCache) Add(node *Node) {
	node.prev = nil
	node.next = this.head
	if this.head != nil {
		this.head.prev = node
	}
	this.head = node
	if this.tail == nil {
		this.tail = node
		this.tail.next = nil
	}
}

func (this *LRUCache) Remove(node *Node) {
	if node == this.head {
		this.head = node.next
		if node.next != nil {
			node.next.prev = nil
		}
		node.next = nil
		return
	}
	if node == this.tail {
		this.tail = node.prev
		node.prev.next = nil
		node.prev = nil
		return
	}
	node.prev.next = node.next
	node.next.prev = node.prev
}

```

Submit xong thì đúng là lên 100% thật.

![](/images/chuong-3/3.3.5.png)

Thực ra về bản chất thuật toán không đổi, chỉ là thay cách viết và tránh `container/list` (giảm overhead).


## Mẫu code

```go
type LRUCache struct {
	head, tail *Node
	Keys       map[int]*Node
	Cap        int
}

type Node struct {
	Key, Val   int
	Prev, Next *Node
}

func Constructor(capacity int) LRUCache {
	return LRUCache{Keys: make(map[int]*Node), Cap: capacity}
}

func (this *LRUCache) Get(key int) int {
	if node, ok := this.Keys[key]; ok {
		this.Remove(node)
		this.Add(node)
		return node.Val
	}
	return -1
}

func (this *LRUCache) Put(key int, value int) {
	if node, ok := this.Keys[key]; ok {
		node.Val = value
		this.Remove(node)
		this.Add(node)
		return
	} else {
		node = &Node{Key: key, Val: value}
		this.Keys[key] = node
		this.Add(node)
	}
	if len(this.Keys) > this.Cap {
		delete(this.Keys, this.tail.Key)
		this.Remove(this.tail)
	}
}

func (this *LRUCache) Add(node *Node) {
	node.Prev = nil
	node.Next = this.head
	if this.head != nil {
		this.head.Prev = node
	}
	this.head = node
	if this.tail == nil {
		this.tail = node
		this.tail.Next = nil
	}
}

func (this *LRUCache) Remove(node *Node) {
	if node == this.head {
		this.head = node.Next
		node.Next = nil
		return
	}
	if node == this.tail {
		this.tail = node.Prev
		node.Prev.Next = nil
		node.Prev = nil
		return
	}
	node.Prev.Next = node.Next
	node.Next.Prev = node.Prev
}

```


----------------------------------------------
<div style="display: flex;justify-content: space-between;align-items: center;">
<p><a href="https://books.halfrost.com/leetcode/ChapterThree/UnionFind/">⬅️上一页</a></p>
<p><a href="https://books.halfrost.com/leetcode/ChapterThree/LFUCache/">下一页➡️</a></p>
</div>
