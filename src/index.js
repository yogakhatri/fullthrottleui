import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MemberList from '../src/components/MembersList'
import CalenderPopup from '../src/components/CalenderPopup'

ReactDOM.render(
  <Router>
    <Route path='/' exact component={App} />
    <Route path='/memberList' exact component={MemberList} />
    <Route path='/memberDetails' exact component={CalenderPopup} />
    {/* <Route path='/memberDetails' exact component={MemberDetails} /> */}
  </Router>
  ,
  document.getElementById('root')
);

