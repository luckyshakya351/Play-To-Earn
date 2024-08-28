import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { zubgback, zubgbackgrad, zubgmid } from "../../../Shared/color";
import go from "../../../assets/images/go.png";
import scr1 from '../../../assets/images/src1.png';
import kind from "../../../assets/images/win1/aviater.jpg";
import axios from "axios";
import { endpoint } from "../../../services/urls";

const Original = () => {
  const [status, setStatus] = useState([]);
  
  const getStatus = async () => {
    try {
      const res = await axios.get(endpoint.get_status);
      setStatus(res?.data?.data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getStatus();
  }, []);

  return (
    <Box>
      <Box sx={style.root}>
        <Box sx={style.roottwo} component={NavLink} 
        to={status?.find((i)=>i?.title==="aviator_status")?.status!== "0" && "/playgame"}
         >
          <Box sx={{ width: "70%", height: "100%", position: 'relative' }}>
            <Box sx={{
              position: 'absolute', top: 0, left: '0', width: '100%', height: '100%', borderRadius: '10px 0px 0px 10px',
            }}>
              <Box component='img' src={scr1} sx={{ width: '100%', height: '100%', borderRadius: '10px 0px 0px 10px', opacity: '0.2' }}></Box>
            </Box>
            <Box sx={style.titleBox}>
              <Box>
                <Typography variant="body1" color="initial" className="gametitle">
                  Aviator
                </Typography>
              </Box>
              <Box>
                <Box component="img" width={65} src={go}></Box>
              </Box>
            </Box>
          </Box>
          <Box sx={{ width: "30%", height: "100%" }}>
            <Box component="img" sx={style.imgtwo} src={kind}></Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Original;

const style = {
  root: {
    width: "95%",
    marginLeft: "2.5%",
    background: zubgmid,
    marginTop: "20px",
    padding: "1px 10px 10px 10px",
    borderRadius: "10px",
  },
  roottwo: {
    mt: "10px",
    width: "100%",
    height: "14vh",
    background: zubgback,
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  titleBox: {
    width: "100%",
    padding: "10px 0px 0px 10px",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: 'relative',
  },

  title: {
    lineHeight: "1.5",
    textAlign: "start",
    color: "white",
    fontSize: "45px",
    fontWeight: "900 !important",
    fontFamily: "Trade Winds !important",
    background: zubgbackgrad,
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
  },
  imgtwo: { width: "100%", height: "100%", borderRadius: "0px 10px 10px 0px" },
  imgone: { width: "100%", height: "100%", borderRadius: "0px 0px 0px 10px" },
  textone: { color: "white", fontSize: "13px" },
  texttow: { color: "white", fontSize: "10px", mr: "5px" },
  btmbox: {
    width: "100%",
    height: "45%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    textAlign: "center",
  },
};

