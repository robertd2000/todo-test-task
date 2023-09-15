import { FC } from "react";
import { NavLink } from "react-router-dom";
import style from "../../style/header.module.scss";

interface Props {
  title: string;
  url: string;
}

export const HeaderLink: FC<Props> = ({ title, url }) => {
  return (
    <li>
      <NavLink
        to={url}
        className={({ isActive, isPending }) =>
          isPending
            ? `${style.link}`
            : isActive
            ? `${style.link} underline text-black dark:text-white`
            : style.link
        }
        aria-current="page"
      >
        {title}
      </NavLink>
    </li>
  );
};
