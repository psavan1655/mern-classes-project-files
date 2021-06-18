import axios from "axios";

const Signout = (next) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("jwt");
    next();

    return axios({
      url: `http://localhost:8000/api/user/signout`,
      method: "get",
    })
      .then((response) => console.log("Signout Successfull"))
      .catch((err) => console.log(err));
  }
};

export default Signout;
