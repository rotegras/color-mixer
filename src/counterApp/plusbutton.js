import React from 'react';


const PlusButton = ({count, increaseCount}) => {
    return(
        <button onClick={() => increaseCount(count +1)}/>
    );
}
export default PlusButton;
