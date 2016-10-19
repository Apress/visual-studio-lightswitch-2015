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
