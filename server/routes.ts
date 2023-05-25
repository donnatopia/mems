import express from 'express';
import { requestGuides } from './controllers/maps'

const router = express.Router();

// Provides a list of all the guides
router.get('/guides', requestGuides);
/*
[
  {
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
// router.get('/guides/:guide_id', requestAGuide);
// router.get('/guides/all', requestAllMaps);
// router.get('/guides/fav', requestFavMaps);


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
