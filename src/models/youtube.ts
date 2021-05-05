export default interface IYTAPIResponse {
  kind?: string;
  etag?: string;
  nextPageToken?: string;
  regionCode?: string;
  pageInfo?: {
    totalResults: number;
    resultsPerPage: number;
  };
  items?: IYoutubeVideos[];
}

export interface IYoutubeVideos {
  kind: string;
  etag: string;
  id: {
    kind: string;
    videoId: string;
  };
  snippet: ISnippet;
}

interface ISnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: IThumbnail[];
  channelTitle: string;
  liveBroadcastContent: string;
  publishTime: string;
}

interface IThumbnail {
  default: IThumbnailDetail;
  medium: IThumbnailDetail;
  high: IThumbnailDetail;
}

interface IThumbnailDetail {
  url: string;
  width: number;
  height: number;
}

interface IClassificationsSegment {}

interface IGenre {}

interface IType {}
