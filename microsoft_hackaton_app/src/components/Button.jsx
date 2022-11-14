import { Link } from "react-router-dom";

const Button = ({ text = "", color = "orange", to = "#" }) => {
  return (
    <Link className="text-white text-decoration-none" to={to}>
      <div className={`button-${color}`}>
        <p className="button-title text-uppercase">{text}</p>
      </div>
    </Link>
  );
};
export default Button;
