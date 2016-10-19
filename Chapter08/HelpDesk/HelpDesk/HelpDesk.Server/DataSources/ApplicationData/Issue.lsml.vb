Namespace LightSwitchApplication
    Public Class Issue

        'Listing 7-2. Compare Validation
        Private Sub ClosedDateTime_Validate(results As EntityValidationResultsBuilder)
            If CreateDateTime > ClosedDateTime Then
                results.AddPropertyError("Closed Date cannot be earlier than Create Date")
            End If
        End Sub

        'Listing 7-3. Making fields mandatory based on some condition  
        Private Sub ClosedByEngineer_Validate(results As EntityValidationResultsBuilder)
            If ClosedDateTime.HasValue AndAlso (ClosedByEngineer Is Nothing) Then
                results.AddPropertyError("Closed By Engineer is required")
            End If


        End Sub
    End Class
End Namespace
