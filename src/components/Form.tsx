import styles from "../styles/landing-page.module.scss";

const Form = () => {
  return (
    <form action="#" className={styles["get-started-form"]}>
      <label htmlFor="email-field">
        准备观看？ 租用账号创建或重新订阅您的会员资格。
      </label>
      <button
  className={styles["buy-btn"]}
  onClick={() => window.location.href = "https://zu.quickso.cn"}>
  账号租用
</button>

    </form>
  );
};

export default Form;
