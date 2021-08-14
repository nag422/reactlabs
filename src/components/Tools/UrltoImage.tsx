import React from 'react'
import { Grid, Paper, Box, Button } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'



// interface dataprops{
//     status: string;
//     date?:number|string|null;
//     httpCode?: 0;
//     result: {
//         query: string;
//         page?: number|string|null;
//         date: string;
//         location: string;
//         resultsTotal: number;
//         results: subdataprops[]}}

const UrltoImage:React.FC = () => {
  
  
  const [reqdata,setRequdata] = React.useState<{url:string,loading:boolean}>({
    url:'https://stackoverflow.com/',
    loading:false

  })

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setRequdata({
      ...reqdata,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = async (e:React.MouseEvent<HTMLElement>) =>  {
    setRequdata({
        ...reqdata,
        loading:true
      })
   

  }



  return (
    <>
    <Grid container spacing={2} alignItems="flex-start">
      
      <Grid item xs={12}>
        <Paper elevation={0}>
          <Box p={3}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={10} lg={10}>
                <TextField id="url" label="URL" name="url" fullWidth onChange={handleChange} value={reqdata.url} />
              </Grid>              
              
              <Grid item xs={12} md={2} lg={2}>
                  {!reqdata.loading ?<Button variant="contained" color="primary" onClick={handleSubmit}>Search</Button>:'Processing'}
                </Grid>
            </Grid>
          </Box>
        </Paper>
      </Grid>

      <Grid container spacing={2}>
          <Grid item xs={12}>
          <iframe src={reqdata.url} title="W3Schools Free Online Web Tutorials" height="600" width="100%" frameBorder="0"></iframe>
          </Grid>
      </Grid>

      
      
    </Grid>
    
    
    
          
       

    
    
    
</>
  
  )

}

export default UrltoImage
