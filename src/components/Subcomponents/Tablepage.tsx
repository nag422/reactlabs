import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
  
    typography:{
        fontFamily:'Quicksand'
    }
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
  
    typography:{
        fontFamily:'Quicksand'
    }
}))(TableRow);





const useStyles = makeStyles({
  table: {
    minWidth: 10,
  }
});

export default function Tablepage(props:any) {
  const classes = useStyles();
  

  return (
    <TableContainer component={Paper} style={{ width: '77.5vw' }}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>

              {props.headers.map((val:any,index:any) => {

                 return <StyledTableCell key={index}>{val}</StyledTableCell>
                  

              })}            
            

          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows.map((row:any,index:any) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                {row.link}
              </StyledTableCell>              
              {row.text && <StyledTableCell align="left">{row.text}</StyledTableCell>}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
