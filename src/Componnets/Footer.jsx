import React from "react";

const Footer = ()=>{

    var date = new Date();

const currentYear = ()=>{
    var year = date.getFullYear();
    return year;
} 
    return <footer><p>Copyrights @ {currentYear()}</p></footer>
}

export default Footer;