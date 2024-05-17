import { useEffect } from "react";
import { categoryDatas } from "@/lib/redux/feature/allCategory/allCategorySlice";
import ImageComponent from "@/components/Share/Image/ImageComponent";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks/hooks";

const CategoryTable = () => {
  const dispatch = useAppDispatch();
  const { isloading, categories, error } = useAppSelector(
    (state) => state.allCategories
  );

  useEffect(() => {
    dispatch(categoryDatas());
  }, [dispatch]);

  const handleDelete = async (id) => {
    console.log(id);
    const res = await axios.delete(`/api/categories/delete/${id}`);

    dispatch(categoryDatas());
    console.log(res);
  };

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
              Delete
            </p>
          </th>
        </tr>
      </thead>
      <tbody>
        {isloading ? (
          <p>loading...</p>
        ) : (
          categories?.map((category) => {
            return (
              <tr key={category._id}>
                <td class="p-4 b flex justify-center border-blue-gray-50">
                  <ImageComponent
                    src={category.imgData[0]}
                    className="w-20 h-20 rounded-sm"
                  />
                </td>
                <td class="p-4  border-blue-gray-50">
                  <div class="flex flex-col">
                    <p class="block font-bold dark:text-white text-md antialiased  leading-normal text-blue-gray-900">
                      {category?.categoryName}
                    </p>
                  </div>
                </td>
                <td class="p-4  border-blue-gray-50">
                  <button
                    onClick={() => {
                      handleDelete(category._id);
                    }}
                    type="button"
                  >
                    <MdDelete className="text-2xl text-error" />
                  </button>
                </td>
              </tr>
            );
          })
        )}
      </tbody>
    </table>
  );
};

export default CategoryTable;
