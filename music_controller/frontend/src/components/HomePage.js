import React, { Component } from "react";
import RoomJoinPage from "./RoomJoinPage";
import Room from "./Room";
import CreateRoomJoinPage from "./CreateRoomPage";
import { 
    BrowserRouter as Router, 
    Switch, 
    Routes,
    Route, 
    Link, 
    Redirect
 } from "react-router-dom";


export default class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <Router>
                <Routes>
                    <Route exact path="/" element= <h1>This is the home page</h1> />
                    <Route exact path="/join" element={<RoomJoinPage/>}/>
                    <Route exact path="/create" element={<CreateRoomJoinPage/>}/>
                    <Route path="/room/:roomCode" component={Room} />
                </Routes>
            </Router>
        );
    }
}