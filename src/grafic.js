import React, { Component } from 'react';


class Grafic extends Component {

   render () {

      const style =  { opacity:this.props.opacity/100 };

      return (
         <div className="picker" style={ style }/>
      );

   }

}








export default Grafic;

