---
title: NodeJS Eventloop
date: 2022-05-23
excerpt: A little more in detail than usual
---

## NodeJS Event Loop
Recently I've learnt a couple of things about node that I didn't know before

- The runtime is multithreaded - v8 has it's own thread, libuv has a pool of 4 threads
- There are multiple queues in the event loop
	- Poll
	- Check
	- Close
	- Timers
	- Pending
- And each queue has it's own microtask subqueue, each for
	- method.nextTick() handlers
	- Promise reject / resolve