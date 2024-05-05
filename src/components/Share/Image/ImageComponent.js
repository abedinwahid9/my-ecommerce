import img from "@/assets/categories/single.jpg";
import Image from "next/image";

const ImageComponent = ({ className, src }) => {
  return (
    <div className={`overflow-hidden relative ${className}`}>
      <Image src={src} alt="category" fill style={{ objectFit: "cover" }} />
    </div>
  );
};

export default ImageComponent;
