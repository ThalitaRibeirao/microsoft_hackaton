import "./style.scss";
const UserFooter = () => {
  return (
    <footer className="user-footer">
      <ul className="footer-list list-unstyled m-0">
        <li className="footer-list-item d-flex flex-column align-items-center">
          <figure className="footer-item-image p-2 bg-color-grey-light m-0 active">
            <img className="w-100" src="./img/learn.svg" alt="" />
          </figure>
          <p className="m-0 fw-bold fs-6">Aprender</p>
        </li>
        <li className="footer-list-item d-flex flex-column align-items-center">
          <figure className="footer-item-image p-2 bg-color-grey-light m-0">
            <img className="w-100" src="./img/review.svg" alt="" />
          </figure>
          <p className="m-0 fw-bold fs-6">Revisar</p>
        </li>
        <li className="footer-list-item d-flex flex-column align-items-center">
          <figure className="footer-item-image p-2 bg-color-grey-light m-0">
            <img className="w-100" src="./img/conquest.svg" alt="" />
          </figure>
          <p className="m-0 fw-bold fs-6">Conquista</p>
        </li>
        <li className="footer-list-item d-flex flex-column align-items-center">
          <figure className="footer-item-image bg-color-grey-light m-0">
            <img className="w-100" src="./img/profile.svg" alt="" />
          </figure>
          <p className="m-0 fw-bold fs-6">Perfil</p>
        </li>
      </ul>
    </footer>
  );
};
export default UserFooter;
