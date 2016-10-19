'You can use and redistribute the code from this book (and sample application) for non-commercial and 
'most commercial purposes as long as you acknowledge the source and authorship. 
'You should note the source of the code in any documentation as well as in the program code itself (as a comment). 
'The acknowledgment should include author, title, publisher, and ISBN. 
'An example of such an acknowledgment would be "Derived from Listing 2-10, LightSwitch 2015 by Tim Leung, published by Apress, ISBN 978-1-4842-0767-3".

Namespace LightSwitchApplication
    Public Class EditableIssuesGrid

        'Listing 9-21. Controlling the custom modal window

        Private Sub AddItem_Execute()
            Issues.AddNew()
            Me.OpenModalWindow("IssueWindow")
        End Sub

        Private Sub EditItem_Execute()
            Me.OpenModalWindow("IssueWindow")
        End Sub

        Private Sub SaveItem_Execute()
            Me.CloseModalWindow("IssueWindow")
        End Sub

        Private Sub CancelItem_Execute()
            CType(Issues.SelectedItem, Issue).Details.DiscardChanges()
            Me.CloseModalWindow("IssueWindow")
        End Sub



    End Class
End Namespace
