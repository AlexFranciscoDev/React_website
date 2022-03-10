import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {

    return (
        <div>
            <li className="cards__item">
                <Link to={props.path} className="cards__item__link">
                    <figure className="cards__item__pic-wrap" data-category={props.label}>
                        <img className="cards__item__img" src={props.src} alt="Travel"/>
                    </figure>
                    <div className="cards__item__info">
                        <h5 className="cards__item__text">{props.text}</h5>
                    </div>
                </Link>
            </li>
        </div>
    )
}

export default CardItem
