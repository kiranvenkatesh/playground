import React from "react";

class Home extends React.Component {
  render() {
    return <div>
      <h1>Javascript and CSS Playground</h1>
      <div>
        <h3>JS Examples</h3>
        <ul>
          <li><a href="#example1">Simple Form</a></li>
          <li><a href="#example2">Simple Form with Submit</a></li>
          <li><a href="#example3">Form Submit with Validation</a></li>
          <li><a href="#example4">Form Submit with Validation - <i>Custom Template</i></a></li>
          <li><a href="#example5">Simple Form with Validation - <i>Custom Validation and Messages</i></a></li>
          <li><a href="#example6">Simple Form with Validation - <i>Listeners</i></a></li>          
        </ul>
      </div>
      <div>
        <h3>CSS Examples</h3>
      </div>
    </div>
  }
}

export default Home;