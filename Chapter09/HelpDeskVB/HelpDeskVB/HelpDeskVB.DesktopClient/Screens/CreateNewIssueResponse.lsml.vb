'You can use and redistribute the code from this book (and sample application) for non-commercial and 
'most commercial purposes as long as you acknowledge the source and authorship. 
'You should note the source of the code in any documentation as well as in the program code itself (as a comment). 
'The acknowledgment should include author, title, publisher, and ISBN. 
'An example of such an acknowledgment would be "Derived from Listing 2-10, LightSwitch 2015 by Tim Leung, published by Apress, ISBN 978-1-4842-0767-3".

Namespace LightSwitchApplication

    Public Class CreateNewIssueResponse
        'Listing 9-14. Handling the TextBox KeyUp event 

        Private Sub CreateNewIssueResponse_InitializeDataWorkspace(
   saveChangesTo As List(Of Microsoft.LightSwitch.IDataService))
            Me.IssueResponseProperty = New IssueResponse()

            Dim control = Me.FindControl("ResponseText")
            AddHandler control.ControlAvailable,
        AddressOf TextBoxAvailable

            ResponseTextCount = 1000

        End Sub

        Private Sub TextBoxAvailable(
   sender As Object, e As ControlAvailableEventArgs)
            AddHandler CType(e.Control,
        System.Windows.Controls.TextBox).KeyUp,
            AddressOf TextBoxKeyUp
        End Sub

        Private Sub TextBoxKeyUp(
    sender As Object, e As System.Windows.RoutedEventArgs)

            Dim textbox = CType(sender, System.Windows.Controls.TextBox)
            ResponseTextCount = 1000 - textbox.Text.Count()
        End Sub




        Private Sub CreateNewIssueResponse_Saved()
            ' Write your code here.
            Me.Close(False)
            Application.Current.ShowDefaultScreen(Me.IssueResponseProperty)
        End Sub

    End Class

End Namespace