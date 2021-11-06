import React from 'react'
import './Award.css'

function Movie({ picture, explan}){
    return(
        <div className="Movie">
            <img className="picture" src={picture} alt={explan}/>
            <p className="explain">{explan}</p>
        </div>
    );
}

const Poster =[
        {
            picture : 'https://dx35vtwkllhj9.cloudfront.net/neonrated/titane/images/regions/us/share.png',
            explan : 'It is a competitive work at the 2021 Cannes Film Festival and is the winner of the Palme d Or',
        }
];



function Award(){
    return (
        <div>
         
         {
             Poster.map(fit =>(
                 <Movie picture={fit.picture} explan={fit.explan}/>
             ))
         }
        </div>
    );
}

export default Award;