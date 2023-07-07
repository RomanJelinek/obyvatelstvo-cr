import { Data } from "@/context/dataContext/dataContextTypes";

export const filterById = (data: Data, id: string): Data => {
  const filteredData: Data = {};
  Object.keys(data).forEach((year) => {
    filteredData[year] = data[year].filter((item) => item.id === id);
  });
  return filteredData;
};
