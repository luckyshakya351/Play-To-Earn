import { Star } from "@mui/icons-material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import { Box, Container, IconButton, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import moment from "moment";
import * as React from "react";
import { BsFunnel } from "react-icons/bs";
import { useQuery } from "react-query";
import { NavLink } from "react-router-dom";
import CustomCircularProgress from "../../../Shared/CustomCircularProgress";
import {
  zubgback,
  zubggray,
  zubgshadow,
  zubgtext,
  zubgwhite
} from "../../../Shared/color";
import Layout from "../../../component/Layout/Layout";
import { MygetdataFn } from "../../../services/apicalling";
import { rupees } from "../../../services/urls";
function TeamData() {
  const [date, setdate] = React.useState(
    moment(Date.now())?.format("YYYY-MM-DD")
  );
  const { isLoading, data } = useQuery(
    ["get_level", date],
    () => MygetdataFn(date),
    {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    }
  );
  const result = data?.data?.data;

  return (
    <Layout>
      <Container
        sx={{
          background: zubgback,
          width: "100%",
          height: "100vh",
          overflow: "auto",
          mb: 10,
        }}
      >
        <CustomCircularProgress isLoading={isLoading} />
        <Box sx={style.header}>
          <Box component={NavLink} to="/promotion/">
            <KeyboardArrowLeftOutlinedIcon />
          </Box>
          <Typography variant="body1" color="initial">
            Team data
          </Typography>
          <Typography variant="body1" color="initial">
            {" "}
          </Typography>
        </Box>
        {
          <Accordion className="!rounded-lg">
            <AccordionSummary
              expandIcon={<Star className="!text-white" />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{ background: zubgtext, color: "white" }}
            >
              <div className="w-full grid grid-cols-3 pr-2">
                <span className="">Levels</span>
                <p className="">Members</p>
                <p className="">Deposit Amount</p>
              </div>
            </AccordionSummary>
          </Accordion>
        }
        {
          <djiv className="!rounded-lg">
            <AccordionSummary
              expandIcon={<Star className="!text-white" />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{ background: zubgtext, color: "white" }}
            >
              <div className="w-full grid grid-cols-2 gap-4 place-items-center pr-2 ">
                <input
                  type="date"
                  className="!w-full !text-black"
                  onChange={(e) => setdate(e.target.value)}
                />
                <IconButton
                  onClick={() =>
                    setdate(moment(Date.now())?.format("YYYY-MM-DD"))
                  }
                >
                  <BsFunnel />
                </IconButton>
              </div>
            </AccordionSummary>
          </djiv>
        }
        {[
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
          21, 22,
        ]?.map((i, index) => {
          return (
            <Box sx={{ width: "95%", margin: "10px 2.5% 10px 2.5%" }}>
              <Accordion className="!rounded-lg">
                <AccordionSummary
                  expandIcon={<ArrowDownwardIcon className="!text-white" />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  sx={{
                    background: zubggray,
                    color: "white",
                    borderRadius: "5px",
                  }}
                >
                  <div className="w-full grid grid-cols-3 pr-2">
                    <span className="">Level: {i}</span>
                    <p className="">
                      {result?.filter((j) => j?.LEVEL === i)?.length}
                    </p>
                    <p className="">
                      {rupees}{" "}
                      <span className="text-green-200">
                        {result
                          ?.filter((j) => j?.LEVEL === i)
                          ?.reduce(
                            (a, b) => a + Number(b?.deposit_amount || 0),
                            0
                          ) || 0}
                      </span>{" "}
                    </p>
                  </div>
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    background: zubgwhite,
                    boxShadow: zubgshadow,
                    color: "white",
                  }}
                >
                  <Box>
                    <Box sx={style.accordian}>
                      <div
                        style={{
                          color: "white",
                          borderBottom: "2px solid red",
                          padding: "10px",
                          borderBottom: "2px solid red",
                          padding: "10px",
                        }}
                        className="!grid !grid-cols-4 !place-items-center"
                      >
                        <span>S.No.</span>
                        <span>User Id</span>
                        <span className="">Name</span>
                        <span className="">Deposit</span>
                      </div>
                      <div className="h-[2px] w-full "></div>
                      {result
                        ?.filter((j) => j?.LEVEL === i)
                        ?.map((i, index) => {
                          return (
                            <div
                              style={{
                                color: "white",
                                background: zubgback,
                                color: zubgtext,
                                borderRadius: "5px",
                                padding: "10px 20px",
                              }}
                              className="!grid !grid-cols-4  !place-items-center"
                            >
                              <span>{index + 1}</span>
                              <span className=" ">
                                {i?.id || "No data"}
                              </span>
                              <span className=" ">
                                {i?.full_name || "No data"}
                              </span>
                              <span className=" ">
                                {i?.deposit_amount || "0"}
                              </span>
                            </div>
                          );
                        })}
                    </Box>
                  </Box>
                </AccordionDetails>
              </Accordion>
            </Box>
          );
        })}
      </Container>
    </Layout>
  );
}

export default TeamData;

const style = {
  header: {
    padding: "15px 8px",
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
  accordian: {
    backgroundColor: zubgwhite,
    "&>div": { mb: 1 },
    "&>div>div:nth-child(1)": {
      borderRight: "1px solid black",
    },
    "&>div>div:nth-child(2)": {},
    "&>div>div>p": {
      color: "white",
      fontSize: "14px",
      fontWeight: 500,
    },
  },
};
