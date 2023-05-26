import { Request, Response } from 'express';
import { getGuides } from '../../models/Map/guides';

export function requestGuides(req: Request, res: Response) {
  getGuides()
    .then(result => res.status(200).json(result))
    .catch(err => res.status(404).json(err));
}