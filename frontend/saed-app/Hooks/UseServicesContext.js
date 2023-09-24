import { ServicesContext } from "../context/ServicesContext";
import { useContext , React } from "react";

export const UseServicesContext = () => {
  const context = useContext(ServicesContext);

  if (!context) {
    throw Error(
      "UseServicesContext must be used inside an servicesContextProvider"
    );
  }

  return context;
};
