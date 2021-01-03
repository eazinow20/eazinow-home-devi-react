
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
import ChatDashboard from './dashboard/chatdashboard';
import TaskDashboard from './dashboard/taskdashboard';
import CalendarDashboard from './dashboard/calendardashboard'
import InvoiceClient from './dashboard/invoiceclient';
import { InvoiceGenCon } from './dashboard/invoicegencont';
import InvoiceClientGen from './dashboard/invoiceclientgen';
import InvoiceSubConGen from './dashboard/invoicesubcongen';
import InvoiceSubcontractor from './dashboard/invoicesubcontractor';
import InvoiceCreate from './dashboard/invoicecreate';
import FileManagerGrid from './dashboard/filemanagergrid';
import FileManagerList from './dashboard/filemanagerlist'
import FileManagerDashboard from './dashboard/fmdashboard';

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
        <Route exact path="/chatroom" component={Chatroom} ></Route>
        <Route exact  path="/taskboard" component={Taskboard} ></Route>
        <Route exact path="/calendar" component={Calender} ></Route>
        <Route exact path='/chatdashboard' component={ChatDashboard} ></Route>
        <Route exact path='/taskdashboard' component={TaskDashboard}></Route>
        <Route exact path='/calenderdashboard' component={CalendarDashboard}></Route>
        <Route exact path='/invoiceclient' component={InvoiceClient}></Route>
        <Route exact path='/invoicecreate' component={InvoiceCreate}></Route>
        <Route exact path='/invoicesubcontractor' component={InvoiceSubcontractor}></Route>
        <Route exact path='/invoicegencontractor' component={InvoiceGenCon} ></Route>
        <Route exact path='/invoiceclientgen' component={InvoiceClientGen} ></Route>
        <Route exact path='/invoicesubcongen' component={InvoiceSubConGen} ></Route>
        <Route exact path='/filemanagergrid' component={FileManagerGrid} ></Route>
        <Route exact path='/filemanagerlist' component={FileManagerList}></Route>
        <Route exact path='/filemanagerdashboard' component={FileManagerDashboard}></Route>
      </Switch>
    </Router>
     
    </div>
    
  );
}

export default App;
