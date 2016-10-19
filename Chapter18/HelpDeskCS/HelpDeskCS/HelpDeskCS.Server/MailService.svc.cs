// You can use and redistribute the code from this book (and sample application) for non-commercial and 
// most commercial purposes as long as you acknowledge the source and authorship. 
// You should note the source of the code in any documentation as well as in the program code itself (as a comment). 
// The acknowledgment should include author, title, publisher, and ISBN. 
// An example of such an acknowledgment would be "Derived from Listing 2-10, LightSwitch 2015 by Tim Leung, published by Apress, ISBN 978-1-4842-0767-3".

using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.Text;

//Listing 18-4. The code that implements the Send Mail routine

using System.ServiceModel.Activation;

namespace LightSwitchApplication
{
    [AspNetCompatibilityRequirements(
        RequirementsMode = AspNetCompatibilityRequirementsMode.Allowed)]
    public class MailService : IMailService
    {
        public string SendMailSOAP(
           string emailTo, string subject, string body)
        {
            try
            {
                string senderEmail = "admin@lsfaq.com";
                LightSwitchApplication.UserCode.SmtpMailHelper.SendMail(
                   senderEmail, emailTo, subject, body,
                   null, null); // optional - add email attachment here...
                return ("Email Sent");
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }

        public string SendMailREST(
           string emailTo, string subject, string body)
        {
            try
            {
                string senderEmail = "admin@lsfaq.com";
                LightSwitchApplication.UserCode.SmtpMailHelper.SendMail(
                   senderEmail, emailTo, subject, body,
                   null, null); // optional - add email attachment here...
                return ("Email Sent");
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }

    }
}
