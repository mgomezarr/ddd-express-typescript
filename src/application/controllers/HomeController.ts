import { controller, httpGet } from 'inversify-express-utils';

import { Request, Response } from "express";
import { IService } from '../../domain/interfaces/IService';
import { inject } from 'inversify';
import { TYPES } from '../config/types';

@controller('/api')
export class HomeController {
    private _service: IService;
    constructor(@inject(TYPES.IService) service: IService) {
        this._service = service;
    };

    @httpGet('/rest')
    public get(request: Request, response: Response): any {
        return response.json({
            msg: this._service.getBoolean()
        });
    };
};