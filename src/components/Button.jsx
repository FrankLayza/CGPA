const Button = ({
  classname = "",
  children,
  onClick,
  type = "button",
  size = "btn-md",
  ...props
}) => {
  return (
    <button onClick={onClick} type={type} className={`${classname}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
