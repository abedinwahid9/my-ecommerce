import Table from "@/components/DashBoard/Table/Table";

const page = () => {
  return (
    <div className="flex flex-col ">
      <h2>sidebar</h2>
      <div className="flex-1">
        <Table />
      </div>
    </div>
  );
};

export default page;
