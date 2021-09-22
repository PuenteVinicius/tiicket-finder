import IAtraction from "./atraction";
import { IYoutubeVideos } from "./youtube";

export default interface IArtist {
  artist: IAtraction;
  videos?: IYoutubeVideos;
}
