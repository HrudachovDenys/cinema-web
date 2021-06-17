import axios from 'axios';
import { createStore, applyMiddleware } from 'redux';
import axiosMiddleware from 'redux-axios-middleware';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import { reducers } from './reducers';

const loggerMiddleware = createLogger();

const client = axios.create({
  baseURL: 'http://localhost:4000',
  responseType: 'json',
});

export default createStore(
  reducers,
  applyMiddleware(axiosMiddleware(client), thunkMiddleware, loggerMiddleware),
);
