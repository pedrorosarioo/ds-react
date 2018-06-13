import React, { Component } from 'react';
import Header from './Components/header'
import Resume from './Components/resume'
import SectionIphone from './Components/sectionIphone';
import SignUp from './Components/signUp';
import Members from './Components/members';
import Footer from './Components/footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Resume />
        <SectionIphone />
        <SignUp />
        <Members />
        <Footer />

      </div>
    );
  }
}

export default App;
