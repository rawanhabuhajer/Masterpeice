import { useState , createContext} from "react";

export const ExpertsContext = createContext();


export const ExpertsProvider = ({ children }) => {
  const [experts, setExperts] = useState([]);
  return (
    <ExpertsContext.Provider value={{ experts, setExperts }}>
      {children}
    </ExpertsContext.Provider>
  );
};