import React,{Component} from 'react';


class Footer extends Component{
  render(){
    return (
      <div>
        <footer>
          <div className="row">
            <div className="col-md-4">
              <i  className="fas fa-phone-alt"></i>
              <p> Toll free:1800 200 1234</p>
            </div>
            <div className="col-md-4">
              <i className="fab fa-facebook"></i>
              <p> www.facebook.com/cripumps</p>
            </div>
            <div className="col-md-4">
              <i className="fab fa-firefox"></i>
              <p> www.crigroup.com</p>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}

export default Footer;
