import { injectable } from "inversify";

@injectable()
export class SQLConnection {
    constructor() { };

    public returnsAnyFromDatabase(): boolean {
        return true;
    };
};