import { Button, Grid, LinearProgress, Paper } from '@material-ui/core'
import React from 'react'
import facebookback from '../../assets/images/facebookback.png'
import { TextField } from 'formik-material-ui'
import { Formik, Form, Field } from 'formik'
import { useQuery, useMutation, queryCache } from 'react-query'
import axios from 'axios'
import Tablepagefacebook from '../Subcomponents/Tablepagefacebook'
interface Props {}

interface Values {
  pagename: string
  token: string
}

const initialValues = {
  pagename: '',
  token: '',
}

const addFacebookpage = (newTodo: any) => {
  // axios.post('/todos', newTodo)
  alert(JSON.stringify(newTodo))
  return newTodo
}

const fetchFacebookpages = async (): Promise<any> => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Token 3c9c34b9785f9bbdbfcab3eae96ee0cb1a605770',
    },
  }

  return await axios
    .get('http://localhost:8000/api/labs/v1/facebookpagepost/', config)
    
    
}

const Facebookposts = (props: Props) => {

  

  const mutation = useMutation(addFacebookpage, {
    onSuccess: async () => {
      console.log("I'm first!")
    },
  })

  const handleSubmit = (values: any) => {
    return mutation.mutate(values, {
      onSuccess: async () => {
        console.log("I'm second!")
      },
    })
  }
  
    const { data, isLoading, error } = useQuery(
        'facebookpages',
        fetchFacebookpages
      )
      
 

  
  return (
    <div>
      <Paper elevation={2} style={{ padding: 20 }}>
        <Formik
          initialValues={initialValues}
          validate={(values) => {
            const errors: Partial<Values> = {}
            if (!values.pagename) {
              errors.pagename = 'PageName is should not be empty'
            }

            if (!values.token) {
              errors.token = 'Token is should not be empty'
            }
            return errors
          }}
          onSubmit={handleSubmit}
        >
          {({ submitForm, isSubmitting }) => (
            <Form>
              <Grid
                container
                spacing={2}
                alignContent="space-around"
                alignItems="center"
              >
                <Grid item xs={12} sm={12} lg={12} md={12}>
                  <Field
                    component={TextField}
                    name="pagename"
                    type="text"
                    label="Page Name"
                    fullWidth
                    variant="outlined"
                  />
                </Grid>

                <Grid item xs={12} sm={12} lg={12} md={12}>
                  <Field
                    component={TextField}
                    type="text"
                    label="Token"
                    name="token"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={12} lg={12} md={12}>
                  <Button
                    variant="contained"
                    color="primary"
                    disabled={mutation.isLoading ? true : false}
                    onClick={submitForm}
                    fullWidth
                  >
                    Add
                  </Button>
                  {mutation.isLoading && <LinearProgress />}
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </Paper>

      <br></br>
      {isLoading&& 'fetching'}
      <Tablepagefacebook
        rows={data.data}
        headers={['PageName', 'Access Token']}
      />
    </div>
  )
}

export default Facebookposts
