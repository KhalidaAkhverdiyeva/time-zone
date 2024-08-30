
// import React, { createContext, useContext, useState, ReactNode } from 'react';

// type LoadingContextType = {
//   isLoading: boolean;
//   setLoading: (loading: boolean) => void;
// };

// const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

// export const useLoading = () => {
//   const context = useContext(LoadingContext);
//   if (!context) {
//     throw new Error('useLoading must be used within a LoadingProvider');
//   }
//   return context;
// };

// export const LoadingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
//   const [isLoading, setLoading] = useState(false);

//   return (
//     <LoadingContext.Provider value={{ isLoading, setLoading }}>
//       {children}
//     </LoadingContext.Provider>
//   );
// };
