import { TextField, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const Navbar = () => {

  const {tasksList} = useSelector((state) => state.tasks)

  return (
    <>
        <Typography variant="h4" color={'blue'}>Project Management</Typography>
        <Typography variant="body1">{`Currently ${tasksList.length} tasks pending`}</Typography>
    </>
  )
};

export default Navbar;
