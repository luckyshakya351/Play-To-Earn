import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import { Box, Container, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from '@mui/material';
import * as React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { zubgback, zubgbackgrad, zubgmid, zubgshadow, zubgtext, zubgwhite } from '../../../Shared/color';
import Layout from '../../../component/Layout/Layout';
import moment from 'moment/moment';
import { FundTransferHistoryFn } from '../../../services/apicalling';
import { useQuery } from 'react-query';
import nodatafoundimage from "../../../assets/images/nodatafoundimage.png";

function FundTransferHistory() {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };
    const tableRef = React.useRef(null);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [page, setPage] = React.useState(0);
    const { isLoading, data:game_history } = useQuery(
      ["fund_transfer_history_details"],
      () => FundTransferHistoryFn(),
      {
        refetchOnMount: false,
        refetchOnReconnect: true,
      }
    );
  
    const game_history_data = game_history?.data?.data;
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };
  
    const visibleRows = React.useMemo(
      () =>
        game_history_data?.slice(
          page * rowsPerPage,
          page * rowsPerPage + rowsPerPage
        ),
      [page, rowsPerPage, game_history_data]
    );
    if (!isLoading && !game_history_data)
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
          >
            <Box sx={style.header}>
              <Box component={NavLink} onClick={goBack}>
                <KeyboardArrowLeftOutlinedIcon />
              </Box>
              <p>Fund Transfer History</p>
            </Box>
            <div>
              <img className="" src={nodatafoundimage} />
            </div>
          </Container>
        </Layout>
      );
    return (
        <Layout>
            <Container sx={style.container}>
                <Box sx={style.header}>
                    <Box component={NavLink} onClick={() => goBack()}>
                        <KeyboardArrowLeftOutlinedIcon />
                    </Box>
                    <Typography variant="body1" color="initial">Fund Transfer History</Typography>
                    <Typography variant="body1" color="initial"> </Typography>
                </Box>
                <Box sx={{ width: '95%', marginLeft: '2.5%', background: zubgwhite, boxShadow: zubgshadow, borderRadius: '10px', padding: '10px', mt: '10px', }}>
                <Box>
          <TableContainer>
            <Table
              id="my-table"
              ref={tableRef}
              sx={{ maxWidth: 800 }}
              aria-label="simple table"
            >
              <TableHead
                sx={{
                  background: zubgwhite,
                  "&>tr>th": {
                    padding: 1,
                    fontSize: "13px",
                    fontWeight: 700,
                    color: "white",
                  },
                }}
              >
                <TableRow>
                  <TableCell className="!text-sm !text-center !pl-[2px] !pr-0 border-2 border-r border-white">
                    S.No.
                  </TableCell>
                  <TableCell className="!text-sm !text-center !pr-0 !pl-1 border-2 border-r border-white">
                    Transaction Id
                  </TableCell>
                  <TableCell className="!text-sm !text-center !pr-0 !pl-1 border-2 border-r border-white">
                    Transfer Id
                  </TableCell>
                  <TableCell className="!text-sm !text-center !pr-0 !pl-1 border-2 border-r border-white">
                    Date/Time
                  </TableCell>  
                  <TableCell className="!text-sm !text-center !pr-0 !pl-1 border-2 border-r border-white">
                    Transfer Amount
                  </TableCell> 
                </TableRow>
              </TableHead>
              <TableBody
              >
                {visibleRows?.map((i, index) => {
                  return ( 
                    <TableRow key="" className="!w-[95%]">
                      <TableCell className="!text-black !pl-[2px] !pr-2 !text-center !border-2 !border-r ">
                        {index + 1}
                      </TableCell>
                      <TableCell className="!text-black !pr-2 !pl-1 !text-center border-2 !border-r ">
                        {i?.tr11_fund_transaid}
                      </TableCell>
                      <TableCell className="!text-black !pr-2 !pl-1 !text-center border-2 !border-r ">
                      {i?.username ? i?.username:"----" }
                      </TableCell>
                      <TableCell className="!text-black !pr-2 !pl-1 !text-center border-2 !border-r ">
                        {moment(i?.tr11_fund_date)?.format("DD-MM-YYYY")}{" "}
                        {moment(i?.tr11_fund_date)?.format("HH:mm:ss")}
                      </TableCell>
                      <TableCell className="!text-black !pr-2 !pl-1 !text-center border-2 !border-r ">
                        {Number(i?.tr11_fund_amt || 0)?.toFixed()}
                      </TableCell>
                    </TableRow>
                  );
                })} 
              </TableBody>
            </Table>
          </TableContainer>
          <Box sx={{ background: "white", mt: 3 ,mb:10 }}>
            <Stack spacing={2}>
              <TablePagination
                sx={{ background: zubgmid, color: "white" }}
                rowsPerPageOptions={[10, 15, 20]}
                component="div"
                count={game_history_data?.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                labelRowsPerPage="Rows"
              />
            </Stack>
          </Box>
        </Box>
                </Box>
            </Container>
        </Layout >
    );
};

export default FundTransferHistory;


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
