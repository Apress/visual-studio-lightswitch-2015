'You can use and redistribute the code from this book (and sample application) for non-commercial and 
'most commercial purposes as long as you acknowledge the source and authorship. 
'You should note the source of the code in any documentation as well as in the program code itself (as a comment). 
'The acknowledgment should include author, title, publisher, and ISBN. 
'An example of such an acknowledgment would be "Derived from Listing 2-10, LightSwitch 2015 by Tim Leung, published by Apress, ISBN 978-1-4842-0767-3".

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
    End Class
End Namespace
