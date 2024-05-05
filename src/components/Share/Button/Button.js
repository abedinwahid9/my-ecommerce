const Button = ({ color, width, text }) => {
  return (
    <button
      className={`${color} ${width} text-lg py-2 rounded-sm px-4  font-semibold uppercase`}
    >
      {text}
    </button>
  );
};

export default Button;
