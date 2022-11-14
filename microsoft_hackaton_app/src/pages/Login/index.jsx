import "./style.scss";
import Button from "../../components/Button";
import Input from "../../components/Input";
const Login = () => {
  return (
    <>
      <div className="bg-page-login">
        <div className="page-home d-flex flex-column justify-content-center align-items-center">
          <div className="w-100">
            <h2 className="login-title fs-1">Entrar</h2>
            <Input type="email" placeholder="e-mail" />
            <Input type="password" placeholder="Senha" />
            <Button text="Entrar" to="/" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
