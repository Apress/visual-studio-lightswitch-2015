// You can use and redistribute the code from this book (and sample application) for non-commercial and 
// most commercial purposes as long as you acknowledge the source and authorship. 
// You should note the source of the code in any documentation as well as in the program code itself (as a comment). 
// The acknowledgment should include author, title, publisher, and ISBN. 
// An example of such an acknowledgment would be "Derived from Listing 2-10, LightSwitch 2015 by Tim Leung, published by Apress, ISBN 978-1-4842-0767-3".

using Microsoft.LightSwitch.Presentation.Extensions;
using Microsoft.LightSwitch.Presentation;
using Microsoft.LightSwitch.Framework.Client;
using Microsoft.LightSwitch;
using System.Collections.Generic;
using System.IO.IsolatedStorage;
using System.IO;
using System.Linq;
using System;

namespace LightSwitchApplication
{
    public partial class Setup
    {
        partial void SetupData_Execute()
        {

            ////Listing 6 - 1.Code to add new records
            //var statusOpen =
            //   this.DataWorkspace.ApplicationData.IssueStatusSet.AddNew();
            //statusOpen.StatusDescription = "Open";

            //var statusClosed =
            //    this.DataWorkspace.ApplicationData.IssueStatusSet.AddNew();
            //statusClosed.StatusDescription = "Closed";

            //this.DataWorkspace.ApplicationData.SaveChanges();

            //Bonus code for setting up other records
            AddPriorityIfNotExists("Low");
            AddPriorityIfNotExists("Medium");
            AddPriorityIfNotExists("High");
            AddStatusIfNotExists("Raised");
            AddStatusIfNotExists("In Progress");
            AddStatusIfNotExists("Cancelled");
            AddStatusIfNotExists("Closed");
            AddDeptIfNotExists("Head Office");
        }


        //Bonus code for setting up data    
        private void AddPriorityIfNotExists(string PriorityDesc)
        {
            if (this.DataWorkspace.ApplicationData.Priorities.Where(item => item.PriorityDesc == PriorityDesc).FirstOrDefault() == null)
            {
                var newPriority = DataWorkspace.ApplicationData.Priorities.AddNew();
                newPriority.PriorityDesc = PriorityDesc;
            }
        }

        private void AddStatusIfNotExists(string StatusDesc)
        {
            if (this.DataWorkspace.ApplicationData.IssueStatusSet.Where(item => item.StatusDescription == StatusDesc).FirstOrDefault() == null)
            {
                var newStatus = DataWorkspace.ApplicationData.IssueStatusSet.AddNew();
                newStatus.StatusDescription = StatusDesc;
            }
        }

        private void AddDeptIfNotExists(string DeptDesc)
        {
            if (this.DataWorkspace.ApplicationData.Departments.Where(item => item.DepartmentName == DeptDesc).FirstOrDefault() == null)
            {
                var newDept = DataWorkspace.ApplicationData.Departments.AddNew();
                newDept.DepartmentName = DeptDesc;
            }
        }

        //Listing 6-2. Updating records with code
        partial void CloseAllIssues_Execute()
        {
            // Write your code here.
            foreach (Issue issue in IssuesForLastYear)
            {
                issue.IssueStatus = IssueStatusClosed;
            }
            //this.DataWorkspace.ApplicationData.SaveChanges();

        }


        //Listing 6-3. Code to delete records
        partial void DeleteAllIssues_Execute()
        {

            foreach (Issue issue in IssuesForLastYear)
            {
                issue.Delete();
            }
            //this.DataWorkspace.ApplicationData.SaveChanges();

        }
    }
}