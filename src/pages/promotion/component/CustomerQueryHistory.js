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
                        sx={{
                            padding: "10px",
                            background: zubgwhite,
                            boxShadow: zubgshadow,
                            borderRadius: "10px",
                            mb: 5,
                            mt: 3,
                        }}
                    >
                         {res?.map((i) => {
                            return (
                                <Box
                                    sx={{
                                        mb: 2,
                                        padding: "15px",
                                        borderRadius: "10px",
                                        border: "1px solid white",
                                        background: zubgback,
                                        boxShadow: zubgshadow,
                                        border: `1px solid #ff00422b`,
                                    }}
                                >

                                    <Stack
                                        direction="row"
                                        sx={{
                                            mb: "10px",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                            "&>p": { color: zubgtext },
                                        }}
                                    >
                                        <Typography variant="body1" color="initial">
                                            Activity Type
                                        </Typography>
                                        <Typography variant="body1" color="initial">
                                            {i?.activity_type}
                                        </Typography>
                                    </Stack>
                                    <Stack
                                        direction="row"
                                        sx={{
                                            mb: "10px",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                            "&>p": { color: zubgtext },
                                        }}
                                    >
                                        <Typography variant="body1" color="initial">
                                            Transaction ID
                                        </Typography>
                                        <Typography variant="body1" color="initial">
                                            {i?.transaction_id}
                                        </Typography>
                                    </Stack>

                                    <Stack
                                        direction="row"
                                        sx={{
                                            mb: "10px",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                            "&>p": { color: zubgtext },
                                        }}
                                    >
                                        <Typography variant="body1" color="initial">
                                            Date/Time
                                        </Typography>
                                        <Typography variant="body1" color="initial">
                                            {moment(i?.date || Date.now()).format("DD-MM-YYYY")}&nbsp;
                                            {moment(i?.date || Date.now()).format("HH:mm")}
                                        </Typography>
                                    </Stack>
                                    <Stack
                                        direction="row"
                                        sx={{
                                            mb: "10px",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                            "&>p": { color: zubgtext },
                                        }}
                                    >
                                        <Typography variant="body1" color="initial">
                                            Image
                                        </Typography>
                                        <Typography variant="body1" color="initial">
                                            {i && i.imgurl && i.images && i.images[0] &&
                                                <img src={`${i.imgurl}/${i.images[0]}`} alt="images"
                                                    className="!h-10 !w-10" />
                                            }
                                        </Typography>
                                    </Stack>
                                    <Stack
                                        direction="row"
                                        sx={{
                                            mb: "10px",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                            "&>p": { color: zubgtext },
                                        }}
                                    >
                                        <Typography variant="body1" color="initial">
                                            Description
                                        </Typography>
                                        <Typography>
                                            {i?.description}
                                        </Typography>
                                    </Stack>

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
