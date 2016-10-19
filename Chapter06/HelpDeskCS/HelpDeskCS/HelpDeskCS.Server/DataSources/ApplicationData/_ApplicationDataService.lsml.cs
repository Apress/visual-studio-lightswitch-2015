// You can use and redistribute the code from this book (and sample application) for non-commercial and 
// most commercial purposes as long as you acknowledge the source and authorship. 
// You should note the source of the code in any documentation as well as in the program code itself (as a comment). 
// The acknowledgment should include author, title, publisher, and ISBN. 
// An example of such an acknowledgment would be "Derived from Listing 2-10, LightSwitch 2015 by Tim Leung, published by Apress, ISBN 978-1-4842-0767-3".


using Microsoft.LightSwitch.Security.Server;
using Microsoft.LightSwitch;
using System.Text;
using System.Linq;
using System.Collections.Generic;
using System;
using System.Transactions;


namespace LightSwitchApplication
{
    public partial class ApplicationDataService
    {

        //Listing 6-6. Retrieving original values in code
        partial void Issues_Updated(Issue entity)
        {
            IssueStatusChange issueHistory =
            this.DataWorkspace.ApplicationData.
            IssueStatusChanges.AddNew();

            issueHistory.OldStatus =
                entity.Details.Properties.IssueStatus.OriginalValue;

            issueHistory.NewStatus = entity.IssueStatus;
            issueHistory.Issue = entity;
            issueHistory.ChangeDate = DateTime.UtcNow;

        }


        //Listing 6-9. Creating your own transaction scope

        TransactionScope transaction;

        partial void SaveChanges_Executing()
        {
            TransactionOptions transactionOptions = new TransactionOptions();
            transactionOptions.IsolationLevel = IsolationLevel.ReadCommitted;

            //Create an audit record as part of the transaction                                   
            this.transaction = new TransactionScope(
                TransactionScopeOption.Required, transactionOptions);

            StringBuilder auditDesc =
                new StringBuilder("Changes " + DateTime.Now.ToString() + " :");
            foreach (var changedEntity in
                this.DataWorkspace.ApplicationData.Details.GetChanges())
            {
                auditDesc.AppendLine(changedEntity.Details.Entity.ToString());
            }

            using (var dataworkspace2 = this.Application.CreateDataWorkspace())
            {
                AuditDetail auditRecord =
                    dataworkspace2.AuditDataSource.AuditDetails.AddNew();
                auditRecord.AuditDesc = auditDesc.ToString();
                dataworkspace2.AuditDataSource.SaveChanges();
            }
        }

        partial void SaveChanges_Executed()
        {
            //Commit the transaction                                                              
            this.transaction.Complete();
            this.transaction.Dispose();
        }

        partial void SaveChanges_ExecuteFailed(System.Exception exception)
        {
            //Rollback the transaction on an error                                                
            this.transaction.Dispose();
        }


    }
}