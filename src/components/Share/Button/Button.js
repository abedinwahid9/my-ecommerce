const Button = ({ color, width, text }) => {
  console.log(color);
  return (
    <button
      className={`${color} ${width} text-lg py-2 rounded-sm px-4  font-semibold uppercase`}
    >
      {text}
    </button>
  );
};

export default Button;
