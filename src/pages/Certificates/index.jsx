import "./style.scss";
import UserFooter from "../../components/UserFooter";
import "./style.scss";
const Certificates = () => {
  return (
    <>
      <section className="page-conquests page-notifications page-certificate bg-color-blue">
        <h2 className="fw-bold mb-2 text-white text-center">Certificados</h2>
        <h5 className="text-center text-white mb-4">
          Suas certificações estão aqui
        </h5>
        <ul className="notifications-list certificate-list list-unstyled">
          <li className="notifications-list-item certificate-list-item my-5">
            <figure className="notifications-item-image certificate-list mb-3">
              <img className="w-100" src="./img/insignia-humanas.png" alt="" />
              <figure className="certificate-image-float">
                <img
                  className="w-100"
                  src="./img/export-certificate.svg"
                  alt=""
                />
              </figure>
            </figure>
            <h3 className="text-center text-white">Língua Portuguesa</h3>
            <p className="text-white text-center">Unidades 1 a 30</p>
          </li>
          <li className="notifications-list-item certificate-list-item my-5">
            <figure className="notifications-item-image certificate-list mb-3">
              <img className="w-100" src="./img/insignia-exatas.png" alt="" />
              <figure className="certificate-image-float">
                <img
                  className="w-100"
                  src="./img/export-certificate.svg"
                  alt=""
                />
              </figure>
            </figure>
            <h3 className="text-center text-white">Matemática</h3>
            <p className="text-white text-center">Unidades 1 a 30</p>
          </li>
        </ul>
      </section>
      <UserFooter page="conquest" />
    </>
  );
};
export default Certificates;
