import { Container } from 'inversify';
import { IRepository } from '../../domain/interfaces/IRepository';
import { IService } from '../../domain/interfaces/IService';
import { ISQLConnection } from '../../domain/interfaces/ISQLConnection';
import { SQLConnection } from '../../infrastructure/data-access/databases/SQLConnection';
import { Repository } from '../../infrastructure/data-access/repositories/Repository';
import { Service } from '../services/Service';
import { TYPES } from './types';

const container = new Container();

container.bind<IRepository>(TYPES.IRepository).to(Repository).inSingletonScope();
container.bind<IService>(TYPES.IService).to(Service).inSingletonScope();
container.bind<ISQLConnection>(TYPES.ISQLConnection).to(SQLConnection).inSingletonScope();

export { container };