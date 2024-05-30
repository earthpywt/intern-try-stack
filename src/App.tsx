import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import NavBar from "./components/layout/Navbar";

function App() {
    return (
        <div className="App">
            <NavBar />
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
            <div className="App-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus feugiat, nibh id viverra bibendum, metus eros
                ultricies lorem, at tempus sapien lacus ac mauris. Integer mi
                metus, pretium non dignissim at, maximus mattis nisl. Nullam
                ultrices ultrices eleifend. Phasellus vitae libero et tortor
                sodales tristique eu eu purus. Proin sed ligula lectus.
                Curabitur eleifend massa odio, quis varius velit finibus sed.
                Mauris ut hendrerit leo, nec feugiat nibh. Mauris molestie, diam
                condimentum lobortis pulvinar, tellus tellus dignissim mi, et
                ornare purus nulla in dolor. Orci varius natoque penatibus et
                magnis dis parturient montes, nascetur ridiculus mus. Praesent
                vulputate felis enim, ac scelerisque augue pretium in. Fusce
                maximus lectus non tincidunt accumsan. Curabitur aliquet, sem
                sit amet pharetra faucibus, quam libero facilisis elit, nec
                volutpat sem eros vitae nulla. Integer dolor lacus, placerat in
                purus vitae, tristique blandit ex. Morbi pharetra placerat diam,
                vitae scelerisque turpis hendrerit vel. Phasellus id consequat
                tellus.
            </div>
        </div>
    );
}

export default App;
