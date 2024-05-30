"use client";
import DeleteBtn from "@/components/Share/DeleteBtn/DeleteBtn";
import EditButton from "@/components/Share/EditButton/EditButton";
import SpinnerLoad from "@/components/Share/Spinner/SpinnerLoad";
import {
  Typography,
  Button,
  CardFooter,
  Avatar,
  IconButton,
  Input,
} from "@material-tailwind/react";
import axios from "axios";
import { useState } from "react";
import UpdateModal from "../UpdateModal/UpdateModal";

const Table = ({ tableHead, data, isLoading }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 6;
  const pageNumbers = [];

  // get current data

  const endIndex = currentPage * itemPerPage;
  const startIndex = endIndex - itemPerPage;
  const currentItems = data?.slice(startIndex, endIndex);

  // calculate page count
  const pageCount = Math.ceil(data?.length / itemPerPage);
  for (let i = 1; i <= pageCount; i++) {
    pageNumbers.push(i);
  }

  const handlePageChange = (num) => {
    setCurrentPage(num);
  };

  const handleNext = () => {
    if (currentPage === pageCount) {
      return;
    }
    setCurrentPage(currentPage + 1);
  };
  const handlePrev = () => {
    if (currentPage === 1) {
      return;
    }
    setCurrentPage(currentPage - 1);
  };

  // item delete functionality
  const handleDelete = async (id) => {
    const res = await axios.delete(`/api/products/${id}`);

    console.log(res);
  };

  // modal functionality
  const [modalOpen, setModalOpen] = useState(true);

  const handleModal = () => {
    setModalOpen(false);
  };

  // item edit functionality
  const handleEdit = () => {
    setModalOpen(true);
  };

  return (
    <div className="h-full w-full relative">
      <div floated={false} shadow={false}>
        <div className=" p-5 flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <Typography
              variant="h5"
              color="blue-gray"
              className="dark:text-secondaryColor"
            >
              All products
            </Typography>
          </div>
          <div className="flex w-full shrink-0 gap-2 md:w-max">
            <div className="w-full md:w-72">
              <Input
                label="Search"
                // icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" px-0">
        <table className="w-full  table-auto text-left">
          <thead>
            <tr>
              {tableHead.map((head) => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70 capitalize"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <SpinnerLoad />
            ) : (
              currentItems?.map(
                (
                  { _id: id, productName, imgData, category, stock, price },
                  index
                ) => {
                  const isLast = index === data?.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";

                  return (
                    <tr key={index}>
                      <td className={classes}>
                        <div className="flex items-center gap-3">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-bold dark:text-secondaryColor"
                          >
                            {productName}
                          </Typography>
                        </div>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal dark:text-secondaryColor"
                        >
                          {imgData.length}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal dark:text-secondaryColor"
                        >
                          {category}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal dark:text-secondaryColor"
                        >
                          {stock}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal dark:text-secondaryColor"
                        >
                          {price}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <div className="flex gap-3">
                          <button
                            onClick={handleEdit}
                            className="dark:text-secondaryColor"
                          >
                            <EditButton />
                          </button>
                          <button
                            onClick={() => handleDelete(id)}
                            className="dark:text-secondaryColor"
                          >
                            <DeleteBtn />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                }
              )
            )}
          </tbody>
        </table>
      </div>

      <CardFooter
        className={`${
          data?.length > 5 ? "flex" : "hidden"
        }  items-center justify-between border-t border-blue-gray-50 p-4`}
      >
        <Button onClick={handlePrev} variant="outlined" size="sm">
          Previous
        </Button>
        <div className="flex items-center gap-2">
          {pageNumbers.map((page) => {
            return (
              <IconButton
                className={currentPage === page ? "bg-optionalColor" : ""}
                onClick={() => handlePageChange(page)}
                key={page}
                variant="outlined"
                size="sm"
              >
                {page}
              </IconButton>
            );
          })}
        </div>
        <Button onClick={handleNext} variant="outlined" size="sm">
          Next
        </Button>
      </CardFooter>
      <UpdateModal handleModal={handleModal} modalOpen={modalOpen} />
    </div>
  );
};

export default Table;
