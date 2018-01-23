const userKycinfoController = require('../controllers').Usr_kyc_Info;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));
  app.post('/api/userKycinfo', userKycinfoController.create);
  app.delete('/api/userKycinfo', userKycinfoController.destroy);
  app.post('/api/uploadAadhar', userKycinfoController.uploadAadhar);
  // app.get('/api/userKycinfo', userKycinfoController.list);

};