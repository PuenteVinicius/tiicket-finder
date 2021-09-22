import {
  TypeActractionExternalLink,
  TypeGenericNameAtraction,
  TypeClassificationsSegment,
} from "./types";

export default interface IAtraction {
  name?: string;
  type?: string;
  id?: string;
  url?: string;
  externalLinks?: IAtractionExternalLinks;
  images?: IAtractionImages[];
  classifications?: IAtractionClassifications[];
}

export interface IAtractionExternalLinks {
  youtube: TypeActractionExternalLink;
  twitter: TypeActractionExternalLink;
  facebook: TypeActractionExternalLink;
  homepage: TypeActractionExternalLink;
  instagram: TypeActractionExternalLink;
}

export interface IAtractionImages {
  ratio: string;
  url: string;
  width: number;
  height: number;
  fallback: false;
}

export interface IAtractionClassifications {
  primary: boolean;
  segment: TypeClassificationsSegment;
  genre: TypeGenericNameAtraction;
  subGenre: TypeGenericNameAtraction;
  type: TypeGenericNameAtraction;
  subType: TypeGenericNameAtraction;
}
