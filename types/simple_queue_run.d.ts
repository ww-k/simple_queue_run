// types/simple_queue_run.d.ts
declare module 'simple_queue_run' {
    interface Option {
        signal?: AbortSignal;
        concurrence?: number;
        interval?: number;
    }

    function simpleQueueRun(tasks: Array<() => Promise<any> | void>, option?: Option): Promise<void>;

    export default simpleQueueRun;
}