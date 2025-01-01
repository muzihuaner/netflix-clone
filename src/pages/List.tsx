import { CheckCircle } from "iconoir-react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import { useMyListData } from "../contexts/MyListProvider";
import styles from "../styles/list-page.module.scss";
import sliderSyles from "../styles/slider.module.scss";
import { j } from "../utils";

const List = () => {
  const { myList } = useMyListData();
  const navigate = useNavigate();

  return (
    <>
      {!myList.length ? (
        <div className={styles["no-list"]}>
          <CheckCircle />
          <p>
          将电影和电视剧添加到您的列表中，以便您轻松找到它们
            later.
          </p>
          <button onClick={() => navigate("/")}>查找要观看的内容</button>
        </div>
      ) : (
        <>
          <main className={j(sliderSyles["slider-container"], styles.main)}>
            <h1>我的清单</h1>
            <div className={sliderSyles["slider-carousel"]}>
              {/* https://stackoverflow.com/a/59459000 */}
              {myList.map((item) => {
                return (
                  <Card
                    key={item.id}
                    cardId={item.id}
                    mediaType={item.media_type}
                    posterImg={item.poster_path}
                  />
                );
              })}
            </div>
          </main>
        </>
      )}
    </>
  );
};

export default List;
