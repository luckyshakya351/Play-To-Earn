import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import { Box, Stack, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import * as React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { zubgback, zubgtext } from "../../../../Shared/color";
import history from "../../../../assets/images/list.png";

const GameHistory = ({ gid }) => {
  const navigate = useNavigate();
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [page, setPage] = React.useState(0);
  const game_history_data = useSelector(
    (state) => state.aviator.trx_game_history_data
  );
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

  return (
    <Box>
      <Stack direction="row" className="onegotextbox">
        <Typography variant="body1" color="initial">
          <Box
            component="img"
            src={history}
            width={25}
            sx={{ marginRight: "10px" }}
          ></Box>
          {gid === "1"
            ? "One GO Record"
            : gid === "2"
            ? "Three Go Record"
            : "Five Go Record"}
        </Typography>
      </Stack>
      <TableContainer>
        <Table
          sx={{ background: zubgback, color: "white" }}
          className="wintable"
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell className="!text-sm !text-center !pl-[2px] !pr-0">
                Period
              </TableCell>
              <TableCell className="!text-sm !text-center !pr-0 !pl-1">
                Block
              </TableCell>
              <TableCell className="!text-sm !text-center !pr-0 !pl-1">
                Block Time
              </TableCell>
              <TableCell className="!text-sm !text-center !pr-0 !pl-1">
                Hash
              </TableCell>
              <TableCell className="!text-sm !text-center !pr-0 !pl-1">
                Result
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {visibleRows?.map((i) => {
              return (
                <TableRow className="!w-[95%]">
                  <TableCell className="!text-white !pl-[2px] !pr-0 !text-center">
                    <p
                      style={{
                        fontWeight: 700,
                        fontSize: "12px",
                        color: zubgtext,
                      }}
                    >
                      {i?.tr_transaction_id}
                    </p>
                  </TableCell>
                  <TableCell
                    sx={{ color: zubgtext }}
                    className=" !pr-0 !pl-1 !text-center"
                  >
                    <span>
                      <LiveHelpIcon
                        className="!text-[#FBA343] cursor-pointer"
                        onClick={() =>
                          navigate("/trx/tron-scan", {
                            state: {
                              tron_id: i?.tr_number,
                            },
                          })
                        }
                      />
                    </span>
                    <span>{i?.tr_number}</span>
                  </TableCell>
                  <TableCell
                    sx={{ color: zubgtext }}
                    className=" !pr-0 !pl-1 !text-center"
                  >
                    <span>{i?.tr_block_time}</span>
                  </TableCell>
                  <TableCell
                    sx={{ color: zubgtext }}
                    className=" !pr-0 !pl-1 !text-center"
                  >
                    <span>{i?.tr_hashno}</span>
                  </TableCell>

                  <TableCell
                    sx={{ color: zubgtext }}
                    className=" !pr-0 !pl-1 !text-center"
                  >
                    <span
                      className={`
                ${
                  (String(Number(i?.tr41_slot_id)) === "0" &&
                    "!bg-gradient-to-t from-red-400 to-violet-400") ||
                  (String(Number(i?.tr41_slot_id)) === "5" &&
                    "!bg-gradient-to-t from-violet-400 to-green-400") ||
                  ((String(Number(i?.tr41_slot_id)) === "1" ||
                    String(Number(i?.tr41_slot_id)) === "3" ||
                    String(Number(i?.tr41_slot_id)) === "7" ||
                    String(Number(i?.tr41_slot_id)) === "9" ||
                    String(Number(i?.tr41_slot_id)) === "10") &&
                    "bg-gradient-to-t from-green-400 to-green-900") ||
                  ((String(Number(i?.tr41_slot_id)) === "2" ||
                    String(Number(i?.tr41_slot_id)) === "4" ||
                    String(Number(i?.tr41_slot_id)) === "6" ||
                    String(Number(i?.tr41_slot_id)) === "8" ||
                    String(Number(i?.tr41_slot_id)) === "30") &&
                    "bg-gradient-to-tl from-red-400 to-red-900") ||
                  (String(Number(i?.tr41_slot_id)) === "50" &&
                    "bg-[#3183ee]") ||
                  (String(Number(i?.tr41_slot_id)) === "40" &&
                    "bg-[#f1be24]") ||
                  (String(Number(i?.tr41_slot_id)) === "20" && "bg-[#eb2feb]")
                }
                transparentColor font-bold  text-lg
                `}
                    >
                      {Number(i?.tr41_slot_id)}
                    </span>
                    <span> {Number(i?.tr41_slot_id) <= 4 ? "S" : "B"}</span>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>

        <Box className="paginationTable !w-full">
          <TablePagination
            sx={{ background: zubgtext, color: "white", width: "100%" }}
            rowsPerPageOptions={[5, 10, 15]}
            component="div"
            count={game_history_data?.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            labelRowsPerPage="Rows"
          />
        </Box>
      </TableContainer>
      {/* <CustomCircularProgress isLoading={isLoading}/> */}
    </Box>
  );
};

export default GameHistory;
