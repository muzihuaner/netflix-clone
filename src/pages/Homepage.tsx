import Banner from "../components/Banner";
import Slider from "../components/Slider";
import { MOVIE_GENRE, TV_GENRE } from "../lib/constants";
import styles from "../styles/slider.module.scss";
import type { SliderQueries } from "../types/app";

const queries: SliderQueries[] = [
  {
    title: "热门电影",
    endpoint: "discover/movie",
    params: {
      with_watch_providers: 8,
      watch_region: "US",
    },
  },
  {
    title: "Netflix独播",
    endpoint: "discover/tv",
    params: {
      with_watch_providers: 8,
      watch_region: "US",
    },
  },
  {
    title: "恐怖电影",
    endpoint: "discover/movie",
    params: {
      with_genres: MOVIE_GENRE.HORROR,
    },
  },
  {
    title: "热门节目",
    endpoint: "tv/popular",
  },
  {
    title: "脱口秀",
    endpoint: "discover/tv",
    params: {
      with_genres: TV_GENRE.TALK,
    },
  },
  {
    title: "奇幻电影",
    endpoint: "discover/movie",
    params: {
      with_genres: MOVIE_GENRE.FANTASY,
    },
  },
  {
    title: "科幻",
    endpoint: "discover/tv",
    params: {
      with_genres: TV_GENRE.SCI_FI_FANTASY,
    },
  },
  {
    title: "西部",
    endpoint: "discover/movie",
    params: {
      with_genres: MOVIE_GENRE.WESTERN,
    },
  },
];

const Homepage = () => {
  return (
    <>
      <Banner endpoint="discover/movie" />
      <div className={styles["list-container"]}>
        {queries.map((query) => (
          <Slider
            key={query.title}
            title={query.title}
            endpoint={query.endpoint}
            params={query.params}
          />
        ))}
      </div>
    </>
  );
};

export default Homepage;
