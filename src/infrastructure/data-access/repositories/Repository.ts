import { inject, injectable } from "inversify";
import { TYPES } from "../../../application/config/types";
import { IRepository } from "../../../domain/interfaces/IRepository";
import { ISQLConnection } from "../../../domain/interfaces/ISQLConnection";

@injectable()
export class Repository implements IRepository {
    private _sqlConnection: ISQLConnection;

    constructor(@inject(TYPES.ISQLConnection) sqlConnection: ISQLConnection) {
        this._sqlConnection = sqlConnection;
    };
    
    public returnsTrue(): boolean {
        return true;
    };
};