'You can use and redistribute the code from this book (and sample application) for non-commercial and 
'most commercial purposes as long as you acknowledge the source and authorship. 
'You should note the source of the code in any documentation as well as in the program code itself (as a comment). 
'The acknowledgment should include author, title, publisher, and ISBN. 
'An example of such an acknowledgment would be "Derived from Listing 2-10, LightSwitch 2015 by Tim Leung, published by Apress, ISBN 978-1-4842-0767-3".


Imports System.ServiceModel.Activation
'Listing 18 - 4.The code that implements the Send Mail routine
Namespace LightSwitchApplication

    <AspNetCompatibilityRequirements(
    RequirementsMode:=AspNetCompatibilityRequirementsMode.Required)>
    Public Class MailService
        Implements IMailService

        Public Function SendMailSOAP(emailTo As String,
           subject As String, body As String
              ) As String Implements IMailService.SendMailSOAP
            Try
                Dim senderEmail As String = "admin@lsfaq.com"
                SmtpMailHelper.SendMail(
               senderEmail, emailTo, subject, body,
               Nothing, Nothing) ' optional - add email attachment here...
                Return ("Email Sent")
            Catch ex As Exception
                Return ex.Message
            End Try
        End Function

        Public Function SendMailREST(emailTo As String,
           subject As String, body As String
            ) As String Implements IMailService.SendMailREST
            Try
                Dim senderEmail As String = "admin@lsfaq.com"
                SmtpMailHelper.SendMail(
               senderEmail, emailTo, subject, body,
               Nothing, Nothing) ' optional - add email attachment here...
                Return ("Email Sent")
            Catch ex As Exception
                Return ex.Message
            End Try
        End Function

    End Class
End Namespace
