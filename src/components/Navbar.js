import React, { Component } from "react";
import "./Navbar.css";
import {Link} from "react-router-dom";

export default class Navbar extends Component {

    // big = over 700px width. mini = less than 700 width
    constructor() {

        super();
        this.state = {
            windowBig: true,
            menuOn: false,
        }
        this.miniMenuFunction = this.miniMenuFunction.bind(this);
    }


    updateMenuStyle() {

        if (window.innerWidth <= 700) {
            this.setState({ windowBig: false, });
            // if window is smaller
            // <div>
            //     <p>booh</p>
            // </div>

        }
        else {
            this.setState({ windowBig: true, });
        }
    }

    componentDidMount() {
        this.updateMenuStyle();
        window.addEventListener("resize", this.updateMenuStyle.bind(this));
    }
    componentWillUnmount() {
        // tutorial said i should unmount the event listener so here it is
        window.removeEventListener("resize", this.updateMenuStyle.bind(this));
    }

    miniMenuFunction() {

        var miniMenu = document.getElementById("toggleContainer");
        if (this.state.menuOn == false) {
            miniMenu.style.display = "block";
            this.setState({ menuOn: true, });
        }
        else {
            miniMenu.style.display = "none";
            this.setState({ menuOn: false, });
        }
    }

    render() {
        return (
            <div>
                {
                    // this is a good old fashioned JS ternary expression. if window big is true it returns one div. if it is not big than it will return another div
                    this.state.windowBig === true ?

                        <div id="bigMenu">

                            <div id="top-container">
                                <h2 id="title">The History Of Computing
                                    <img className="Nav-icon" src={require("../images/artificial-intelligence.png")} alt="" />
                                </h2>
                            </div>
                            <div id="bottom-container">
                                <button className="menuItem"><a className="menuItemLink" href="/timeline">The Timeline</a></button>
                                <button className="menuItem"><a className="menuItemLink" href="https://github.com/acrose99/HistoryOfComputingDocs">Documentation</a></button>
                                <button className="menuItem"><a className="menuItemLink" href="/team">About US</a></button>
                                <button className="menuItem"><a className="menuItemLink" href="/https://ecommons.luc.edu/history_facpubs/42/">The Book</a></button>
                                <button className="menuItem"><a className="menuItemLink" href="https://ssl.cs.luc.edu/">SSL</a></button>
                                <button className="menuItem"><a href="https://github.com/acrose99/HistoryOfComputing"><img className="menuImg" src={require("../images/github.svg")} role="link" aria-label="Github Link" alt="Github" /></a></button>

                            </div>
                        </div>

                        :
                        // if it is false
                        <div id="smallMenu">
                            <div id="mini-top-container">

                                <h2 className="title">The History Of Computing</h2>
                                {/* <img className="Nav-icon" src={require("../images/artificial-intelligence.png")} alt="" /> */}

                                <a className="hamLink">
                                    <img id="hamIcon" src={require("../images/menu.svg")} alt="X" onClick={this.miniMenuFunction} />
                                </a>

                            </div>
                            <div id="toggleContainer">
                                <div className="miniMenuItemDiv">
                                    <a href="/timeline" className="miniMenuItem">The Timeline
                                    </a>
                                </div>
                                <div className="miniMenuItemDiv">

                                    <a href="/https://ecommons.luc.edu/history_facpubs/42/" className="miniMenuItem">The Book</a></div>
                                <div className="miniMenuItemDiv">

                                    <a className="miniMenuItem">About Us
                                       < Link to="/team">Home</Link>
                                    </a>
                                </div>
                                <div className="miniMenuItemDiv">

                                    <a href="https://ssl.cs.luc.edu/" className="miniMenuItem">SSL</a></div>
                                <div className="miniMenuItemDiv">

                                    <a href="https://github.com/acrose99/HistoryOfComputing" className="miniMenuItem">Github</a>
                                </div>
                            </div>

                        </div>
                }
            </div>
        );


    }
}
    //     return (
    //         // if window is bigger
    //         <div id="Nav-container">

                    //             {/* if(state.mediaSize == true) ? */}
/* //             <div id="top-container"> *
                         <h2 class="title">The History Of Computing</h2>
//                 <img className="Nav-icon" src={require("../images/artificial-intelligence.png")} alt="" />

//             </div>
//             <div id="bottom-container">
        //                 <button class="menuItem">The Timeline</button>
//                 <button class="menuItem">The Book</button>
//                 <button class="menuItem">About Us</button>
//                 <button class="menuItem">SSL</button>
//                 <button class="menuItem"><img class="menuImg" src={require("../images/github.svg")} /></button>

//             </div>
//         </div>
//     )
// }//end if */

