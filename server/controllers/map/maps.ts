import { Request, Response } from "express";
import { getAllMaps, getCustomMaps, getFavMaps } from "../../models/Map/maps";

export function requestCustomMaps(req: Request, res: Response) {
  const { guide_id } = req.params;
  getCustomMaps(parseInt(guide_id))
    .then(result => res.status(200).json(result))
    .catch(err => res.status(404).json(err));
}

export function requestAllMaps(req: Request, res: Response) {
  getAllMaps()
    .then(result => res.status(200).json(result))
    .catch(err => res.status(404).json(err));
}

export function requestFavMaps(req: Request, res: Response) {
  getFavMaps()
    .then(result => res.status(200).json(result))
    .catch(err => res.status(404).json(err));
}