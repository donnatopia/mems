import { Request, Response } from 'express';
import { getAllMaps, getCustomMaps, getFavMaps, getGuides } from '../../models/Map/guides';

export function requestGuides(req: Request, res: Response) {
  getGuides()
    .then(result => res.status(200).json(result))
    .catch(err => res.status(404).json(err));
}

export function requestMaps(req: Request, res: Response) {
  const { guide_id } = req.params;

  if (guide_id === '-1') {
    getAllMaps()
      .then(result => res.status(200).json(result))
      .catch(err => res.status(404).json(err));
  } else if (guide_id === '0') {
    getFavMaps()
      .then(result => res.status(200).json(result))
      .catch(err => res.status(404).json(err));
  } else {
    getCustomMaps(parseInt(guide_id))
      .then(result => res.status(200).json(result))
      .catch(err => res.status(404).json(err));
  }
}