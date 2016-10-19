'You can use and redistribute the code from this book (and sample application) for non-commercial and 
'most commercial purposes as long as you acknowledge the source and authorship. 
'You should note the source of the code in any documentation as well as in the program code itself (as a comment). 
'The acknowledgment should include author, title, publisher, and ISBN. 
'An example of such an acknowledgment would be "Derived from Listing 2-10, LightSwitch 2015 by Tim Leung, published by Apress, ISBN 978-1-4842-0767-3".


Namespace LightSwitchApplication
    Public Class ApplicationDataService

        'Listing 18-2. Sending Email When a User Updates a Record 
        Private Sub Issues_Updating(entity As Issue)
            ' 1 Test if the issue has changed to a closed status                          
            If entity.Details.Properties.IssueStatus.OriginalValue IsNot Nothing AndAlso (Not entity.Details.Properties.IssueStatus.OriginalValue.StatusDescription =
        "Closed") AndAlso
            entity.IssueStatus IsNot Nothing AndAlso
              (entity.IssueStatus.StatusDescription = "Closed") Then

                Dim emailBody As String =
                    "The status of your Issue has changed. Issue ID " &
                        entity.Id.ToString()

                SmtpMailHelper.SendMail(
                 My.Settings.NotificationEmail, 'sender email
                 My.Settings.NotificationEmail, 'recipient email
                 "(Email subject) - Issue update notification",
                 emailBody,
                 Nothing,
                 Nothing)

            End If

        End Sub
    End Class
End Namespace
