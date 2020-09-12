import React, {Component} from 'react';
import logo from '../asserts/logo.png'
import style from '../css/style.css';
class Header extends Component{
  render(){
    return (
      <div>
        <div className="head">
          <img src={logo} alt="logo.png"/>
        </div>
        {this.props.children}
      </div>
    )
  }
}

export default Header;
