DROP DATABASE IF EXISTS locations;
CREATE DATABASE locations;

\c locations;

CREATE TABLE guides (
  id INTEGER PRIMARY KEY,
  title TEXT
);

-- CREATE INDEX idx_guides ON guides(id);
COPY guides (id, title) FROM '/Users/donnawong/mems/server/db/guides.csv' DELIMITER ',' CSV HEADER;

CREATE TABLE guides_maps (
  id INTEGER PRIMARY KEY,
  guide_id INTEGER REFERENCES guides(id),
  map_id INTEGER REFERENCES maps(id)
);

-- CREATE INDEX idx_guide_id ON guides_maps(guide_id);
-- CREATE INDEX idx_map_id ON guides_maps(map_id);

CREATE TABLE maps (
  id INTEGER PRIMARY KEY,
  title TEXT,
  selected BOOLEAN,
  favorite BOOLEAN,
  places INTEGER[]
);

-- CREATE INDEX idx_selected ON maps(selected);
-- CREATE INDEX idx_favorite ON maps(favorite);

CREATE TABLE places (
  id INTEGER PRIMARY KEY,
  title TEXT,
  status INTEGER,
  address TEXT,
  city TEXT,
  state TEXT,
  zip INTEGER,
  website TEXT,
  designs TEXT
);

CREATE TABLE notes (
  id INTEGER PRIMARY KEY,
  date TEXT,
  content TEXT
);

-- CREATE INDEX idx_notes ON notes(id);