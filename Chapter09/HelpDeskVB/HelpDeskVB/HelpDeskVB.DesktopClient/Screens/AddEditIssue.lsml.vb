'You can use and redistribute the code from this book (and sample application) for non-commercial and 
'most commercial purposes as long as you acknowledge the source and authorship. 
'You should note the source of the code in any documentation as well as in the program code itself (as a comment). 
'The acknowledgment should include author, title, publisher, and ISBN. 
'An example of such an acknowledgment would be "Derived from Listing 2-10, LightSwitch 2015 by Tim Leung, published by Apress, ISBN 978-1-4842-0767-3".

Namespace LightSwitchApplication

    Public Class AddEditIssue

        'Listing 9-19. Issue add And edit code
        Private Sub Issue_Loaded(succeeded As Boolean)

            If Not Me.IssueId.HasValue Then
                Me.IssueProperty = New Issue()
            Else
                Me.IssueProperty = Me.Issue
            End If

            Me.SetDisplayNameFromEntity(Me.Issue)

        End Sub

        Private Sub Issue_Changed()
            ' Write your code here.
            Me.SetDisplayNameFromEntity(Me.Issue)
        End Sub

        Private Sub AddEditIssue_Saved()
            ' Write your code here.
            Me.SetDisplayNameFromEntity(Me.Issue)
        End Sub

    End Class

End Namespace