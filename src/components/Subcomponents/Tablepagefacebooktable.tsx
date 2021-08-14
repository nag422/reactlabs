import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  body: {
    fontSize: 14,
  },
  
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
  
    
}))(TableRow);





const useStyles = makeStyles({
  table: {
    minWidth: 10,
  }
});

export default function Tablepagefacebooktable(props:any) {
  const classes = useStyles();
  

  return (
    <TableContainer component={Paper} style={{ width: '100%' }}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>

              {props.headers.map((val:any,index:any) => {

                 return <StyledTableCell key={index}>
                   {val}
                   </StyledTableCell>
                  

              })}            
            

          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows?.map((row:any,index:any) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                
                  <img src = {`https://app.kiranvoleti.com${row.thumbnail}`} width={300}/>
              </StyledTableCell>              
              <StyledTableCell align="left">
              {row.isliked?
              
              <Button variant="contained" color="secondary" onClick={()=>props.addtoqueue(+row.id)}>Delete</Button>
              :
              
              <Button variant="contained" color="primary" onClick={()=>props.addtoqueue(+row.id)}>Add</Button>
              }
                
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
