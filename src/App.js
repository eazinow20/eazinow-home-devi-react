
import './App.css';
import slide1 from './img/slide2.jpg';
import Header from './components/Header';
import InputSection from './components/Input- information';
import HowItWork from './components/how-it-work';
import ExploreImages from './components/explore-images';
import WhyCU from './components/why-choose-use';
import Testimonals from './components/testimonals';
import Toparticles from './components/toparticels';
import Footer from './components/footer';
import {
  BrowserRouter as Router, Route, Switch
} from 'react-router-dom';

import Login from './components/login';
import Register from './components/register';
import Inspiration from './components/Inspiration';
import Blog from './components/blogpage';
import Blogsingle from './components/blogpage/Blogsingle';
import Profile from './components/agent-profile/Index';
import Blogsingle1 from './components/blogpage/BlogSingle2';
import Chatroom from './dashboard/chatroom'
import Taskboard from './dashboard/taskboard/input'
import Calender from './dashboard/calender'
function App() {





  return (
    <div className="App"  >
    <Router>
      <Switch>
        <Route path='/' exact >
        <div className="top" style={{backgroundImage:slide1}}><Header/>
        <InputSection/></div>
        <HowItWork/>

        <ExploreImages/>
        <WhyCU/>
        <Testimonals/>
        <Toparticles/>
        <Footer/>
        </Route>
        <Route path='/login'><Login/></Route>
        <Route path='/register'><Register/></Route>
        <Route path='/inspiration'><Inspiration/></Route>
        <Route exact path='/blog'><Blog /></Route>
        <Route exact path='/profile'> <Profile/></Route>
        <Route exact path="/blog/:title" component={Blogsingle} ></Route>
        <Route path="/blog/slide/:title" component={Blogsingle1} ></Route> 
        <Route path="/chatroom" component={Chatroom} ></Route>
        <Route path="/taskboard" component={Taskboard} ></Route>
        <Route path="/calendar" component={Calender} ></Route>

      </Switch>
    </Router>
     
    </div>
    
  );
}

export default App;
