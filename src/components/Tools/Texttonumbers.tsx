import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'

import Tablepage from '../Subcomponents/Tablepage'

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

const Texttonumbers = () => {
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

    textobjs.text
      .match(
        /^\d{12}$|\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$|\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})/g
      )
      ?.map(function (val) {
        resultarray.push({ link: val.toString() })
        

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
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <TextField
              name="firsttext"
              label="Text with Phone numbers"
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
            disabled={textobjs.isLoading}
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
          <Tablepage rows={rows} headers={['Phone (approx..)']} />
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default Texttonumbers
