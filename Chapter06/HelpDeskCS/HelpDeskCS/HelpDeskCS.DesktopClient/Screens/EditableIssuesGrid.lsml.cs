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
using System.Text;

namespace LightSwitchApplication
{
    public partial class EditableIssuesGrid
    {

        //Listing 6-8. Discarding screen changes on desktop clients
        partial void EditableIssuesGrid_Saving(ref bool handled)
        {
            StringBuilder message = new StringBuilder();

            foreach (Issue issue in
                    DataWorkspace.ApplicationData.Details.GetChanges().OfType<Issue>())
            {
                message.AppendLine(issue.Id.ToString() + " - " + issue.Subject);

                // You can discard just a single record using this syntax                     
                // issue.Details.DiscardChanges();

                message.AppendLine(issue.Id.ToString());
            }

            if (message.Length > 0)
            {
                if (this.ShowMessageBox("You've made changes to the following records:" +
                        Environment.NewLine +
                        message.ToString() + Environment.NewLine +
                        "Are you sure you wish to save your changes?" +
                        "Click OK to continue, or Cancel to discard your changes",
                        "Confirm Save",
                        MessageBoxOption.OkCancel) == System.Windows.MessageBoxResult.Cancel)
                {
                    DataWorkspace.ApplicationData.Details.DiscardChanges();
                    handled = true;
                }
            }


        }
    }
}