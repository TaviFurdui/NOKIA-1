import React from 'react'
import './Settings.styles.css'
import Switch from 'react-switch'
import { BsArrowRight } from "react-icons/bs";

export default class SettingsPage extends React.Component {


    constructor(props) {
        super(props);

        //Declaram 3 variabile pentru 3 stari de la cele 3 tipuri de notificari
        this.state = {
            checked1: false,
            checked2: false,
            checked3:false,
            checked4: false,
            checked5: false,
            checked6: false,
            checked7: false,
            checked8:false,
        };

        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleChange3 = this.handleChange3.bind(this);
        this.handleChange4 = this.handleChange4.bind(this);
        this.handleChange5 = this.handleChange5.bind(this);
        this.handleChange6 = this.handleChange6.bind(this);
        this.handleChange7 = this.handleChange7.bind(this);
        this.handleChange8 = this.handleChange8.bind(this);
        

    }


    //Bifeaza switch 1
     handleChange1(checked1) {
    this.setState({ checked1 });
    }
    //Bifeaza switch 2
     handleChange2(checked2) {
    this.setState({ checked2 });
        
         if (this.state.checked2 == true) {
             this.setState({ checked3: true });
             this.setState({ checked4: true });
             this.setState({ checked5: true });
              this.setState({ checked6: true });
         }
         else  if (this.state.checked2 == false) {
             this.setState({ checked3: false });
             this.setState({ checked4: false });
             this.setState({ checked5: false });
              this.setState({ checked6: false });
         }
    }
    //Bifeaza switch 3
     handleChange3(checked3) {
    this.setState({ checked3 });
    }
    //Bifeaza switch 4
     handleChange4(checked4) {
    this.setState({ checked4 });
    }
    //Bifeaza switch 5
     handleChange5(checked5) {
    this.setState({ checked5 });
    }
    //Bifeaza switch 6
     handleChange6(checked6) {
    this.setState({ checked6 });
    }
    //Bifeaza switch 7
     handleChange7(checked7) {
    this.setState({ checked7 });
    }

    handleChange8(checked8) {
    this.setState({ checked8 });

         if (this.state.checked8 == true) {
            this.setState({ checked1: true });
            this.setState({ checked2: true });
            this.setState({ checked3: true });
            this.setState({ checked4: true });
            this.setState({ checked5: true });
            this.setState({ checked6: true });
            this.setState({ checked7: true });
            this.setState({ checked8: true });
         }
         else if (this.state.checked8 == false) {
            this.setState({ checked1: false });
            this.setState({ checked2: false });
            this.setState({ checked3: false });
            this.setState({ checked4: false });
            this.setState({ checked5: false });
            this.setState({ checked6: false });
            this.setState({ checked7: false });
            this.setState({ checked8: false });
         }
        
    }


    render() {
        
        return (
            
            <React.Fragment>
                <div className = "settings-container">
                    <h1 className = "setari-header">Setari</h1>

                    <h3 className = "notificari-header">Notificari</h3>
                    <hr></hr>

                    <label>
                        <h2>Ce fel de notificari doriti sa primiti in continuare ?</h2>


                        <div className = "switches-container">

                        <div className = "switch switch-option-1">
                                <text className = "toate-notificarile-text">Vreau sa primesc toate tipurile de notificari ! *</text>
                                <Switch className = "switch-1" onChange={this.handleChange8} checked={this.state.checked8} 
                                onColor="#86d3ff"
                                onHandleColor="#2693e6"
                                handleDiameter={30}
                                uncheckedIcon={false}
                                checkedIcon={false}
                                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                                height={20}
                                width={48}>
                                </Switch>
                            </div>
                            
                            <div className = "switch switch-option-1">
                                <text className = "securitate-text">Securitate</text>
                                <Switch className = "switch-1" onChange={this.handleChange1} checked={this.state.checked1} 
                                onColor="#86d3ff"
                                onHandleColor="#2693e6"
                                handleDiameter={30}
                                uncheckedIcon={false}
                                checkedIcon={false}
                                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                                height={20}
                                width={48}>
                                </Switch>
                            </div>

                            <div className = "switch switch-option-2">
                                <text className = "tickete-text">Aparitia ticketelor (*Bifeaza toate*)</text>
                                <Switch onChange={this.handleChange2} checked={this.state.checked2} 
                                onColor="#86d3ff"
                                onHandleColor="#2693e6"
                                handleDiameter={30}
                                uncheckedIcon={false}
                                checkedIcon={false}
                                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                                height={20}
                                width={48}>
                                </Switch>
                            </div>

                            <div className = "switch switch-option-2">
                                <BsArrowRight></BsArrowRight>
                                <text className = "tickete-text-priority">Ticket prioritate 0</text>
                                <Switch onChange={this.handleChange3} checked={this.state.checked3} 
                                onColor="#86d3ff"
                                onHandleColor="#2693e6"
                                handleDiameter={30}
                                uncheckedIcon={false}
                                checkedIcon={false}
                                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                                height={20}
                                width={48}>
                                </Switch>
                            </div>

                             <div className = "switch switch-option-2">
                             <BsArrowRight></BsArrowRight>
                                <text className = "tickete-text-priority">Ticket prioritate 1</text>
                                <Switch onChange={this.handleChange4} checked={this.state.checked4} 
                                onColor="#86d3ff"
                                onHandleColor="#2693e6"
                                handleDiameter={30}
                                uncheckedIcon={false}
                                checkedIcon={false}
                                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                                height={20}
                                width={48}>
                                </Switch>
                            </div>

                             <div className = "switch switch-option-2">
                             <BsArrowRight></BsArrowRight>
                                <text className = "tickete-text-priority">Ticket prioritate 2</text>
                                <Switch onChange={this.handleChange5} checked={this.state.checked5} 
                                onColor="#86d3ff"
                                onHandleColor="#2693e6"
                                handleDiameter={30}
                                uncheckedIcon={false}
                                checkedIcon={false}
                                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                                height={20}
                                width={48}>
                                </Switch>
                            </div>

                            <div className="switch switch-option-2">
                                <BsArrowRight></BsArrowRight>
                                <text className = "tickete-text-priority">Ticket prioritate 3</text>
                                <Switch onChange={this.handleChange6} checked={this.state.checked6} 
                                onColor="#86d3ff"
                                onHandleColor="#2693e6"
                                handleDiameter={30}
                                uncheckedIcon={false}
                                checkedIcon={false}
                                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                                height={20}
                                width={48}>
                                </Switch>
                            </div>

                            <div className = "switch switch-option-3">
                                 <text className = "KPI-text">Semnalarea indicatorului de performanta</text>
                                <Switch onChange={this.handleChange7} checked={this.state.checked7} 
                                onColor="#86d3ff"
                                onHandleColor="#2693e6"
                                handleDiameter={30}
                                uncheckedIcon={false}
                                checkedIcon={false}
                                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                                height={20}
                                width={48}>
                                </Switch>   
                            </div>
                            
                        </div>

                       
                    </label>

                    



               </div>
            </React.Fragment>

        )
    }

}