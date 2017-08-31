import _ from "lodash"; 
import React, { Component } from 'react';
import SearchBar from "./search_bar.js"; 
import VideoList from "./video_list.js"; 
import VideoDetail from "./video_viewer.js"; 
import YTSearch from "youtube-api-search";
const API_KEY = "";



export default class App extends Component {


	constructor(props){
		// console.log("constructor called")
		super(props); 
		this.videoSearch(props.initialLoad); 
		this.state = {
			videos:[], 
			selectedVideo: null
		};		
	}


	videoSearch(searchTerm){
		YTSearch({key: API_KEY, term: searchTerm}, (videos) => {
			console.log("The Youtube just responded"); 
			console.log(videos); 
			this.setState( 
				{
					videos: videos, 
					selectedVideo: videos[0]
				}
			); 
		}); 
	}


    render() {

    	const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300); 

	    return (

	      	<div>
	      		<SearchBar onSearchTermChange={videoSearch}/>
	      		<VideoDetail video={this.state.selectedVideo}/>
	      		<VideoList 
	      		  videos={this.state.videos}
	      		  onVideoSelect={(selectedVideo) => this.setState({selectedVideo})}
	      		/>
	     	</div>

    	);
  	}


}
