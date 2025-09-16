# simple-queue-run

A simple task queue runner that supports concurrent execution and interval control between tasks.

## Features

- **Concurrency Control**: Run multiple tasks concurrently with a configurable limit.
- **Interval Control**: Specify an interval between task executions.
- **Abort Support**: Ability to abort the execution of tasks using an `AbortSignal`.

## Installation

You can install the package via npm:

```
npm install simple-queue-run
```

## Usage

Here is a basic example of how to use the `simpleQueueRun` function:

```javascript
import simpleQueueRun from 'simple-queue-run';

const tasks = [
    () => new Promise(resolve => setTimeout(() => { console.log('Task 1'); resolve(); }, 1000)),
    () => new Promise(resolve => setTimeout(() => { console.log('Task 2'); resolve(); }, 500)),
    () => new Promise(resolve => setTimeout(() => { console.log('Task 3'); resolve(); }, 2000)),
];

const options = {
    concurrence: 2,
    interval: 500,
};

simpleQueueRun(tasks, options)
    .then(() => console.log('All tasks completed'))
    .catch(err => console.error('Error:', err));
```

## API

### simpleQueueRun(tasks: Function[], option?: Option): Promise<void>

- **tasks**: An array of functions representing the tasks to be executed.
- **option**: An optional configuration object with the following properties:
  - `signal`: An `AbortSignal` to terminate the queue.
  - `concurrence`: The number of tasks to run concurrently (default is 5).
  - `interval`: The interval in milliseconds between task executions (default is 0).

## License

This project is licensed under the MIT License. See the LICENSE file for details.