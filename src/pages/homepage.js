import { useEffect } from "react";
import {Link} from "react-router-dom"
import "../styles/homepagestyle.css";
const Homepage = () =>{
    useEffect(()=>{ //utilize the Fetch API to get random guitar gif and render before mount
    const gif = document.querySelector(".giphy");
    fetch('https://api.giphy.com/v1/gifs/translate?api_key=J2DZL9v1Hk1LQImLd2Y8aytzHIGK6WoW&s=guitar',{mode:'cors'})
        .then(function(response){
            return response.json();
        })
        .then(function(response){
            gif.src = response.data.images.original.url;
    });
});
    
    return (
        <div className = "homepagecontainer">
            <div className="titleholder" >
            <iframe className = "vid" width="420" height="315"
                src="https://www.youtube.com/embed/FDzPO1JaN60">
                </iframe>
                <div className="title">Welcome to Larry's Guitar Shop!</div>
            </div>
            <div className="bottomcontainer">
                <div className="about">
                <ul>This is the greatest guitar shop in the world! </ul>
                <ul>We sell quality guitars for great prices! </ul>
                <ul>Musicisians from all over the world have come to visit us. </ul>
                <ul>Join us today!</ul>
                </div>
                <img src='#' className="giphy"/>
            </div>
        </div>
    )
}
export default Homepage;