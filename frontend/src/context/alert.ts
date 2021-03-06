import React from 'react';


export const AlertContext = React.createContext({
  Type: "success",
  message: "",
  sendMessage: (mssg: String, Type: "success" | "error") => {}
});