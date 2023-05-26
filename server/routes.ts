import express from 'express';
import { requestAllGuide, requestCustomGuides, requestFavGuide } from './controllers/Map/guides'
import { requestAllMaps, requestCustomMaps, requestFavMaps } from './controllers/Map/maps';
import { requestAMap } from './controllers/Map/places';

const router = express.Router();

// Provides a list of guides info
router.get('/guides/custom', requestCustomGuides);
router.get('/guides/all', requestAllGuide);
router.get('/guides/fav', requestFavGuide);
/*
[
  {
    category: 'custom'
    guide_id: 1,
    title: "United States",
    maps: number,
    places_collected: number,
    places_not_collected: number,
  }
]
*/


// Provides a list of maps for a given guide
router.get('/maps/all', requestAllMaps);
router.get('/maps/fav', requestFavMaps);
router.get('/maps/:guide_id', requestCustomMaps);
/*
[
  {
    map_id: 1,
    title: "California",
    favorite: boolean,
    places_collected: number,
    places_not_collected: number
  }
]
*/


// Provides a list of locations for a given map
router.get('/places/:map_id', requestAMap);
/*
[
  {
    place_id: 1,
    title: "Oakland Museum",
    status: 1,
    city: string
  }
]
*/


// Provides an object of place details
// router.get('/details/:place_id', requestAPlace);
/*
{
  place_id: 1,
  title: "Oakland Museum",
  status: 1,
  address: string,
  city: string,
  state: string,
  zip: integer,
  website: string,
  design: string,
  notes: [
    {
      note_id: number
      date: string,
      content: string
    }
  ]
}
*/


// Mark a map as favorite
// Delete map as favorite

// Change the status of a location

// Add a note
// Delete a note
// Edit a note

export default router;
