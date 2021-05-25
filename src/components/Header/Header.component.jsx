import React from 'react'
import './Header.styles.css'
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiFillUnlock } from 'react-icons/ai';
import {IoAnalyticsSharp} from 'react-icons/io5'
import {MdNotifications} from 'react-icons/md'
import {IoPersonCircleOutline} from 'react-icons/io5'
import axios from 'axios';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            toggleNotifications:false
        }
    }

    componentDidMount()
    {

        axios.get('http://localhost:81/Nokia/NOKIA-1/afiseaza_notificare.php')
          .then( response =>{
            console.log(response);
            this.setState({row:response.data});
          })
          .catch(function (error) {
          console.log(error);
          })
          .then(function () {

          });
        
    }


    changeValue = (e) => {
        this.setState({toggleNotifications:!this.state.toggleNotifications})
        this.props.parentCall(this.state.toggleNotifications);
        e.preventDefault();
    }
    

    render() {
        return (
            
            <div className = "header-container">

                <div className = "account-section">
                    
                    <button onClick = {this.changeValue} ><MdNotifications className = "notifications-icon"></MdNotifications></button>
                    <IoPersonCircleOutline className = "account-photo"></IoPersonCircleOutline>
                    <h1 className = "account-name">John Doe</h1>

                </div>
                
            </div>

        )
    }

}
