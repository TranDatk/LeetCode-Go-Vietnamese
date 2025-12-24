---
title: 3.2 Cấu trúc hợp nhất-tìm (Union-Find)
type: docs
weight: 2
---

# Cấu trúc hợp nhất-tìm (Union-Find)

```go
package template

// UnionFind - định nghĩa cấu trúc hợp nhất-tìm (Union-Find)
// Nén đường đi (path compression) + tối ưu theo hạng (union by rank)
type UnionFind struct {
	parent, rank []int
	count        int
}

// Init - khởi tạo
func (uf *UnionFind) Init(n int) {
	uf.count = n
	uf.parent = make([]int, n)
	uf.rank = make([]int, n)
	for i := range uf.parent {
		uf.parent[i] = i
	}
}

// Find - tìm đại diện (find representative)
func (uf *UnionFind) Find(p int) int {
	root := p
	for root != uf.parent[root] {
		root = uf.parent[root]
	}
	// nén đường đi (path compression)
	for p != uf.parent[p] {
		tmp := uf.parent[p]
		uf.parent[p] = root
		p = tmp
	}
	return root
}

// Union - hợp nhất (union)
func (uf *UnionFind) Union(p, q int) {
	proot := uf.Find(p)
	qroot := uf.Find(q)
	if proot == qroot {
		return
	}
	if uf.rank[qroot] > uf.rank[proot] {
		uf.parent[proot] = qroot
	} else {
		uf.parent[qroot] = proot
		if uf.rank[proot] == uf.rank[qroot] {
			uf.rank[proot]++
		}
	}
	uf.count--
}

// TotalCount - tổng số tập hợp (number of sets)
func (uf *UnionFind) TotalCount() int {
	return uf.count
}

// UnionFindCount - biến thể Union-Find để đếm
// Tính số phần tử trong mỗi tập hợp + kích thước tập hợp lớn nhất (max set size)
type UnionFindCount struct {
	parent, count []int
	maxUnionCount int
}

// Init - khởi tạo
func (uf *UnionFindCount) Init(n int) {
	uf.parent = make([]int, n)
	uf.count = make([]int, n)
	for i := range uf.parent {
		uf.parent[i] = i
		uf.count[i] = 1
	}
}

// Find - tìm đại diện (find representative)
func (uf *UnionFindCount) Find(p int) int {
	root := p
	for root != uf.parent[root] {
		root = uf.parent[root]
	}
	return root
}

// Nếu không tối ưu (ví dụ: không gộp theo hạng/kích thước), độ phức tạp có thể “nổ” rất lớn
// func (uf *UnionFindCount) union(p, q int) {
// 	proot := uf.find(p)
// 	qroot := uf.find(q)
// 	if proot == qroot {
// 		return
// 	}
// 	if proot != qroot {
// 		uf.parent[proot] = qroot
// 		uf.count[qroot] += uf.count[proot]
// 	}
// }

// Union - hợp nhất (union)
func (uf *UnionFindCount) Union(p, q int) {
	proot := uf.Find(p)
	qroot := uf.Find(q)
	if proot == qroot {
		return
	}
	if proot == len(uf.parent)-1 {
		// proot là gốc (root)
	} else if qroot == len(uf.parent)-1 {
		// qroot là gốc (root), luôn gắn (attach) vào gốc
		proot, qroot = qroot, proot
	} else if uf.count[qroot] > uf.count[proot] {
		proot, qroot = qroot, proot
	}

	// gắn qroot vào proot (attach qroot to proot)
	uf.maxUnionCount = max(uf.maxUnionCount, (uf.count[proot] + uf.count[qroot]))
	uf.parent[qroot] = proot
	uf.count[proot] += uf.count[qroot]
}

// Count - mảng kích thước (size array)
func (uf *UnionFindCount) Count() []int {
	return uf.count
}

// MaxUnionCount - kích thước lớn nhất (max size)
func (uf *UnionFindCount) MaxUnionCount() int {
	return uf.maxUnionCount
}

func max(a int, b int) int {
	if a > b {
		return a
	}
	return b
}

```