export interface ITask {
    title:  string | undefined,
    body: string | undefined,
    important: boolean | undefined,
    completed: boolean,
    id: number,
}