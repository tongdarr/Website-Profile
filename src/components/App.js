import React from 'react';
import './App.css';
import Image from './Image';
import Paragraph from './Paragraph';
import NavigationBar from './NavigationBar';
import Footer from './Footer';


class App extends React.Component{

    
    
    showNav(){
        document.getElementById("focus-sidenav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
        console.log('clicked');
    }

    render(){
        const darren_tong_text = <div id="span-animation">
                                    <span>W</span><span>E</span><span>B</span> <span> </span>
                                    <span>D</span><span>E</span><span>V</span><span>E</span>
                                    <span>L</span><span>O</span><span>P</span><span>E</span><span>R</span> <span> </span>
                                    <span>I</span><span>N</span> <span> </span>
                                    <span>P</span><span>R</span><span>O</span><span>G</span><span>R</span>
                                    <span>E</span><span>S</span><span>S</span>
                                 </div>;
        const about_text = 'Hi I\'m Darren. I\'m currently a fourth year Victoria University student studying part-time.';
        const project_text =    <div>
                                    <a href="https://weather-forecast-nz.herokuapp.com/">Weather Forecast App</a>
                                    <a href="https://nwen304gropproject.herokuapp.com/">E-commerce Uni Group Project</a>
                                </div>;

        return (
            <div id="main">
                <div className="sidenav-button" onClick={this.showNav}>&#9776;</div>
                <NavigationBar></NavigationBar>
                <Image class="img1" text="Darren Tong"></Image>
                <Paragraph text={darren_tong_text} id="animation-block"/>
                <Image class="img2" text="About"></Image>
                <Paragraph text={about_text}/>
                <Image class="img3" text="Projects"></Image>
                <Paragraph text={project_text}/>
                <Footer/>
            </div>
        )
    }
}

export default App;