import React from 'react'
import './main.css';
import Sidebar from '../Sidebar';
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography'
import Navbar from '../Navbar';
const Main = () => {
  return (
    <>
    {/* <Navbar /> */}
    <Box height={30}/>
    <Box sx={{ display: "flex "}}>
      <Sidebar />
      <h1>Main</h1>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>

      </Box>
    </Box>
    </>
  )
}

export default Main