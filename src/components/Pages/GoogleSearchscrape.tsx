import React from 'react'
import { Grid, Paper, Box, MenuItem, Button } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import GoogleSearchTable from '../Subcomponents/GoogleSearchTable'
import { data, GoogleSearchforScrape } from '../../Apis/GoogleSearchApi'
import GetAppIcon from '@material-ui/icons/GetApp'
import { CSVLink } from 'react-csv'
import SimpleTable from '../Subcomponents/SimpleTable'

interface subdatapropsone {
  title: string
  adUrl?: string | null | undefined
  url: string
  trimmedUrl: string
  text: string
  ad: boolean
  position: number | string
  index?: number
}

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

const GoogleSearchscrape: React.FC<subdatapropsone[]> = (props) => {
  const [scrapedata, setScrapedata] = React.useState([])
  const [reqdata, setRequdata] = React.useState({
    query: '',
    ads: 'true',
    location: '',
    hl: 'true',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRequdata({
      ...reqdata,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.MouseEvent<HTMLElement>) => {
    const { error, resultdata } = await GoogleSearchforScrape(reqdata)
    if (!error) {
      setScrapedata(resultdata)
    } else {
      alert('something is went wrong')
    }
  }

  const headers = [
    { label: 'Title', key: 'title' },
    { label: 'AdUrl', key: 'adUrl' },
    { label: 'Url', key: 'url' },
    { label: 'Text', key: 'text' },
    { label: 'Ad', key: 'ad' },
    { label: 'Position', key: 'position' },
  ]

  return (
    <>
      <Grid container spacing={2} alignItems="flex-start">
        <Grid item xs={12}>
          <Paper elevation={0}>
            <Box p={3}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={3} lg={3}>
                  <TextField
                    id="query"
                    label="Query"
                    name="query"
                    fullWidth
                    onChange={handleChange}
                    value={reqdata.query}
                  />
                </Grid>
                <Grid item xs={12} md={2} lg={2}>
                  <TextField
                    id="ads"
                    label="Ads"
                    name="ads"
                    fullWidth
                    disabled
                    select
                    value={reqdata.ads}
                  >
                    <MenuItem value="true">True</MenuItem>
                    <MenuItem value="false">False</MenuItem>
                  </TextField>
                </Grid>
                <Grid item xs={12} md={2} lg={2}>
                  <TextField
                    id="location"
                    label="Location"
                    name="location"
                    fullWidth
                    onChange={handleChange}
                    value={reqdata.location}
                  />
                </Grid>
                <Grid item xs={12} md={3} lg={3}>
                  <TextField
                    id="hl"
                    label="Is in English"
                    name="hl"
                    fullWidth
                    select
                    onChange={handleChange}
                    value={reqdata.hl}
                  >
                    <MenuItem value="true">True</MenuItem>
                    <MenuItem value="false">False</MenuItem>
                  </TextField>
                </Grid>
                <Grid item xs={12} md={2} lg={2}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                  >
                    Search
                  </Button>
                </Grid>
              </Grid>
              
            </Box>
          </Paper>
        </Grid>
        

        <Grid item xs={12}>
          <CSVLink data={scrapedata} headers={headers}>
            <GetAppIcon />
          </CSVLink>

          <GoogleSearchTable rows={scrapedata} />
          
        </Grid>
      </Grid>
    </>
  )
}

export default GoogleSearchscrape
