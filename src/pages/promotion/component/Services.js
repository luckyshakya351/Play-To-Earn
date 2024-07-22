import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import { Box, Container, Stack, Typography, } from '@mui/material';
import * as React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { zubgback, zubgtext } from '../../../Shared/color';
import customer from '../../../assets/images/logo-2 (2).png';
import Layout from '../../../component/Layout/Layout';
import { endpoint } from "../../../services/urls";
import CryptoJS from 'crypto-js';
import { useFormik } from 'formik';
import toast from 'react-hot-toast';
import axios from 'axios';
import { servicesvalidationSchema } from '../../../Shared/Validation';
import CustomCircularProgress from '../../../Shared/CustomCircularProgress';

function Services() {
  const login_data = localStorage.getItem("logindataen") && CryptoJS.AES.decrypt(localStorage.getItem("logindataen"), "anand")?.toString(CryptoJS.enc.Utf8) || null
  const user_id = login_data && JSON.parse(login_data)?.UserID;
  const [isLoading, setLoading] = React.useState(false);
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  const initialValues = {
    activity_type: "",
    transection_id: "",
    image: "",
    description: "",
  };
 
  const fk = useFormik({
    initialValues: initialValues,
    validationSchema: servicesvalidationSchema,
    onSubmit: (values) => {
      console.log(fk.values);
      const fd = new FormData();
      fd.append("activity_type", fk.values.activity_type);
      fd.append("transection_id", fk.values.transection_id);
      fd.append("image", fk.values.image);
      fd.append("description", fk.values.description);
      fd.append("user_id", user_id);
       addservicesFunction(fd);
    },
    
  });


  const addservicesFunction = async (fd) => {
    try {
      setLoading(true);
      const response = await axios.post(`${endpoint.add_services}`, fd); 
      if (response.data.error === false) {
        toast.success(response.data.message); 
        fk.handleReset(); 
       setLoading(false)

      } else {
        toast.error(response.data.message); 
      }
    } catch (e) {
      toast.error('Error submitting data. Please try again.'); 
      console.error('Error submitting data:', e);
    }
  };
  
  const handleFileChange = (e) => {
    const file = e.currentTarget.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result?.toString().split(",")[1];
      fk.setFieldValue("image", base64String);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };
  return (
    <Layout>
      <Container sx={{ background: zubgback, width: '100%', height: '100vh', overflow: 'auto' }}>
        <div className=' !flex !justify-center'>
          <img src={customer} alt='' className='!h-16 !w-16 my-4' />
        </div>
        <Box sx={style.header}>
          <Box component={NavLink} to='/promotion/'>
            <KeyboardArrowLeftOutlinedIcon />
          </Box>

          <Typography variant="body1" color="initial">Play2Earn Games Self-Services Center </Typography>
          <Typography variant="body1" color="initial"> </Typography>
        </Box>

        <div className='my-10 !w-[100%] !flex !flex-col !items-center'
          onSubmit={fk.handleSubmit}>
          <div className='!w-[60%]'>
            <p className=''> Activity apllication :</p>
            <select className='!border !text-gray-600 !border-gray-600 rounded w-[100%] p-1'
              name="activity_type"
              onChange={fk.handleChange}
              onBlur={fk.handleBlur}
              value={fk.values.activity_type}
              onKeyDown={(e) => e.key === "Enter" && fk.handleSubmit()}>
              <option value="">Select activity...</option>
              {/* <option value="Helping">Helping</option> */}
              <option value="Withdrawl">Withdrawl</option>
              <option value="Deposit">Deposit</option>
            </select>
            {fk.touched.activity_type && fk.errors.activity_type ? (
              <div className="text-red-500">{fk.errors.activity_type}</div>
            ) : null}
          </div>
          <div className='!w-[60%]'>
            <p className='mt-4'> Transaction Id :</p>
            <input
              name="transection_id"
              type="text"
              value={fk.values.transection_id}
              onChange={fk.handleChange}
              placeholder='Enter transaction id '
              onKeyDown={(e) => e.key === "Enter" && fk.handleSubmit()}
              className='!border !text-gray-600 !border-gray-600 rounded w-[100%] p-1' />
                {fk.touched.transection_id && fk.errors.transection_id ? (
              <div className="text-red-500">{fk.errors.transection_id}</div>
            ) : null}
          </div>
          <div className='!w-[60%]'>
            <p className='mt-4'> Upload File :</p>
            <input
              type='file'
              name="image"
              onChange={handleFileChange}
              onKeyDown={(e) => e.key === "Enter" && fk.handleSubmit()}
              className='!border !text-gray-600 !border-gray-600 rounded w-[100%] p-1' />
          </div>
          <div className='!w-[60%]'>
            <p className='mt-4'> Description :</p>
            <textarea
              name="description"
              value={fk.values.description}
              onChange={fk.handleChange}
              placeholder='Enter Description'
              onKeyDown={(e) => e.key === "Enter" && fk.handleSubmit()}
              className='!border !text-gray-600 !border-gray-600 rounded w-[100%] p-1' />
          </div>

          <div className="mt-5  bg-[#E71D1E] text-white  text-center p-2 w-[45%]">
            <button className='w-[100%]' type="submit"
              onClick={(e) => {
                e.preventDefault();
                fk.handleSubmit();
              }}> Submit Application </button></div>
         <div className="my-1  mb-16 w-[45%] bg-[#E71D1E] text-white  text-center p-2">
            <button className='w-[100%]' onClick={()=>navigate('/queries')}> Reviews Program Queries </button></div>
            {isLoading && (
                            <CustomCircularProgress isLoading={isLoading}/>
                        )}
           {/* <div className="my-1 mb-16 w-[45%] bg-[#E71D1E] text-white  text-center p-2">
            <button className='w-[100%]'
            > Other Problems </button></div> */}
        </div>


      </Container >
    </Layout>
  )
}

export default Services

const style = {
  header: {
    padding: '15px 8px',
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
};







