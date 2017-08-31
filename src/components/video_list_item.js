import React, {Component} from "react"; 


const VideoListItem = ({video, onVideoSelect}) => { //importing only the 
	//video field from the entier giant prop object use 
	//ES6 object destructuring

	const imgUrl = video.snippet.thumbnails.default.url; 

	return (
		<li onClick={() => onVideoSelect(video)} className="list-group-item">
			<div className="video-list media">

				<div className="media-left">
					<img className="media-object" src={imgUrl}/>
				</div>

				<div className="media-body">
					<div className="media-heading">{video.snippet.title}</div>
				</div>

			</div>
		</li>
	); 
}


export default VideoListItem; 

