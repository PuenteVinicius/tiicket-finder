export default interface IAtraction {
  name?: string,
  type?: string,
  id?: string,
  url?: string,
  externalLinks?: IAtractionExternalLinks,
  images?: IAtractionImages[]
  classifications?: IAtractionClassifications[],
}

export interface IAtractionExternalLinks {
  youtube: [
    {
      url: string
    }
  ],
  twitter: [
    {
      url: string
    }
  ],
  facebook: [
    {
      url: string
    }
  ],
  homepage: [
    {
      url: string
    }
  ],
  instagram: [
    {
      url: string
    }
  ]
}

export interface IAtractionImages {
  ratio: string,
  url: string,
  width: number, 
  height: number,
  fallback: false, 
}

export interface IAtractionClassifications {
  primary: boolean,
  segment: IClassificationsSegment
  genre: IGenre,
  subGenre: IGenre,
  type: IType,
  subType: IType,
}

interface IClassificationsSegment {
  id: string, 
  name: string,
}

interface IGenre {
  name: string
}

interface IType {
  name: string
}