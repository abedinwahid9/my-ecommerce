"use client";
// import { PencilIcon } from "@heroicons/react/24/solid";
// import {
//   ArrowDownTrayIcon,
//   MagnifyingGlassIcon,
// } from "@heroicons/react/24/outline";
import {
  Typography,
  Button,
  CardFooter,
  Avatar,
  IconButton,
  Input,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";

const Table = ({ tableHead, data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 6;
  const pageNumbers = [];

  // get current data

  const endIndex = currentPage * itemPerPage;
  const startIndex = endIndex - itemPerPage;
  const currentItems = data.slice(startIndex, endIndex);

  // calculate page count
  const pageCount = Math.ceil(data.length / itemPerPage);
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

  return (
    <div className="h-full w-full">
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
      <div className="overflow-auto px-0">
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
            {currentItems.map(
              (
                {
                  img,
                  name,
                  amount,
                  date,
                  status,
                  account,
                  accountNumber,
                  expiry,
                },
                index
              ) => {
                const isLast = index === data.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={index}>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <Avatar
                          src={img}
                          alt={name}
                          size="md"
                          className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
                        />
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-bold dark:text-secondaryColor"
                        >
                          {index} {name}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal dark:text-secondaryColor"
                      >
                        {amount}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal dark:text-secondaryColor"
                      >
                        {date}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <div className="flex gap-3">
                        <button className="dark:text-secondaryColor">
                          edit
                        </button>
                        <button className="dark:text-secondaryColor">
                          delete
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </div>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
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
    </div>
  );
};

export default Table;