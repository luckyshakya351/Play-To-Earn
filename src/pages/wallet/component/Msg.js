import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";
import { gamename, zubgbackgrad } from "../../../Shared/color";

const Msg = ({ handleClosemsg }) => {
  return (
    <Box sx={{ "&>p": { textAlign: "center", color: "red" } }}>
     
      <Box
        className="mt-2"
        sx={{ "&>p": { color: "white", fontSize: "15px" } }}
      >
       
        <p className=" pl-1 !text-red-600 ">* Please refrain from using the back button</p>
        <p className=" pl-5 !text-red-600 !pb-5 "> while the transaction is in progress.</p>
        <p className=" pl-1 !text-red-600 ">* The page will automatically redirect shortly</p>
        <p className=" pl-5 !text-red-600"> Please wait for 3 minutes for automatic redirection.</p>
      </Box>
   
  
      <div className="w-full mt-5 ">
        <Button
          onClick={() => handleClosemsg()}
          style={{ width: "100%", background: zubgbackgrad }}
          variant="contained"
        >
          ok
        </Button>
      </div>
    </Box>
  );
};

export default Msg;
