// You can use and redistribute the code from this book (and sample application) for non-commercial and 
// most commercial purposes as long as you acknowledge the source and authorship. 
// You should note the source of the code in any documentation as well as in the program code itself (as a comment). 
// The acknowledgment should include author, title, publisher, and ISBN. 
// An example of such an acknowledgment would be "Derived from Listing 2-10, LightSwitch 2015 by Tim Leung, published by Apress, ISBN 978-1-4842-0767-3".

using System.Net.Mail;
using System.IO;

//Listing 18-1. SMTP Mail Helper Class and Method
namespace LightSwitchApplication.UserCode
{
    public static class SmtpMailHelper
    {

        private static readonly string SMTPServer =
          LightSwitchApplication.Properties.Settings.Default.SMTPServer;
        private static readonly string SMTPUserId =
          LightSwitchApplication.Properties.Settings.Default.SMTPUsername;
        private static readonly string SMTPPassword =
          LightSwitchApplication.Properties.Settings.Default.SMTPPassword;
        private static readonly int SMTPPort =
          LightSwitchApplication.Properties.Settings.Default.SMTPPort;

        public static void SendMail(string sendFrom,
          string sendTo,
          string subject,
          string body,
          byte[] attachment,
          string filename)
        {
            MailAddress fromAddress = new MailAddress(sendFrom);
            MailAddress toAddress = new MailAddress(sendTo);
            MailMessage mail = new MailMessage();                               

            //mail.From = fromAddress;
            mail.To.Add(toAddress);
            mail.Subject = subject;
            mail.Body = body;
            if (body.ToLower().Contains("<html>"))                              
            {
                mail.IsBodyHtml = true;                                         
            }

            mail.From = new MailAddress(sendFrom);
            SmtpClient smtp = new SmtpClient(SMTPServer, SMTPPort);

            //Set the details below if you need to send credentials
            //smtp.Credentials =
            //   new System.Net.NetworkCredential("yourusername", "yourpassword");
            //smtp.UseDefaultCredentials = false;

            if (attachment != null && !string.IsNullOrEmpty(filename))          
            {
                using (MemoryStream ms = new MemoryStream(attachment))
                {
                    mail.Attachments.Add(new Attachment(ms, filename));
                    smtp.Send(mail);                                            
                }
            }
            else
            {
                smtp.Send(mail);                                                
            }                                                                           
        }
    }
}
