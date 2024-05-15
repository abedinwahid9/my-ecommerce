"use client";
import { Card, CardBody, Typography, Button } from "@material-tailwind/react";
import Image from "next/image";
import pickle from "../../assets/pickle.jpg";
import Link from "next/link";

const ProductCard = ({ product }) => {
  const { _id, productName, itemDescription, price } = product;
  return (
    <Card className="w-full p-2 border-2 drop-shadow-sm dark:bg-black overflow-hidden dark:shadow-white">
      <div>
        <Image
          src={pickle}
          alt="card-image"
          width={0}
          height={0}
          className="h-full rounded-lg object-contain"
        />
      </div>
      <CardBody className="p-2">
        <div className=" flex items-start justify-between">
          <Typography
            variant="h5 "
            color="blue-gray"
            className="font-medium dark:text-white"
          >
            {productName}
          </Typography>
          <Typography
            color="blue-gray"
            className="flex items-center  gap-1.5 font-normal dark:text-white"
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
        <p color="gray" className="dark:text-white">
          {itemDescription.slice(0, 26)}...
        </p>
        <Typography
          className="pt-2 text-center text-base font-semibold dark:text-white"
          color="gray"
        >
          Price: {price} ৳
        </Typography>
      </CardBody>
      <div>
        <Link href={`/products/${_id}`}>
          <Button
            size="lg"
            fullWidth={true}
            className="bg-optionalColor rounded-t-none text-secondaryColor text-sm font-semibold"
          >
            view details
          </Button>
        </Link>
      </div>
    </Card>
  );
};

export default ProductCard;
