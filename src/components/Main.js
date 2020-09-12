import React,{Component} from 'react';
import trophy from '../asserts/trophy.png';
import picture from '../asserts/picture.png';
import machine from '../asserts/machine.png';

class Main extends Component{
  render(){
    return (
      <div>
        <div className="section1">
          <div className="row">
            <div className="col-md-4">
              <img src={trophy} alt=""/>
            </div>
            <div className="col-md-8">
              <p style={{fontWeight: "bold"}}>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</p>
              <ul>
                <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
                <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. </li>
              </ul>
              <img src={picture} alt=""/>
              <p>Government of India has awarded the <span style={{fontWeight:"bold"}}>National Energy Conservation Award 2018</span>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
            </div>
          </div>
        </div>
        <div className="section2">
          <p>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. </p>
          <img src={machine} alt=""/>
          <p>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </p>
          <hr style={{backgroundColor:"red"}}></hr>
          <p style={{fontWeight: "bold"}}>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</p>
          <p>CHEMICALS & PROCESS POWER WATER & WASTE WATER OILS & GAS PHARMA SUGARS & DISTILLERIES PAPER & PULP MARINE & DEFENCE METAL & MINING FOOD & BEVERAGE PETROCHEMICAL & REFINERIES SOLAR BUILDING HVAC FIRE FIGHTING AGRICULTURE & RESIDENTIAL</p>
        </div>
      </div>
    )
  }
}

export default Main;
