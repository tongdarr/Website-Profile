import React from 'react';
import './App.css';
import Image from './Image';
import Paragraph from './Paragraph';
import NavigationBar from './NavigationBar';


class App extends React.Component{
    
    showNav(){
        document.getElementById("focus-sidenav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
    }

    render(){
        return (
            <div id="main">
                <button className="" onClick={this.showNav}>Click Me</button>
                <NavigationBar></NavigationBar>
                <Image class="img1" text="Darren Tong"></Image>
                <Paragraph/>
                <Image class="img2" text="Image 2 Text"></Image>
                <Paragraph/>
                <Image class="img3" text="Image 3 Text"></Image>
                <Paragraph/>
            </div>
        )
    }
}

export default App;