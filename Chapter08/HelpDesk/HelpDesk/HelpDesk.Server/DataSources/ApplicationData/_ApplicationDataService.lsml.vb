Namespace LightSwitchApplication
    Public Class ApplicationDataService

        Private Sub Issues_Validate(
  entity As Issue, results As EntitySetValidationResultsBuilder)

            'Listing 7-5. Validating the counts of child items 
            If entity.IssueDocuments.Count() > 10 Then
                results.AddEntityError(
      "Issues can only contain a maximum of 10 documents")
            End If


            'Listing 7-10. Validating Deletions on the Server 

            ' Check for validation errors for deletions
            If entity.Details.EntityState = EntityState.Deleted Then
                If entity.IssueResponses.Where(
      Function(s) s.AwaitingClient).Any() Then
                    results.AddEntityError(
           "Cannot delete issues with responses awaiting client.")
                End If
            End If
        End Sub

        Private Sub Issues_Deleting(entity As Issue)

            ' Check for validation errors for deletions
            If entity.Details.ValidationResults.Errors.Any Then
                Throw New ValidationException(Nothing,
                  Nothing, entity.Details.ValidationResults)
            End If

            ' Cascade delete children because delete rule is Restricted
            For Each resp In entity.IssueResponses
                resp.Delete()
            Next


        End Sub


    End Class
End Namespace
