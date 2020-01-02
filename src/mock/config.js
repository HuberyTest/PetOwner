import fetchMock from 'fetch-mock';
import './owners.js';

let env = process.env.REACT_APP_ENV;
if (env === 'prod') {
    fetchMock.config.fallbackToNetwork = 'always';
}