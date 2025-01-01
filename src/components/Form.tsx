import styles from "../styles/landing-page.module.scss";

const Form = () => {
  return (
    <form action="#" className={styles["get-started-form"]}>
      <label htmlFor="email-field">
        准备观看？ 输入您的电子邮件创建或重新启动您的会员资格。
      </label>
      <input
        id="email-field"
        type="email"
        autoComplete="email"
        placeholder="您的电子邮箱"
      />
      <button>开始</button>
    </form>
  );
};

export default Form;
