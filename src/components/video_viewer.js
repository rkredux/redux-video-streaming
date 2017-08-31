import React from "react"; 


const VideoDetail = ({video}) => {
	if(!video){
		return <div>Loading...</div> //Ajax spinner
	}
	const videoId = video.id.videoId; 
	const url = `https://www.youtube.com/embed/${videoId}`; 

	return(

		<div className="video-detail col-md-8">

			<div className="embed-responsive embed-responsive-16by9">
				<iframe className="embed-responsive-item" src={url}></iframe>
			</div>

			<div className="details">
				<div>{video.snippet.title}</div>
				<div>{video.snippet.description}</div>
			</div>

		</div>
	); 

}; 

 


// class VideoViewer extends Component{


// 	render(){
// 		return (
// 			<div>
// 				This is space for Video Viewer Compoment
// 			</div>
// 		); 
// 	}
// }

export default VideoDetail; 
