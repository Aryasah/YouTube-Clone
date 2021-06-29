import React from 'react'
import {Grid} from '@material-ui/core'
import Comment from './Comment'


const ActualComment =({data})=>{
    const listOfComments=data.map((data,id)=> <Comment key={id}  data={data} />)
        return(
            <Grid spacing={7} >  
                {listOfComments}
            </Grid>
        )
}


export default ActualComment;