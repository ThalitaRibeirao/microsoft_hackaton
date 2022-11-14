import UserFooter from "../../components/UserFooter";
import UserHeader from "../../components/UserHeader";
import "./style.scss";
const Conquest = () => {
  return (
    <>
      <UserHeader color="purple" course="Programação" />
      <section className="page-conquests bg-color-green">
        <h2 className="fw-bold mb-2 text-white text-center">Conquistas</h2>
        <h5 className="text-center text-white mb-3">
          Todas as suas insígnias estão aqui
        </h5>
        <ul className="conquest-list list-unstyled mx-auto">
          <li className="conquest-list-item d-flex align-items-center gap-2 mb-5">
            <figure className="m-0">
              <img
                className="w-100"
                src="./img/insignia-exatas.png"
                alt="insígnia"
              />
            </figure>
            <div>
              <p className="text-white fs-5 m-0">
                <b>1</b> Insígnia
              </p>
              <p className="text-white fs-5 fw-bold m-0">Ciências exatas</p>
            </div>
          </li>
          <li className="conquest-list-item d-flex align-items-center gap-2 mb-5">
            <figure className="m-0">
              <img
                className="w-100"
                src="./img/insignia-extracurriculares.png"
                alt="insígnia"
              />
            </figure>
            <div>
              <p className="text-white fs-5 m-0">
                <b>1</b> Insígnia
              </p>
              <p className="text-white fs-5 fw-bold m-0">Extracurricular</p>
            </div>
          </li>
          <li className="conquest-list-item d-flex align-items-center gap-2 mb-5">
            <figure className="m-0">
              <img
                className="w-100"
                src="./img/insignia-humanas.png"
                alt="insígnia"
              />
            </figure>
            <div>
              <p className="text-white fs-5 m-0">
                <b>1</b> Insígnia
              </p>
              <p className="text-white fs-5 fw-bold m-0">Ciências Humanas</p>
            </div>
          </li>
          <li className="conquest-list-item d-flex align-items-center gap-2 mb-5">
            <figure className="m-0">
              <img
                className="w-100"
                src="./img/insignia-ciencias.png"
                alt="insígnia"
              />
            </figure>
            <div>
              <p className="text-white fs-5 m-0">
                <b>1</b> Insígnia
              </p>
              <p className="text-white fs-5 fw-bold m-0">
                Ciências da Natureza
              </p>
            </div>
          </li>
          <li className="conquest-list-item d-flex align-items-center gap-2 mb-5">
            <figure className="m-0">
              <img
                className="w-100"
                src="./img/insignia-linguagens.png"
                alt="insígnia"
              />
            </figure>
            <div>
              <p className="text-white fs-5 m-0">
                <b>1</b> Insígnia
              </p>
              <p className="text-white fs-5 fw-bold m-0">
                Linguagens e <br /> suas Tecnologias
              </p>
            </div>
          </li>
        </ul>
      </section>
      <UserFooter page="conquest"/>
    </>
  );
};
export default Conquest;
