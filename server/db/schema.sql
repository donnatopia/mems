\c donnawong;

DROP DATABASE IF EXISTS locations;
CREATE DATABASE locations;

\c locations;

CREATE TABLE guides (
  id INTEGER PRIMARY KEY,
  title TEXT
);

COPY guides (id, title) FROM '/Users/donnawong/mems/server/data/guides.csv' DELIMITER ',' CSV HEADER;

CREATE TABLE maps (
  id INTEGER PRIMARY KEY,
  title TEXT,
  favorite BOOLEAN
);

COPY maps (id, title, favorite) FROM '/Users/donnawong/mems/server/data/maps.csv' DELIMITER ',' CSV HEADER;

CREATE TABLE guides_maps (
  id INTEGER PRIMARY KEY,
  guide_id INTEGER REFERENCES guides(id),
  map_id INTEGER REFERENCES maps(id)
);

COPY guides_maps (id, guide_id, map_id) FROM '/Users/donnawong/mems/server/data/guides_maps.csv' DELIMITER ',' CSV HEADER;

CREATE TABLE places (
  id INTEGER PRIMARY KEY,
  map_id INTEGER REFERENCES maps(id),
  title TEXT,
  status INTEGER,
  address TEXT,
  city TEXT,
  state TEXT,
  zip VARCHAR,
  website TEXT,
  designs TEXT
);

COPY places (id, map_id, title, status, address, city, state, zip, website, designs) FROM '/Users/donnawong/mems/server/data/places.csv' DELIMITER ',' CSV HEADER;

CREATE TABLE notes (
  id INTEGER PRIMARY KEY,
  places_id INTEGER,
  date TEXT,
  content TEXT
);