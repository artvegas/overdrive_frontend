import { Comment } from './comment';
export interface ComicChapter {
  // private ObjectId _id;
	// private String seriesId;
	// private String chapterTitle;
	// private String seriesTitle;
	// private String author;
	// private int likes;
	// private List<String> likedUsers;
	// private List<Comment> comments;
  _id: number;
  seriesId: number;
  chapterTitle: string;
  seriesTitle: string;
  author: string;
  likes: number;
  likedUsers: string[];
  comments: Comment[];

}