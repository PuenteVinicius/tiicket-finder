export default interface IAtraction {
  name: string,
  type: string,
  id: string,
  url: string,
  externalLinks: IAtractionExternalLinks,
  images: IAtractionImages[]
  classifications: IAtractionClassifications[],
}

interface IAtractionExternalLinks {
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
  ]
}

interface IAtractionImages {
  ratio: string,
  url: string,
  width: number, 
  height: number,
  fallback: false, 
}

interface IAtractionClassifications {
  primary: boolean,
  segment: IClassificationsSegment
}

interface IClassificationsSegment {
  id: string, 
  name: string,
}