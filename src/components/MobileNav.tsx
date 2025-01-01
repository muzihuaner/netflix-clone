import { CinemaOld, Emoji, HomeSimple, List, Tv } from "iconoir-react";
import { NavLink } from "react-router-dom";
import { useModalDispatcher } from "../contexts/ModalContext";
import styles from "../styles/mobile-nav.module.scss";

export const navLinks = [
  { text: "主页", to: "/browse", icon: <HomeSimple /> },
  { text: "节目", to: "/tv", icon: <Tv /> },
  { text: "电影", to: "/movie", icon: <CinemaOld /> },
  { text: "我的清单", to: "/list", icon: <List /> },
];

const MobileNav = () => {
  const setModalData = useModalDispatcher();

  return (
    <nav className={styles["mobile-nav"]}>
      <ul>
        {navLinks.map((link) => (
          <li key={link.text}>
            <button>
              <NavLink to={link.to}>
                {link.icon}
                <span>{link.text}</span>
              </NavLink>
            </button>
          </li>
        ))}
        <li>
          <button
            onClick={() => {
              setModalData({ visible: true, category: "list" });
            }}>
            <Emoji />
            <span>类型</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNav;
