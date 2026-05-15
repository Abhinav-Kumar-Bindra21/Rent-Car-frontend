import { useContext } from "react";
import { createContext } from "react";

import axios from "axios";
import { toast } from "react-hot-toast";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

export const AppContext = createContext();

export const AppProvider = ({ childern }) => {
  const value = {};
  return <AppProvider value={value}>{childern}</AppProvider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
