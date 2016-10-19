'You can use and redistribute the code from this book (and sample application) for non-commercial and 
'most commercial purposes as long as you acknowledge the source and authorship. 
'You should note the source of the code in any documentation as well as in the program code itself (as a comment). 
'The acknowledgment should include author, title, publisher, and ISBN. 
'An example of such an acknowledgment would be "Derived from Listing 2-10, LightSwitch 2015 by Tim Leung, published by Apress, ISBN 978-1-4842-0767-3".

Imports System.Text.RegularExpressions

Namespace LightSwitchApplication
    Public Class Engineer

        'Listing 7-1. Creating a validation warning  
        Private Sub EmailAddress_Validate(results As EntityValidationResultsBuilder)

            If String.IsNullOrEmpty(EmailAddress) Then
                results.AddPropertyResult(
                  "Email Address recommended", ValidationSeverity.Informational)
            End If
        End Sub

        'Listing 7-4. Regex validation to check social security numbers
        Private Sub SSN_Validate(results As EntityValidationResultsBuilder)
            Dim pattern As String =
      "^(?!000)([0-6]\d{2}|7([0-6]\d|7[012]))([ -]?)(?!00)\d\d\3(?!0000)\d{4}$"
            If (Not SSN Is Nothing) AndAlso
      (Regex.IsMatch(SSN, pattern) = False) Then
                results.AddPropertyError(
           "Enter SSN in format 078-05-1120")
            End If


        End Sub

        'Listing 7-9. Enforcing Unique Records
        Private Sub ClearanceReference_Validate(results As EntityValidationResultsBuilder)

            If Len(Me.ClearanceReference) > 0 Then
                Dim duplicateOnServer = (
                  From eng In
                    Me.DataWorkspace.ApplicationData.Engineers.Cast(Of Engineer)()
                  Where
                  eng.Id <> Me.Id AndAlso
                  eng.ClearanceReference IsNot Nothing AndAlso
                  eng.ClearanceReference.Equals(Me.ClearanceReference,
                  StringComparison.CurrentCultureIgnoreCase)
                 ).ToArray()

                Dim duplicateOnClients = (
      From eng In
        Me.DataWorkspace.ApplicationData.Details.GetChanges().
        OfType(Of Engineer)()
      Where
      eng IsNot Me AndAlso
        eng.ClearanceReference IsNot Nothing AndAlso
        eng.ClearanceReference.Equals(Me.ClearanceReference,
        StringComparison.CurrentCultureIgnoreCase)
     ).ToArray()

                Dim deleltedOnClient = Me.DataWorkspace.ApplicationData.Details.GetChanges().
      DeletedEntities.OfType(Of Engineer)().ToArray()

                Dim anyDuplicates = duplicateOnServer.Union(duplicateOnClients).Distinct().
      Except(deleltedOnClient).Any()

                If anyDuplicates Then
                    results.AddPropertyError("
        The clearance reference already exists")
                End If

            End If

        End Sub

    End Class
End Namespace
