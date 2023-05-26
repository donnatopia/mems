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
  category: string;
  guide_id: number | null;
  title: string;
  maps: number;
  places_collected: number;
  places_not_collected: number;
}