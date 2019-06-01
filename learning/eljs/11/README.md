# Asynchronous Programming

## Asynchronicity

- Definition

  - In _synchronous_ programming things happen one at a time.
  - In _asynchronous_ programming multiple things happen at the same time.

- Example

  - Program

    - Grab network resource 1.
    - Grab network resource 2.
    - Combine.

  - Synchronous

    - Connect to network 1
    - Find resource 1
    - Get resource 1
    - Disconnect from network 1
    - Connect to network 2
    - Find resource 2
    - Get resource 2
    - Disconnect from network 2
    - Combine resource 1 with resource 2

  - Asynchronous

    - Connect to network 1
    - Connect to network 2
    - Find resource 1
    - Find resource 2
    - Get resource 1
    - Get resource 2
    - Disconnect from network 1
    - Disconnect from network 2
    - Combine resouces 1/2 or 2/1

- Note

  - There's a massive difference between asynchronous programming and parallel programming.
  - Concurrency and parallelism are not the same.
