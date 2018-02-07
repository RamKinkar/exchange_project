import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'

import PageNotFound from './client/js/pageNotFound/pageNotFound'
import KycInfo from './client/js/kycInfo';
import UsrBankDetail from './client/js/usr_bank_detail';
import DisplayKycDetails from './client/js/display_kycdetails';
import DisplayBankDetails from './client/js/display_bankdetails';
import AdminDashboard from './client/js/admin/admin_dashboard';

const history = createHistory()

export default class ProjectRouter extends React.Component {
  render () {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path='/' component={KycInfo} />
          <Route exact path='/bankDetails' component={UsrBankDetail} />
          <Route exact path='/admin' component={AdminDashboard} />
          <Route exact path='/user-bankDetails' component={DisplayBankDetails} />
          <Route exact path='/user-kycDetails' component={DisplayKycDetails} />
          
          <Route path='*' component={PageNotFound} />
        </Switch>
      </Router>
    )
  }
}