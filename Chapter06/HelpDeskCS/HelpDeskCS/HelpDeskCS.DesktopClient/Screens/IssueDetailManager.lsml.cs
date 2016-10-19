using Microsoft.LightSwitch.Presentation.Extensions;
using Microsoft.LightSwitch.Presentation;
using Microsoft.LightSwitch.Framework.Client;
using Microsoft.LightSwitch;
using System.Collections.Generic;
using System.IO.IsolatedStorage;
using System.IO;
using System.Linq;
using System;
// You can use and redistribute the code from this book (and sample application) for non-commercial and 
// most commercial purposes as long as you acknowledge the source and authorship. 
// You should note the source of the code in any documentation as well as in the program code itself (as a comment). 
// The acknowledgment should include author, title, publisher, and ISBN. 
// An example of such an acknowledgment would be "Derived from Listing 2-10, LightSwitch 2015 by Tim Leung, published by Apress, ISBN 978-1-4842-0767-3".

namespace LightSwitchApplication
{
    public partial class IssueDetailManager
    {
        partial void Issue_Loaded(bool succeeded)
        {
            // Write your code here.
            this.SetDisplayNameFromEntity(this.Issue);
        }

        partial void Issue_Changed()
        {
            // Write your code here.
            this.SetDisplayNameFromEntity(this.Issue);
        }

        partial void IssueDetailManager_Saved()
        {
            // Write your code here.
            this.SetDisplayNameFromEntity(this.Issue);
        }


        //Listing 6-10. Resolving conflicts in code
        partial void IssueDetailManager_Saving(ref bool handled)
        {

            handled = true;

            try
            {
                DataWorkspace.ApplicationData.SaveChanges();
            }
            catch (ConcurrencyException ex)
            {
                foreach (var entityConflict in ex.EntitiesWithConflicts.OfType<Issue>())
                {

                    entityConflict.Details.EntityConflict.ResolveConflicts(
                         Microsoft.LightSwitch.Details.ConflictResolution.ClientWins);
                }

                try
                {
                    this.DataWorkspace.ApplicationData.SaveChanges();
                    this.ShowMessageBox(
                       "Your record was modified by another user. Your changes have been kept.");
                }
                catch (Exception ex2)
                {
                    this.ShowMessageBox(ex2.Message.ToString());
                }
            }

        }
    }
}