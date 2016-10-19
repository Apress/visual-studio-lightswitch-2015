'You can use and redistribute the code from this book (and sample application) for non-commercial and 
'most commercial purposes as long as you acknowledge the source and authorship. 
'You should note the source of the code in any documentation as well as in the program code itself (as a comment). 
'The acknowledgment should include author, title, publisher, and ISBN. 
'An example of such an acknowledgment would be "Derived from Listing 2-10, LightSwitch 2015 by Tim Leung, published by Apress, ISBN 978-1-4842-0767-3".

Imports HelpDeskPortalVB.HelpDeskServiceReference

Public Class CreateIssue
    Inherits System.Web.UI.Page

    Protected Sub AddIssue_Click(sender As Object, e As EventArgs) Handles Button1.Click

        'Dim srvRef As ApplicationData =
        'New ApplicationData(
        '   New Uri("http://localhost:50478/ApplicationData.svc/"))

        Dim srvRef As ApplicationData =
        New ApplicationData(
           New Uri(ServiceEndPointURL.Text))

        Dim issue As HelpDeskServiceReference.Issue =
            New HelpDeskServiceReference.Issue()

        issue.Subject = IssueSubject.Text
        issue.CreateDateTime = DateTime.Now
        issue.TargetEndDateTime = DateTime.Now.AddDays(3)
        issue.ProblemDescription = IssueDescription.Text
        Try
            srvRef.AddToIssues(issue)
            srvRef.SaveChanges()
            ConfirmLabel.Text = "Issue Created"
            issue.Subject = ""
            issue.ProblemDescription = ""
        Catch ex As Exception
            ConfirmLabel.Text = ex.Message
        End Try

    End Sub

End Class
