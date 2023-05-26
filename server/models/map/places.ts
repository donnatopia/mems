import { DetailsProps } from "../../../types";
import client from "../../db/connection";
import { QueryResult } from "pg";

export async function getDetails(place_id: number): Promise<DetailsProps | Error> {
  const details = {
    name: 'get-details',
    text: `SELECT json_build_object(
      'place_id', p.id,
      'title', p.title,
      'status', p.status,
      'address', p.address,
      'city', p.city,
      'state', p.state,
      'zip', p.zip,
      'website', p.website,
      'designs', p.designs,
      'notes', (SELECT json_agg(
        (json_build_object(
          'note_id', n.id,
          'date', n.date,
          'content', n.content
        ))
      ) FROM notes n WHERE n.places_id = p.id)
    )
    AS data
    FROM places p
    WHERE p.id = $1`,
    values: [place_id]
  }

  return await client
    .query(details)
    .then(({ rows }: QueryResult) => rows[0].data)
    .catch(err => err);
}