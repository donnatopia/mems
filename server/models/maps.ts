import client from '../db/connection';
import { QueryResult } from 'pg';

export async function getGuides(): Promise<Array<object> | Error> {
  const guides = {
    name: 'get-guides',
    text: `SELECT json_build_object(
      'guide_id', main.id,
      'title', main.title,
      'maps', (SELECT COUNT(*) FROM guides g
        JOIN guides_maps gm ON g.id = gm.guide_id
        JOIN maps m ON gm.map_id = m.id
        WHERE g.id=main.id
      ),
      'places_all', (SELECT COUNT(*) FROM guides g
        JOIN guides_maps gm ON g.id = gm.guide_id
        JOIN maps m ON gm.map_id = m.id
        JOIN places p ON m.id = p.map_id
        WHERE g.id=main.id
      ),
      'places_collected', (SELECT COUNT(*) FROM guides g
        JOIN guides_maps gm ON g.id = gm.guide_id
        JOIN maps m ON gm.map_id = m.id
        JOIN places p ON m.id = p.map_id
        WHERE g.id=main.id AND p.status = 1
      ),
      'places_not_collected', (SELECT COUNT(*) FROM guides g
        JOIN guides_maps gm ON g.id = gm.guide_id
        JOIN maps m ON gm.map_id = m.id
        JOIN places p ON m.id = p.map_id
        WHERE g.id=main.id AND (p.status = -1 OR p.status = 0)
      )
    )
    AS data
    FROM guides main`
  }

  return await client
    .query(guides)
    .then(({ rows }: QueryResult) => rows.map((row) => row.data))
    .catch(err => err);
}
