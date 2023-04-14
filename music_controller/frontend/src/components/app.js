import React, {component} from "react";
import {render} from "react-dom";


export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return <h1>Testing react app</h1>;
    }

}

const appDiv = document.createElementById("app");
render (<App />, appDiv);