import { Request, Response } from "express";
import { getAMap } from "../../models/Map/places";

export function requestAMap(req: Request, res: Response) {
  const { map_id } = req.params;
  getAMap(parseInt(map_id))
    .then(result => res.status(200).json(result))
    .catch(err => res.status(404).json(err));
}