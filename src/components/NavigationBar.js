import React from 'react';
import $ from 'jquery';

class NavigationBar extends React.Component{        

    scrollAnimation(event) {
        const location = event.target.attributes.value.value;
        $('html, body').animate({
            scrollTop: ($(location).offset().top)
        }, 1200);
    }

    closeNav() {
        $("#focus-sidenav").css({
            width: '0'
        });
        
        $("#main").css({
            marginLeft: '0'
        });

        // document.getElementById("focus-sidenav").style.width = "0";
        // document.getElementById("main").style.marginLeft= "0";
    }

    render(){
        return (
            <div id="focus-sidenav" className="sidenav">
                <span className="sidenav-closebtn" onClick={this.closeNav}>&#8592;</span>
                <li id='home-nav' value='#img1' onClick={this.scrollAnimation}>Home</li>
                <li id='about-nav' value='#img2'onClick={this.scrollAnimation}>About</li>
                <li id='projects-nav' value='#img3' onClick={this.scrollAnimation}>Projects</li>
                {/* <li id='contact-nav' value='#' onClick={this.scrollAnimation}>Contact</li> */}
            </div>
        );
    }
}

export default NavigationBar;