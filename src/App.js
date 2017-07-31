import React, { Component } from 'react';
import  logo  from './logo.svg' ;
import DisplayPrice from './displayprice';
import DisplayQuantity from './displayquantity';
import Total from './total';
import Grafic from './grafic';
import './App.css';



class App extends Component {
    constructor (props) {
        super(props);
        this.state = ({
            price: 25, 
            quantity: 5,
        })

        this.priceUpdate = this.priceUpdate.bind(this);
        this.quantityUpdate = this.quantityUpdate.bind(this);
    }


    priceUpdate (newPrice) {
        this.setState({ 
            price: newPrice,
        });
         
    }

    quantityUpdate (newQuantity) {
        this.setState({ 
            quantity: newQuantity,
        });

    }


    render () {
        return (
            <div>
               <div className="App">
                 <div className="App-header">
                   <img src={logo} className="App-logo" alt="logo" />
                   <h2>Welcome to React</h2>
                 </div>
               </div>
                <div className="wrapper">
                  <form>
                       <DisplayPrice   
                           initialPrice = { this.state.price } 
                           changePrice = { this.priceUpdate}
                       />

                       <DisplayQuantity  
                           initialQuantity = { this.state.quantity } 
                           changeQuantity = { this.quantityUpdate }
                       />
                  </form>
                </div>

               <Total 
                  quantity= { this.state.quantity }
                  price = { this.state.price }
               />

               <Grafic 
                  opacity = { this.state.quantity }
                  saturation = { this.state.price }
               />

            </div>
        ); 
    }
}




export default App;
