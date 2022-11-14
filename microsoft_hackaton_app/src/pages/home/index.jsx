import { Link } from "react-router-dom";
import Button from "../../components/Button";
import "./style.scss";

const Home = () => {
  return (
    <>
      <div className="bg-color-blue">
        <div className="page-home d-flex flex-column">
          <h1 className="home-title text-white">educando</h1>
          <div className="flex-grow-1 d-flex flex-column align-items-center justify-content-center">
            <div>
              <h2 className="home-subtitle text-white">
                O jeito mais legal de aprender!
              </h2>
              <Button text="Comece agora" to="/login" />
              <Button text="Comece agora" color="white" to="/criar-conta" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
