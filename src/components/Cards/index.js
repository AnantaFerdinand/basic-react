// //Pertemuan 22 Web Programming:
import React from 'react';
import Counter from '../Counter';

const Cards = ({name, institution, address, phoneNumber} )=> {
   
    return(
        <div className="card-container">
            <p>{name}</p>
            <p>{institution}</p>
            <p>{address}</p>
            <p>{phoneNumber}</p>
            <Counter title = "Counter Component"/>
        </div>
    );
};

// export const Cards = (props)=> {
//    return(
//     <div className="card-container">
//         <p>{props.name}</p>
//         <p>{props.institution}</p>
//         <p>{props.address}</p>
//         <p>{props.phoneNumber}</p>
//         <Counter title="Counter Component"/>
//     </div>
//     );
//  };
export default Cards;