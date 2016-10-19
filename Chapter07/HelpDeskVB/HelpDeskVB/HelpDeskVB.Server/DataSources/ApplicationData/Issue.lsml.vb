'You can use and redistribute the code from this book (and sample application) for non-commercial and 
'most commercial purposes as long as you acknowledge the source and authorship. 
'You should note the source of the code in any documentation as well as in the program code itself (as a comment). 
'The acknowledgment should include author, title, publisher, and ISBN. 
'An example of such an acknowledgment would be "Derived from Listing 2-10, LightSwitch 2015 by Tim Leung, published by Apress, ISBN 978-1-4842-0767-3".

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
