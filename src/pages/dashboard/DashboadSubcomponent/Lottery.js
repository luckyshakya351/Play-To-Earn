import { Box, Typography } from "@mui/material";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { zubgback, zubgbackgrad, zubgmid, zubgshadow, zubgtext, zubgwhite } from "../../../Shared/color";
import go from "../../../assets/images/go.png";
import scr1 from '../../../assets/images/src1.png';
import wingobg from '../../../assets/images/wingo11111.jpg';
import scr2 from '../../../assets/images/src2.png';
import scr3 from '../../../assets/images/src3.png';
import scr4 from '../../../assets/images/src4.png';
import epicWin from "../../../assets/images/PSD.jpg";
import jackpot from "../../../assets/images/PSD.jpg";
import kind from "../../../assets/images/PSD.jpg";
import megawin from "../../../assets/images/PSD.jpg";
import toast from "react-hot-toast";



const Lottery = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ transition: '0.3s !important' }}>
      <Box sx={style.root}>
        <Box sx={style.roottwo} component={NavLink} to={"/win"}>
          <Box sx={{ width: "70%", height: "100%", position: 'relative' }}>
            <Box sx={{
              position: 'absolute', top: 0, left: '0', width: '100%', height: '100%', borderRadius: '10px 0px 0px 10px',
            }}>
              <Box component='img' src={wingobg} sx={{ width: '100%', height: '100%', borderRadius: '10px 0px 0px 10px', }}></Box>
            </Box>
            <Box sx={style.titleBox}>
              <Box>
                <NavLink href="https://www.fontspace.com/category/gaming">
                  <Box sx={{ width: '150px' }} component='img' src="https://see.fontimg.com/api/renderfont4/OVGwe/eyJyIjoiZnMiLCJoIjo2MSwidyI6MTI1MCwiZnMiOjQ5LCJmZ2MiOiIjRjVGMkYyIiwiYmdjIjoiIzAwMDAwMCIsInQiOjF9/V2luZ28/sportypo-reguler.png" alt="Gaming fonts"></Box>
                </NavLink>
                <Typography variant="body1" color="initial" sx={style.textone}>
                  Guess Number Green/Red/Voilet to win
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{ width: "30%", height: "100%" }}>
            <Box component="img" sx={style.imgtwo} src={epicWin}></Box>
          </Box>
        </Box>
        <Box sx={style.roottwo} component={NavLink} onClick={() => toast("Comming Soon !")}>
          <Box sx={{ width: "70%", height: "100%", position: 'relative' }}>
            <Box sx={{
              position: 'absolute', top: 0, left: '0', width: '100%', height: '100%', borderRadius: '10px 0px 0px 10px',
            }}>
              <Box component='img' src={wingobg} sx={{ width: '100%', height: '100%', borderRadius: '10px 0px 0px 10px', }}></Box>
            </Box>
            <Box sx={style.titleBox}>
              <Box>
                <NavLink href="https://www.fontspace.com/category/gaming">
                  <Box sx={{ width: '150px' }} component='img' src="https://see.fontimg.com/api/renderfont4/JRKVB/eyJyIjoiZnMiLCJoIjo2MSwidyI6MTI1MCwiZnMiOjQ5LCJmZ2MiOiIjRjVGMkYyIiwiYmdjIjoiIzAwMDAwMCIsInQiOjF9/SzMgTE9UVEVSWQ/speed-rush.png" alt="Gaming fonts"></Box>
                </NavLink>

                <Typography variant="body1" color="initial" sx={style.textone}>
                  Guess Number Big /Small / Odd/ Even
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{ width: "30%", height: "100%" }}>
            <Box component="img" sx={style.imgtwo} src={jackpot}></Box>
          </Box>
        </Box>
        <Box sx={style.roottwo} component={NavLink} onClick={() => toast("Comming Soon !")}>
          <Box sx={{ width: "70%", height: "100%", position: 'relative' }}>
            <Box sx={{
              position: 'absolute', top: 0, left: '0', width: '100%', height: '100%', borderRadius: '10px 0px 0px 10px',
            }}>
              <Box component='img' src={wingobg} sx={{ width: '100%', height: '100%', borderRadius: '10px 0px 0px 10px', }}></Box>
            </Box>
            <Box sx={style.titleBox}>
              <Box>
                <NavLink href="https://www.fontspace.com/category/gaming">
                  <Box sx={{ width: '150px' }} component='img' src="https://see.fontimg.com/api/renderfont4/Zlg3/eyJyIjoiZnMiLCJoIjo2MSwidyI6MTI1MCwiZnMiOjQ5LCJmZ2MiOiIjRjVGMkYyIiwiYmdjIjoiIzAwMDAwMCIsInQiOjF9/NUQgTE9UVEVSWQ/vermin-vibes-v.png" alt="Gaming fonts"></Box>
                </NavLink>
                <Typography variant="body1" color="initial" sx={style.textone}>
                  Guess Number Green/Red/Voilet to win
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{ width: "30%", height: "100%" }}>
            <Box component="img" sx={style.imgtwo} src={megawin}></Box>
          </Box>
        </Box>
        <Box sx={style.roottwo} component={NavLink} to={"/trx"}>
          <Box sx={{ width: "70%", height: "100%", position: 'relative' }}>
            <Box sx={{
              position: 'absolute', top: 0, left: '0', width: '100%', height: '100%', borderRadius: '10px 0px 0px 10px',
            }}>
              <Box component='img' src={wingobg} sx={{ width: '100%', height: '100%', borderRadius: '10px 0px 0px 10px', }}></Box>
            </Box>
            <Box sx={style.titleBox}>
              <Box>
                <NavLink href="https://www.fontspace.com/category/gaming">
                  <Box sx={{ width: '150px' }} component='img' src="https://see.fontimg.com/api/renderfont4/eZRWe/eyJyIjoiZnMiLCJoIjo2MSwidyI6MTI1MCwiZnMiOjQ5LCJmZ2MiOiIjRjVGMkYyIiwiYmdjIjoiIzAwMDAwMCIsInQiOjF9/VFJYIFdJTg/techno-race-italic.png" alt="Gaming fonts"></Box>
                </NavLink>
                <Typography variant="body1" color="initial" sx={style.textone}>
                  Guess Number Green/Red/Purple to win
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{ width: "30%", height: "100%" }}>
            <Box component="img" sx={style.imgtwo} src={kind}></Box>
          </Box>
        </Box>
      </Box>
    </Box >
  );
};

export default Lottery;

const style = {
  root: {
    width: "95%",
    marginLeft: "2.5%",
    background: zubgwhite,
    boxShadow: zubgshadow,
    marginTop: "20px",
    padding: "1px 10px 10px 10px",
    borderRadius: "10px",
  },
  roottwo: {
    width: "100%",
    height: "14vh",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    mt: '10px'
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
    fontSize: "35px",
    fontWeight: "900 !important",
    fontFamily: "Trade Winds !important",
    // background: zubgbackgrad,
    // "-webkit-background-clip": "text",
    // "-webkit-text-fill-color": "transparent",
  },
  imgtwo: { width: "100%", height: "100%", borderRadius: "0px 10px 10px 0px", filter: 'brightness(0.8)', },
  imgone: { width: "100%", height: "100%", borderRadius: "0px 0px 0px 10px" },
  textone: { color: "white", fontSize: "11px", mt: 2, },
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
