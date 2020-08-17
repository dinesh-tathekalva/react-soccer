import React, { Component } from 'react'
import data from '../data'
import ButtonPlayer from './ButtonPlayer'
var elem='';
class Soccer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            players:[...data],
            selectedPlayer: null
            
        }
    }
        handleClick = id => {
            this.setState({
                selectedPlayer: this.state.players[id]
            }
            )
        }
    
    render() {
        const myData= this.state.players
        const test = myData.map((list, id) => 
        <ButtonPlayer name={list.name} key={id} onSelect={this.handleClick.bind(this,id)} ></ButtonPlayer>)

        return(
            <>
                <h3>SOCCER</h3>
                {test}
                <h3>{this.state.selectedPlayer && this.state.selectedPlayer.team}</h3>
            </>
        )
    }
}

export default Soccer
