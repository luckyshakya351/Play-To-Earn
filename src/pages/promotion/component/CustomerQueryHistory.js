import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import {
    Box,
    Button,
    Container,
    IconButton,
    Stack,
    Typography,
} from "@mui/material";
import moment from "moment";
import * as React from "react";
import { useQuery } from "react-query";
import { NavLink, useNavigate } from "react-router-dom";
import CustomCircularProgress from "../../../Shared/CustomCircularProgress";
import { zubgback, zubgbackgrad, zubgmid, zubgshadow, zubgtext, zubgwhite } from "../../../Shared/color";
import deposit from "../../../assets/images/list.png";
import Layout from "../../../component/Layout/Layout";
import {
    CustomerFn
} from "../../../services/apicalling";

function CustomerQueryHistory() {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };
    const { isLoading, data } = useQuery(
        ["customer_query"],
        () => CustomerFn(),
        {
            refetchOnMount: false,
            refetchOnReconnect: false,
            retryOnMount: false,
            refetchOnWindowFocus: false
        }
    );
    const res = data?.data?.result || []
   
    return (
        <Layout>
            <Container
                sx={{
                    background: zubgback,
                    width: "100%",
                    height: "100vh",
                    overflow: "auto",
                    mb: 5,
                }}
                className="no-scrollbar"
            >
                <CustomCircularProgress isLoading={isLoading} />
                <Box sx={style.header}>
                    <Box component={NavLink} onClick={goBack}>
                        <KeyboardArrowLeftOutlinedIcon />
                    </Box>
                    <Typography variant="body1" color="initial">
                        Program Queries
                    </Typography>
                    <Box></Box>
                </Box>

                <Box>
                    <Box
                     className="!mx-10"
                    >
                         {res?.map((i) => {
                            return (
                                <Box >
                                           <div className="w-full">
                                         <p className=" !my-5  flex justify-center w-full !text-gray-600 !text-xs">
                                         --------------- {moment(i?.date || Date.now()).format("DD-MM-YYYY")}---------------
                
                 
                                        </p>
                                    </div>
                                  
                                    <div>
                                         <p className="bg-blue-600 !mt-10  justify-start w-fit !text-white p-1 px-4 rounded-full border border-blue-600">
                                            Activity Type
                                        </p>
                                        <div className="w-full !flex !justify-end mt-5">
                                        <p  className="bg-blue-600 !mt-10  justify-start w-fit !text-white p-1 px-4 rounded-full border border-blue-600"> 
                                            {i?.activity_type}
                                        </p>
                                        </div>
                                        
                                    </div>
                                    <div>
                                         <p className="bg-blue-600 !mt-10 justify-start w-fit !text-white p-1 px-4 rounded-full border border-blue-600">
                                         Transaction ID
                                        </p>
                                        <div className="w-full !flex !justify-end mt-10">
                                        <p  className="bg-blue-600 !mt-10  justify-start w-fit !text-white p-1 px-4 rounded-full border border-blue-600"> 
                                            {i?.transaction_id}
                                        </p>
                                        </div>
                                        
                                    </div>
                                    <div>
                                         <p className="bg-blue-600 !mt-10 justify-start w-fit !text-white p-1 px-4 rounded-full border border-blue-600">
                                         Image
                                        </p>
                                        <div className="w-full !flex !justify-end mt-10">
                                        <p  className=" !mt-10  justify-start w-fit !text-white p-1 px-4 rounded-full border "> 
                                        {i && i.imgurl && i.images && i.images[0] &&
                                                <img src={`${i.imgurl}/${i.images[0]}`} alt="images"
                                                    className="!h-28 !w-28" />
                                            }
                                        </p>
                                        </div>
                                        
                                    </div>
                                    <div>
                                         <p className="bg-blue-600 !mt-10  justify-start w-fit !text-white p-1 px-4 rounded-full border border-blue-600">
                                         Description
                                        </p>
                                        <div className="w-full !flex !justify-end mt-10">
                                        <p  className="bg-blue-600 !mt-10 !mb-10 justify-start w-fit !text-white p-1 px-4 rounded-full border border-blue-600"> 
                                        {i?.description}
                                        </p>
                                        </div>
                                        
                                    </div>
                                  
                                </Box>
                            );
                        })}

                    </Box>
                </Box>
            </Container>
        </Layout>
    );
}

export default CustomerQueryHistory;

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
    wthui: {
        textAlign: "center",
        width: "32%",
        minHeight: "15vh",
        background: zubgmid,
        borderRadius: "10px",
        mb: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "&>div>p": { color: "white" },
    },
    paymentlink: {
        width: "32%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "15vh",
        background: zubgmid,
        borderRadius: "10px",
        mb: "10px",
        "&>p": {
            color: "white",
            fontSize: "12px",
            fontWeight: "500",
            textAlign: "center",
            mt: "5px",
        },
    },
    paymentBoxOuter: {
        width: "95%",
        margin: "auto",
        my: "10px",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
    },
    paytmbtn: {
        mb: 2,
        background: zubgback,
        color: "white !important",
        width: "31%",
        border: "1px solid white",
        padding: "10px",
        "&:hover": { background: zubgbackgrad, border: "1px solid transparent" },
    },
    paytmbtntwo: {
        borderRadius: "5px",
        textTransform: "capitalize",
        mb: 2,
        background: zubgbackgrad,
        color: "white !important",
        width: "100%",
        mt: 2,
        border: "1px solid white",
        padding: "10px",
        "&:hover": { background: zubgbackgrad, border: "1px solid transparent" },
    },
    rechargeinstext: {
        mb: "10px",
        alignItems: "center",
        justifyContent: "start",
        "&>p": { marginLeft: "10px", color: "white !important", fontSize: "14px" },
    },
};
