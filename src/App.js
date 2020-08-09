import React from "react";
import "./styles.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      letters: ["P", "L", "P", "T", "S", "A", "C", "E", "H", "D"]
    };
  }
  onLetterClick = (l) => {
    let w1 = document.querySelector("#first").value;
    let w2 = document.querySelector("#second").value;
    let w3 = document.querySelector("#third").value;
    let w4 = document.querySelector("#fourth").value;
    let w5 = document.querySelector("#fifth").value;
    console.log(w1);
    if (w1.length < 5) {
      document.querySelector("#first").value += l;
    } else if (w2.length < 4) {
      document.querySelector("#second").value += l;
    } else if (w3.length < 5) {
      document.querySelector("#third").value += l;
    } else if (w4.length < 5) {
      document.querySelector("#fourth").value += l;
    } else if (w5.length < 4) {
      document.querySelector("#fifth").value += l;
    }
  };
  render() {
    return (
      <div className="App">
        <h2>PakkaProfile</h2>
        <h1 className="subhead">
          Give me five<div className="hr"></div>
        </h1>

        <div className="letters">
          {this.state.letters.map((letter) => (
            <button onClick={() => this.onLetterClick(letter)}>{letter}</button>
          ))}
        </div>
        <div className="words">
          <label>
            <input type="text" id="first"></input>
            <span>5</span>
          </label>
          <label>
            <input type="text" id="second"></input>
            <span>4</span>
          </label>
          <label>
            <input type="text" id="third"></input>
            <span>5</span>
          </label>
          <label>
            <input type="text" id="fourth"></input>
            <span>5</span>
          </label>
          <label>
            <input type="text" id="fifth"></input>
            <span>4</span>
          </label>
        </div>
        <div>
          <img
            src="undraw_High_five.png"
            alt="illustration"
            width="100"
            height="100"
          />
        </div>
      </div>
    );
  }
}
