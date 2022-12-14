import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "ð": "Grinning Face",
  "ð": "Grinning Face with Big Eyes",
  "ð": "Grinning Face with Smiling Eyes",
  "ð": "Beaming Face with Smiling Eyes",
  "ð": "Grinning Squinting Face",
  "ð": "Grinning Face with Sweat",
  "ðĪĢ": "Rolling on the Floor Laughing",
  "ð": "Face with Tears of Joy",
  "ð": "Slightly Smiling Face",
  "ð": "Upside-Down Face",
  "ð": "Winking Face",
  "ð": "Smiling Face with Smiling Eyes",
  "ð": "Smiling Face with Halo",
  "ðĨ°": "Smiling Face with Hearts",
  "ð": "Smiling Face with Heart-Eyes",
  "ðĪĐ": "Star-Struck",
  "ð": "Face Blowing a Kiss",
  "ð": "Kissing Face",
  "ð": "Kissing Face with Closed Eyes",
  "ð": "Kissing Face with Smiling Eyes",
  "ð": "Face Savoring Food",
  "ð": "Face with Tongue",
  "ð": "Winking Face with Tongue",
  "ðĪŠ": "Zany Face",
  "ð": "Squinting Face with Tongue",
  "ðĪ": "Money-Mouth Face",
  "ðĪ": "Hugging Face"
};

var emojisweknow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function inputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "we don't have this is our database";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1> -- Emoji Interpreter -- </h1>

      <input onChange={inputHandler}></input>
      <h2>{meaning}</h2>

      <h3>Emojis in our Store</h3>
      {emojisweknow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            key={emoji}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
          >
            {" "}
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
