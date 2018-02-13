// file for defing all the backend routes of kycdetails and bankdetails
const userKycinfoController = require('../controllers').Usr_kyc_Info;
const userBankDetailController = require('../controllers').Usr_Bank_Detail;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));
  app.post('/api/userKycinfo', userKycinfoController.create);
  app.delete('/api/userKycinfo', userKycinfoController.destroy);
  app.post('/api/uploadAadharFront', userKycinfoController.uploadAadharFront);
  app.post('/api/uploadAadharBack', userKycinfoController.uploadAadharBack);
  app.post('/api/uploadPan', userKycinfoController.uploadPan);
  app.get('/api/getKycRecords', userKycinfoController.getKycRecords);
  app.post('/api/verifyKyc', userKycinfoController.verifyKyc);
  app.get('/api/getUserKycDetail', userKycinfoController.getUserKycDetailById);
  app.post('/api/userBankDetail', userBankDetailController.create);
  app.post('/api/uploadBankSlip', userBankDetailController.uploadBankSlip);
  app.get('/api/getKycBankDetail', userBankDetailController.getBankDetailById);
  app.delete('/api/userBankDetail', userBankDetailController.destroy);
};
