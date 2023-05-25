import client from '../db/connection';
import { QueryResult } from 'pg';

export async function getGuides(): Promise<Array<object> | Error> {
  const guides = {
    name: 'get-guides',
    text: 'SELECT * FROM guides'
  }

  return await client
    .query(guides)
    .then(({ rows }: QueryResult) => rows)
    .catch(err => err)
}

