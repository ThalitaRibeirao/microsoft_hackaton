import "./style.scss";
import Button from "../../components/Button";
import UserFooter from "../../components/UserFooter";
const Review = () => {
  return (
    <>
      <section className="page-review bg-color-red d-flex justify-content-center align-items-center">
        <div className="container-review d-flex flex-column justify-content-center align-items-center">
          <figure className="review-image d-flex p-3 mb-3">
            <img src="./img/review-logo.svg" alt="" />
          </figure>
          <h3 className="text-white mb-2 fw-bold">6 erros pra revisar</h3>
          <h6 className="text-white mb-2 w-75 text-center mb-4">
            Faça uma lição personalizada e revise os seus erros
          </h6>
          <Button text="Revisar" color="white"/>
        </div>
      </section>
      <UserFooter page="review" />
    </>
  );
};
export default Review;
