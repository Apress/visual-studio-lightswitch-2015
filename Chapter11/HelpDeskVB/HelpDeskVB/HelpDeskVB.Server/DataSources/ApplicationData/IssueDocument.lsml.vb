Namespace LightSwitchApplication
    Public Class IssueDocument

        'Listing 11-10. Validating file sizes

        Private Sub IssueFile_Validate(results As EntityValidationResultsBuilder)
            If Me.IssueFile IsNot Nothing Then
                Dim sizeInMB = Me.IssueFile.Length / 1048576
                If sizeInMB > 2 Then
                    results.AddPropertyError("File cannot be > 2MB")
                End If
            End If
        End Sub

    End Class
End Namespace
