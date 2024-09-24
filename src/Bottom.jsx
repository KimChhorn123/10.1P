import React from "react";
import SocialIcon from "./SocialIcon";

function Bottom(){
    return(
        <div id="MainBottom">
            <div id="subBottom">
                <table>
                    <tr>
                        <th>
                            <h2>Explore</h2>
                        </th>
                        <th>
                            <h2>Support</h2>
                        </th>
                        <th>
                            <h2>Stay Connected</h2>
                        </th>
                    </tr>
                    <tr>
                        <th>Home</th>
                        <th>FAQs</th>
                        <th><SocialIcon/></th>
                    </tr>
                    <tr>
                        <th>Questions</th>
                        <th>Help</th>
                    </tr>
                    <tr>
                        <th>Articles</th>
                        <th>Contact Us</th>
                    </tr>
                    <tr>
                        <th>Turtorials</th>
                    </tr>
                </table>
                
                <div id="lowerTable">
                <h2>DEV@Deakin 2022</h2>
                    <table>
                        <tr>
                            <th>Privacy Policy</th>
                            <th>Terms</th>
                            <th>Code of Conduct</th>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default Bottom 