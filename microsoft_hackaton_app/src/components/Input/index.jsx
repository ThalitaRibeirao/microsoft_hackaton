import "./style.scss";

const Input = ({ placeholder = "", type = "text" }) => {
  const isPassword = type === "password";
  return (
    <label
      className={`input-password w-100 my-2 d-flex align-items-center ${
        isPassword ? "pe-5" : null
      }`}
    >
      <input
        className="w-100 h-100 b-d-none text-color-grey-md"
        placeholder={placeholder}
        type={type}
      />
      {isPassword ? (
        <figure className="m-0">
          <span class="material-symbols-outlined">visibility</span>
        </figure>
      ) : null}
    </label>
  );
};
export default Input;
