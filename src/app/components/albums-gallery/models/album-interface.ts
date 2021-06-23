export interface AlbumInterface {
  artistId: string;
  title: string;
  coverUrl: string;
}

export interface AlbumResponseInterface {
  info: {
    count: number;
    next: string;
    pages: number;
    prev: string;
  };
  results: AlbumInterface[];
}