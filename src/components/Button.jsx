const Button = ({
  classname = "",
  children,
  onClick,
  type = "button",
  ...props
}) => {
  return (
    <button onClick={onClick} type={type} className={`${classname}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
