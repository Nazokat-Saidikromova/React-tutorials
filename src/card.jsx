import React from 'react';
import './FruitsStyle.css';

class Card extends React.Component{
    render (){
        return(
            <div className='Container'>
            <img className="photo"
            src={this.props.src}></img>
           
            <h2 className='title'>{this.props?.title}</h2>
            </div>
        )
    }
}
export default Card;