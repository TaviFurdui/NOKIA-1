import './App.css';
import Menu from './components/Menu/Menu.component'
import Header from './components/Header/Header.component'
import NotificationsPage from './pages/Notifications.page'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import ReactNotification from 'react-notifications-component';
import 'animate.css/animate.compat.css'
import 'react-notifications-component/dist/theme.css'
import SettingsPage from './pages/settings/Settings.page.jsx'
import React from 'react';
import { BsFillXCircleFill,BsFillInfoCircleFill } from 'react-icons/bs'
import { AiFillWarning } from 'react-icons/ai';
import { Scrollbar } from 'react-scrollbars-custom';
import axios from 'axios';



class App extends React.Component {


  constructor(props) {
    super(props);

    this.state = {
      row: [],
      toggleNotifications:true,
    }
 }

  handleChange = (childData) => {

    this.setState({ toggleNotifications: childData });
    console.log(this.state.toggleNotifications);
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

  render() {
    
    

    return (
    
    <Router>
      <div className="App">
      

          <Menu></Menu>

          <div style = {{display:this.state.toggleNotifications ? 'block': 'none'}} className="notification-popup-section">
                        <text className = "notifications-popup-header">Notificari</text>
                        <hr className = "horizontal-line-popup"></hr>
                        <div className = "notifications-stacked">
                                {this.state.row.map(datum => {
                                if (datum.MESAJ == "A fost creat un ticket nou de prioritate 0")
                                    return (
                                        
                                        <div className = "notification-container-item" style = {{display:'flex', flexDirection:'row'}}>
                                            <BsFillXCircleFill className = "notification-icon" style = {{color:"red", fontSize:30}}></BsFillXCircleFill>
                                            <div className="notification-text-popup">
                                            {datum.MESAJ}
                                            <div className="data_notificare" style = {{textAlign:'right', fontSize:15}} >
                                              {datum.DATA_CREAT}
                                            </div>
                                        </div> 
                                    </div>
                                    )
                                
                                else if(datum.MESAJ == "A fost creat un ticket nou de prioritate 1" ||datum.MESAJ == "A fost creat un ticket nou de prioritate 2" )
                                    return (
                                        <div className = "notification-container-item" style = {{display:'flex', flexDirection:'row'}}>
                                            <AiFillWarning className = "notification-icon"  style = {{color:"yellow", fontSize:30}}></AiFillWarning>
                                            <div className="notification-text-popup">
                                            {datum.MESAJ}
                                            <div className="data_notificare" style = {{textAlign:'right', fontSize:15}} >
                                              {datum.DATA_CREAT}
                                            </div>
                                        </div> 
                                    </div>
                                    
                                )
                                else if (datum.MESAJ =="A fost creat un ticket nou de prioritate 3")
                                    return (
                                        <div className = "notification-container-item" style = {{display:'flex', flexDirection:'row'}}>
                                            <BsFillInfoCircleFill className = "notification-icon" style = {{color:"blue", fontSize:30}}></BsFillInfoCircleFill>
                                            <div className="notification-text-popup">
                                            {datum.MESAJ}
                                            <div className="data_notificare" style = {{textAlign:'right', fontSize:15}} >
                                              {datum.DATA_CREAT}
                                            </div>
                                        </div> 
                                    </div>
                                    )
                            })
                            }

                            
                       </div>
                    </div>
          
          <Header parentCall = {this.handleChange}></Header>

          
        <Switch>

          <Route path="/notifications">
            <ReactNotification></ReactNotification>
            <NotificationsPage></NotificationsPage>
          </Route>

          <Route path = "/settings">
            <SettingsPage></SettingsPage>
            </Route>
            

        </Switch>
        

    </div>
    </Router>

  );
  }
 

  
}

export default App;
