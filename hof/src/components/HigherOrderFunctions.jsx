import React, { Component } from 'react'

export default class HigherOrderFunctions extends Component {
    constructor(){
        super();
        this.state = {
            userData: [
                { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
                { id: '3', name: 'John', user_type: 'Teacher', age:24,years: 2},
                { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
                { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}

            ]
        }
    }
  // display all items
renderItems = () => {
    const data = this.state.userData;
    const mapRows = data.map((item) => (
        <React.Fragment key={item.id}>
            <li className="list-elements">
                {
                /* Passing unique value to 'key' prop, eases process for virtual DOM to remove specific element and update HTML tree  */}
                <span>Id: {item.id}   </span>
                <span>Name : {item.name}</span>
                <span>User Type: {item.user_type}</span>
           </li>
        </React.Fragment>
    ));
    return mapRows;
};


    

//Display based on UserType
renderUserType = () => {
    const data = this.state.userData
    const mapRows = data
        .filter((item) => item.user_type.includes('Designer'))
        .map((item) => (
            <React.Fragment key={item.id}>
                <div className="list-elements">
                    {/* Passing unique value to 'key' prop, eases process for virtual DOM to remove specific element and update HTML tree  */}
                    <span>Id: {item.id}</span>
                    <span>Name : {item.name}</span>
                    <span>User Type: {item.user_type}</span>
                </div>
            </React.Fragment>
        ))
    return mapRows;
    };
    //Display the Name starts with J
    renderUserName(){
    const data = this.state.userData
    const mapRows = data
        .filter((item) => item.name.startsWith('J'))
        .map((item) => (
            <React.Fragment key={item.id}>
                <div className="list-elements">
                    {/* Passing unique value to 'key' prop, eases process for virtual DOM to remove specific element and update HTML tree  */}
                    <span>Id: {item.id}</span>
                    <span>Name : {item.name}</span>
                    <span>User Type: {item.user_type}</span>
                </div>
            </React.Fragment>
        ))
    return mapRows;
    };
// Display the users between 28 to 50
    renderAge(){
        const data = this.state.userData
        const mapRows = data
            .filter((item) => item.age > 28 && item.age < 50)
            .map((item) => (
                <React.Fragment key={item.id}>
                    <div className="list-elements">
                        {/* Passing unique value to 'key' prop, eases process for virtual DOM to remove specific element and update HTML tree  */}
                        <span>Id: {item.id}</span>
                        <span>Name : {item.name}</span>
                        <span>User Type: {item.user_type}</span>
                    </div>
                </React.Fragment>
            ))
        return mapRows;
        };

        // Total experience of Designer
        renderExperience = () => {
            const data = this.state.userData
            const mapRows = data
                .filter((item) => item.user_type.includes('Designer'))
                
                .reduce((item) => item.years
                   
                )
               
            return mapRows;
            };

    render() {
        return (
            <div>
                <>
            <h1>Display all items</h1>
            <div className="display-box">
            <ul>
                {
                this.renderItems()
                }
                 </ul>
            </div>

          </>
          <>
          <h1> Display Based on User Type </h1>
          <div className="display-box">
            <ul>
                {
                this.renderUserType()
                } 
            </ul>
            </div>
          </>

          <>
          <h1> Display the Names starts with J </h1>
          <div className="display-box">
            <ul>
                {
                this.renderUserName()
                } 
            </ul>
            </div>
          </>
          <>
          <h1> Display the user between 28 to 50</h1>
          <div className="display-box">
            <ul>
                {
                this.renderAge()
                } 
            </ul>
            </div>
          </>
          <>
          <h1> Display the Experience of Designer</h1>
          <div className="display-box">
            <ul>
                {
                this.renderExperience()
                } 
            </ul>
            </div>
          </>
                
                
            </div>
        )
    }
}