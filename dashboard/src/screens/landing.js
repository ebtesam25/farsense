import React, {Component} from "react";
import {Link} from 'react-router-dom';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

import Logo from '../assets/logo.png';
import Data from '../data.json';

const data = Data

class Dash extends Component {
  constructor(props) {
    super(props);
  } 
    render() {
        return (
         <div style={{margin:10}}>
    
            <img src={Logo} height="70vh"  style={{ margin:'1.5%'}}></img>
        
            <div style={{float: "left", marginLeft:'5%',marginTop:'2.5%', backgroundColor:'#f7fcfb', borderRadius:30, boxShadow: "1px 3px 1px #9E9E9E"}}>
              <div style={{margin:"2.5% 2.5%",fontFamily:"Roboto", fontSize:"3.75vh",lineHeight:"100%", color:"#4A73B1", fontWeight:'bolder'}}>
              
                Temperature
               
                    <LineChart width={1700} height={300} data={data} margin={{ top: 40, right: 40, bottom: 40, left: 0 }} style={{fontSize:15}}>
                    <Line type="monotone" dataKey="Temperature" stroke="#298784" strokeWidth={1} />
                  
                    
                    <XAxis dataKey={"Time"} />
                    <YAxis />
                    <Tooltip /> 
                </LineChart>
                
    
                </div>
             
            </div>

            <div style={{float: "left", marginLeft:'5%',marginTop:'2.5%', backgroundColor:'#f7fcfb', borderRadius:30, boxShadow: "1px 3px 1px #9E9E9E"}}>
              <div style={{margin:"2.5% 2.5%",fontFamily:"Roboto", fontSize:"3.75vh",lineHeight:"100%", color:"#4A73B1", fontWeight:'bolder'}}>
              
                Humidity
               
                    <LineChart width={1700} height={300} data={data} margin={{ top: 40, right: 40, bottom: 40, left: 0 }} style={{fontSize:15}}>
                    <Line type="monotone" dataKey="Humidity" stroke="#298784" strokeWidth={1} />
        
                    <XAxis dataKey={"Time"} />
                    <YAxis />
                    <Tooltip />
                </LineChart>
                    
    
                </div>
             
            </div>




            <div style={{float: "left", marginLeft:'5%',marginTop:'2.5%', backgroundColor:'#f7fcfb', borderRadius:30, boxShadow: "1px 3px 1px #9E9E9E"}}>
              <div style={{margin:"2.5% 2.5%",fontFamily:"Roboto", fontSize:"3.75vh",lineHeight:"100%", color:"#4A73B1", fontWeight:'bolder'}}>
              
                Pressure
               
                    <LineChart width={1700} height={300} data={data} margin={{ top: 40, right: 40, bottom: 40, left: 0 }} style={{fontSize:15}}>
                    <Line type="monotone" dataKey="Pressure" stroke="#298784" strokeWidth={1} />
                  
                    <XAxis dataKey={"Time"} />
                    <YAxis />
                    <Tooltip />
                </LineChart>
                    
    
                </div>
             
            </div>






         </div>   
        );
    }
}

export default Dash;