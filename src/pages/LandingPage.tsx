import Accordion from "../components/Accordion";
import Form from "../components/Form";
import Section from "../components/Section";
import { j } from "../utils";
import styles from "../styles/landing-page.module.scss";

const LandingPage = () => {
  return (
    <>
      <div className={j(styles["image-wrapper"], styles["image-section"])}>
        <Section className={styles["intro-section"]}>
          <h1>无限的电影、节目还有更多...</h1>
          <p>快飞-Quickflix-在线观影指南</p>
          <Form />
        </Section>
      </div>
      <Section>
        <div>
          <h2>享受您的电视时光</h2>
          <p>
          在智能电视、PlayStation、Xbox、Chromecast、Apple TV、蓝光播放器等设备上观看。
          </p>
        </div>
        <div className={styles["tv-demo-wrapper"]}>
          <img src="/tv.png" alt="" />
          <video
            className={styles["tv-demo-video"]}
            autoPlay
            loop
            playsInline
            muted
            src="/tv-video.m4v"></video>
        </div>
      </Section>
      <Section>
        <div>
          <h2>下载您的节目，离线观看</h2>
          <p>轻松保存您最喜爱的内容，随时都有内容可看。</p>
        </div>
        <div className={styles["mobile-demo-wrapper"]}>
          <img src="/mobile-demo.jpg" alt="" />
          <div className={styles["mobile-download-demo"]}>
            <img src="/boxshot.png" alt="" />
            <div className={styles["mobile-download-demo-title"]}>
              <p>Stranger Things</p>
              <p>Downloading...</p>
            </div>
            <img src="/download-icon.gif" alt="" />
          </div>
        </div>
      </Section>
      <Section>
        <div>
          <h2>随时随地观看.</h2>
          <p>
          畅享手机、平板、笔记本电脑和电视上的无限电影和电视剧。
          </p>
        </div>
        <div className={styles["watch-demo-wrapper"]}>
          <img src="/watch-demo.png" alt="" />
          <video
            className={styles["watch-demo-video"]}
            autoPlay
            loop
            playsInline
            muted
            src="/watch-demo-vid.m4v"></video>
        </div>
      </Section>
      <Section>
        <div>
          <h2>为儿童创建个人资料。</h2>
          <p>
          让孩子与他们最喜欢的角色一起冒险
          为他们打造专属空间 - 您的会员免费资格。
          </p>
        </div>
        <img src="/annoying-kids.png" alt="" />
      </Section>
      <Section>
        <h2>常见问题解答</h2>
        <Accordion />
        <Form />
      </Section>
    </>
  );
};

export default LandingPage;
