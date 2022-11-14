import { Link } from "react-router-dom";
import Menu from "../Menu";
import "./style.scss";
const UserHeader = ({ color = "orange", course = "Língua Portuguesa" }) => {
  return (
    <header
      className={`user-header bg-color-${color} d-flex justify-content-between`}
    >
      <Menu />
      <div
        className="course text-white d-flex align-items-center gap-1"
        data-bs-toggle="offcanvas"
        data-bs-target="#menuOffcanvasTop"
        aria-controls="offcanvasTop"
      >
        <h2 className="couser-name fs-6 m-0">{course}</h2>
        <figure className="m-0">
          <span class="material-symbols-outlined">expand_more</span>
        </figure>
      </div>
      <div className="experience d-flex align-items-center gap-2 text-white">
        <p className="amount-experience fw-bolder fs-5 m-0">342</p>
        <figure className="m-0">
          <img src="./img/xp.png" alt="XP" />
        </figure>
      </div>
      <div>
        <Link to={"/notifications"}>
          <figure className="bell m-0 border-1">
            <img className="w-100" src="./img/bell.svg" alt="" />
          </figure>
        </Link>
      </div>
    </header>
  );
};

export default UserHeader;
