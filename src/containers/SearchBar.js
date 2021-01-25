import React from 'react'

import {connect} from 'react-redux'

import {fetchWeather} from '../actions/index'
//import {bindActionCreators} from 'redux'
class SearchBar extends React.Component {
    constructor(props){
        super(props)

        this.state = {term : ''};

         this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange = (event)=>{
        
        this.setState({term:event.target.value})
    }

    onFormSubmit(event){
        event.preventDefault()
        this.props.fetchWeather(this.state.term)
        this.setState({term: ''})
        console.log("Console cleared")
    }

    render(){
        return(
            <form 
            className = "input-group"
            onSubmit = {this.onFormSubmit}>
                <input
                placeholder = "Get a five day weather forecast"
                className = "form-control"
                value = {this.state.term}
                onChange = {this.onInputChange}
                />
                <span className = "input-group-btn">
                    <button type = "submit" className = "btn btn-secondary">Search</button>
                    </span>
            </form>
        )
    }

}

function mapStateToProps(state) {
    return { term: state.term }
}

export default connect(null, { fetchWeather })(SearchBar)