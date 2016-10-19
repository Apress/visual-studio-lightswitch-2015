'You can use and redistribute the code from this book (and sample application) for non-commercial and 
'most commercial purposes as long as you acknowledge the source and authorship. 
'You should note the source of the code in any documentation as well as in the program code itself (as a comment). 
'The acknowledgment should include author, title, publisher, and ISBN. 
'An example of such an acknowledgment would be "Derived from Listing 2-10, LightSwitch 2015 by Tim Leung, published by Apress, ISBN 978-1-4842-0767-3".

Namespace LightSwitchApplication

    Public Class CreateNewIssue

        Private Sub CreateNewIssue_InitializeDataWorkspace(ByVal saveChangesTo As Global.System.Collections.Generic.List(Of Global.Microsoft.LightSwitch.IDataService))
            ' Write your code here.
            Me.IssueProperty = New Issue()
        End Sub

        Private Sub CreateNewIssue_Saved()
            ' Write your code here.
            Me.Close(False)
            Application.Current.ShowDefaultScreen(Me.IssueProperty)
        End Sub

        Private Sub SaveScreen_Execute()
            ' Write your code here.
            Me.Save()
        End Sub
    End Class

End Namespace