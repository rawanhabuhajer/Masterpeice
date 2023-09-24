import { ExpertsContext } from "../context/ExpertsContext";
import { useContext , React } from "react";

export const UseExpertContext = () => {
  const context = useContext(ExpertsContext);

  if (!context) {
    throw Error(
      "UseExpertContext must be used inside an ExpertContextProvider"
    );
  }

  return context;
};
