import React, { Component } from 'react'
import NavBarFormChild from './NavBarFormChild'
import css from './css/NavBarForm.module.css'

export class NavBarForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: false,

      }
    }

    handleClick = () => {
        this.setState((prevState) => ({
            isLoggedIn: prevState.isLoggedIn === true ? false : true,
            showForm: prevState.showForm === false ? true : false,
        }))
    }
  render() {
    return (
      <div className={css.NavBar}>
        <h1>Gallery</h1>
        <NavBarFormChild 
        isLoggedIn={this.state.isLoggedIn}
        handleClick={this.handleClick}/>
      </div>
    )
  }
}

export default NavBarForm