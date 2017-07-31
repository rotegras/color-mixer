import React, { Component } from 'react';

class DisplayPrice extends Component {

    constructor ({ initialPrice }) {

      super() ;

      this.state = { price: initialPrice }

      this.inputUpdatePrice = this.inputUpdatePrice.bind(this);

    }

   inputUpdatePrice (e) {

      const newPrice = e.target.value;
      this.setState ({ price: newPrice }); 
      this.props.changePrice ( newPrice );

   }

    render () {
        return (
            <div className="form-group">
              <label htmlFor="price">Price { this.state.price } € 
              </label>

              <input 
                  type="range" 
                  className="form-control" 
                  name="price" 
                  min="20"
                  max="100"
                  step="5"
                  value={this.state.price} 
                  onChange={(newPrice) => this.inputUpdatePrice(newPrice)} />
            </div>
        );
    }

}

export default DisplayPrice;


