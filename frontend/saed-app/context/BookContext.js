import { createContext, useReducer } from "react";

export const BookContext = createContext();

export const bookReducer = (state, action) => {
   switch (action.type) {
      case "SET_BOOK":
         return {
            books: action.payload,
         };
      case "ADD_BOOK":
         return {
            books: [action.payload, ...state.books],
         };
      case "DELETE_BOOK":
         return {
            books: state.books.filter((w) => w.id != action.payload.id),
         };
      default:
         return state;
   }
};

export const BookContextProvider = ({ children }) => {
   const [state, dispatch] = useReducer(bookReducer, {
      books: [],
   });
   console.log("BooksContext state", state);

   return (
      <BookContext.Provider value={{ ...state, dispatch }}>
         {children}
      </BookContext.Provider>
   );
};
