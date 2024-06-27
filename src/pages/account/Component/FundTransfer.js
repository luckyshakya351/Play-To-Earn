import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import { Box, Button, Container, FormControl, OutlinedInput, Typography } from '@mui/material';
import * as React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { zubgback, zubgbackgrad, zubgmid, zubgtext, zubgwhite, zubgshadow } from '../../../Shared/color';
import Layout from '../../../component/Layout/Layout';

function FundTransfer() {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };
    //      const [username, setusername] = useState("");
    //   const [balance, setsetBalance] = useState("");
    //   const client = useQueryClient();

    //   const { data } = useQuery(
    //     ["profile"],
    //     () => ProfileDataFunction(),
    //     {
    //       refetchOnMount: false,
    //       refetchOnReconnect: true,
    //     }
    //   );
    //   const profile = data?.data?.earning || [];

    //   const initialValue = {
    //     wallet: balance || "",
    //     userid: "",
    //     transferid: "",
    //     transfer_amount: "",
    //     transaction_password: "",
    //   };

    //   const fk = useFormik({
    //     initialValues: initialValue,
    //     enableReinitialize: true,
    //     onSubmit: () => {
    //       const reqBody = {
    //         userid: profile?.rec?.Login_Id,
    //         txtpassword: fk.values.transaction_password,
    //         txtamount: fk.values.transfer_amount,
    //         txtuserid: fk.values.userid,
    //         txtwallet: fk.values.wallet,
    //       };
    //       if (
    //         !reqBody.userid ||
    //         !reqBody.txtpassword ||
    //         !reqBody.txtamount ||
    //         !reqBody.txtuserid ||
    //         !reqBody.txtwallet
    //       )
    //         return toast("Plese enter all data");
    //       insertFundFn(reqBody);
    //     },
    //   });

    //   const fees = Number(fk.values.transfer_amount || 0) * 0.03;
    //   const payableAmount = fees + Number(fk.values.transfer_amount || 0);

    //   async function insertFundFn(reqBody) {
    //     try {
    //       const res = await axios.post(endpoint?.insert_fund_transfer, reqBody);
    //       toast(res?.data?.message);
    //       fk.handleReset();
    //       client.refetchQueries("fund_transfer_history_details");
    //     } catch (e) {
    //       console.log(e);
    //     }
    //     // client.refetchQueries("bank_details");
    //   }
    //   async function getIntroFn() {
    //     console.log("Function is hit now");
    //     const reqBody = {
    //       userid: fk.values.userid,
    //     };
    //     try {
    //       const res = await axios.post(endpoint?.get_user_intro_name, reqBody);
    //       setusername(res?.data?.earning?.name);
    //     } catch (e) {
    //       console.log(e);
    //     }
    //     // client.refetchQueries("bank_details");
    //   }

    //   useEffect(() => {
    //     getIntroFn();
    //     // eslint-disable-next-line
    //   }, [fk.values.userid]);
    //   useEffect(() => {
    //     getBalanceFunction(setsetBalance);
    //   }, []);
    return (
        <Layout>
            <Container sx={style.container}>
                <Box sx={style.header}>
                    <Box component={NavLink} onClick={() => goBack()}>
                        <KeyboardArrowLeftOutlinedIcon />
                    </Box>
                    <Typography variant="body1" color="initial">Fund Transfer</Typography>
                    <Typography variant="body1" color="initial"> </Typography>
                </Box>
                <Box sx={{ width: '95%', marginLeft: '2.5%', background: zubgwhite, boxShadow: zubgshadow, borderRadius: '10px', padding: '10px', mt: '10px', }}>
                    <Box component='form'>
                        <Box >
                            <FormControl fullWidth>
                                <Typography variant="h3" className='!text-sm !mb-1 loginlabel'>Wallet *</Typography>
                                <OutlinedInput id="wallet" name="wallet"// value={fk.values.wallet}
                                    placeholder="Select Bank" className="loginfields !h-10" />
                            </FormControl>
                        </Box>
                        <Box >
                            <FormControl fullWidth>
                                <Typography variant="h3" className='!text-sm !mt-2  loginlabel'>Transfer Id*</Typography>
                                <OutlinedInput
                                    id="userid"
                                    name="userid"
                                    placeholder='Enter'
                                    //   value={fk.values.userid}
                                    className="loginfields !h-10" />
                                {/* {username && username != "false" && (
                                  <p className="!text-[10px] !text-red-500 pl-2">{username}</p>
                                )} */}
                            </FormControl>
                        </Box>
                         <Box >
                            <FormControl fullWidth>
                                <Typography variant="h3" className='!text-sm loginlabel !mt-2'>Transfer Amount*</Typography>
                                <OutlinedInput
                                    id="transfer_amount"
                                    name="transfer_amount"
                                    placeholder='Enter'
                                    //   value={fk.values.transfer_amount}
                                    className="loginfields !h-10" />
                         </FormControl>
                        </Box>
                        <Box >
                            <FormControl fullWidth>
                                <Typography variant="h3" className='!text-sm loginlabel !mt-2'>Transfer Password*</Typography>
                                <OutlinedInput
                                    id="transaction_password"
                                    name="transaction_password"
                                    placeholder='Enter'
                                    //   value={fk.values.transaction_password}
                                    className="loginfields !h-10" />

                            </FormControl>
                        </Box>
                        <Box >
                            <FormControl fullWidth>
                                <Typography variant="h3" className='!text-sm loginlabel !mt-2'>Fees*</Typography>
                                <OutlinedInput
                                    id="transaction_password"
                                    name="transaction_password"
                                    placeholder='Enter'
                                    // value={fees}
                                    className="loginfields !h-10" />
                            </FormControl>
                        </Box>
                        <Box >
                            <FormControl fullWidth>
                                <Typography variant="h3" className='!text-sm loginlabel !mt-2' >Payable Amount*</Typography>
                                <OutlinedInput
                                    id="payable_amount"
                                    name="payable_amount"
                                    placeholder='Enter'
                                    // value={payableAmount}
                                    className="loginfields !h-10" />
                            </FormControl>
                        </Box>

                        <Button className='!mb-10' sx={style.paytmbtntwo}
                        // onClick={() => fk.handleSubmit()}
                        >Submit </Button>
                    </Box>
                </Box>
            </Container>
        </Layout >
    );
};

export default FundTransfer;


export const style = {
    container: { background: zubgback, width: '100%', height: '100vh', overflow: 'auto', },
    header: {
        padding: '10px 8px',
        background: zubgtext,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        '& > p': {
            fontSize: '20px',
            fontWeight: '600',
            textAlign: 'center',
            color: 'white',
        },
        '& > a > svg': {
            color: 'white',
            fontSize: '35px'
        }
    },
    notificationBox: {
        width: '95%', marginLeft: '2.5%', borderRadius: '10px', background: zubgmid, padding: '10px', mt: '10px',
        '&>div>div>p': { color: 'white', fontSize: '14px', marginLeft: '10px', fontWeight: '500', },
        '&>p': { color: 'white', fontSize: '13px', marginLeft: '0px', fontWeight: '500', mt: '10px', },
        '&>div>div>svg': { color: 'white', fontSize: '24px', }, '&>div>svg': { color: 'white', fontSize: '24px', },
    },
    notificationStack: { alignItems: 'center', justifyContent: 'space-between', },
    paytmbtntwo: { borderRadius: '5px', textTransform: 'capitalize', mb: 2, background: zubgtext, color: 'white !important', width: '100%', mt: '20px', border: "1px solid white", padding: '10px', '&:hover': { background: zubgbackgrad, border: "1px solid transparent", } },

};
