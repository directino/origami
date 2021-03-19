import {Component} from 'react';
import * as postService from './services/postServices';
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
  constructor(props) {
    super(props)

    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    postService.getAll()
      .then(posts => {
        this.setState({posts})
      })
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <div className="Container">
        <Menu/>
        <Main posts={this.state.posts} />
        </div> 
        <Footer/>
      </div>
    );
  }
}

export default App;