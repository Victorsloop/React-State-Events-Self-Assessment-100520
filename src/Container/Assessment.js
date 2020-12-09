// import {render} from '@testing-library/react'
import React from 'react'
import {yes,no} from '../objects.js'

class Assessment extends React.Component{
    noObject = { statement: no["no-statement"], image: no["no-image"] }
    yesObject = { statement: yes["yes-statement"], image: yes["yes-image"]}
    state = {
        statement: this.noObject.statement,
        image: this.noObject.image,
    }
    handleClick = () => {
        if(this.state.statement === this.noObject.statement && this.state.image === this.noObject.image){
            this.setState({
                statement: this.yesObject.statement,
                image: this.yesObject.image
            })
        }else 
        this.setState({
            statement: this.noObject.statement,
            image: this.noObject.image
        })
    }
// image first and header second 
render() {
    return (
      <div onClick={this.handleClick}>
        <img alt="beef" src={this.state.image} />
        <h1>{this.state.statement}</h1>
      </div>
    )
  }
}



export default Assessment