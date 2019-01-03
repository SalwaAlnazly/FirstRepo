import React from 'react';

export default class RadioBtnSection extends React.Component{
    constructor() {
        super();
        this.state = {
          selectedOption: ''
        };
      this.radioChange = this.radioChange.bind(this);
    }
    
      radioChange(e) {
        this.setState({
          selectedOption: e.currentTarget.value
        });
      }
      
      render() {
        return (
          <div>
            <span>Title
            <input type="radio"
                   value="Prof"
                   checked={this.state.selectedOption === "Prof"}
                   onChange={this.radioChange} />Pro
    
            <input type="radio"
                   value="Dr."
                   checked={this.state.selectedOption === "Dr."}
                   onChange={this.radioChange}/>Dr.

            <input type="radio"
                   value="Mr."
                   checked={this.state.selectedOption === "Mr."}
                   onChange={this.radioChange} />Mr.
    
            <input type="radio"
                   value="Ms.."
                   checked={this.state.selectedOption === "Ms.."}
                   onChange={this.radioChange}/>Ms..


            <input type="radio"
                   value="Ms."
                   checked={this.state.selectedOption === "Ms."}
                   onChange={this.radioChange} />Ms.
  
            </span>
          </div> 
        );
      }
    }