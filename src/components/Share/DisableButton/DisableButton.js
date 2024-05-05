const DisableButton = ({ width, text, color }) => {
  return (
    <button
      disabled
      className={` cursor-not-allowed opacity-25  ${color}  ${width} text-lg py-2 rounded-sm px-4  font-semibold uppercase`}
    >
      {text}
    </button>
  );
};

export default DisableButton;
