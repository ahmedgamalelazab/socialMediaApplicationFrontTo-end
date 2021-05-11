//TODO implement the send email service here 
const nodemailer = require("nodemailer");



const sendEmail = async function sendEmail(options){

    //first we have to specify the transports 
    const transporter = nodemailer.createTransport({
        service : process.env.NODEMAILER_SERVICE,
        auth : {
            user : process.env.NODEMAILER_USER,
            pass : process.env.NODEMAILER_PASSWORD,
        }
    });

    const mailOptions = {
        from : process.env.NODEMAILER_FROM,
        to : options.to,
        subject : options.subject,
        html : options.text
    }

    try{
        const emailInfo = await transporter.sendMail(mailOptions);
        //if all are ok 
        return emailInfo;

    }catch(error){
        console.log(error);
        throw new Error(error);
    }


}


module.exports = sendEmail;