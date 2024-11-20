import React from "react";
import { TextField } from "@mui/material";
import { useState } from "react";

const LoginPage = () => {
  return (
    <div className="text-center flex justify-center">
      <div className="text-center">
        <h1>Login</h1>
        <TextField
          id="outlined-basic"
          className="text-white"
          label="Username"
          variant="outlined"
        ></TextField>
      </div>
    </div>
  );
};

export default LoginPage;
