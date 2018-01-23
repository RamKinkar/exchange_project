const Usr_kyc_Info = require('../models').usr_kyc_info;

module.exports = {
  create(req, res) {
    return Usr_kyc_Info
      .create({
        aadharHolder_name: req.body.aadharHolder_name,
        panHolder_name: req.body.panHolder_name,
        aadhar_number: req.body.aadhar_number,
        pan_number: req.body.pan_number,
        pan_dob: req.body.pan_dob,
        pan_filepath: req.body.pan_filepath,
        aadhar_filepath: req.body.aadhar_filepath,
        verification_flag: req.body.verification_flag
      })
      .then(Usr_kyc_Info => res.status(201).send(Usr_kyc_Info))
      .catch(error => res.status(400).send(error));
  },

  destroy(req, res) {
  	console.log('req.params.id>>>>>>>>>>>>>', req)
  	console.log('req.params.id>>>>>>>>>>>>>', req.query.id)
  return Usr_kyc_Info
    .findById(req.query.id)
    .then(todo => {
      if (!todo) {
        return res.status(400).send({
          message: 'Todo Not Found',
        });
      }
      return Usr_kyc_Info
        .destroy()
        .then(() => res.status(204).send())
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
},
};