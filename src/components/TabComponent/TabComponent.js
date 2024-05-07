"use client";
import { Tabs, TabsHeader, Tab } from "@material-tailwind/react";

const TabComponent = ({ data, activeTab, setActiveTab }) => {
  return (
    <Tabs className="md:w-2/3 w-full" value={activeTab}>
      <TabsHeader
        className="rounded-none uppercase font-bold   border-b dark:border-black border-blue-gray-50 bg-transparent p-0"
        indicatorProps={{
          className:
            "bg-transparent dark:border-secondaryColor border-b-2 border-gray-900 shadow-none rounded-none",
        }}
      >
        {data?.map(({ categoryName, _id }) => (
          <Tab
            key={_id}
            value={categoryName}
            onClick={() => setActiveTab(categoryName)}
            className={`dark:text-white md:text-lg text-sm ${
              activeTab === categoryName
                ? "text-gray-900 dark:text-secondaryColor"
                : ""
            } `}
          >
            {categoryName}
          </Tab>
        ))}
      </TabsHeader>
    </Tabs>
  );
};

export default TabComponent;
