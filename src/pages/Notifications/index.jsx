import "./style.scss";
import UserFooter from "../../components/UserFooter";
import UserHeader from "../../components/UserHeader";
import "./style.scss";
const Notifications = () => {
  return (
    <>
      <UserHeader color="purple" course="Programação" />
      <section className="page-conquests page-notifications bg-color-blue">
        <h2 className="fw-bold mb-2 text-white text-center">Conquistas</h2>
        <h5 className="text-center text-white mb-4">
          Todas as suas insígnias estão aqui
        </h5>
        <ul className="notifications-list list-unstyled">
          <li className="notifications-list-item my-5">
            <figure className="notifications-item-image mb-2">
              <img
                className="w-100"
                src="./img/notifications-profile.svg"
                alt=""
              />
              <figure className="notification-image-float">
                <img className="w-100" src="./img/insignia-exatas.png" alt="" />
              </figure>
            </figure>
            <h3 className="text-center text-white">
              <b>Profª Thalita</b> acabou de lhe conceder uma <b>insígnia!</b>
            </h3>
            <p className="text-white text-center">
              “Parabéns por concluir a unidade 2 de Língua Portuguesa!”
            </p>
          </li>
          <li className="notifications-list-item mb-5 pb-5">
            <figure className="notifications-item-image mb-2">
              <img
                className="w-100"
                src="./img/notifications-profile2.svg"
                alt=""
              />
              <figure className="notification-image-float">
                <img className="w-100" src="./img/usuario-bronze.png" alt="" />
              </figure>
            </figure>
            <h3 className="text-center text-white">
              <b>Profº Lucas</b> divulgou uma nova atividade avaliatória
            </h3>
            <p className="text-white text-center">
              “Quem terminar este desafio em 24h ganha uma insígnia de bronze!”
            </p>
          </li>
        </ul>
      </section>
      <UserFooter page="conquest" />
    </>
  );
};
export default Notifications;
