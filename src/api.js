import axios from "axios";

export default axios.create({
  // //! Localhost SERVER
  // baseURL: `http://localhost:5000/`

  // //! LIVE SERVER
  baseURL: `https://letty-server.onrender.com/`,
});
