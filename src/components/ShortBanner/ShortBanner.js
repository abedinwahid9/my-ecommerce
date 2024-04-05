const ShortBanner = ({ img, height, margin }) => {
  return (
    <div
      className={`${margin} w-full ${height} `}
      style={{
        backgroundImage: `url(${img.src})`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    ></div>
  );
};

export default ShortBanner;
