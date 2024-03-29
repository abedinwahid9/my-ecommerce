"use client";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Tooltip,
  IconButton,
} from "@material-tailwind/react";
import Image from "next/image";
import pickle from "../../assets/pickle.jpg";
import single from "../../assets/categories/single.jpg";

const ProductCard = () => {
  return (
    <Card className="w-full drop-shadow-xl overflow-hidden">
      <div className="">
        <Image
          src={pickle}
          alt="card-image"
          className="h-full w-full object-contain"
        />
      </div>
      <CardBody>
        <div className="mb-3 flex items-center justify-between">
          <Typography variant="h6" color="blue-gray" className="font-medium">
            Wooden House, Florida
          </Typography>
          <Typography
            color="blue-gray"
            className="flex items-center gap-1.5 font-normal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="-mt-0.5 h-5 w-5 text-yellow-700"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
            5.0
          </Typography>
        </div>
        <p color="gray">Enter a freshly updated and ...</p>
        <Typography
          className="pt-3 text-center text-base font-semibold"
          color="gray"
        >
          Price: 300 ৳
        </Typography>
      </CardBody>
      <div>
        <Button
          size="lg"
          fullWidth={true}
          className="bg-optionalColor rounded-t-none text-secondaryColor text-sm font-semibold"
        >
          view details
        </Button>
      </div>
    </Card>
  );
};

export default ProductCard;
