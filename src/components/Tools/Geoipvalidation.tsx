import React from 'react'
import { Grid, Paper, Box, Button } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import CircularProgress from '@material-ui/core/CircularProgress'

import axios from 'axios';
import { Typography } from '@material-ui/core';
interface Props {}



const Geoipvalidation = (props: Props) => {

    const [reqdata,setReqdata] = React.useState({
        mail:'',
        loading:false,
        respdata:""
    })

   


    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setReqdata({
            ...reqdata,
            [e.target.name]:e.target.value
        })
    }

   
    

    const handleSubmit = async (): Promise<any> => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
        const form_data = new FormData();
        form_data.append('ip',reqdata.mail)
        setReqdata({
            ...reqdata,            
            loading:true
        })
    
        await axios.post(`${process.env.apiurl}/api/labs/v1/ipvalidation/`,form_data,config)
        .then(res=>{
            setReqdata({
                ...reqdata,
                respdata:res.data,
                loading:false
            })
            return
        }).catch(err=>{
            setReqdata({
                ...reqdata,            
                loading:false
            })
            alert('Something is went wrong!')
            return err
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
                  <TextField
                    id="mail"
                    label="IP"
                    name="mail"
                    fullWidth
                    onChange={handleChange}
                    value={reqdata.mail}
                  />
                </Grid>

                <Grid item xs={12} md={2} lg={2}>
                  {!reqdata.loading ? (
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleSubmit}
                    >
                      Validate
                    </Button>
                  ) : (
                    <CircularProgress
                  disableShrink
                  size={20}
                  style={{ marginRight: 10 }}
                />
                  )}
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Grid>
                    <Grid container>
                        <Paper style={{overflow:'scroll',width:'80vw'}}>
                        <Grid item xs={12}>
                            <Box p={3}>
                                <Typography>
                            <pre>
                                {JSON.stringify(reqdata.respdata, null, 2)}
                            </pre>
                            </Typography>
                            </Box>
                        </Grid>
                        </Paper>
                    </Grid>
 
      </Grid>
    </>
  )
}

export default Geoipvalidation
