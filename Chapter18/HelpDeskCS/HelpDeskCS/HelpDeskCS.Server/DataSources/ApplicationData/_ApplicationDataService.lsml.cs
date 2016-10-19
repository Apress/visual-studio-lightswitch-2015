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
        //Listing 18-2. Sending Email When a User Updates a Record
        partial void Issues_Updating(Issue entity)
        {
            //Check if the issue has changed to a closed status                         
            if (entity.Details.Properties.IssueStatus.OriginalValue != null &&
                entity.Details.Properties.IssueStatus.OriginalValue.StatusDescription
                    != "Closed" &&
                entity.IssueStatus != null &&
                entity.IssueStatus.StatusDescription == "Closed")
            {


                string notificationEmail = LightSwitchApplication.Properties.Settings.Default.NotificationEmail;

                string emailBody =
                            "The status of your Issue has changed. Issue ID " +
                                entity.Id.ToString();

                LightSwitchApplication.UserCode.SmtpMailHelper.SendMail(
                    notificationEmail, //sender email
                    notificationEmail, //recipient email
                    "(Email subject) - Issue update notification",
                    emailBody,
                    null,
                    null);
            }

        }
    }
}