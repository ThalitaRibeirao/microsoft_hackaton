import "./style.scss";
const Menu = () => {
  return (
    <>
      <div
        className="offcanvas offcanvas-top"
        tabindex="-1"
        id="menuOffcanvasTop"
        aria-labelledby="offcanvasTopLabel"
      >
        <div className="offcanvas-menu">
          <ul className="offcanvas-list list-unstyled m-0">
            <li className="offcanvas-list-item d-flex align-content-center justify-content-between bg-color-red">
              <div className="course text-white d-flex align-items-center gap-1">
                <h2 className="couser-name fs-6 m-0">Ciências exatas</h2>
                <figure className="m-0">
                  <span className="material-symbols-outlined">expand_more</span>
                </figure>
              </div>
              <figure className="m-0">
                <img src="./img/usuario-ouro.png" alt="" />
              </figure>
            </li>
            <li className="offcanvas-list-item d-flex align-content-center justify-content-between bg-color-orange">
              <div className="course text-white d-flex align-items-center gap-1">
                <h2 className="couser-name fs-6 m-0">Ciências Humanas</h2>
                <figure className="m-0">
                  <span className="material-symbols-outlined">expand_more</span>
                </figure>
              </div>
              <figure className="m-0">
                <img src="./img/usuario-bronze.png" alt="" />
              </figure>
            </li>
            <li className="offcanvas-list-item d-flex align-content-center justify-content-between bg-color-green">
              <div className="course text-white d-flex align-items-center gap-1">
                <h2 className="couser-name fs-6 m-0">Ciências da natureza</h2>
                <figure className="m-0">
                  <span className="material-symbols-outlined">expand_more</span>
                </figure>
              </div>
              <figure className="m-0">
                <img src="./img/usuario-diamante.png" alt="" />
              </figure>
            </li>
            <li className="offcanvas-list-item d-flex align-content-center justify-content-between bg-color-purple">
              <div className="course text-white d-flex align-items-center gap-1">
                <h2 className="couser-name fs-6 m-0">Linguagens e suas tecnologias</h2>
                <figure className="m-0">
                  <span className="material-symbols-outlined">expand_more</span>
                </figure>
              </div>
              <figure className="m-0">
                <img src="./img/usuario-ouro.png" alt="" />
              </figure>
            </li>
            <li className="offcanvas-list-item d-flex align-content-center justify-content-between bg-color-blue">
              <div className="course text-white d-flex align-items-center gap-1">
                <h2 className="couser-name fs-6 m-0">Extracurriculares</h2>
                <figure className="m-0">
                  <span className="material-symbols-outlined">expand_more</span>
                </figure>
              </div>
              <figure className="m-0">
                <img src="./img/usuario-prata.png" alt="" />
              </figure>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Menu;
