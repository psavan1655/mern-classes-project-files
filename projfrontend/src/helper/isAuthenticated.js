import React from "react";

const isAuthenticated = () => {
  if (window.localStorage.jwt) {
    return true;
  } else {
    return false;
  }
};

export default isAuthenticated;
