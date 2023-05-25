import { Request, Response } from 'express';
import { getGuides } from '../models/maps';

export function requestGuides(req: Request, res: Response) {
  getGuides()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(404).json(err);
    })
}