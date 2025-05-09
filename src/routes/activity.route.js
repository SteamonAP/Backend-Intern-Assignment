import express from 'express';

import { activityLists , activityListsById } from '../controllers/activity.controller.js';


const router = express.Router();

+ router.get("/availableactivities", activityLists);
+ router.get("/availableactivities/:id", activityListsById);

export default router;

