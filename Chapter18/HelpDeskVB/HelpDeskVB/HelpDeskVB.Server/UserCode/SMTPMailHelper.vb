'You can use and redistribute the code from this book (and sample application) for non-commercial and 
'most commercial purposes as long as you acknowledge the source and authorship. 
'You should note the source of the code in any documentation as well as in the program code itself (as a comment). 
'The acknowledgment should include author, title, publisher, and ISBN. 
'An example of such an acknowledgment would be "Derived from Listing 2-10, LightSwitch 2015 by Tim Leung, published by Apress, ISBN 978-1-4842-0767-3".


Imports System.Net.Mail
Imports System.IO

'Listing 18 - 1.SMTP Mail Helper Class And Method
Public Module SmtpMailHelper

    Private ReadOnly SMTPServer As String = My.Settings.SMTPServer
    Private ReadOnly SMTPUserId As String = My.Settings.SMTPUserId
    Private ReadOnly SMTPPassword As String = My.Settings.SMTPPassword
    Private ReadOnly SMTPPort As Integer = My.Settings.SMTPPort

    Public Sub SendMail(sendFrom As String,
                        sendTo As String,
                        subject As String,
                        body As String,
                        attachment As Byte(),
                        filename As String)

        Dim fromAddress As New MailAddress(sendFrom)
        Dim toAddress As New MailAddress(sendTo)

        Dim mail As New MailMessage()

        mail.To.Add(toAddress)
        mail.Subject = subject
        mail.Body = body
        If body.ToLower().Contains("<html>") Then
            mail.IsBodyHtml = True
        End If

        mail.From = New MailAddress(sendFrom)
        Dim smtp As New SmtpClient(SMTPServer, SMTPPort)
        'Set the details below if you need to send credentials
        'smtp.Credentials =
        '   New System.Net.NetworkCredential("yourUsername", "yourPassword")
        'smtp.UseDefaultCredentials = False


        If attachment IsNot Nothing AndAlso
           Not String.IsNullOrEmpty(filename) Then
            Using ms As New MemoryStream(attachment)
                mail.Attachments.Add(New Attachment(ms, filename))
                smtp.Send(mail)
            End Using
        Else
            smtp.Send(mail)
        End If

    End Sub

End Module
