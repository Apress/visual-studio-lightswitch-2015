'You can use and redistribute the code from this book (and sample application) for non-commercial and 
'most commercial purposes as long as you acknowledge the source and authorship. 
'You should note the source of the code in any documentation as well as in the program code itself (as a comment). 
'The acknowledgment should include author, title, publisher, and ISBN. 
'An example of such an acknowledgment would be "Derived from Listing 2-10, LightSwitch 2015 by Tim Leung, published by Apress, ISBN 978-1-4842-0767-3".

Imports System.Text

Namespace LightSwitchApplication
    Public Class EditableIssuesGrid
        Private Sub EditableIssuesGrid_SaveError(exception As exception, ByRef handled As Boolean)
            ' Write your code here.

            ' Un-delete deleted records that had server-side validation errors
            Dim validationExc = TryCast(exception, ValidationException)

            If Not validationExc Is Nothing Then
                Dim entities = From v In validationExc.ValidationResults
                               Let e = TryCast(v.Target, IEntityObject)
                               Where Not e Is Nothing AndAlso
      e.Details.EntityState = EntityState.Deleted
                               Select e

                For Each e In entities
                    e.Details.DiscardChanges()
                Next
            End If


        End Sub

        'Listing 6-8. Discarding screen changes on desktop clients
        Private Sub EditableIssuesGrid_Saving(ByRef handled As Boolean)
            ' Write your code here.
            Dim message As StringBuilder = New StringBuilder()
            For Each issue As Issue In
           DataWorkspace.ApplicationData.Details.GetChanges().OfType(Of Issue)()
                message.AppendLine(issue.Id.ToString & " - " & issue.Subject)

                'You can discard just a single record using this syntax                      
                'issue.Details.DiscardChanges()
            Next

            If Me.ShowMessageBox("You've made changes to the following records:" &
        Environment.NewLine & Environment.NewLine &
        message.ToString() & Environment.NewLine &
        "Are you sure you wish to save your changes?" & Environment.NewLine &
        "Click OK to continue, or Cancel to discard your changes",
        "Confirm Save",
         MessageBoxOption.OkCancel) = MessageBoxResult.Cancel Then

                DataWorkspace.ApplicationData.Details.DiscardChanges()
                handled = True
            End If


        End Sub
    End Class
End Namespace
