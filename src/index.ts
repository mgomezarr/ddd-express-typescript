import 'reflect-metadata';

import { InversifyExpressServer } from 'inversify-express-utils';
import { Application } from 'express';
import { container } from './application/config/inversify.config';

import './application/controllers'

const server: InversifyExpressServer = new InversifyExpressServer(container);

// server.setConfig((app) => {
//     app.use(...);
// });

const app: Application = server.build();

app.listen(3000, () => {
    console.log('Listening on port 3000');
});