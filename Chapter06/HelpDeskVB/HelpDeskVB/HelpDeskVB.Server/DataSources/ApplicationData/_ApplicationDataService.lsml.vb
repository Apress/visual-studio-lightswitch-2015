'You can use and redistribute the code from this book (and sample application) for non-commercial and 
'most commercial purposes as long as you acknowledge the source and authorship. 
'You should note the source of the code in any documentation as well as in the program code itself (as a comment). 
'The acknowledgment should include author, title, publisher, and ISBN. 
'An example of such an acknowledgment would be "Derived from Listing 2-10, LightSwitch 2015 by Tim Leung, published by Apress, ISBN 978-1-4842-0767-3".

Imports System.Transactions
Imports System.Text

Namespace LightSwitchApplication
    Public Class ApplicationDataService
        'Listing 6-6. Retrieving original values in code
        Private Sub Issues_Updating(entity As Issue)


            Dim issueHistory As IssueStatusChange =
               Me.DataWorkspace.ApplicationData.IssueStatusChanges.AddNew()

            issueHistory.OldStatus =
            entity.Details.Properties.IssueStatus.OriginalValue

            issueHistory.NewStatus = entity.IssueStatus
            issueHistory.Issue = entity
            issueHistory.ChangeDate = DateTime.UtcNow

            '//   Me.DataWorkspace.ApplicationData.SaveChanges()
        End Sub


        'Listing 6-9. Creating your own transaction scope

        Dim transaction As TransactionScope

        Private Sub SaveChanges_Executing()

            Dim transactionOptions = New TransactionOptions()
            transactionOptions.IsolationLevel = IsolationLevel.ReadCommitted

            'Create an audit record as part of the transaction                                    
            Me.transaction = New TransactionScope(
                TransactionScopeOption.Required, transactionOptions)

            Dim auditDesc As StringBuilder =
                New StringBuilder("Changes " + DateTime.Now.ToString() + " :")
            For Each changedEntity In
                Me.DataWorkspace.ApplicationData.Details.GetChanges()

                auditDesc.AppendLine(changedEntity.Details.Entity.ToString())
            Next

            Using dataworkspace2 = Me.Application.CreateDataWorkspace()
                Dim auditRecord = dataworkspace2.AuditDataSource.AuditDetails.AddNew
                auditRecord.AuditDesc = auditDesc.ToString()
                dataworkspace2.AuditDataSource.SaveChanges()
            End Using

        End Sub

        Private Sub SaveChanges_Executed()
            'Commit the transaction                                                               
            Me.transaction.Complete()
            Me.transaction.Dispose()
        End Sub

        Private Sub SaveChanges_ExecuteFailed(exception As System.exception)
            'Rollback the transaction on an error                                                 
            Me.transaction.Dispose()
        End Sub



    End Class
End Namespace
