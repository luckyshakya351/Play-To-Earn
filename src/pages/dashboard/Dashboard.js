import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import TelegramIcon from "@mui/icons-material/Telegram";
import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  Container,
  Dialog,
  DialogContent,
  Slide,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import copy from "clipboard-copy";
import CryptoJS from "crypto-js";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { RxCross2 } from "react-icons/rx";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { checkTokenValidity } from "../../Shared/CookieStorage";
import CustomCircularProgress from "../../Shared/CustomCircularProgress";
import {
  gray,
  zubgback,
  zubgmid,
  zubgshadow,
  zubgtext,
  zubgwhite
} from "../../Shared/color";
import aviator_game_image from "../../assets/aviator_game_image.png";
import one from "../../assets/images/1.jpg";
import three from "../../assets/images/123.png";
import two from "../../assets/images/2.jpg";
import bgms from "../../assets/images/bgms1.png";
import gmbg from "../../assets/images/gmbg.jpg";
import winp4 from "../../assets/images/jacpot.jpg";
import logo from "../../assets/images/logo-2 (2).png";
import cash from "../../assets/images/money.png";
import stage from "../../assets/images/pod2.png";
import position2 from "../../assets/images/positio2.png";
import position3 from "../../assets/images/position3.png";
import position1 from "../../assets/images/positoin1.png";
import deposit from "../../assets/images/security-box.png";
import sajid from "../../assets/sajid.PNG";
import tanveer from "../../assets/tanveer.PNG";
import Layout from "../../component/Layout/Layout";
import {
  please_reconnect_the_serverFun,
  waitingAviatorFun,
} from "../../redux/slices/counterSlice";
import {
  get_user_data_fn,
  walletamount
} from "../../services/apicalling";
import {
  endpoint,
  fron_end_main_domain,
  support_mail,
  telegram_url
} from "../../services/urls";
import Lottery from "./DashboadSubcomponent/Lottery";
import Original from "./DashboadSubcomponent/Original";
import Sports from "./DashboadSubcomponent/Sports";
import Notification from "./Notification";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Dashboard() {
  const dispatch = useDispatch();
  const aviator_login_data = useSelector(
    (state) => state.aviator.aviator_login_data
  );

  const isAvailableUser = sessionStorage.getItem("isAvailableUser");
  const value =
    (localStorage.getItem("logindataen") &&
      CryptoJS.AES.decrypt(
        localStorage.getItem("logindataen"),
        "anand"
      )?.toString(CryptoJS.enc.Utf8)) ||
    null;
  const navigate = useNavigate();
  const [poicy, setpoicy] = React.useState(false);
  const [type_of_game, settype_of_game] = React.useState("");
  const user_id = value && JSON.parse(value).UserID;
  const [winnner_data, setwinnerdata] = useState([]);
  const [openbannerurl, setopenbannerurl] = useState(""); 
  const [loding, setloding] = useState(false);
  const [lodingBanner, setlodingBanner] = useState(false);


  useEffect(() => {
    if (!checkTokenValidity()) {
      localStorage.clear();
      sessionStorage.clear();
      window.location.href = "/"; 
    }
  }, []);

  const functionTOCopy = (value) => {
    copy(value);
    toast.success("Copied to clipboard!");
  };

  const top11WinnerFunction = async () => {
    setloding(true);
    try {
      const response = await axios.get(`${endpoint.top11winner}`);
      setwinnerdata(response?.data?.data);
    } catch (e) {
      toast(e?.message);
      console.log(e);
    }
    setloding(false);
  };

  useEffect(() => {
    top11WinnerFunction();
  }, []);

  const { isLoading, data } = useQuery(["walletamount"], () => walletamount(), {
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus:false,
    retryOnMount:false,

  });

  const newdata = data?.data?.data || 0;


  useEffect(() => {
    openbannerFunction();
    localStorage.removeItem("amount_set");
    localStorage.removeItem("Deposit_type");
    localStorage.removeItem("server_provider");
  }, []);

  const openbannerFunction = async () => {
    setlodingBanner(true);
    try {
      const response = await axios.get(`${endpoint.openbannerUrl}`);
      setopenbannerurl(response?.data?.image);
    } catch (e) {
      toast(e?.message);
      console.log(e);
    }
    setlodingBanner(false);
  };
  const initialValues = {
    referrel_code: `${fron_end_main_domain}/register?ref=${newdata?.referral_code}`, 
  };

  const fk = useFormik({
    initialValues: initialValues,
    enableReinitialize: true,
    onSubmit: () => {
      console.log("This is handle submit");
    },
  });

  const handleClosepolicy = () => {
    setpoicy(false);
    sessionStorage.removeItem("isAvailableUser");
  };
  useEffect(() => {
    if (isAvailableUser) {
      setpoicy(true);
    }
  }, []);

  useEffect(() => {
    dispatch(waitingAviatorFun(true));
    dispatch(please_reconnect_the_serverFun(false));
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    !aviator_login_data && get_user_data_fn(dispatch);
  }, []);


  const game_data = [
    {
      name: "Lottery",
      img: "https://ossimg.bdgadminbdg.com/IndiaBDG/gamecategory/gamecategory_202401100619315n2k.png",
    },
    {
      name: "Aviator",
      img: aviator_game_image,
    },
    {
      name: "Sports",
      img: "https://ossimg.bdgadminbdg.com/IndiaBDG/gamecategory/gamecategory_20240110061915xrqy.png",
    },
    {
      name: "Slots",
      img: "https://ossimg.bdgadminbdg.com/IndiaBDG/gamecategory/gamecategory_20240110061937gbid.png",
    },
    {
      name: "Popular",
      img: "https://ossimg.bdgadminbdg.com/IndiaBDG/gamecategory/gamecategory_202401100619464x51.png",
    },
    {
      name: "Casino",
      img: "https://ossimg.bdgadminbdg.com/IndiaBDG/gamecategory/gamecategory_20240110061909hwqs.png",
    },
  ];
  return (
    <Layout>
      <Box sx={styles.root}>
        <Container
          className="!h-[100%] !overflow-auto no-scrollbar"
          sx={{ background: zubgback }}
        >
          <div
            style={{
              background: zubgback,
            }}
            className=" rounded-b-md"
          >
            <div className="px-2 py-2 flex justify-between">
              <div
                className="flex items-center gap-2"
                style={{ color: zubgtext }}
              >
                <Box component="img" src={logo} sx={{ width: "60px" }}></Box>
              </div>
              {/* <div className="flex gap-1 items-center cursor-pointer">
                <CloudDownloadIcon sx={{ color: zubgtext }} />
                <span className="text-[12px]" style={{ color: zubgtext }}>
                  Download App
                </span>
              </div> */}
            </div>
          </div>
          <Box className="!px-2">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              navigation={false}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper !rounded-lg !mt-2"
            >
              <SwiperSlide>
                <Box
                  component="img"
                  src={one}
                  alt="Slide 1"
                  sx={styles.swiperImage}
                  className="!rounded-lg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Box
                  component="img"
                  src={two}
                  alt="Slide 2"
                  sx={styles.swiperImage}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Box
                  component="img"
                  src={three}
                  alt="Slide 3"
                  sx={styles.swiperImage}
                />
              </SwiperSlide>
            </Swiper>
          </Box>
         
          <Box
            sx={{
              display: "flex",
              alignItems: "start",
              justifyContent: "space-between",
              width: "95%",
              marginLeft: "2.5%",
              background: zubgwhite,
              boxShadow: zubgshadow,
              borderRadius: "10px",
              mt: "20px",
              padding: "10px 10px",
            }}
          >
            <Box sx={{ width: "10%" }}>
              <CampaignOutlinedIcon sx={{ color: zubgtext }} />
            </Box>
            <Box
              sx={{
                width: "90%",
                "&>p": { fontSize: "13px", color: zubgtext },
              }}
            >
              <Typography variant="body1">
                See the Installation page for additional docs about how to make
                sure everything is set up correctly.
              </Typography>
            </Box>
          </Box>

          <Stack direction="row" sx={styles.depositWithdrawContainer}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box className="serv-item cursor-pointer">
                <Box
                  component="img"
                  src={deposit}
                  alt="Deposit"
                  sx={styles.depositWithdrawIcon}
                  onClick={() => navigate("/wallet/Recharge")}
                />
              </Box>
              <Typography
                variant="body1"
                color="initial"
                className="db-header"
                sx={{ color: zubgtext, textAlign: "center" }}
              >
                Deposit
              </Typography>
            </Box>
            <Box sx={{ textAlign: "center" }}>
              <Typography
                variant="body1"
                color="initial"
                className="b-val "
                sx={{ color: zubgtext }}
              >
                ₹{" "}
                {Number(
                  Number(newdata?.wallet || 0) + Number(newdata?.winning || 0)
                )?.toFixed(2)}
              </Typography>
              <Typography
                variant="body1"
                color="initial"
                className="b-valp"
                sx={{ color: zubgtext }}
              >
                Available Balance
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box className="serv-item">
                <Box
                  onClick={() => navigate("/Withdrawal")}
                  component="img"
                  src={cash}
                  alt="Withdraw"
                  sx={styles.depositWithdrawIcon}
                  className="!cursor-pointer"
                />
              </Box>
              <Typography
                variant="body1"
                color="initial"
                className="db-header"
                sx={{ color: zubgtext }}
              >
                Withdraw
              </Typography>
            </Box>
          </Stack>
          <Box sx={styles.referralLinkContainer}>
            <Typography variant="body1" sx={styles.referralLinkTitle}>
              Referral Link
            </Typography>
            <Stack direction="row" sx={styles.referralLinkInputContainer}>
              <TextField
                className="dbinput"
                fullWidth
                id="referrel_code"
                name="referrel_code"
                value={fk.values.referrel_code}
                // onChange={fk.handleChange}
                sx={styles.referralLinkInput}
              />
              <Button
                variant="contained"
                sx={styles.referralLinkButton}
                onClick={() => functionTOCopy(fk.values.referrel_code)}
              >
                Copy
              </Button>
            </Stack>
            <Stack direction="row" sx={styles.socialButtonsContainer}>
              <Button
                className="telegrambtn"
                sx={styles.telegramButton}
                onClick={() => window.open(`${telegram_url}`, "_blank")}
              >
                <Stack>
                  <Box sx={styles.socialButtonIcon}>
                    <TelegramIcon sx={styles.socialIcon} />
                  </Box>
                  <Box sx={styles.socialButtonText}>Telegram</Box>
                </Stack>
              </Button>

              <Button className="supportbtn" sx={styles.supportButton}>
                <a href={`mailto:${support_mail}`}>
                  <Stack>
                    <HelpOutlineIcon sx={styles.socialIconinfo} />
                    <Box sx={styles.socialButtonText}>Support</Box>
                  </Stack>
                </a>
              </Button>
            </Stack>
          </Box>
          <div
            className="mt-2 w-full grid grid-cols-3 gap-[2%] o"
            style={{
              width: "95%",
              marginLeft: "2.5%",
              marginTop: "20px",
              mb: "20px",
            }}
          >
            {game_data?.map((i) => {
              return (
                <Box
                  sx={{
                    marginBottom: "10px",
                    width: "95%",
                    borderRadius: "7px 7px 7px 7px !important",
                    overflow: "hidden",
                  }}
                >
                  <a
                    onClick={() => {
                      if (
                        i.name === "Slots" ||
                        i.name === "Popular" ||
                        i.name === "Casino"
                         
                      )
                        return toast("Comming Soon !");
                      scrollToSection("games");
                      settype_of_game(i?.name);
                    }}
                    href={`#${i?.name}`}
                    style={{
                      backgroundImage: `url(${bgms})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "100% 100%",
                      padding: "5px 15px 30px 15px",
                      borderRadius: "7px 7px 0px 0px !important",
                    }}
                    className="cursor-pointer   flex flex-col items-center justify-center"
                  >
                    <img className="w-[90px] h-[90px] " src={i?.img} />
                  </a>
                  <p
                    className="!text-sm font-bold"
                    style={{
                      color: "white",
                      background: zubgtext,
                      width: "100%",
                      textAlign: "center",
                      padding: "5px 0px",
                      borderRadius: "0px 0px 7px 7px !important",
                    }}
                  >
                    {i?.name}
                  </p>
                </Box>
              );
            })}
          </div>
          <Box id="games">
            <div id="game_lottery">
              {type_of_game === "Lottery" && <Lottery />}
            </div>
            <div id="game_original">
              {type_of_game === "Aviator" && <Original />}
            </div>
            <div id="game_sports">
              {type_of_game === "Sports" && <Sports />}
            </div>
          </Box>
          {loding ? (
            <div className="w-[100%] flex justify-center">
              <CircularProgress className="!text-#E71D1E" />
            </div>
          ) : (
            <Box sx={styles.wininfoouter}>
              <Typography
                variant="body1"
                color="initial"
                sx={{
                  color: zubgtext,
                  fontWeight: "600",
                  fontSize: "16px",
                  mb: 2,
                }}
              >
                Winning information
              </Typography>
              {winnner_data?.slice(3, 10)?.map((i, index) => {
                return (
                  <Stack
                    key={index}
                    direction="row"
                    sx={{ ...styles.wininfoinner, mb: "10px" }}
                  >
                    <Stack direction="row" sx={styles.wininfoouterone}>
                      <Avatar
                        width={50}
                        src={
                          Math.floor(Math.random() * 5) + 1 === 1
                            ? "https://mui.com/static/images/avatar/4.jpg"
                            : Math.floor(Math.random() * 5) + 1 === 2
                              ? "https://lh3.googleusercontent.com/a/ACg8ocJ_lQQ7XjcLthKctAe1u5A6Fv8JJUQ0ugECmc7RkiZmKfI=s360-c-no"
                              : Math.floor(Math.random() * 5) + 1 === 3
                                ? "https://sunlottery.fun/static/media/tanveer.03fd8989206194114777.PNG"
                                : Math.floor(Math.random() * 5) + 1 === 4
                                  ? "https://sunlottery.fun/static/media/sajid.e6abfd6b30c0fa7d3b1a.PNG"
                                  : ""
                        } // Close the src attribute here
                        className={`capitalize ${i.id % 2 === 0 ? "!bg-[#2350BF]" : "!bg-green-700"
                          }`}
                      >
                        {i?.email?.split("@")[0]?.substring(0, 1)}
                      </Avatar>
                      <Typography variant="body1">
                        {i?.email
                          ? i.email.split("@")[0].substring(0, 2) +
                          "**" +
                          (i.email.split("@")[0].length > 2
                            ? i.email.split("@")[0].substring(2, 4)
                            : "")
                          : "**"}
                      </Typography>
                    </Stack>
                    <Stack direction="row" sx={styles.wininfooutertwo}>
                      <Box component="img" src={winp4} />
                      <Box>
                        <Typography variant="body1" color="initial">
                          Receive ₹{Number(i?.win || 0)?.toFixed(2)}
                        </Typography>
                        <Typography variant="body1" color="initial">
                          Winning amount
                        </Typography>
                      </Box>
                    </Stack>
                  </Stack>
                );
              })}
            </Box>
          )}

          {/* stage Podium */}
          <Box
            sx={{
              width: "95%",
              marginLeft: "2.5%",
              borderRadius: "10px",
              mt: "20px",
              mb: "20px",
              height: "40vh",
              backgroundImage: `url(${stage})`,
              backgroundSize: "100% 100%",
              position: "relative",
            }}
          >
            <Box sx={styles.winner1}>
              <Box
                component="img"
                // src={pro1c}
                src={sajid}
                sx={{
                  width: "60px",
                  borderRadius: "50%",
                  border: `3px solid ${zubgmid}`,
                  height: "60px",
                  objectPosition: "top",
                }}
              ></Box>
              <Box
                component="img"
                src={position1}
                sx={{ width: "70px", height: "20px" }}
              ></Box>
            </Box>
            <Box sx={styles.winner2}>
              <Box
                component="img"
                // src={pro1c}
                src={tanveer}
                sx={{
                  width: "50px",
                  borderRadius: "50%",
                  border: `3px solid ${zubgmid}`,
                  height: "50px",
                  objectPosition: "top",
                }}
              ></Box>
              <Box
                component="img"
                src={position2}
                sx={{ width: "60px", height: "15px" }}
              ></Box>
            </Box>
            <Box sx={styles.winner3}>
              <Box
                component="img"
                // src={pro1c}
                src={
                  "https://lh3.googleusercontent.com/a/ACg8ocJ_lQQ7XjcLthKctAe1u5A6Fv8JJUQ0ugECmc7RkiZmKfI=s360-c-no"
                }
                sx={{
                  width: "50px",
                  borderRadius: "50%",
                  border: `3px solid ${zubgmid}`,
                  height: "50px",
                  objectPosition: "top",
                }}
              ></Box>
              <Box
                component="img"
                src={position3}
                sx={{ width: "60px", height: "15px" }}
              ></Box>
            </Box>
          </Box>
          {/* stage Podium end */}
          {loding ? (
            <div className="w-[100%] flex justify-center">
              {" "}
              <CircularProgress className="!text-#E71D1E" />
            </div>
          ) : (
            <Box sx={{ ...styles.wininfoouter, mb: "40px" }}>
              {winnner_data?.slice(0, 3)?.map((i, index) => {
                return (
                  <Stack
                    key={index}
                    direction="row"
                    sx={{ ...styles.wininfoinner, mb: "10px" }}
                  >
                    <Stack direction="row" sx={styles.wininfoouterone}>
                      <Avatar
                        width={50}
                        src={
                          Math.floor(Math.random() * 5) + 1 === 1
                            ? "https://mui.com/static/images/avatar/4.jpg"
                            : Math.floor(Math.random() * 5) + 1 === 2
                              ? "https://lh3.googleusercontent.com/a/ACg8ocJ_lQQ7XjcLthKctAe1u5A6Fv8JJUQ0ugECmc7RkiZmKfI=s360-c-no"
                              : Math.floor(Math.random() * 5) + 1 === 3
                                ? "https://sunlottery.fun/static/media/tanveer.03fd8989206194114777.PNG"
                                : Math.floor(Math.random() * 5) + 1 === 4
                                  ? "https://sunlottery.fun/static/media/sajid.e6abfd6b30c0fa7d3b1a.PNG"
                                  : Math.floor(Math.random() * 5) + 1 === 5
                                    ? "https://res.cloudinary.com/do7kimovl/image/upload/v1711806164/WhatsApp_Image_2024-03-30_at_6.53.33_PM_qo99n4.jpg"
                                    : ""
                        } // Close the src attribute here
                        className={`capitalize ${i.id % 2 === 0 ? "!bg-[#2350BF]" : "!bg-green-700"
                          }`}
                      >
                        {i?.email?.split("@")[0]?.substring(0, 1)}
                      </Avatar>
                      <Typography variant="body1">
                        {i?.email
                          ? i.email.split("@")[0].substring(0, 2) +
                          "**" +
                          (i.email.split("@")[0].length > 2
                            ? i.email.split("@")[0].substring(2, 4)
                            : "")
                          : "**"}
                      </Typography>
                    </Stack>
                    <Stack direction="row" sx={styles.wininfooutertwo}>
                      <Box component="img" src={winp4} />
                      <Box>
                        <Typography variant="body1" color="initial">
                          Receive ₹{Number(i?.win || 0)?.toFixed(2)}
                        </Typography>
                        <Typography variant="body1" color="initial">
                          Winning amount
                        </Typography>
                      </Box>
                    </Stack>
                  </Stack>
                );
              })}
            </Box>
          )}

          {poicy && !lodingBanner && (
            <Dialog
              open={poicy}
              TransitionComponent={Transition}
              keepMounted
              onClose={handleClosepolicy}
              aria-describedby="alert-dialog-slide-description"
              PaperProps={{ className: `!max-w-[500px] ${gray}` }}
            >
              <div
                style={{
                  background: zubgtext,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "15px",
                }}
              >
                {!openbannerurl ||
                  (openbannerurl === "" && (
                    <p style={{ color: "white", fontSize: "14px" }}>
                      Notification
                    </p>
                  ))}
                <RxCross2
                  style={{ color: "white" }}
                  onClick={handleClosepolicy}
                />
              </div>
              <DialogContent style={{ background: zubgback }}>
                {!openbannerurl ||
                  openbannerurl === "" ? (
                  <Notification handleClosepolicy={handleClosepolicy} />
                ) : (
                  <img src={openbannerurl} className="w-[100%] h-[100%]" />
                )}
              </DialogContent>
            </Dialog>
          )}

       
        </Container>
      </Box>
      <CustomCircularProgress isLoading={isLoading || isLoading} />
    </Layout>
  );
}

export default Dashboard;

const styles = {
  root: { background: "#F6F7FE", pb: 6 },
  dashboardTitle: {
    textAlign: "center",
    color: "#E71D1E !important",
    fontSize: "21px",
    fontWeight: "500",
  },
  swiperImage: { width: "100%", height: "auto" },
  depositWithdrawContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    mt: 4,
    width: "95%",
    marginLeft: "2.5%",
  },
  depositWithdrawIcon: { width: "30px", height: "30px" },
  referralLinkContainer: {
    background: zubgwhite,
    boxShadow: zubgshadow,
    padding: "15px 15px",
    borderRadius: "5px",
    mt: 4,
    width: "95%",
    marginLeft: "2.5%",
  },
  referralLinkTitle: {
    color: zubgtext,
    fontSize: "14px",
    fontWeight: "500 !important",
    mb: 1,
  },
  referralLinkInputContainer: { alignItems: "center" },
  referralLinkInput: {
    width: "100%",
    background: "#eae8e8",
    boxShadow: zubgshadow,
    borderRadius: "5px",
    "&>div>input": { color: zubgtext },
  },
  referralLinkButton: { marginLeft: 2, background: zubgmid },
  socialButtonsContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    mt: 2,
  },
  telegramButton: {
    fontSize: "14px",
    color: "white !important",
    textTransform: "capitalize",
    fontWeight: "400",
    background: zubgtext,
    "&:hover": { background: zubgtext },
  },
  supportButton: {
    fontSize: "14px",
    color: "white !important",
    textTransform: "capitalize",
    fontWeight: "400",
    background: zubgmid,
  },
  socialButtonIcon: {
    margin: "auto",
    borderRadius: "50%",
    width: "25px",
    height: "25px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  socialIcon: { fontSize: "30px", "&>path": { color: "white !important" } },
  socialIconinfo: {
    fontSize: "27px",
    margin: "auto",
    "&>path": { color: "white !important" },
  },
  socialButtonText: {
    color: "white !important",
    textTransform: "capitalize",
    fontWeight: "400",
    fontSize: "14px",
  },
  gameImage: {
    width: "90px",
    height: "80px",
    position: "absolute",
    top: "-20px",
    right: "0px",
  },
  gameTitle: {
    fontSize: "22px",
    fontWeight: "600",
    color: "#E71D1E !important",
    transition: "all 0.3s",
  },
  gameDescription: {
    fontSize: "15px",
    fontWeight: "400",
    color: "#E71D1E !important",
    mt: 2,
    transition: "all 0.3s",
  },
  userImage: { width: "50px", height: "50px" },
  profileBox: {
    "&>.profile": { width: "80px", height: "80px", borderRadius: "50%" },
    position: "relative",
    mb: "15px",
  },
  stageBox: { width: "100%" },
  stageinner: {
    width: "32%",
    position: "absolute",
    top: "0%",
    left: "0%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  stageinnerTwo: {
    width: "32%",
    position: "absolute",
    top: "-18%",
    left: "34%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  stageinnerThree: {
    width: "32%",
    position: "absolute",
    top: "-4%",
    right: "0%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  imgBox: {
    width: "50px",
    height: "50px",
    position: "absolute",
    top: "-23px",
    left: "-15px",
  },
  thirdimg: {
    width: "70px",
    height: "18px",
    position: "absolute",
    bottom: "0",
    left: "7px",
  },
  name: { color: "#8f5206", fontSize: "13px", fontWeight: 500 },
  rupee: {
    color: "#8f5206",
    fontSize: "13px",
    fontWeight: 500,
    background: "linear-gradient(180deg, #FAE59F 0%, #C4933F 100%)",
    padding: "6px 5px",
    borderRadius: "20px",
  },
  wininfoouter: {
    width: "95%",
    marginLeft: "2.5%",
    // background: zubgwhite,
    padding: "10px 5px",
    mt: "20px",
    borderRadius: "10px",
    boxShadow: zubgshadow,
    backgroundImage: `url(${gmbg})`,
    backgroundSize: "100% 100%",
    position: "relative",
  },
  wininfooutertwo: {
    alignItems: "center",
    justifyContent: "space-between",
    width: "65%",
    justifyContent: "space-around;",
    "&>img": {
      width: "80px",
      height: "40px",
      borderRadius: "10px",
      border: "1px solid #E71D1E",
      marginRight: "5px",
    },
    "&>div>p:nth-child(1)": {
      color: zubgtext,
      fontSize: "12px",
      fontWeight: "600",
      textAlign: "center",
    },
    "&>div>p:nth-child(2)": {
      color: zubgtext,
      fontSize: "11px",
      fontWeight: "400",
      textAlign: "center",
    },
  },
  wininfoouterone: {
    alignItems: "center",
    justifyContent: "start",
    width: "35%",
    justifyContent: "space-around;",
    "&>p": { color: zubgtext, ml: "10px", fontSize: "11px", fontWeight: "600" },
  },
  wininfoinner: {
    alignItems: "center",
    justifyContent: "space-between",
    background: zubgback,
    padding: "10px 6px",
    borderRadius: "10px",
    boxShadow: zubgshadow,
    opacity: 0.9,
  },
  winner1: {
    position: "absolute",
    left: "42%",
    top: "31%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  winner2: {
    position: "absolute",
    left: "17%",
    bottom: "32%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  winner3: {
    position: "absolute",
    right: "18%",
    bottom: "28%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
};
