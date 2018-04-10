import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory, Route, IndexRedirect } from 'react-router'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux';

import Container from './Container'
import LayoutContainer from './LayoutContainer/LayoutContainer'
import Home from './Home/Home'
import Login from './Login/Login'
import LoggingIn from './LoggingIn/LoggingIn'
import AccountNotLinked from './AccountNotLinked/AccountNotLinked'
import Dashes from './Dashes/Dashes'
import DashCreate from './DashCreate/DashCreate'
import DashEdit from './DashEdit/DashEdit'
import DashReport from './DashReport/DashReport'
import Todos from './Todos/Todos'
import TodosEdit from './TodosEdit/TodosEdit'
import Payouts from './Payouts/Payouts'
import AppleTVActivation from './AppleTVActivation/AppleTVActivation'

import createStore from 'redux/create';
import ApiClient from 'utils/ApiClient';

import 'font-awesome/css/font-awesome.css'
import '@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css'
import './app.css'

import makeRoutes from './routes'

const client = new ApiClient();
const store = createStore(browserHistory, client);
const history = syncHistoryWithStore(browserHistory, store);
const routes = makeRoutes()

const mountNode = document.querySelector('#root');

ReactDOM.render(
  <Provider store={store} key="provider">
    <Router history={history}>
      	<Route path="/" component={Container} auth={auth}>
	      	<IndexRedirect to="/dashes" />
	      	<Route path="login" component={Login} />
	      	<Route path="access_token=:token" component={LoggingIn} />

	      	<Route component={LayoutContainer} onEnter={requireAuth}>
		        <Route path="account-not-linked" component={AccountNotLinked} />
		        <Route path="home" component={Home} />
		        <Route path="dashes" component={Dashes} />
		        <Route path="dashes/new" component={DashCreate} />
		        <Route path="dashes/:dashId" component={DashEdit} />
		        <Route path="dashes/:dashId/report" component={DashReport} />
		        <Route path="todos" component={Todos} />
		        <Route path="todos/edit" component={TodosEdit} />
		        <Route path="payouts" component={Payouts} />
		        <Route path="appletv" component={AppleTVActivation} />
	      	</Route>
	    </Route>
    </Router>
  </Provider>,
mountNode);
