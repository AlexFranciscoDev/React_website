import React from 'react';
import "./Button.css";
import { Link } from "react-router-dom";

const STYLES = ["btn--primary", "btn--outline"];

const SIZES = ["btn--medium", "btn--large"];

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    {/* If the component receives a styles it will apply that style.
    Otherwise it will apply the first style from the array*/}
   const checkButtonStyle = STYLES.includes(buttonStyle) 
   ? buttonStyle 
   : STYLES[0];

   const checkButtonSize = SIZES.includes(buttonSize) 
   ? buttonSize 
   : SIZES[0];

   return (
       <Link to="/sign-up" className="btn-mobile">
           <button
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onClick}
            type={type}
           >
               {children}
           </button>
       </Link>
   )
}
