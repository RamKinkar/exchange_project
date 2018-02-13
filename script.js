-> create table
// script for create the user kyc info model
 sequelize model:create --name usr_kyc_info --attributes aadhaarHolder_name:string,panHolder_name:string,aadhaar_number:string,pan_number:string,pan_dob:DATE,aadhaar_front_filepath:string,aadhaar_back_filepath:string,pan_filepath:string,gross_annual_income:string,residential_status:string,street_address:string,city:string,state:string,pin_code:string,verification_flag:boolean,exchange_user_id:string

 // script for create the user bank detail model
 sequelize model:create --name usr_bank_detail --attributes bank_name:string,branch_name:string,account_no:string,account_holderName:string,ifsc_code:string,account_type:string,mobile_no:string,bank_filepath:string,exchange_user_id:string

 // script for create the exchange_user bank detail model
 sequelize model:create --name exchange_user --attributes email:string
