import React, { Component } from "react";

export class App extends Component {
    state = {
        fullName: "Houssem",
        bio: "Welccome to my bio",
        imgSrc: "",
        profession: "Enseignant",
        show: false,
        time: "0",
    };
    show = () => {
        this.setState({
            show: !this.state.show,
        });
    };

    render() {
        return (
            <div>
                <button onClick={this.show}>Show</button>
                {this.state.show ? (
                    <div>
                        <h1>fullName:{this.state.fullName}</h1>
                        <h1>bio:{this.state.bio}</h1>
                        <h1>profession:{this.state.profession}</h1>
                        <h1>time:{this.state.time}</h1>
                    </div>
                ) : null}
            </div>
        );
    }
}

export default App;
