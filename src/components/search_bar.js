import React, {Component} from "react"; 

// const SearchBar = () => <input type="text"/>


// class based component 
class SearchBar extends Component{

	constructor(props){
		super(props); 
		this.state = {
			term: ""
		}; 
		this.onInputChange = this.onInputChange.bind(this);
		this.onInputFocus = this.onInputFocus.bind(this);  
	}


	onInputChange(event){
		this.setState({term: event.target.value});  
		// this.props.displayInputData(this.state.term)
	}

	onInputFocus(event){
		this.setState({term: ""}); 
	}


	render(){
		console.log("Inside searchBar render now"); 
		return (
			<div className="search-bar">
			   <input 
			       value= {this.state.term}
				   type="text" 
				   onFocus = {this.onInputFocus}
				   onChange={this.onInputChange}
				   placeholder = "Type here"
			   />
			</div>
			); 
	}
}

export default SearchBar; 


