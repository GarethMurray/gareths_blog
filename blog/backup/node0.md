---
title: NodeJS Eventloop
date: 2023-05-23
excerpt: A little more in detail than usual
---

## NodeJS Event Loop
Recently I've learnt a couple of things about node that I didn't know before

While many see Nodejs as strictly single-threaded, this is not entirely accurate. To get some better insight into this, we need to dive deep into the Event Loop and its surrounding architecture.

1. **The Multithreaded Reality**:

Imagine NodeJS as an efficient factory floor. While the main assembly line (the V8 JavaScript engine) might be run by a single worker, there are support staff (like libuv) in the background, making sure everything runs smoothly. This support system employs a handful of workers, each handling a specific task.

2. **Queues: The Organized Chaos**:

    Timers Queue: Dedicated to timed operations, this queue manages functions set by setTimeout and setInterval. As the timer expires, these tasks are up for execution.

    I/O Callbacks Queue: After completing I/O operations like file reading or network requests, tasks move to this conveyor waiting for their callback execution.

    Poll Queue: This conveyor is crucial. It retrieves new I/O events and executes their callbacks. If there are no items left, it communicates with the next queue: Check.

    Check Queue: Operations using setImmediate land here. These tasks have a unique priority and are executed after the Poll queue and before returning to other queues.

    Close Callbacks Queue: Activities like socket.on('close', ...) that revolve around terminating connections are directed to this queue.

		Adjacent to each main conveyor, there’s a smaller, faster belt: the Microtasks Queue. These are for promise resolutions and other microtasks. Every time the main conveyor completes a task, the adjacent microtask conveyor runs to completion, ensuring promises are always handled promptly.

    Pending Callbacks Queue: This is a bit of a backup conveyor. Here, some system operations are deferred for execution until the next loop iteration.

3. **Behind the Scenes: Parallelism and Libuv**

While our central processing hub (the main thread) addresses one task at a time, Node.js is hardly passive in the background. Here, libuv shines, preparing tasks for the conveyors.

    Main Event Loop Thread: This hub deals with tasks arriving on conveyors, focusing on your JavaScript code's execution.

    Libuv Thread Pool: Four dedicated workers handle potential main thread-blocking operations, like specific file reads or DNS lookups. But remember, not every task visits these workers; some bypass them, thanks to efficient OS-level operations.

This setup enables Node.js to embody parallelism: the main thread runs JavaScript, while the libuv team preps tasks, populating the conveyors for processing.

Further, Worker Threads in Node.js allow for parallel JavaScript execution. If a processing point is bogged down with CPU-heavy tasks, you can spin up another, ensuring optimal performance.

5. **Task Suitability**:

- **Worker Threads**: Suited for CPU-intensive tasks. Think of this as heavy machinery work, like forging or molding.
  
- **Asynchronous Tasks**: Best for I/O operations or tasks that involve waiting. It’s like planting seeds; you don’t watch the plant grow. You plant, move to the next spot, and periodically check if it needs water.

**Conclusion**:

Understanding the inner workings of NodeJS gives a clearer picture of how tasks are managed. It's not about how fast each task is processed; it's about efficiently managing them to ensure there's no wasted time. NodeJS is a masterclass in optimization, and by understanding its core, developers can make the most of its capabilities.

--- 

I hope this version offers clarity while keeping things straightforward and focused.