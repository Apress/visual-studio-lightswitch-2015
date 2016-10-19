Namespace LightSwitchApplication
    Public Class IssuesListDetail
        Private Sub RefreshAuditData_Execute()
            ' Write your code here.
            Me.AuditDetails.Refresh()
        End Sub

        Private Sub IssuesListDetail_Saved()
            ' Write your code here.
            Me.AuditDetails.Refresh()

        End Sub
    End Class
End Namespace
