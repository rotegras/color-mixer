import React, { Component } from 'react';


class Total extends Component  {
   render () {
      return (

         <div className="resultat"> 
            <label name="resultat-label">Total</label>
            <div className="resultat-valor">  
               { (this.props.price * this.props.quantity).toFixed(2) + ' €' }
            </div> 
         </div>

      );
   }
}






export default Total;
