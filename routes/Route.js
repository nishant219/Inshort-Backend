//This file contains all the routes only implementation will be in the controller
//paths are handled here

import express from 'express';

import { getNews } from '../controller/newscontroller.js';

const route = express.Router();


route.get('/news', getNews);


export default route;