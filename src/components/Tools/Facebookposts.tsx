import { Button, Grid, MenuItem, TextField,CircularProgress } from '@material-ui/core'
import React from 'react'
import axios from 'axios'
import Tablepagefacebooktable from '../Subcomponents/Tablepagefacebooktable'

interface Props {
    
}



const Facebookposts = (props: Props) => {

    const [loading,setLoading] = React.useState(false)
    const [imguploadcount,setImguploadcount] = React.useState(0)

    const [respdata,setRespdata] = React.useState({
        pages:[],
        images:[]
    })
    

    const [submitdata,setSubmitdata] = React.useState({
        page:'',
        allimages:[] as (string | number)[],
        gap:2,
        tagtext:'',
        pagetype:'fb',
        tokenval:'',
        imgfiles:[]

    })

    const config = {
        headers: {
          'content-type': 'application/json',
          'Authorization': 'Token '+submitdata.tokenval
        }
      }

    React.useEffect(() => {

        axios.get('https://app.kiranvoleti.com/api/labs/v1/facebooksubmit/')

          .then((res) => {

            setRespdata({
                ...respdata,
                pages:res.data.pages,
                images:res.data.images

            })

          })
          .catch(err=> {
              console.log(err.message)
          })
        
       
    }, [])

    const handleChange =(e:React.ChangeEvent<HTMLInputElement>) => {

        setSubmitdata({
            ...submitdata,
            [e.target.name] : e.target.value
    
        })
        
    }

    const handlefileChange= (e:React.ChangeEvent<HTMLInputElement>) => {

        setSubmitdata({
            ...submitdata,
            [e.target.name] : e.target.files
    
        })
        
    }

    const submitfiles =() => {
        const formconfig = {
            headers: {
              'content-type': 'multipart/form-data',
              'Authorization': 'Token '+submitdata.tokenval
              
            }
          }
        
        for (const [key, value] of Object.entries(submitdata.imgfiles)) {
            console.log(`${key}: ${value}`);

            let form_data = new FormData()
            form_data.append('file',value);

            axios.post('https://app.kiranvoleti.com/api/labs/v1/imgbulkuploader/',form_data,formconfig)
            .then(res=>{
                if (+res.data.status == 200){
                    setImguploadcount(imguploadcount => +imguploadcount+1 )
                }else if (+res.data.status == 400){
                    alert('Authentication is failed')
                }
                
            }).catch(err=>{
                console.log(err)
            })
          }
          
    }

    

    const addtoqueue = (id:number) => {
        

        const updatedimages = respdata.images.filter((val:any, key:any) => {
            return [...respdata.images, +val.id == +id ? val.isliked = !val.isliked : null]
        })
        setRespdata({
            ...respdata,
            images:updatedimages

        })
        let isexist = submitdata.allimages.indexOf(id);
        console.log('isexist',isexist)

        if(+isexist === -1){
            
            submitdata.allimages.push(id)
        }else{
            
            submitdata.allimages.splice(isexist,1)
        }
        

    }


    const submissiondata = async ():Promise<any>=> {

        
        setLoading(!loading)
          const form_data = new FormData();

          form_data.append('page',submitdata.page)
          form_data.append('images',(submitdata.allimages.join(',')))
          form_data.append('gap',(submitdata.gap).toString())
          form_data.append('tagtext',submitdata.tagtext)
          form_data.append('pagetype',submitdata.pagetype)


          

         await axios.post('https://app.kiranvoleti.com/api/labs/v1/facebooksubmit/',form_data,config)
          .then((res) => {
            setLoading(false)
            alert('completed')
            console.log(res.data)
          }).catch(err=>{
            setLoading(false)
          })

          return true

    }

   

    return (
      <div>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12}>
            <input
              type="file"
              name="imgfiles"
              id="outlined-basic"
              onChange={handlefileChange}
              multiple
            />
            <Button variant="outlined" color="secondary" onClick={submitfiles}>Uploads images</Button>
            <Button variant="text" color="secondary">{imguploadcount} Uploaded Images</Button>
          </Grid>

          <Grid item xs={12} sm={12} md={12}>
            <TextField
              name="tokenval"
              value={submitdata.tokenval}
              id="outlined-basic"
              label="Authorization Token"
              variant="outlined"
              fullWidth
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <TextField
              name="page"
              value={submitdata.page}
              id="outlined-basic"
              label="PageName"
              variant="outlined"
              select
              fullWidth
              onChange={handleChange}
            >
              {respdata.pages?.map((val: any, index: any) => {
                return (
                  <MenuItem value={val.id} key={index}>
                    {val.pagename}
                  </MenuItem>
                )
              })}
            </TextField>
          </Grid>

          <Grid item xs={12} sm={12} md={12}>
            <TextField
              name="pagetype"
              value={submitdata.pagetype}
              id="outlined-basic"
              label="fb or instal"
              variant="outlined"
              fullWidth
              onChange={handleChange}
              select
            >
              <MenuItem value="fb">Facebook</MenuItem>
              <MenuItem value="in">Insta</MenuItem>
            </TextField>
          </Grid>

          <Grid item xs={12} sm={12} md={12}>
            <TextField
              name="gap"
              value={submitdata.gap}
              id="outlined-basic"
              label="Time Interval"
              variant="outlined"
              fullWidth
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <TextField
              name="tagtext"
              value={submitdata.tagtext}
              id="outlined-basic"
              label="Text of posts"
              variant="outlined"
              multiline={true}
              rows={5}
              fullWidth
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={12}>
            {loading && <CircularProgress size={20} />}
            {!loading && (
              <Button
                variant="contained"
                onClick={submissiondata}
                color="primary"
              >
                Submit
              </Button>
            )}
          </Grid>
        </Grid>

        <br></br>

        <Tablepagefacebooktable
          rows={respdata.images}
          headers={['Media', 'Action']}
          addtoqueue={addtoqueue}
        />
      </div>
    )
}

export default Facebookposts
