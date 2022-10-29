import { inject, injectable } from "inversify";
import { IRepository } from "../../domain/interfaces/IRepository";
import { IService } from "../../domain/interfaces/IService";
import { TYPES } from "../config/types";

@injectable()
export class Service implements IService {
    private _repository: IRepository;
    
    constructor(@inject(TYPES.IRepository) repository: IRepository) {
        this._repository = repository;
    };

    public getBoolean(): boolean {
        return this._repository.returnsTrue();
    };
};