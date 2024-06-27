import * as React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";

import { Box, Container, Stack, Typography } from "@mui/material";

import Layout from "../../../component/Layout/Layout";
import { zubgback,  zubgtext } from "../../../Shared/color";
import CustomCircularProgress from "../../../Shared/CustomCircularProgress";

import { CurrencyExchangeOutlined, RedeemOutlined } from "@mui/icons-material";
function Fund() {
  const navigate = useNavigate();
 
  const goBack = () => {
    navigate(-1);
  };


  return (
    <Layout>
      <Container sx={style.container}>
        <CustomCircularProgress  />
        <Box sx={style.header}>
          <Box component={NavLink} onClick={() => goBack()}>
            <KeyboardArrowLeftOutlinedIcon />
          </Box>
          <Typography variant="body1" color="initial">
            Fund
          </Typography>
          <Typography variant="body1" color="initial">
            {" "}
          </Typography>
        </Box>
       
        <Box sx={style.securityBox}>
         
          <Stack
            direction={"row"}
             sx={style.securityItem}
          className="!flex !justify-between !p-10"
          >
            <Box className="!flex !flex-col !justify-center gap-2"
             component={NavLink}
             to="/fund/fundtransfer" >
              <Box>
                <CurrencyExchangeOutlined className="!text-red-800 !ml-8" />
              </Box>
              <Typography
              className="!text-center"
                variant="body1"
                color="initial"
                sx={style.textWithIcon}
              >
                Fund Transfer
              </Typography>
            </Box>
            <Box className="!flex !flex-col !justify-center gap-2"
             component={NavLink}
             to="/fund/fundhistory" >
              <Box>
                <RedeemOutlined className="!text-red-800 !ml-16" />
              </Box>
              <Typography
              className="!text-center"
                variant="body1"
                color="initial"
                sx={style.textWithIcon}
              >
                Fund Transfer  history
              </Typography>
            </Box>
          </Stack>
        
        </Box>
      
      </Container>
    </Layout>
  );
}

export default Fund;

export const style = {
  container: {
    background: zubgback,
    width: "100%",
    height: "100vh",
    overflow: "auto",
  },
  header: {
    padding: "10px 8px",
    background: zubgtext,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "& > p": {
      fontSize: "20px",
      fontWeight: "600",
      textAlign: "center",
      color: "white",
    },
    "& > a > svg": {
      color: "white",
      fontSize: "35px",
    },
  },
  profileImage: {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    border: "1px solid white",
    padding: "2px",
  },
  textWithIcon: {
    color: 'black',
    fontSize: "14px",
    fontWeight: "500",
  },
  sectionBox: {
    padding: "20px 10px",
    width: "95%",
    marginLeft: "2.5%",
    borderRadius: "10px",
    background: zubgtext,
    mt: "20px",
  },
  securityBox: {
    padding: "10px 10px",
    width: "95%",
    marginLeft: "2.5%",
    borderRadius: "10px",
    background: zubgtext,
    mt: "20px",
  },
  securityTitle: {
    color: "white",
    fontSize: "18px",
    fontWeight: "600",
  },
  securityItem: {
    alignItems: "center",
    justifyContent: "space-between",
    mt: "15px",
    background: zubgback,
    padding: "10px",
    borderRadius: "10px",
  },
};
