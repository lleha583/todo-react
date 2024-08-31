export interface ITask {
    title:  string | undefined,
    body: string | undefined,
    important: boolean | undefined,
    complete: boolean,
    id: number,
}