'You can use And redistribute the code from this book (And sample application) for non-commercial And 
'most commercial purposes as long as you acknowledge the source And authorship. 
'You should note the source of the code in any documentation as well as in the program code itself (as a comment). 
'The acknowledgment should include author, title, publisher, And ISBN. 
'An example of such an acknowledgment would be "Derived from Listing 2-10, LightSwitch 2015 by Tim Leung, published by Apress, ISBN 978-1-4842-0767-3".

Imports System.Runtime.InteropServices.Automation
Imports System.ServiceModel

Namespace LightSwitchApplication

    Public Class IssueDetail

        Private Sub Issue_Loaded(succeeded As Boolean)
            ' Write your code here.
            Me.SetDisplayNameFromEntity(Me.Issue)
        End Sub

        Private Sub Issue_Changed()
            ' Write your code here.
            Me.SetDisplayNameFromEntity(Me.Issue)
        End Sub

        Private Sub IssueDetail_Saved()
            ' Write your code here.
            Me.SetDisplayNameFromEntity(Me.Issue)
        End Sub


        'Listing 18-7. Screen Code to Send an E-mail via a Web Service Call
        Private Sub SendEmail_Execute()

            Microsoft.LightSwitch.Threading.Dispatchers.Main.BeginInvoke(
                Sub()
                    Dim serverUrl As Uri = System.Windows.Application.Current.Host.Source

                    Details.Dispatcher.BeginInvoke(
                        Sub()
                            'serverUrl.AbsoluteUri returns a URL like this: 
                            '    http://localhost:49715/DesktopClient/Web/HelpDesk.Client.xap
                            Dim rootUrl =
            serverUrl.AbsoluteUri.Substring(
                    0, serverUrl.AbsoluteUri.IndexOf("/DesktopClient/Web/"))

                            Dim binding = New System.ServiceModel.BasicHttpBinding()

                            'example endPoint url:
                            '  endPoint http://localhost:49715/MailService.svc/soap
                            Dim endPoint =
                       New EndpointAddress(rootUrl + "/MailService.svc/soap")

                            Dim proxy As MailService.MailServiceClient =
                        New MailService.MailServiceClient(binding, endPoint)

                            AddHandler proxy.SendMailSOAPCompleted,
                                Sub(sender As Object,
                                  e As MailService.SendMailSOAPCompletedEventArgs)

                                    Me.Details.Dispatcher.BeginInvoke(
                                        Sub()
                                            ShowMessageBox(e.Result.ToString())
                                        End Sub
                            )
                                End Sub

                            proxy.SendMailSOAPAsync(Recipient,
                                "(Email Subject) Issue Detail",
                                "(Email Body)" & Issue.ProblemDescription)

                        End Sub
                )
                End Sub
    )


        End Sub

        'Listing 18-9. Screen Code to Create an Outlook Message 
        Private Sub SendWithOutlook_Execute()
            OutlookMailHelper.CreateEmail(Recipient,
        "(Email Subject) Issue Detail",
        "(Email Body)" & Issue.ProblemDescription)
        End Sub

        Private Sub SendWithOutlook_CanExecute(ByRef result As Boolean)
            result = AutomationFactory.IsAvailable
        End Sub



    End Class

End Namespace