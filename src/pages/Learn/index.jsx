
import "./style.scss"
import Button from "../../components/Button";
import UserFooter from "../../components/UserFooter";
import UserHeader from "../../components/UserHeader";
const Learn = () => {
  return (
    <>
      <UserHeader />
      <section className="learn-container d-flex justify-content-center align-item-center">
        <div className="">
          <Button text="Começar" />
        </div>
      </section>
      <UserFooter />
    </>
  );
};
export default Learn;
