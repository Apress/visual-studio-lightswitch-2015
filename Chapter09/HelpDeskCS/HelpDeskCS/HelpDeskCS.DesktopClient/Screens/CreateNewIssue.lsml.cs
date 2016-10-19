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
    public partial class CreateNewIssue
    {
        partial void CreateNewIssue_InitializeDataWorkspace(global::System.Collections.Generic.List<global::Microsoft.LightSwitch.IDataService> saveChangesTo)
        {
            this.IssueProperty = new Issue();


            //Listing 9 - 3.Setting default control values
            this.IssueProperty = new Issue();
            this.IssueProperty.TargetEndDateTime = DateTime.Now.AddDays(3);
            this.IssueProperty.Priority = PriorityMedium;


            //Listing 9 - 10.Setting the focus to a control 
            this.FindControl("ProblemDescription").Focus();


            if (EngineerIDParam.HasValue)
            {

                //Listing 9 - 7.Using screen parameter values in code
                this.IssueProperty.Engineer =
                 this.DataWorkspace.ApplicationData.Engineers_SingleOrDefault(
                   EngineerIDParam.Value);

            }

        }

        partial void CreateNewIssue_Saved()
        {
            //this.Close(false);
            //Application.Current.ShowDefaultScreen(this.IssueProperty);


            //Listing 9 - 18.Reset the New Data Screen after a save
            this.IssueProperty = new Issue();

        }
    }
}