import { GuideProps } from '../../../types';
import client from '../../db/connection';
import { QueryResult } from 'pg';

export async function getCustomGuides(): Promise<Array<GuideProps> | Error> {
  const customGuides = {
    name: 'get-custom-guides',
    text: `SELECT json_build_object(
      'guide_id', main.id,
      'title', main.title,
      'maps', (SELECT COUNT(*) FROM guides g
        JOIN guides_maps gm ON g.id = gm.guide_id
        JOIN maps m ON gm.map_id = m.id
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
    .query(customGuides)
    .then(({ rows }: QueryResult) => rows.map((row) => row.data) as Array<GuideProps>)
    .catch(err => err);
}

export async function getAllGuide(): Promise<Array<GuideProps> | Error> {
  const allGuide = {
    name: 'get-all-guides',
    text: `SELECT json_build_object(
      'guide_id', -1,
      'title', 'All Maps',
      'maps', (SELECT COUNT(*) FROM guides g
        JOIN guides_maps gm ON g.id = gm.guide_id
        JOIN maps m ON gm.map_id = m.id
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
  const favGuide = {
    name: 'get-fav-guides',
    text: `SELECT json_build_object(
      'guide_id', 0,
      'title', 'Favorites',
      'maps', (SELECT COUNT(*) FROM guides g
        JOIN guides_maps gm ON g.id = gm.guide_id
        JOIN maps m ON gm.map_id = m.id
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
    .query(favGuide)
    .then(({ rows }: QueryResult) => rows.map((row) => row.data) as Array<GuideProps>)
    .catch(err => err);
}

export async function getGuides(): Promise<Array<GuideProps> | Error> {
  const [customGuides, allGuide, favGuide] = await Promise.all([
    getCustomGuides(),
    getAllGuide(),
    getFavGuide()
  ]);

  if (customGuides instanceof Error) return customGuides;
  if (allGuide instanceof Error) return allGuide;
  if (favGuide instanceof Error) return favGuide;

  return [...allGuide, ...favGuide, ...customGuides];
}