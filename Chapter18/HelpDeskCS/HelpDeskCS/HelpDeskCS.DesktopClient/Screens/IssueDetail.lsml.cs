//You can use and redistribute the code from this book (and sample application) for non-commercial and 
//most commercial purposes as long as you acknowledge the source and authorship. 
//You should note the source of the code in any documentation as well as in the program code itself (as a comment). 
//The acknowledgment should include author, title, publisher, and ISBN. 
//An example of such an acknowledgment would be "Derived from Listing 2-10, LightSwitch 2015 by Tim Leung, published by Apress, ISBN 978-1-4842-0767-3".

using System.Runtime.InteropServices.Automation;
using Microsoft.LightSwitch.Presentation.Extensions;
using Microsoft.LightSwitch.Presentation;
using Microsoft.LightSwitch.Framework.Client;
using Microsoft.LightSwitch;
using System.Collections.Generic;
using System.IO.IsolatedStorage;
using System.IO;
using System.Linq;
using System;
using System.ServiceModel;

namespace LightSwitchApplication
{
    public partial class IssueDetail
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

        partial void IssueDetail_Saved()
        {
            // Write your code here.
            this.SetDisplayNameFromEntity(this.Issue);
        }

        //Listing 18-7. Screen Code to Send an E-mail via a Web Service Call
        partial void SendEmail_Execute()
        {
            Microsoft.LightSwitch.Threading.Dispatchers.Main.BeginInvoke(() =>
            {
                Uri serverUrl = System.Windows.Application.Current.Host.Source;

                this.Details.Dispatcher.BeginInvoke(() =>
                {
                    //serverUrl.AbsoluteUri returns a URL like this: 
                    //    http://localhost:49715/DesktopClient/Web/HelpDesk.Client.xap
                    string rootUrl =
                serverUrl.AbsoluteUri.Substring(
                    0, serverUrl.AbsoluteUri.IndexOf("/DesktopClient/Web/"));

                    var binding = new System.ServiceModel.BasicHttpBinding();

                    //example endPoint url:
                    //   http://localhost:49715/MailService.svc/MailService.svc
                    var endPoint =
                new EndpointAddress(rootUrl + "/MailService.svc/soap");

                    MailService.MailServiceClient proxy =
                new MailService.MailServiceClient(binding, endPoint);

                    proxy.SendMailRESTCompleted +=
                (object sender, MailService.SendMailRESTCompletedEventArgs e) =>
                {
                    this.Details.Dispatcher.BeginInvoke(() =>
                    {
                        this.ShowMessageBox(e.Result.ToString());
                    });
                };

                    proxy.SendMailRESTAsync(Recipient,
                 "(Email Subject) Issue Detail",
                         "(Email Body)" + Issue.ProblemDescription);

                });
            }
            );
        }


        //Listing 18-9. Screen Code to Create an Outlook Message 


        partial void SendWithOutlook_Execute()
        {
            LightSwitchApplication.UserCode.OutlookMailHelper.CreateEmail(       
        Recipient,
                "(Email Subject) Issue Detail",
                "(Email Body)" + Issue.ProblemDescription);
        }

        partial void SendWithOutlook_CanExecute(ref bool result)                    
{
    result = AutomationFactory.IsAvailable;
}

}
}