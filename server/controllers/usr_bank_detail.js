const Usr_Bank_Detail = require('../models').usr_bank_detail;
var fs = require('file-system');
var _ = require('lodash');
var bcrypt = require('bcrypt');
const saltRounds = 10;


module.exports = {

 create(req, res) {

 return Usr_Bank_Detail
  .create({
         bank_name: req.body.bank_name,
         branch_name: req.body.branch_name,
         account_no: req.body.account_no,
         account_holderName: req.body.account_holderName,
         ifsc_code: req.body.ifsc_code,
         account_type: req.body.account_type,
         mobile_no: req.body.mobile_no,
        
       })
       .then(Usr_Bank_Detail => res.status(201).send(Usr_Bank_Detail))
       .catch(error => res.status(400).send(error));
  },

  destroy(req, res) {
    console.log('====================',req.query.id);

    return Usr_Bank_Detail
      .findById(req.query.id)
      .then(todo => {
        if (!todo) {
          return res.status(400).send({
            message: 'Todo Not Found',
          });
        }
        return Usr_Bank_Detail
          .destroy('reeeeeeeeeessssssssssssssssssssssssss',res)
          .then(() => res.status(204).send())
          .catch(error => res.status(400).send(error));
      }).catch(error => res.status(400).send(error));
  },

    
};