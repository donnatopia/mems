import { Request, Response } from "express";
import { getDetails } from "../../models/Map/places";

export function requestDetails(req: Request, res: Response) {
  const { place_id } = req.params;
  getDetails(parseInt(place_id))
    .then(result => res.status(200).json(result))
    .catch(err => res.status(404).json(err));
}