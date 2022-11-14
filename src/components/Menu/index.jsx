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
            <li>
              <div className="offcanvas-list-item d-flex align-content-center justify-content-between bg-color-red">
                <div
                  className="course text-white d-flex align-items-center gap-1"
                  data-bs-toggle="collapse"
                  data-bs-target="#menu_1"
                  aria-expanded="false"
                  aria-controls="menu_1"
                >
                  <h2 className="couser-name fs-6 m-0">Ciências exatas</h2>
                  <figure className="m-0">
                    <span className="material-symbols-outlined">
                      expand_more
                    </span>
                  </figure>
                </div>
                <figure className="m-0">
                  <img src="./img/usuario-ouro.png" alt="" />
                </figure>
              </div>
              <div class="collapse" id="menu_1">
                <div class="card card-body m-0">
                  <ol>
                    <li>Exemplo</li>
                    <li>Exemplo</li>
                    <li>Exemplo</li>
                  </ol>
                </div>
              </div>
            </li>
            <li>
              <div className="offcanvas-list-item d-flex align-content-center justify-content-between bg-color-orange">
                <div
                  className="course text-white d-flex align-items-center gap-1"
                  data-bs-toggle="collapse"
                  data-bs-target="#menu_2"
                  aria-expanded="false"
                  aria-controls="menu_2"
                >
                  <h2 className="couser-name fs-6 m-0">Ciências exatas</h2>
                  <figure className="m-0">
                    <span className="material-symbols-outlined">
                      expand_more
                    </span>
                  </figure>
                </div>
                <figure className="m-0">
                  <img src="./img/usuario-bronze.png" alt="" />
                </figure>
              </div>
              <div class="collapse" id="menu_2">
                <div class="card card-body m-0">
                  <ol>
                    <li>Exemplo</li>
                    <li>Exemplo</li>
                    <li>Exemplo</li>
                  </ol>
                </div>
              </div>
            </li>
            <li>
              <div className="offcanvas-list-item d-flex align-content-center justify-content-between bg-color-green">
                <div
                  className="course text-white d-flex align-items-center gap-1"
                  data-bs-toggle="collapse"
                  data-bs-target="#menu_3"
                  aria-expanded="false"
                  aria-controls="menu_3"
                >
                  <h2 className="couser-name fs-6 m-0">Ciências exatas</h2>
                  <figure className="m-0">
                    <span className="material-symbols-outlined">
                      expand_more
                    </span>
                  </figure>
                </div>
                <figure className="m-0">
                  <img src="./img/usuario-diamante.png" alt="" />
                </figure>
              </div>
              <div class="collapse" id="menu_3">
                <div class="card card-body m-0">
                  <ol>
                    <li>Exemplo</li>
                    <li>Exemplo</li>
                    <li>Exemplo</li>
                  </ol>
                </div>
              </div>
            </li>
            <li>
              <div className="offcanvas-list-item d-flex align-content-center justify-content-between bg-color-purple">
                <div
                  className="course text-white d-flex align-items-center gap-1"
                  data-bs-toggle="collapse"
                  data-bs-target="#menu_4"
                  aria-expanded="false"
                  aria-controls="menu_4"
                >
                  <h2 className="couser-name fs-6 m-0">Ciências exatas</h2>
                  <figure className="m-0">
                    <span className="material-symbols-outlined">
                      expand_more
                    </span>
                  </figure>
                </div>
                <figure className="m-0">
                  <img src="./img/usuario-ouro.png" alt="" />
                </figure>
              </div>
              <div class="collapse" id="menu_4">
                <div class="card card-body m-0">
                  <ol>
                    <li>Exemplo</li>
                    <li>Exemplo</li>
                    <li>Exemplo</li>
                  </ol>
                </div>
              </div>
            </li>

            <li>
              <div className="offcanvas-list-item d-flex align-content-center justify-content-between bg-color-blue">
                <div
                  className="course text-white d-flex align-items-center gap-1"
                  data-bs-toggle="collapse"
                  data-bs-target="#menu_5"
                  aria-expanded="false"
                  aria-controls="menu_5"
                >
                  <h2 className="couser-name fs-6 m-0">Ciências exatas</h2>
                  <figure className="m-0">
                    <span className="material-symbols-outlined">
                      expand_more
                    </span>
                  </figure>
                </div>
                <figure className="m-0">
                  <img src="./img/usuario-prata.png" alt="" />
                </figure>
              </div>
              <div class="collapse" id="menu_5">
                <div class="card card-body m-0">
                  <ol>
                    <li>Exemplo</li>
                    <li>Exemplo</li>
                    <li>Exemplo</li>
                  </ol>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Menu;
