import { Box, Button, Container, FormControl, OutlinedInput, Typography } from '@mui/material';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import { useFormik } from "formik";
import { NavLink, useNavigate } from 'react-router-dom';
import axios from "axios";
import toast from 'react-hot-toast';
import Layout from '../../../component/Layout/Layout';
import { endpoint } from "../../../services/urls";
import { MyProfileDataFn } from "../../../services/apicalling";
import { zubgback, zubgbackgrad, zubgmid, zubgtext, zubgwhite, zubgshadow } from '../../../Shared/color'
import { useQuery, useQueryClient } from 'react-query';

function FundTransfer() {
    const navigate = useNavigate();
    const client = useQueryClient();
    const goBack = () => {
        navigate(-1);
    };
    const {  data } = useQuery(["myprofile"], () => MyProfileDataFn(), {
      refetchOnMount: false,
      refetchOnReconnect: true,
    });
    const result = data?.data?.data  ;
    console.log(result)
    const initialValue = {
        userid: result?.id, 
        amount: "",
        txtintroducer_id: "",
    };

    const fk = useFormik({
        initialValues: initialValue,
        enableReinitialize: true,
        onSubmit: async (values, { setSubmitting, resetForm }) => {
            try {
                const reqBody = {
                    userid: values.userid,
                    txtintroducer_id: values.txtintroducer_id,
                    amount: values.amount,
                };

                if (!reqBody.userid || !reqBody.txtintroducer_id || !reqBody.amount) {
                    toast.error("Please enter all data");
                    return;
                }
                const res = await axios.post(endpoint?.insert_fund_transfer, reqBody);
                toast(res?.data?.msg);
                client.refetchQueries("myprofile");
                client.refetchQueries("fund_transfer_history_details");
                resetForm();
            } catch (error) {
                console.error("Error inserting fund:", error);
                toast.error("Failed");
            }
            finally {
                // Set submitting state to false
                setSubmitting(false);
            }
        },
    });

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
                            <Typography variant="h3" className='!text-sm !mt-5 loginlabel'>Wallet *</Typography>
                            <OutlinedInput
                                type='number'
                                id="amount"
                                name="amount"
                                value={fk.values.amount}
                                onChange={fk.handleChange}
                                placeholder="Enter Amount"
                                className="loginfields "
                            />
                        </FormControl>
                    </Box>
                    <Box >
                        <FormControl fullWidth>
                            <Typography variant="h3" className='!text-sm !mt-5  loginlabel'>Transfer Id*</Typography>
                            <OutlinedInput
                             
                              id="txtintroducer_id"
                              name="txtintroducer_id"
                              value={fk.values.txtintroducer_id}
                              onChange={fk.handleChange}
                              placeholder='Enter Id'
                              className="loginfields "
                          />
                       </FormControl>
                    </Box>
                     
                    <Button className='!mb-10' sx={style.paytmbtntwo}
                    disabled={fk.isSubmitting || !fk.dirty}
                    onClick={() => fk.handleSubmit()}
                    >  {fk.isSubmitting ? 'Submitting...' : 'Submit'} </Button>
                </Box>
            </Box>
        </Container>
    </Layout >
    );
}

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