import client from '../../db/connection';
import { QueryResult } from 'pg';

export interface PlaceProps {
  place_id: number;
  title: string;
  status: number;
  city: string;
}

export async function getAMap(map_id: number): Promise<PlaceProps[] | Error> {
  const map = {
    name: 'get-a-map',
    text: `SELECT json_build_object(
      'place_id', p.id,
      'title', p.title,
      'status', p.status,
      'city', p.city
    )
    AS data
    FROM maps m
    JOIN places p ON p.map_id = m.id
    WHERE m.id = $1`,
    values: [map_id]
  }

  return await client
    .query(map)
    .then(({ rows }: QueryResult) => rows.map(row => row.data))
    .catch(err => err);
}