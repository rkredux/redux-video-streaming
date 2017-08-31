import React, { Component } from 'react';
import SearchBar from "./search_bar.js"; 
import VideoList from "./video_list.js"; 
import VideoDetail from "./video_viewer.js"; 
import YTSearch from "youtube-api-search";
const API_KEY = "Fill your API key here";



export default class App extends Component {


	constructor(props){
		super(props); 
		this.state = {
			videos:[], 
			selectedVideo: null
		};
		// this.updateSelection = this.updateSelection.bind(this); 
		YTSearch({key: API_KEY, term: "India"}, (videos) => {
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



	// udpateSelection(selectedVideo){
	// 	this.setState({selectedVideo})
	// }


    render() {
    	// console.log("Inside App render method"); 
	    return (

	      	<div>
	      		<SearchBar/>
	      		<VideoDetail video={this.state.selectedVideo}/>
	      		<VideoList 
	      		  videos={this.state.videos}
	      		  onVideoSelect={(selectedVideo) => this.setState({selectedVideo})}
	      		/>
	     	</div>
    	);
  	}


}
