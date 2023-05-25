import { Request, Response } from 'express';
import { getAllGuide, getFavGuide, getCustomGuides } from '../../models/Map/guides';

export function requestCustomGuides(req: Request, res: Response) {
  getCustomGuides()
    .then(result => res.status(200).json(result))
    .catch(err => res.status(404).json(err));
}

export function requestAllGuide(req: Request, res: Response) {
  getAllGuide()
    .then(result => res.status(200).json(result))
    .catch(err => res.status(404).json(err));
}

export function requestFavGuide(req: Request, res: Response) {
  getFavGuide()
    .then(result => res.status(200).json(result))
    .catch(err => res.status(404).json(err));
}