import { createContext, useState } from "react";

export const RefContext = createContext(null);

export default function RefContextProvider({ children }) {
  const [flagModalPayment, setFlagModalPayment] = useState(false);
  const handleOpenModalPayment = () => setFlagModalPayment(true);
  const handleCloseModalPayment = () => setFlagModalPayment(false);

  return (
    <RefContext.Provider
      value={{
        flagModalPayment,
        setFlagModalPayment,
        handleOpenModalPayment,
        handleCloseModalPayment,
      }}
    >
      {children}
    </RefContext.Provider>
  );
}
