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

        'Listing 9-11. Hiding And showing controls 

        Private Sub ToggleVisibility_Execute()
            ' Write your code here.
            Dim rowLayout = Me.FindControl("ClosureGroup")
            rowLayout.IsVisible = Not (rowLayout.IsVisible)

            If rowLayout.IsVisible Then
                Me.FindControl("ToggleVisibility").DisplayName =
           "Hide Closure Details"
            Else
                Me.FindControl("ToggleVisibility").DisplayName =
           "Show Closure Details"
            End If
        End Sub






    End Class

End Namespace