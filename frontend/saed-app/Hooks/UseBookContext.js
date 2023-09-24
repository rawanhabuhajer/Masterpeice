
import { BookContext } from "../context/BookContext";
import { useContext } from "react";

export const useBooksContext = () => {
   const context = useContext(BookContext);

   if (!context) {
      throw Error(
         "useBooksContext must be used inside an BookContextProvider"
      );
   }

   return context;
};
