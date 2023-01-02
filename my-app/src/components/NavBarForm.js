import React, { Component } from 'react'
import NavBarFormChild from './NavBarFormChild'
import css from './css/NavBarForm.module.css'

export class NavBarForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true,
         showForm: false,
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
        showForm={this.state.showForm}
        handleClick={this.handleClick}/>
      </div>
    )
  }
}

export default NavBarForm