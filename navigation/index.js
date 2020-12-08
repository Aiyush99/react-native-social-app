import React from "react";
import Routes from './Routes';
import {AuthProvider} from "./AuthProvide";

const Provider = () => {
  return (
    <AuthProvider>
   <Routes/>
   </AuthProvider> 
  );
}

export default Provider;