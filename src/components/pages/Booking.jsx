import React from "react";
import Sidebar from "../Sidebar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import Cards from "../Cards";

export const Booking = () => {
  return (
    <>
      <Box height={30} />
     <Cards />
      <Box sx={{ display: "flex " }}>
        <Sidebar />
        <h1>Booking</h1>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
         
        </Box>
      </Box>
    </>
  );
};
