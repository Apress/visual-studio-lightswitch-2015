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
using System.Windows.Media;

namespace LightSwitchApplication
{
    public partial class EngineerDashboard
    {
        partial void Engineer_Loaded(bool succeeded)
        {



            //Listing 9-2. Setting the screen title in code
            this.DisplayName = "Engineer Dashboard";

        }

        partial void Engineer_Changed()
        {
            // Write your code here.
            this.SetDisplayNameFromEntity(this.Engineer);
        }

        partial void EngineerDashboard_Saved()
        {
            // Write your code here.
            this.SetDisplayNameFromEntity(this.Engineer);
        }

        partial void EngineerDashboard_InitializeDataWorkspace(List<IDataService> saveChangesTo)
        {
            // Write your code here.


            foreach (Issue issue in Top5OldestIssues)
            {
                IssuesOverdueLabel += issue.Subject + Environment.NewLine;
            }


            //Listing 9 - 13.Referencing a control using ControlAvailable

            var control = this.FindControl("IssuesOverdueLabel");

            control.ControlAvailable +=
            (object sender, ControlAvailableEventArgs e) =>
            {
                var issueLabel =
                    (System.Windows.Controls.TextBlock)e.Control;
                issueLabel.Foreground = new SolidColorBrush(Colors.Red);
            };

        }

        partial void OpenIssue_Execute()
        {


            //Listing 9-5. Opening screens from an unbound drop-down
            this.Application.ShowIssueDetail(IssueSelectionProperty.Id);


        }

        partial void RefreshAllScreens_Execute()
        {
            //Listing 9 - 6.Refreshing all open screens

            var screens = this.Application.ActiveScreens;
            foreach (var s in screens)
            {
                var screen = s.Screen;
                screen.Details.Dispatcher.BeginInvoke(() =>
                {
                    screen.Refresh();
                });
            }

        }

        partial void ArchiveIssues_Execute()
        {
            //Listing 9 - 9.Displaying a message box

            if (this.ShowMessageBox(
            "Are you sure you want delete all issues older than 12 months? (This is a demonstration of how to use a MessageBox)",
                "Confirm Delete", MessageBoxOption.YesNo) ==
                System.Windows.MessageBoxResult.Yes)
            {
                //DeleteOldIssues();
            }
        }

        partial void OpenNewIssueScreen_Execute()
        {

            //Listing 9-20. Opening the combination Add/Edit screen to add a New record
            this.Application.ShowAddEditIssue(null);

        }

        partial void CreateNewIssue_Execute()
        {
            // Write your code here.
            this.Application.ShowCreateNewIssue(this.Engineer.Id);
        }
    }
}
