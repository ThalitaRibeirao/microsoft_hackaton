import "./style.scss";
const UserHeader = () => {
  return (
    <header className="user-header bg-color-orange d-flex justify-content-between">
      <div className="course text-white d-flex align-items-center gap-1">
        <h2 className="couser-name fs-6 m-0">Língua Portuguesa</h2>
        <figure className="m-0">
          <span class="material-symbols-outlined">expand_more</span>
        </figure>
      </div>
      <div className="experience d-flex align-items-center gap-2 text-white">
        <p className="amount-experience fw-bolder fs-5 m-0">342</p>
        <figure className="m-0">
          <img src="./img/xp.png" alt="XP" />
        </figure>
      </div>
      <div>
        <figure className="bell m-0 border-1">
          <img className="w-100" src="./img/bell.svg" alt="" />
        </figure>
      </div>
    </header>
  );
};

export default UserHeader;
