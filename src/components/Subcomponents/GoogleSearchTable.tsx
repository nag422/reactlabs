import React from 'react';
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';




const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.common.black,
    },
    body: {
      fontSize: 14,
    }
  }),
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      overflow:"hidden",
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }),
)(TableRow);





const useStyles = makeStyles({
  table: {
    minWidth: '100%',
    
  },
});

interface subdataprops
{
        title: string;
        adUrl?: string|null|undefined;        
        url: string;
        trimmedUrl: string;
        text: string;
        ad: boolean;
        position: number|string;
        index?:number
}
// type Props=
// {
//   status: string;
//   date?:number|string|null;
//   httpCode?: 0;
//   rows?: subdataprops[];
//   result: {
//       query: string;
//       page?: number|string|null;
//       date: string;
//       location: string;
//       resultsTotal: number;
//       results: subdataprops[];
      
//     }}

interface Props{
    rows:subdataprops [];
}


const GoogleSearchTable:React.FC<Props>= ({rows,...rest}) => {
  const classes = useStyles();
  

  return (
      <>
     
    <TableContainer component={Paper} style={{overflowX: 'auto'}}>
      <Table className={classes.table} aria-label="customized table" stickyHeader={true}>
        <TableHead>
          <TableRow>
            <StyledTableCell>Title</StyledTableCell>
            <StyledTableCell align="right">Ad URL</StyledTableCell>
            <StyledTableCell align="right">URL</StyledTableCell>
            {/* <StyledTableCell align="right">TrimmedUrl</StyledTableCell> */}
            <StyledTableCell align="right">Text</StyledTableCell>
            <StyledTableCell align="right">Is it Ad?</StyledTableCell>
            <StyledTableCell align="right">Position</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            
          {rows.map((val,index) => {
              return <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row" align="left"  width={150}>
                {val.title?val.title:"It may be advertisement"}
              </StyledTableCell>
              <StyledTableCell align="right" width={150}>{val.adUrl?val.adUrl.substr(1,30):"no Ad"}</StyledTableCell>
              <StyledTableCell align="right" width={150}>{val.url.substr(0,30)}</StyledTableCell>
              {/* <StyledTableCell align="right" width={150}>{val.trimmedUrl}</StyledTableCell> */}
              <StyledTableCell align="right" width={150}>{val.text?val.text:'No description'}</StyledTableCell>
              <StyledTableCell align="right">{val.ad?'true':'false'}</StyledTableCell>
              <StyledTableCell align="right">{val.position}</StyledTableCell>
            </StyledTableRow>

          })}
            
       
        </TableBody>
      </Table>
    </TableContainer>
    
    
    </>
  );
  
}
export default GoogleSearchTable