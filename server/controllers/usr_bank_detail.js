const Usr_Bank_Detail = require('../models').usr_bank_detail;
var fs = require('file-system');
var CommonHelper = require('../../_helper');
const createFilePath = __dirname +'/../../../kyc_images/'


module.exports = {
// method for creating the details of bank details
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
         mobile_no: data.mobile_no,
         bank_filepath: data.bank_filepath,
         exchange_user_id: '4'
       })
       .then(Usr_Bank_Detail => res.status(201).send(Usr_Bank_Detail))
       .catch(error => res.status(400).send(error));
  },

// method for uploading the bank slip images
    uploadBankSlip(req, res) {
      if (!req.files)
        return res.status(400).send('No files were uploaded.');
      // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
      var fileObject = Object.values(req.files);
      var randomNumberBetween0and19 = Math.floor(Math.random() * 20);
      var bankfolder_id = {
        "bankfolder_id": 'user_bankdtl'+randomNumberBetween0and19
      }
      let saveImgfilepath = '/kyc_images/bank_dtl_'+bankfolder_id.bankfolder_id+'.jpg'
      let base64 = new Buffer(fileObject[0].data, 'base64');
      fs.writeFile(createFilePath+'/bank_dtl_'+bankfolder_id.bankfolder_id+'.jpg', base64, function(err) {
        if(err) console.log('errrorrr',err )
        console.log('image saved>>>>>>>>>>>>>')
        return res.json({'msg':'bank detail saved successfully', "filepath": saveImgfilepath});
      })
    },

    // method for fetching the single user ban records on the basis of  user exchange_user_id
    getBankDetailById(req, res) {
        return Usr_Bank_Detail
          .findAll({
            where: {
              exchange_user_id: req.query.id,
            },
          })
          .then(kycBankRecord => {
            if (!kycBankRecord) {
              return res.status(404).send({
                message: 'kycBankRecord Not Found',
              });
            }
            return res.status(200).send(kycBankRecord);
          })
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
