import { Link } from "react-router-dom";
import "./style.scss";
const UserFooter = ({ page = "learn" }) => {
  return (
    <footer className="user-footer w-100">
      <ul className="footer-list list-unstyled m-0">
        <li>
          <Link
            className="footer-list-item text-color-grey-dark d-flex flex-column align-items-center text-decoration-none"
            to={"/learn"}
          >
            <figure
              className={`footer-item-image p-2 bg-color-grey-light m-0 ${
                page === "learn" ? "active" : ""
              }`}
            >
              <img className="w-100" src="./img/learn.svg" alt="" />
            </figure>
            <p className="m-0 fw-bold fs-6">Aprender</p>
          </Link>
        </li>
        <li>
          <Link
            className="footer-list-item text-color-grey-dark d-flex flex-column align-items-center text-decoration-none"
            to={"/review"}
          >
            <figure
              className={`footer-item-image p-2 bg-color-grey-light m-0 ${
                page === "review" ? "active" : null
              }`}
            >
              <img className="w-100" src="./img/review.svg" alt="" />
            </figure>
            <p className="m-0 fw-bold fs-6">Revisar</p>
          </Link>
        </li>
        <li>
          <Link
            className="footer-list-item text-color-grey-dark d-flex flex-column align-items-center text-decoration-none"
            to={"/conquests"}
          >
            <figure
              className={`footer-item-image p-2 bg-color-grey-light m-0 ${
                page === "conquest" ? "active" : null
              }`}
            >
              <img className="w-100" src="./img/conquest.svg" alt="" />
            </figure>
            <p className="m-0 fw-bold fs-6">Conquista</p>
          </Link>
        </li>
        <li>
          <Link
            className="footer-list-item text-color-grey-dark d-flex flex-column align-items-center text-decoration-none"
            to={"/profile"}
          >
            <figure className="footer-item-image bg-color-grey-light m-0">
              <img className="w-100" src="./img/profile.svg" alt="" />
            </figure>
            <p className="m-0 fw-bold fs-6">Perfil</p>
          </Link>
        </li>
      </ul>
    </footer>
  );
};
export default UserFooter;
