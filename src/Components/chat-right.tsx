import React from "react";
import './chat-right.css';

export class ChatRight extends React.Component<{}, {}> {
    render() {
        return (
            <div className="mainDivpadding">
                <img src="./jiofiber.jpg" className="rounded-circle dpImg" alt="Mahipal Choudhary"></img>
                <div className="username">Hello World <br /><span className="userStatus">Online</span></div>
                <div style={{height:'600px'}}>

                </div>
            </div>
        )
    }

}

export default ChatRight;