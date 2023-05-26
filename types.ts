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