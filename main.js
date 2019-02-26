//importing React modules
import React from 'react';
import ReactDOM from 'react-dom';

//importing React Router elements
import {HashRouter, Route, Link} from 'react-router-dom';

//importing Views
import DashBoard from './client/views/dashBoard.jsx';
import FarmerMenu from './client/views/farmerMenu.jsx';
import ChickenInfo from './client/views/chickenInfo.jsx';
import LogisticPartner1 from './client/views/logisticPartner1.jsx';
import LogisticPartner2 from './client/views/logisticPartner2.jsx';
import Retailer from './client/views/retailer.jsx';



ReactDOM.render(<HashRouter>
                <div>
                  <Route exact path='/' component={DashBoard} />
                  <Route path='/farmerMenu' component={FarmerMenu} />
                  <Route path='/chickenInfo' component={ChickenInfo} />
                  <Route path='/logisticPartner1' component={LogisticPartner1} />
                  <Route path='/logisticPartner2' component={LogisticPartner2} />
                  <Route path='/retailer' component={Retailer} />
                </div>
                </HashRouter>, document.getElementById('app'));
