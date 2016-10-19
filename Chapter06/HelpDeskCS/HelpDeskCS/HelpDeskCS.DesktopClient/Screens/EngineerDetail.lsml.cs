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
    public partial class EngineerDetail
    {
        partial void Engineer_Loaded(bool succeeded)
        {
            // Write your code here.
            this.SetDisplayNameFromEntity(this.Engineer);
        }

        partial void Engineer_Changed()
        {
            // Write your code here.
            this.SetDisplayNameFromEntity(this.Engineer);
        }

        partial void EngineerDetail_Saved()
        {
            // Write your code here.
            this.SetDisplayNameFromEntity(this.Engineer);
        }


        //Listing 6-4. Code to get data
        partial void EngineerDetail_InitializeDataWorkspace(List<IDataService> saveChangesTo)
        {
            DateTime today = DateTime.Now;

            //var currentIssues = from issue in Engineer.Issues
            //                    where issue.CreateDateTime > new DateTime(today.Year, today.Month, 1)
            //                    select issue;                                                                                                            


            var currentIssues = from issue in Engineer.Issues
                                select issue;

            IssueCountLabel = currentIssues.Count().ToString();


            ////Listing 6-5. Code to execute queries remotely
            //DateTime today = DateTime.Now;

            //var currentIssues = from issue in Engineer.IssuesQuery                                                    
            //where issue.CreateDateTime > new DateTime(today.Year, today.Month, 1)
            //select issue;

            //IssueCountLabel = currentIssues.Execute().Count().ToString();                                                      


        }
    }
}