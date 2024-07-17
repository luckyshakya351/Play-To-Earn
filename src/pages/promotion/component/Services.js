import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import { Box, Container, Stack, Typography, } from '@mui/material';
import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { zubgback, zubgtext } from '../../../Shared/color';
import customer from '../../../assets/images/logo-2 (2).png';
import Layout from '../../../component/Layout/Layout';
import { telegram_url } from '../../../services/urls';


function Services() {
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

        <div className='my-10 !w-[100%] !flex !flex-col !items-center'>
          <div className='!w-[60%]'>
          <p className=''> Activity apllication :</p>
          <select className='!border !text-gray-600 !border-gray-600 rounded w-[100%] p-1'>
            <option>Helping</option>
            <option>Finding upline teacher</option>
          </select>
          </div>
         <div className='!w-[60%]'>
         <p className='mt-4'> Transaction Id :</p>
          <input
            placeholder='Enter transaction id '
            className='!border !text-gray-600 !border-gray-600 rounded w-[100%] p-1' />
         </div>
         <div className='!w-[60%]'>
         <p className='mt-4'> Register Phone Number :</p>
          <input
            type='number'
            placeholder='Enter Register Phone Number '
            className='!border !text-gray-600 !border-gray-600 rounded w-[100%] p-1' />
         </div>

          <div className="mt-5 bg-[#E71D1E] text-white  text-center p-2 w-[45%]">
             <button className='w-[100%]'> Submit Application </button></div>
             <div className="my-1 w-[45%] bg-[#E71D1E] text-white  text-center p-2">
             <button className='w-[100%]'> Reviews Program Queries </button></div>
       
        <div className="my-1 mb-16 w-[45%] bg-[#E71D1E] text-white  text-center p-2">
             <button className='w-[100%]'> Other Problems </button></div>
       
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







