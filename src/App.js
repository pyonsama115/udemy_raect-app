import React from 'react';
import ReactDOM from 'react-dom';
function App() {
  // const greeting = "Hi Tom!";
  // const dom =<h1 className="foo">{greeting}</h1>
  // return dom;

  // return <input type="text" onChange={() => {console.log("clicked!")}}/>

  const profiles = [
    {name :"ぴょん", age: 15},
    {name :"うーろん", age: 15},
    {name :"noname" },
  ]
  return (
    <React.Fragment>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index}/>
        })
      }
      <User name={"Pyon"} age={15}/>
      <User name={"うーろん"} age={37}/>
    </React.Fragment>
  )
}

const User = (props) => {
  return <div>Hi {props.name} あなたは{props.age}歳ですね！</div>
}

User.defaultProps = {
  age :99
}

export default App;
