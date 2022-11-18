import React, { Component } from 'react';
import ChatLeft from './chat-left';
import ChatRight from './chat-right';
import './maincontainer.css';
export class MainContainer extends React.Component<{}, {}> {
    render() {
        return (
            <div className='container' style={{marginTop:'-100px'}}>
                <div className="row mainbg">
                    <div className="col-sm-4 colbgcolor">
                        <ChatLeft />
                    </div>
                    <div className="col-sm-8 colbgcolor">
                        <ChatRight />
                    </div>
                </div>
            </div>
        )
    }

}

export default MainContainer;