import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'

import PageNotFound from './client/js/pageNotFound/pageNotFound'
import KycInfo from './client/js/kycInfo';
import UsrBankDetail from './client/js/usr_bank_detail';
import AdminDashboard from './client/js/admin/admin_dashboard';
import DisplayUsrPersonalInfo from './client/js/display_usr_personal_info.js';
import DisplayKycDocuments from './client/js/display_kyc_documents';
import ViewKycDetails from './client/js/viewKycDetails';
import ViewUserProfile from './client/js/view_user_profile';

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
          <Route exact path='/display_usr_personal_info' component={DisplayUsrPersonalInfo} />
          <Route exact path='/display_kyc_documents' component={DisplayKycDocuments} />
          <Route exact path='/view_user_profile' component={ViewUserProfile} />
          <Route path='*' component={PageNotFound} />
        </Switch>
      </Router>
    )
  }
}