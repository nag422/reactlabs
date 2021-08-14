import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Alert from '@material-ui/lab/Alert'
import axios from 'axios'
import CircularProgress from '@material-ui/core/CircularProgress'
import ButtonGroup from '@material-ui/core/ButtonGroup'

const config = {
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}))

export default function Youtubevideorank() {
  const classes = useStyles()
  const [textobjs, setTextobjs] = React.useState({
    firsttext: '',
    secondtext: '',
  })
  const [responsestate, setResponsestate] = React.useState({
    status: 0,
    rank: '',
    stage: '',
    loading: false,
  })

  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextobjs({
      ...textobjs,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async () => {
    const form_data = new FormData()
    form_data.append('text1', textobjs.firsttext)

    setResponsestate({
      ...responsestate,

      loading: true,
    })

    await axios
      .post(`${process.env.apiurl}/api/labs/v1/youtuberank/`, form_data, config)
      .then((res) => {
        console.log(res.data)
        if (+res.data.status === 200) {
          return setResponsestate({
            ...responsestate,
            status: res.data.status,
            rank: res.data.rank,
            stage: res.data.stage,
            loading: false,
          })
        } else {
          setResponsestate({
            ...responsestate,
            status: 400,
            loading: false,
          })
        }
      })
      .catch((err) => {
        console.log(err.message)
        setResponsestate({
          ...responsestate,
          status: 400,
          loading: false,
        })
      })
  }

  return (
    <>
    
      <Grid container spacing={2} wrap="wrap">
        <Grid item xs={12}>
          <Paper elevation={0}>
            <Box p={3}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={10} lg={10}>
                  <TextField
                    id="firsttext"
                    label="URL"
                    name="firsttext"
                    fullWidth
                    onChange={handleOnchange}
                    value={textobjs.firsttext}
                  />
                </Grid>

                <Grid item xs={12} md={2} lg={2}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                    disabled={responsestate.loading}
                  >
                    {responsestate.loading && (
                      <CircularProgress
                        disableShrink
                        size={20}
                        style={{ marginRight: 10 }}
                      />
                    )}
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12}>
            <Paper className={classes.paper}>
            <Box p={3}>
              {responsestate.status === 200 ? (
                <Alert severity="success">
                  <strong>Rank:</strong> {responsestate.rank} out of 10 &nbsp;{' '}
                  <strong>Level:</strong> {responsestate.stage}
                </Alert>
              ) : responsestate.status === 400 ? (
                'Something is Went Wrong'
              ) : null}
              </Box>

              <Box display="flex" flexDirection="column" alignContent="center" justifyContent="space-between">
            <Typography variant="h6" component="div" align="center">
              Available Levels
            </Typography><br></br>
            <ButtonGroup variant="outlined" color="primary" orientation='vertical' size="small" disableRipple={true} disableFocusRipple={true} disableElevation={true}>
              <Button>Normal</Button>
              <Button>Below Average</Button>
              <Button>Average</Button>
              <Button>Best</Button>
              <Button>Viral</Button>
              <Button>Trending</Button>
              <Button>Great</Button>
            </ButtonGroup>
            </Box>
            </Paper>
            
          </Grid>
          

       

      </Grid>
      
    </>
  )
}
