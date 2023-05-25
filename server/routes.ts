import express from 'express';
import { requestAllGuide, requestCustomGuides, requestFavGuide } from './controllers/map/guides'

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
    places_all: number,
    places_collected: number,
    places_not_collected: number,
  }
]
*/


// Provides a list of maps for a given guide
// router.get('/guides/custom/:guide_id/maps', requestAGuide);
// router.get('/guides/all/maps', requestAllMaps);
// router.get('/guides/fav/maps', requestFavMaps);


/*
[
  {
    map_id: 1,
    title: "California",
    favorite: boolean,
    places_all: number,
    places_collected: number,
    places_not_collected: number
  }
]
*/


// Provides a list of locations for a given map
// router.get('/maps/:map_id', requestAMap);

/*
[
  {
    location_id: 1,
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
        id: number
        date: string,
        content: string
      }
    ]
  }
]
*/


// Mark a map as favorite
// Delete map as favorite

// Change the status of a location

// Add a note
// Delete a note
// Edit a note

export default router;
