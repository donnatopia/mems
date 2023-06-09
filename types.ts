import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "./App";

/* ===================
  General Types
====================== */

export type NavigationProps = NativeStackScreenProps<RootStackParamList>

/* ===================
  Guide
====================== */

export interface GuideProps {
  guide_id: number;
  title: string;
  maps: number;
  places_collected: number;
  places_not_collected: number;
}

export interface MapProps {
  map_id: number;
  title: string;
  favorite: boolean;
  places_collected: number;
  places_not_collected: number;
}

/* ===================
  Map
====================== */

export interface PlaceProps {
  place_id: number;
  title: string;
  status: number;
  city: string;
}

/* ===================
  Places
====================== */

export interface DetailsProps {
  place_id: number;
  title: string;
  status: number;
  address: string;
  city: string;
  state: string;
  zip: string | number;
  website: string;
  designs: string;
  notes: NoteProps[] | null;
}

export interface NoteProps {
  note_id: number;
  date: string;
  content: string;
}