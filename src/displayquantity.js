import React, { Component } from 'react';



class DisplayQuantity extends Component {

    constructor ({initialQuantity}) {

      super() ;

      this.state=({ quantity: initialQuantity })
      
      this.inputUpdateQuantity = this.inputUpdateQuantity.bind(this);

    }


   inputUpdateQuantity (e) {

      const newQuantity = e.target.value;
      this.setState({ quantity: newQuantity }); 
      this.props.changeQuantity ( newQuantity );

   }

    render () {
        return (

                  <div className="form-group">
                    <label htmlFor="quantity">
                       <span className="label label-primary quantity-label">
                         Quantity:
                           <div className="quantity-value">  
                              {this.state.quantity}  st
                           </div>
                       </span >
                    </label>

                    <input 
                        type="range" 
                        className="form-control-range" 
                        name="quantity" 
                        value={ this.state.quantity} 
                        onChange={( newQuantity ) => this.inputUpdateQuantity( newQuantity )}
                        min="1" 
                        max="100" 
                        step=".5" />
                  </div>

        );

    }
}

export default DisplayQuantity;


