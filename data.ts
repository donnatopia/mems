export const guides = [
  {
    title: 'All Maps',
    maps: 10,
    places: 50
  },
  {
    title: 'Favorites',
    maps: 1,
    places: 5
  },
  {
    title: 'United States',
    maps: 5,
    places: 25
  },
  {
    title: 'International',
    maps: 5,
    places: 25
  }
];

export const mapLocations = [
  {
    title: 'California',
    places: 5
  },
  {
    title: 'Oregon',
    places: 5
  },
  {
    title: 'Washington',
    places: 5
  },
  {
    title: 'Texas',
    places: 5
  },
  {
    title: 'Florida',
    places: 5
  },
]

export const locationsInCA = [
  {
    title: 'Oakland Museum',
    status: 1,
    address: '1000 Oak Drive',
    city: 'Oakland',
    state: 'California',
    zip: 94560,
    website: 'http://209.221.138.252/Details.aspx?location=197734',
    designs: '4P',
    notes: [
      {
        date: 'May 10, 2023',
        content: 'Free admission on Fridays'
      },
      {
        date: 'May 12, 2023',
        content: 'Marked as Collected'
      }
    ]
  },
  {
    title: 'Golden Gate Bridge',
    status: 0,
    address: 'Golden Gate Bridge',
    city: 'San Francisco',
    state: 'California',
    zip: 94129,
    website: 'http://goldengatebridge.org/',
    designs: '1A',
    notes: [
      {
        date: 'May 15, 2023',
        content: 'Beautiful views of the bay'
      },
      {
        date: 'May 18, 2023',
        content: 'Not collected yet'
      }
    ]
  },
  {
    title: 'Yosemite National Park',
    status: 1,
    address: 'Yosemite National Park',
    city: 'Yosemite',
    state: 'California',
    zip: 95389,
    website: 'https://www.nps.gov/yose/index.htm',
    designs: '3B',
    notes: [
      {
        date: 'May 20, 2023',
        content: 'Collected during hiking trip'
      }
    ]
  },
  {
    title: 'Disneyland',
    status: -1,
    address: '1313 Disneyland Dr',
    city: 'Anaheim',
    state: 'California',
    zip: 92802,
    website: 'https://disneyland.disney.go.com/',
    designs: '2C',
    notes: [
      {
        date: 'May 22, 2023',
        content: 'Out of order due to maintenance'
      }
    ]
  },
  {
    title: 'Hollywood Walk of Fame',
    status: 1,
    address: 'Hollywood Blvd & Vine St',
    city: 'Los Angeles',
    state: 'California',
    zip: 90028,
    website: 'http://www.walkoffame.com/',
    designs: '5D',
    notes: [
      {
        date: 'May 25, 2023',
        content: 'Collected famous celebrity stars'
      }
    ]
  }
]

export const locationsInOR = [
  // Location 1
  {
    title: 'Columbia River Gorge',
    status: 1,
    address: 'Columbia River Gorge',
    city: 'Hood River',
    state: 'Oregon',
    zip: 97031,
    website: 'https://www.fs.usda.gov/crgnsa',
    designs: '2E',
    notes: [
      {
        date: 'May 28, 2023',
        content: 'Breath-taking waterfalls'
      }
    ]
  },
  // Location 2
  {
    title: 'Crater Lake National Park',
    status: 0,
    address: 'Crater Lake National Park',
    city: 'Crater Lake',
    state: 'Oregon',
    zip: 97604,
    website: 'https://www.nps.gov/crla/index.htm',
    designs: '3F',
    notes: [
      {
        date: 'June 1, 2023',
        content: 'Stunningly beautiful blue lake'
      }
    ]
  },
  // Location 3
  {
    title: 'Powell\'s City of Books',
    status: 1,
    address: '1005 W Burnside St',
    city: 'Portland',
    state: 'Oregon',
    zip: 97209,
    website: 'https://www.powells.com/',
    designs: '4G',
    notes: [
      {
        date: 'June 5, 2023',
        content: 'Largest independent bookstore in the world'
      }
    ]
  },
  // Location 4
  {
    title: 'Oregon Coast',
    status: -1,
    address: 'Oregon Coast',
    city: 'Various Cities',
    state: 'Oregon',
    zip: null,
    website: 'https://visittheoregoncoast.com/',
    designs: '1H',
    notes: [
      {
        date: 'June 8, 2023',
        content: 'Scenic beaches and coastal views'
      }
    ]
  },
  // Location 5
  {
    title: 'Mount Hood',
    status: 1,
    address: 'Mount Hood',
    city: 'Mount Hood Village',
    state: 'Oregon',
    zip: 97011,
    website: 'https://www.fs.usda.gov/mthood',
    designs: '5I',
    notes: [
      {
        date: 'June 12, 2023',
        content: 'Popular destination for hiking and skiing'
      }
    ]
  }
];

export const locationsInWA = [
  // Location 1
  {
    title: 'Space Needle',
    status: 1,
    address: '400 Broad St',
    city: 'Seattle',
    state: 'Washington',
    zip: 98109,
    website: 'https://www.spaceneedle.com/',
    designs: '3J',
    notes: [
      {
        date: 'June 15, 2023',
        content: 'Iconic landmark with panoramic views'
      }
    ]
  },
  // Location 2
  {
    title: 'Pike Place Market',
    status: 0,
    address: '85 Pike St',
    city: 'Seattle',
    state: 'Washington',
    zip: 98101,
    website: 'http://pikeplacemarket.org/',
    designs: '2K',
    notes: [
      {
        date: 'June 18, 2023',
        content: 'Vibrant marketplace with fresh food and crafts'
      }
    ]
  },
  // Location 3
  {
    title: 'Olympic National Park',
    status: 1,
    address: 'Olympic National Park',
    city: 'Port Angeles',
    state: 'Washington',
    zip: 98362,
    website: 'https://www.nps.gov/olym/index.htm',
    designs: '4L',
    notes: [
      {
        date: 'June 22, 2023',
        content: 'Diverse ecosystems and stunning landscapes'
      }
    ]
  },
  // Location 4
  {
    title: 'Mount Rainier National Park',
    status: -1,
    address: 'Mount Rainier National Park',
    city: 'Ashford',
    state: 'Washington',
    zip: 98304,
    website: 'https://www.nps.gov/mora/index.htm',
    designs: '1M',
    notes: [
      {
        date: 'June 25, 2023',
        content: 'Majestic mountain with hiking trails'
      }
    ]
  },
  // Location 5
  {
    title: 'San Juan Islands',
    status: 1,
    address: 'San Juan Islands',
    city: 'Friday Harbor',
    state: 'Washington',
    zip: 98250,
    website: 'https://www.visitsanjuans.com/',
    designs: '5N',
    notes: [
      {
        date: 'June 28, 2023',
        content: 'Beautiful islands for kayaking and wildlife viewing'
      }
    ]
  }
];

export const locationsInTX = [
  // Location 1
  {
    title: 'The Alamo',
    status: 1,
    address: '300 Alamo Plaza',
    city: 'San Antonio',
    state: 'Texas',
    zip: 78205,
    website: 'https://www.thealamo.org/',
    designs: '1O',
    notes: [
      {
        date: 'July 1, 2023',
        content: 'Historic mission and symbol of Texas independence'
      }
    ]
  },
  // Location 2
  {
    title: 'Space Center Houston',
    status: 0,
    address: '1601 NASA Pkwy',
    city: 'Houston',
    state: 'Texas',
    zip: 77058,
    website: 'https://spacecenter.org/',
    designs: '3P',
    notes: [
      {
        date: 'July 4, 2023',
        content: 'Explore space artifacts and learn about NASA'
      }
    ]
  },
  // Location 3
  {
    title: 'River Walk',
    status: 1,
    address: 'San Antonio River Walk',
    city: 'San Antonio',
    state: 'Texas',
    zip: 78205,
    website: 'https://www.thesanantonioriverwalk.com/',
    designs: '4Q',
    notes: [
      {
        date: 'July 8, 2023',
        content: 'Scenic waterway with shops and restaurants'
      }
    ]
  },
  // Location 4
  {
    title: 'Big Bend National Park',
    status: -1,
    address: 'Big Bend National Park',
    city: 'Big Bend National Park',
    state: 'Texas',
    zip: 79834,
    website: 'https://www.nps.gov/bibe/index.htm',
    designs: '2R',
    notes: [
      {
        date: 'July 11, 2023',
        content: 'Vast desert and rugged mountain landscapes'
      }
    ]
  },
  // Location 5
  {
    title: 'Austin State Capitol',
    status: 1,
    address: '1100 Congress Ave',
    city: 'Austin',
    state: 'Texas',
    zip: 78701,
    website: 'https://tspb.texas.gov/prop/tc/tc/capitol.html',
    designs: '5S',
    notes: [
      {
        date: 'July 15, 2023',
        content: 'Historic government building with beautiful architecture'
      }
    ]
  }
];

export const locationsInFL = [
  // Location 1
  {
    title: 'Walt Disney World Resort',
    status: 1,
    address: 'Walt Disney World Resort',
    city: 'Lake Buena Vista',
    state: 'Florida',
    zip: 32830,
    website: 'https://disneyworld.disney.go.com/',
    designs: '5T',
    notes: [
      {
        date: 'July 18, 2023',
        content: 'Magical theme park experience'
      }
    ]
  },
  // Location 2
  {
    title: 'Everglades National Park',
    status: 0,
    address: 'Everglades National Park',
    city: 'Homestead',
    state: 'Florida',
    zip: 33034,
    website: 'https://www.nps.gov/ever/index.htm',
    designs: '3U',
    notes: [
      {
        date: 'July 22, 2023',
        content: 'Unique wetland ecosystem with diverse wildlife'
      }
    ]
  },
  // Location 3
  {
    title: 'Miami Beach',
    status: 1,
    address: 'Miami Beach',
    city: 'Miami Beach',
    state: 'Florida',
    zip: 33139,
    website: 'https://www.miamiandbeaches.com/',
    designs: '2V',
    notes: [
      {
        date: 'July 25, 2023',
        content: 'Tropical beach paradise with vibrant nightlife'
      }
    ]
  },
  // Location 4
  {
    title: 'Kennedy Space Center',
    status: -1,
    address: 'Kennedy Space Center',
    city: 'Merritt Island',
    state: 'Florida',
    zip: 32899,
    website: 'https://www.kennedyspacecenter.com/',
    designs: '1W',
    notes: [
      {
        date: 'July 28, 2023',
        content: 'Explore space history and witness rocket launches'
      }
    ]
  },
  // Location 5
  {
    title: 'Key West',
    status: 1,
    address: 'Key West',
    city: 'Key West',
    state: 'Florida',
    zip: 33040,
    website: 'https://fla-keys.com/key-west/',
    designs: '4X',
    notes: [
      {
        date: 'August 1, 2023',
        content: 'Quaint island town with beautiful sunsets'
      }
    ]
  }
];