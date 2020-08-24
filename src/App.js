import React, {Component} from 'react';
import './App.css';
import Notes from './components/Notes'
import axios from 'axios'

class App extends Component {

  state ={
    persons: [],
    flag: false
  }

  componentDidMount () {
    axios.get('https://jsonplaceholder.typicode.com/comments')
    .then(response => {
     const emails = response.data.map(i => {
      return{
        ...i
      }
     }
      )
      console.log(emails.email)
      this.setState({
        persons: emails
      })
   
    })
  }

  clickHandler = () => {
    this.setState ({
      flag: !this.state.flag
    })
  }

  render(){
    const data = this.state.persons
    const displayPersons = data.filter(i=>i.email.includes('co.uk')).map((person, key) =>  <Notes email = {person.email} key={person.id}/>)
    if(this.state.flag){
      
    }
   
    return (
      <div className="App">

        
        {displayPersons}

        <button onClick={this.clickHandler}>Click me</button>
      </div>
    )
  }
}

export default App;




  // {
    //   id: 1,
    //   name: 'Dinesh',
    //   age: 30
    // },
    // {
    //   id: 2,
    //   name: 'Mohana',
    //   age: 25
    // },
    // {
    //   id: 3,
    //   name: 'Theja',
    //   age: 29
    // }