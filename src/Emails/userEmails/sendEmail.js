
import { createTransport } from "nodemailer";




export const sendEmail = async (sendTo , content)=>{
   const transporter = createTransport({
      secure: true,
      service:"gmail" ,
      auth: {
         user: process.env.EMAIL_SENDING_MESSAGE,
         pass: process.env.EMAIL_PASSWORD,
      },


      // host: "smtp.forwardemail.net",
      // port: 465,
      // secure: true,
      // auth: {
      //    user: "REPLACE-WITH-YOUR-ALIAS@YOURDOMAIN.COM",
      //    pass: "REPLACE-WITH-YOUR-GENERATED-PASSWORD",
      // },
   });
   
   //! send mail with defined transport object
   const info = await transporter.sendMail({
      from: '"Fekrah Medical Website Configuration Email 👻" <mahmoud.osman440@gmail.com>', // sender address
      to: sendTo, // list of receivers
      subject: "Activate Your Account for - Fekrah Medical ✔", // Subject line
      text: "Hello world?", // plain text body
      html: content(), // html body
      // attachments:''
   });
   
   // console.log("Message sent...", info.messageId);
}