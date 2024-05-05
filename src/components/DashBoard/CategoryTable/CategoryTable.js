import Image from "next/image";
import img from "@/assets/categories/single.jpg";

const CategoryTable = () => {
  return (
    <table class="w-full mt-2 text-center table-auto ">
      <thead className="border-b-2">
        <tr>
          <th>
            <p class="block  text-md my-4 font-bold antialiased  leading-none text-blue-gray-900 dark:text-secondaryColor">
              Category Image
            </p>
          </th>
          <th>
            <p class="block  text-md my-4 font-bold antialiased  leading-none text-blue-gray-900 dark:text-secondaryColor">
              Category Name
            </p>
          </th>
          <th>
            <p class="block  text-md my-4 font-bold antialiased  leading-none text-blue-gray-900 dark:text-secondaryColor">
              Edit / Delete
            </p>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="p-4 b flex justify-center border-blue-gray-50">
            <Image
              className="w-20 h-20"
              src={img}
              width={0}
              height={0}
              alt="category"
            />
          </td>
          <td class="p-4  border-blue-gray-50">
            <div class="flex flex-col">
              <p class="block dark:text-white text-md antialiased font-normal leading-normal text-blue-gray-900">
                single
              </p>
            </div>
          </td>
          <td class="p-4  border-blue-gray-50">
            <button
              class="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  class="w-4 h-4"
                >
                  <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z"></path>
                </svg>
              </span>
            </button>
            <button
              class="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  class="w-4 h-4"
                >
                  <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z"></path>
                </svg>
              </span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default CategoryTable;
