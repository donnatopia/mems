import client from "../../db/connection";
import { QueryResult } from 'pg';

export interface MapProps {
  map_id: number;
  title: string;
  favorite: boolean;
  places_collected: number;
  places_not_collected: number;
}

export async function getCustomMaps(guide_id : number): Promise<MapProps[] | Error> {
  const customMaps = {
    name: 'get-custom-maps',
    text: `SELECT json_build_object(
      'map_id', m.id,
      'title', m.title,
      'favorite', m.favorite,
      'places_collected', (SELECT COUNT(*) FROM places p
        WHERE p.map_id = m.id AND p.status = 1),
      'places_not_collected', (SELECT COUNT(*) FROM places p
        WHERE p.map_id = m.id AND (p.status = 0 OR p.status = -1))
    )
    AS data
    FROM guides_maps gm
    JOIN maps m ON gm.map_id = m.id
    WHERE gm.guide_id = $1`,
    values: [guide_id]
  }

  return await client
    .query(customMaps)
    .then(({ rows }: QueryResult) => rows.map(row => row.data))
    .catch(err => err);
}

export async function getAllMaps(): Promise<MapProps[] | Error> {
  const allMaps = {
    name: 'get-all-maps',
    text: `SELECT json_build_object(
      'map_id', m.id,
      'title', m.title,
      'favorite', m.favorite,
      'places_collected', (SELECT COUNT(*) FROM places p
        WHERE p.map_id = m.id AND p.status = 1),
      'places_not_collected', (SELECT COUNT(*) FROM places p
        WHERE p.map_id = m.id AND (p.status = 0 OR p.status = -1))
    )
    AS data
    FROM guides_maps gm
    JOIN maps m ON gm.map_id = m.id`
  }

  return await client
    .query(allMaps)
    .then(({ rows }: QueryResult) => rows.map(row => row.data))
    .catch(err => err);
}

export async function getFavMaps(): Promise<MapProps[] | Error> {
  const favMaps = {
    name: 'get-fav-maps',
    text: `SELECT json_build_object(
      'map_id', m.id,
      'title', m.title,
      'favorite', m.favorite,
      'places_collected', (SELECT COUNT(*) FROM places p
        WHERE p.map_id = m.id
        AND p.status = 1),
      'places_not_collected', (SELECT COUNT(*) FROM places p
        WHERE p.map_id = m.id AND (p.status = 0 OR p.status = -1))
    )
    AS data
    FROM guides_maps gm
    JOIN maps m ON gm.map_id = m.id
    WHERE m.favorite = true`
  }

  return await client
    .query(favMaps)
    .then(({ rows }: QueryResult) => rows.map(row => row.data))
    .catch(err => err);
}