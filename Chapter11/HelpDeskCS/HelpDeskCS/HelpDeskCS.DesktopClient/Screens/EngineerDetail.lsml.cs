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


        //Listing 11-15. Assigning and deassigning subordinates
        partial void AssignSubordinate_Execute()
        {
            Engineer.Subordinates.Add(EngineerToAdd);
            this.Save();
            Subordinates.Refresh();
        }

        partial void DeassignSubordinate_Execute()
        {
            Engineer.Subordinates.Remove(Subordinates.SelectedItem);
            this.Save();
            Subordinates.Refresh();
        }

        partial void CountOfIssues_Execute()
        {
            // Write your code here.
            DateTime startOfYear = new DateTime(DateTime.Now.Year, 1, 1);

            //Query 1
            var issuesLastMonth =
                Engineer.Issues.Where(
                    issueItem => issueItem.CreateDateTime > startOfYear).Count();

            //'Query 2
            var issuesLastMonth2 =
                Engineer.IssuesQuery.Where(
                    issueItem => issueItem.CreateDateTime > startOfYear).
                        Execute().Count();


        }

        partial void MergeDuplicates_Execute()
        {
            // Write your code here.
            //Listing 11 - 21.Querying an EntityCollection

            var duplicates =
                from Timesheet timeEntry in this.Engineer.Timesheets
                group timeEntry by timeEntry.Issue into issueGroup
                where issueGroup.Count() > 1
                select issueGroup;

            foreach (var dup in duplicates)
            {
                var totalDuration =
                    dup.Sum(timeEntry => timeEntry.DurationMins);
                var firstEntry = dup.First();
                firstEntry.DurationMins = totalDuration;
                dup.Except(
                    new Timesheet[] { firstEntry }).ToList().ForEach(
                    timeEntry => timeEntry.Delete());
            }





        }
    }
}