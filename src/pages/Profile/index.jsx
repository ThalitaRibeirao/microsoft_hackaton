import { Link } from "react-router-dom";
import UserFooter from "../../components/UserFooter";
import UserHeader from "../../components/UserHeader";
import "./style.scss";

const itemBuy = (image, price) => {
  return (
    <div>
      <figure>
        <img src={image} alt=""></img>
      </figure>

      <div>
        <p>{price}</p>
        <figure>
          <img src="" alt=""></img>
        </figure>
      </div>
    </div>
  );
};

const Profile = () => {
  const data = [
    ["", 0],
    ["", 0],
    ["", 0],
    ["", 0],
    ["", 0],
    ["", 0],
    ["", 0],
    ["", 0],
  ];

  function getItensBuy(index) {
    let item = data[index];
    return itemBuy(item[0], item[1]);
  }

  return (
    <div>
      <div className="profile-container">
        <div className="profile-header">
          <div></div>
          <p>Perfil</p>
          <span className="material-icons ">settings</span>
        </div>
        <div className="profile-info">
          <div className="profile-info-content">
            <div className="profile-info-text">
              <p className="profile-title">Victor Verdi</p>
              <p>VictorVerdi1223</p>
              <p>Colégio Inovar</p>
              <p>RA 00222023</p>
            </div>
            <figure className="profile-info-image">
              <img src="./img/profile.svg" alt=""></img>
            </figure>
          </div>
          <div className="profile-buttons">
            <div className="rate-profile-button">
              <span className="material-icons">star_outline</span>
              <p>Avaliar Professores</p>
            </div>
            <Link to={"/certificates"} className="d-flex">
              <div className="certificate-profile-button d-flex gap-2 align-items-center">
                <span className="material-icons">verified</span>
                <p>Certificados</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="profile-learn">
          <div className="profile-avatar">
            <div className="profile-avatar-info">
              <p className="profile-title">Avatar</p>
              <div>
                <p>567</p>
                <figure>
                  <img src="" alt=""></img>
                </figure>
              </div>
            </div>
            <div className="create-avatar-button">
              {/* {[...Array(data.length)].keys().map((index) => getItensBuy(index))} */}
              <p>Criar meu avatar</p>
            </div>
            <div className="store-button">
              <p>Loja</p>
            </div>
          </div>
        </div>
      </div>

      <UserFooter page="profile" />
    </div>
  );
};

export default Profile;
