import React, { useEffect, useState } from "react";
import axios from "axios";
import { styled } from '@mui/material/styles';
import {Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow, Paper} from '@mui/material/';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  align: "left",
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const Stats = () => {
  const heading = ["#", "EKIPA", "GP", "W", "W*", "L*", "L", "GF", "GA", "+/-", "PIM", "PTS"];
  const [stats, setStats] = useState([]);

  useEffect(() => {
    const getStats = async() => {
      const response = await axios.get("http://localhost:5000/stats/table");
      setStats(response.data);
  };
  getStats()
  .catch(console.error);
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {heading.map((head, i) => (
              <StyledTableCell key={i}>{head}</StyledTableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {stats.map((item, index) => (
            <StyledTableRow key={index}>
            <StyledTableCell>{item.ranking}</StyledTableCell>
              <StyledTableCell>{item.team}</StyledTableCell>
              <StyledTableCell>{item.gamesPlayed}</StyledTableCell>
              <StyledTableCell>{item.wins}</StyledTableCell>
              <StyledTableCell>{item.overtimeWin}</StyledTableCell>
              <StyledTableCell>{item.overtimeLoss}</StyledTableCell>
              <StyledTableCell>{item.losses}</StyledTableCell>
              <StyledTableCell>{item.goalsFor}</StyledTableCell>
              <StyledTableCell>{item.goalsAgainst}</StyledTableCell>
              <StyledTableCell>{item.diff}</StyledTableCell>
              <StyledTableCell>{item.penalties}</StyledTableCell>
              <StyledTableCell>{item.points}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Stats;