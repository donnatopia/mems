import express from 'express';
import { requestGuides } from './controllers/maps'

const router = express.Router();

router.get('/guides', requestGuides);

export default router;
