import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import CircularProgress from '@material-ui/core/CircularProgress'

import Tablepage from '../Subcomponents/Tablepage'
const baseurl = process.env.apiurl
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

const Texttoemails = () => {
  const classes = useStyles()
  const [rows, setRows] = React.useState([])
  const [textobjs, setTextobjs] = React.useState({
    text: '',
    isLoading: false,
  })

  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextobjs({
      ...textobjs,
      text: e.target.value,
    })
  }

  const handleSubmit = () => {
    setTextobjs({
      ...textobjs,
      isLoading: true,
    })

    let resultarray: any = []

    textobjs.text.match(/\S+@\S+\.\S+/g)?.map(function (val) {
      var urls = val.split('@')
      console.log(val)
      resultarray.push({ text: urls[1].toString(), link: val })

      return 1
    })
    setRows(resultarray)
    setTextobjs({
      ...textobjs,
      isLoading: false,
    })
  }

  return (
    <React.Fragment>
      
      
        <Grid container spacing={2}>
          

          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <TextField
                name="firsttext"
                label="Text with contains emails"
                type="text"
                required
                variant="outlined"
                multiline={true}
                rows={15}
                fullWidth
                value={textobjs.text}
                onChange={handleOnchange}
              />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              disabled={false}
            >
              {textobjs.isLoading && (
                <CircularProgress
                  disableShrink
                  size={20}
                  style={{ marginRight: 10 }}
                />
              )}
              Submit
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Tablepage
              rows={rows}
              headers={['Email', 'Related Domain (approx..)']}
            />
          </Grid>
        </Grid>
      
    </React.Fragment>
  )
}

export default Texttoemails
