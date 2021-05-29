import got from './dist/source/index.js';

const response = await got('https://google.com');

console.log(response.headers['content-encoding']);
