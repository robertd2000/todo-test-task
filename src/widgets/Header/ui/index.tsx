import { Link } from "react-router-dom";
import { useItems } from "../model";
import { ClearCompleted } from "../../../features/ClearCompleted";
import { HeaderLink } from "./Link";
import style from "../style/header.module.scss";

export const Header = () => {
  const { items } = useItems();

  return (
    <header className={style.header}>
      <nav>
        <div className={style.headerInner}>
          <Link to={"/"} className={style.homeLink}>
            <span>TODOS</span>
          </Link>
          <div className={style.controls}>
            <ClearCompleted />
            <span>{items} items left</span>
          </div>
          <div className={style.menu}>
            <ul>
              <HeaderLink title="All" url="/" />
              <HeaderLink title="Active" url="/active" />
              <HeaderLink title="Completed" url="/completed" />
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
