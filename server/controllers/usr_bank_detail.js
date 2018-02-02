const Usr_Bank_Detail = require('../models').usr_bank_detail;
var CommonHelper = require('../../_helper');


module.exports = {

 create(req, res) {
 var data = CommonHelper._getEncryptedBankData(req.body.data);
 return Usr_Bank_Detail
  .create({
         bank_name: data.bank_name,
         branch_name: data.branch_name,
         account_no: data.account_no,
         account_holderName: data.account_holderName,
         ifsc_code: data.ifsc_code,
         account_type: data.account_type,
         mobile_no: data.mobile_no        
       })
       .then(Usr_Bank_Detail => res.status(201).send(Usr_Bank_Detail))
       .catch(error => res.status(400).send(error));
  },

  destroy(req, res) {
    return Usr_Bank_Detail
      .findById(req.query.id)
      .then(todo => {
        if (!todo) {
          return res.status(400).send({
            message: 'Todo Not Found',
          });
        }
        return Usr_Bank_Detail
          .destroy()
          .then(() => res.status(204).send())
          .catch(error => res.status(400).send(error));
      }).catch(error => res.status(400).send(error));
  },
};