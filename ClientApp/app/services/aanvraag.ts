export class RequestPatchEvent {
    public Type: string;
    public Value: string;
    public Request: any;

    public constructor(init?: Partial<RequestPatchEvent>) {
        Object.assign(this, init);
    }
}