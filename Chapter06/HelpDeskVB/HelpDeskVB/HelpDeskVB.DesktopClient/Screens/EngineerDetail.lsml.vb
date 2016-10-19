'You can use and redistribute the code from this book (and sample application) for non-commercial and 
'most commercial purposes as long as you acknowledge the source and authorship. 
'You should note the source of the code in any documentation as well as in the program code itself (as a comment). 
'The acknowledgment should include author, title, publisher, and ISBN. 
'An example of such an acknowledgment would be "Derived from Listing 2-10, LightSwitch 2015 by Tim Leung, published by Apress, ISBN 978-1-4842-0767-3".

Namespace LightSwitchApplication

    Public Class EngineerDetail

        Private Sub Engineer_Loaded(succeeded As Boolean)
            ' Write your code here.
            Me.SetDisplayNameFromEntity(Me.Engineer)
        End Sub

        Private Sub Engineer_Changed()
            ' Write your code here.
            Me.SetDisplayNameFromEntity(Me.Engineer)
        End Sub

        Private Sub EngineerDetail_Saved()
            ' Write your code here.
            Me.SetDisplayNameFromEntity(Me.Engineer)
        End Sub

        'Listing 6-4. Code to get data
        Private Sub EngineerDetail_InitializeDataWorkspace(saveChangesTo As List(Of IDataService))

            Dim currentIssues = From issue In Engineer.Issues
                                Where issue.CreateDateTime > New Date(Now.Year, Now.Month, 1)
                                Select issue

            IssueCountLabel = currentIssues.Count


            'Listing 6-5. Code to execute queries remotely
            'Remote Query Execution
            'Dim currentIssues = From issue In Engineer.IssuesQuery
            '                    Where issue.CreateDateTime > New Date(Now.Year, Now.Month, 1)
            '                    Select issue

            'IssueCountLabel = currentIssues.Execute().Count

        End Sub
    End Class

End Namespace