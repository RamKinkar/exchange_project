import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'

import PageNotFound from './client/js/pageNotFound/pageNotFound'
import KycInfo from './client/js/kycInfo';
import UsrBankDetail from './client/js/usr_bank_detail';
import AdminDashboard from './client/js/admin/admin_dashboard';
import ViewKycDetails from './client/js/viewKycDetails';

const history = createHistory()

export default class ProjectRouter extends React.Component {
  render () {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path='/' component={KycInfo} />
          <Route exact path='/bankDetails' component={UsrBankDetail} />
          <Route exact path='/admin' component={AdminDashboard} />
          <Route exact path='/view-kycDetails' component={ViewKycDetails} />
          <Route path='*' component={PageNotFound} />
        </Switch>
      </Router>
    )
  }
}