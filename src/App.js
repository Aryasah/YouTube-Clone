import React from 'react'
import {Grid} from '@material-ui/core'
// import SearchBar  from './components/SearchBar'
import NavBar from './components/NavBar'
import VideoList from './components/VideoList'
// import VideoList from './components/VideoList'

import VideoDetail from './components/VideoDetail'
import youtube from './api/youtube'

import './components/css/welcome.css'

class App extends React.Component{
state={
    video:[],
    selectedVideo:null,
}

    onVideoSelect=(video)=>{
        this.setState({selectedVideo:video})
    }
    handleSubmit = async (searchTerm)=>{
        const response = await youtube.get('search',{
            params: {
            part:'snippet',
            maxResults: 6,
            key : 'AIzaSyAAZ07jzmpB9IEN-h4SspNOowV78aeZaYE',
            q: searchTerm,
        }
        })
        // console.log(response)
        this.setState({video: response.data.items, selectedVideo:response.data.items[0]})
    }
    render()
    {
        return(
            
            <Grid justify="center" container spacing={5} >
                
                <Grid item xs={12} className="base">
                    <Grid container spacing={5}>
                        <Grid item xs={12}>
                            {/* Search Bar */}
                            <NavBar onFormSubmit={this.handleSubmit}/>
                        </Grid>

                        <Grid item xs={12} md={7} lg={8}> 
                            {/* Video Detail */}
                            <VideoDetail video={this.state.selectedVideo}/>
                        </Grid>

                        <Grid item xs={12} md={5} lg={4} >
                            {/* Video List */}
                            <VideoList video={this.state.video} onVideoSelect={this.onVideoSelect}/>
                        </Grid>
                    </Grid>
                </Grid> 
                <div className="ocean">
                <div className="wave"></div>
                <div className="wave"></div>
                </div>
            </Grid>
        )
    }
}


export default App;

