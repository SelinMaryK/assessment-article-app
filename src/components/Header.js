import React, {Component} from 'react';
import '../css/header.css';

class Header extends Component{

    state={
        searchArticle:''
    }

    handleSearch = (event) =>{
        this.props.searchResult(event.target.value);
        this.setState({
            searchArticle: event.target.value
          });
    }

    render(){
        return(
            <header>
                <input type='text' className='search-input' placeholder='Search Article' name='searchArticle' onChange={this.handleSearch} value={this.state.searchArticle}></input>
            </header>
        );
    }

}

export default Header;