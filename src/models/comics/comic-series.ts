export interface ComicSeries {
  // private ObjectId _id;
  //
	// private boolean isPublished;
	// private String genre;
	// private String comicSeriesName;
	// private String author;
	// private Blob thumbnail;
	// private HashMap<String, Integer> rating;
	// private double score;
	// private String description;
	// private int followers;
	// private ArrayList<String> chapters;	//Change type of ArrayList to comic chapter

  _id: number;
  isPublished: boolean;
  genre: string;
  comicSeriesName: string;
  author: string;
  thumbnail: string;
  rating: string[];
  score: number;
  description: string;
  chapters: string[];
}