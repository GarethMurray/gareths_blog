---
title: Learning Go
date: 2022-05-02
excerpt: Lessons I have learnt as a JS dev, switching to Go
---

# My progress with go

Go is often touted as being simple and idiomatic, but I feel it's quite verbose. There is of course the nature of a language which is closer to the system level, but it's worth considering. One of the reasons I think Svelte is a safe option it's brevity - I am a believer in more lines of code being more opportunities for error.

The more I learn go, the more I am starting to appreciate interfaces. 
> an interface defines behaviour

```go
type MyInterface interface {
  DoStuff()
}
```
While I generally don't enjoy working with classes, the idea of attaching methods to an interface which can be applied in a generic fashion makes for a very useful tool. This has leaked out into the way I think about working in Typescript, and I think it's a good thing.

Interfaces are abstract types

On the note of types,

```go
// primitives
	myBool bool := true
	myInt int = 1:0
	myInt8 int8 := 10
	myInt16 int16 := 10
	myInt32 int32 := 10
	myInt64 int64 := 10
	myUint uint := 10
	myUint8 uint8 := 10
	myUint16 uint16 := 10
	myUint32 uint32 := 10
	myUint64 uint64 := 10
// For pointers
	myUintptr uintptr := 10
	myFloat32 float32 := 10.5
	myFloat64 float64 := 10.5
//  For imaginary numbers
	myComplex64 complex64 := -1 + 10i
	myComplex128 complex128 := -1 + 10i
	myString string := "foo"
// Unsigned 8bit integer, can represent ascii
	myByte byte := 10  // alias to uint8
// int32 representing unicode 
// remember to use '' not "" which is for strings
	myRune rune := 'a' // alias to int32

// composite types
// Basically an object
	myStruct struct{} := struct{}{}
// Arrays and slices
	myArray []string := []string{}
// The wonderful hashmap
	myMap map[string]int := map[string]int{}
	myFunction func() := func() {}
// Used for async
	myChannel chan bool := make(chan bool)
// Not sure if this syntax is conventional
	myInterface interface{} := nil
	myPointer *int := new(int)