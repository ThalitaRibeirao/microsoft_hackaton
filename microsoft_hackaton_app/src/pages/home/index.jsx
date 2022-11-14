import { Link } from "react-router-dom";
import Button from "../../components/Button";
import "./style.scss";

const Home = () => {
  return (
    <>
      <div className="page-home-bg bg-color-blue">
        <div className="page-home d-flex flex-column justify-content-center">
          <div>
            <figure className="mx-auto w-50 my-0">
              <img className="w-100" src="./img/educando-logo.png" alt="" />
            </figure>
            <h1 className="home-title text-white text-center mb-5">educando</h1>
          </div>
          <div>
            <h2 className="home-subtitle text-white">
              O jeito mais legal de aprender!
            </h2>
            <Button text="Comece agora" to="/criar-conta" />
            <Button text="Já tenho uma conta" color="white" to="/login" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
