declare function simpleQueueRun(
	tasks: Array<() => Promise<any> | void>,
	option?: {
		signal?: AbortSignal;
		concurrence?: number;
		interval?: number;
	},
): Promise<void>;

export default simpleQueueRun;
