import React from "react";
import './chat-left.css';
export class ChatLeft extends React.Component<{}, {}> {
    render() {
        return (
            <React.Fragment>
                <div className="mainDivpadding">
                    <img src="./mahipal.png" className="rounded-circle dpImg" alt="Mahipal Choudhary"></img>


                </div>
                <div>
                    <input className="SearchInput" placeholder="Search or start new chat" />
                </div>
                <hr/>
            </React.Fragment>
        )
    }

}

export default ChatLeft;