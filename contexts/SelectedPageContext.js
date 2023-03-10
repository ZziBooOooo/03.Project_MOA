// import { createContext, useContext, useState } from "react";

// const SelectedPageContext = createContext();

// export const useSelectedPage = () => {
//   const [selectedPage, setSelectedPage] = useState(null);
//   const handlePageClick = (index) => {
//     setSelectedPage(index);
//   };
//   return [selectedPage, handlePageClick];
// };

// export const SelectedPageProvider = ({ children }) => {
//   const [selectedPage, handlePageClick] = useSelectedPage();
//   return (
//     <SelectedPageContext.Provider value={{ selectedPage, handlePageClick }}>
//       {children}
//     </SelectedPageContext.Provider>
//   );
// };

// export const useSelectedPageContext = () => useContext(SelectedPageContext);