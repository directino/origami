import {Component} from 'react';
import './App.css';
import './Navigation.css';
import './Container.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

// function App() {
//   return (
//     <div class="App">
//       <Header/>
//       <div class="Container">
//       <Menu/>
//       <Main/>
//       </div> 
//       <Footer/>
//     </div>
//   );
// }

class App extends Component {
  render() {
    return (
      <div class="App">
        <Header/>
        <div class="Container">
        <Menu/>
        <Main/>
        </div> 
        <Footer/>
      </div>
    );
  }
}

export default App;