'You can use and redistribute the code from this book (and sample application) for non-commercial and 
'most commercial purposes as long as you acknowledge the source and authorship. 
'You should note the source of the code in any documentation as well as in the program code itself (as a comment). 
'The acknowledgment should include author, title, publisher, and ISBN. 
'An example of such an acknowledgment would be "Derived from Listing 2-10, LightSwitch 2015 by Tim Leung, published by Apress, ISBN 978-1-4842-0767-3".

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

        'Listing 7-7. Performing Screen-Level Validation 
        Private Sub Issue_Validate(results As ScreenValidationResultsBuilder)
            ' results.AddPropertyError("<Error-Message>")
            If Issue.Priority Is Nothing Then
                results.AddPropertyError("Priority must be entered")
            End If

        End Sub
    End Class

End Namespace