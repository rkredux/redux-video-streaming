import React, {Component} from "react"; 

// const SearchBar = () => <input type="text"/>


// class based component 
class SearchBar extends Component{

	constructor(props){
		super(props); 
		this.state = {
			term: "Search here"
		}; 
		this.onInputChange = this.onInputChange.bind(this);
		this.onInputFocus = this.onInputFocus.bind(this);  
	}

	onInputChange(term){
		this.setState({term});  
		this.props.onSearchTermChange(term); 
	}

	onInputFocus(event){
		this.setState({term: ""}); 
	}

	render(){
		return (
			<div className="search-bar">
			    <input 
			       value= {this.state.term}
				   type="text" 
				   onFocus = {this.onInputFocus}
				   onChange={(event) => this.onInputChange(event.target.value)}
			    />
			</div>
			); 
	}
}

export default SearchBar; 


