import Banner from "../components/Banner";
import Slider from "../components/Slider";
import { MOVIE_GENRE } from "../lib/constants";
import styles from "../styles/slider.module.scss";
import type { SliderQueries } from "../types/app";

const queries: SliderQueries[] = [
  {
    title: "热门",
    endpoint: "movie/popular",
  },
  {
    title: "即将上映",
    endpoint: "movie/upcoming",
  },
  {
    title: "最受好评",
    endpoint: "movie/top_rated",
  },
  {
    title: "犯罪惊悚",
    endpoint: "discover/movie",
    params: {
      with_genres: [MOVIE_GENRE.CRIME, MOVIE_GENRE.THRILLER],
    },
  },
  {
    title: "动画",
    endpoint: "discover/movie",
    params: {
      with_genres: MOVIE_GENRE.ANIMATION,
    },
  },
  {
    title: "纪录片",
    endpoint: "discover/movie",
    params: {
      with_genres: MOVIE_GENRE.DOCUMENTARY,
    },
  },
  {
    title: "浪漫",
    endpoint: "discover/movie",
    params: {
      with_genres: MOVIE_GENRE.ROMANCE,
    },
  },
  {
    title: "家庭",
    endpoint: "discover/movie",
    params: {
      with_genres: MOVIE_GENRE.FAMILY,
    },
  },
];

const MoviePage = () => {
  return (
    <>
      <Banner endpoint="movie/popular" />
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

export default MoviePage;
