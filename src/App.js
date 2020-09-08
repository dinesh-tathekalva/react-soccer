import React, {Fragment, Component} from 'react';
import './App.css';
import Movies from './components/Movies'
import axios from 'axios'

const years = [2010, 2015, 2016, 2017]
class App extends Component {

  constructor (){
    super()
    this.state = {
      movies: []
    }
  }

  changeHandler = (e) => {
    axios.get(`https://jsonmock.hackerrank.com/api/movies?Year=${e.target.value}`)
    .then(response => {
      const movieData = response.data.map(i => i)
    this.setState({
      movies: movieData
    })
      
    
  })
  }
  render (){
  const optionList = years.map(year => <option key={year}>{year}</option>)
  console.log(years)
    return (
      <Fragment>
        <Movies options ={optionList} changeYear={this.changeHandler}/>
        <p>{this.state.movies.Title}</p>
      </Fragment>
    )
  }

}
export default App