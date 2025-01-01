import Banner from "../components/Banner";
import Slider from "../components/Slider";
import { TV_GENRE } from "../lib/constants";
import styles from "../styles/slider.module.scss";
import type { SliderQueries } from "../types/app";

const queries: SliderQueries[] = [
  {
    title: "热门",
    endpoint: "tv/popular",
  },
  {
    title: "热播",
    endpoint: "tv/on_the_air",
  },
  {
    title: "最受好评",
    endpoint: "tv/top_rated",
  },
  {
    title: "犯罪",
    endpoint: "discover/tv",
    params: {
      with_genres: TV_GENRE.CRIME,
    },
  },
  {
    title: "神秘",
    endpoint: "discover/tv",
    params: {
      with_genres: TV_GENRE.MYSTERY,
    },
  },
  {
    title: "动画",
    endpoint: "discover/tv",
    params: {
      with_genres: TV_GENRE.ANIMATION,
    },
  },
  {
    title: "动作冒险",
    endpoint: "discover/tv",
    params: {
      with_genres: TV_GENRE.ACTION_ADVENTURE,
    },
  },
  {
    title: "真人秀",
    endpoint: "discover/tv",
    params: {
      with_genres: TV_GENRE.REALITY,
    },
  },
];

const TVPage = () => {
  return (
    <>
      <Banner endpoint="tv/popular" />
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

export default TVPage;
