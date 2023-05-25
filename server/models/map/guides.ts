import client from '../../db/connection';
import { QueryResult } from 'pg';

export interface GuideProps {
  category: string;
  guide_id: number | null;
  title: string;
  maps: number;
  places_all: number;
  places_collected: number;
  places_not_collected: number;
}

export async function getCustomGuides(): Promise<Array<GuideProps> | Error> {
  const guides = {
    name: 'get-guides',
    text: `SELECT json_build_object(
      'category', 'custom'
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
    .then(({ rows }: QueryResult) => rows.map((row) => row.data) as Array<GuideProps>)
    .catch(err => err);
}

export async function getAllGuide(): Promise<Array<GuideProps> | Error> {
  const allGuide = {
    name: 'get-all-guides',
    text: `SELECT json_build_object(
      'category', 'all',
      'guide_id', null,
      'title', 'All Maps',
      'maps', (SELECT COUNT(*) FROM guides g
        JOIN guides_maps gm ON g.id = gm.guide_id
        JOIN maps m ON gm.map_id = m.id
      ),
      'places_all', (SELECT COUNT(*) FROM guides g
        JOIN guides_maps gm ON g.id = gm.guide_id
        JOIN maps m ON gm.map_id = m.id
        JOIN places p ON m.id = p.map_id
      ),
      'places_collected', (SELECT COUNT(*) FROM guides g
        JOIN guides_maps gm ON g.id = gm.guide_id
        JOIN maps m ON gm.map_id = m.id
        JOIN places p ON m.id = p.map_id
        WHERE p.status = 1
      ),
      'places_not_collected', (SELECT COUNT(*) FROM guides g
        JOIN guides_maps gm ON g.id = gm.guide_id
        JOIN maps m ON gm.map_id = m.id
        JOIN places p ON m.id = p.map_id
        WHERE (p.status = -1 OR p.status = 0)
      )
    )
    AS data`
  }

  return await client
    .query(allGuide)
    .then(({ rows }: QueryResult) => rows.map((row) => row.data) as Array<GuideProps>)
    .catch(err => err);
}

export async function getFavGuide(): Promise<Array<GuideProps> | Error> {
  const allGuide = {
    name: 'get-fav-guides',
    text: `SELECT json_build_object(
      'category', 'fav',
      'guide_id', null,
      'title', 'Favorites',
      'maps', (SELECT COUNT(*) FROM guides g
        JOIN guides_maps gm ON g.id = gm.guide_id
        JOIN maps m ON gm.map_id = m.id
        WHERE m.favorite = true
      ),
      'places_all', (SELECT COUNT(*) FROM guides g
        JOIN guides_maps gm ON g.id = gm.guide_id
        JOIN maps m ON gm.map_id = m.id
        JOIN places p ON m.id = p.map_id
        WHERE m.favorite = true
      ),
      'places_collected', (SELECT COUNT(*) FROM guides g
        JOIN guides_maps gm ON g.id = gm.guide_id
        JOIN maps m ON gm.map_id = m.id
        JOIN places p ON m.id = p.map_id
        WHERE m.favorite = true AND p.status = 1
      ),
      'places_not_collected', (SELECT COUNT(*) FROM guides g
        JOIN guides_maps gm ON g.id = gm.guide_id
        JOIN maps m ON gm.map_id = m.id
        JOIN places p ON m.id = p.map_id
        WHERE m.favorite = true AND (p.status = -1 OR p.status = 0)
      )
    )
    AS data`
  }

  return await client
    .query(allGuide)
    .then(({ rows }: QueryResult) => rows.map((row) => row.data) as Array<GuideProps>)
    .catch(err => err);
}
