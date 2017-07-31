import React, { Component } from 'react';

const Total = ({quantity, price}) => {

      return (

         <div className="resultat" > 

            <label name="resultat-label">Total</label>
            <div className="resultat-valor">  
               { (price * quantity).toFixed(2) + ' €' }
            </div> 
         </div>

      );

      Total.propTypes = {
         quantity: React.PropTypes.number.isRequired,
         price: React.PropTypes.number.isRequired,

      }

}


export default Total;
