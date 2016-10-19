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

using System.Web;
using System.Globalization;
using System.Threading;

namespace LightSwitchApplication
{
    public partial class ApplicationDataService
    {

        //Listing 12-2. Localizinga validation message in an HTML client application
        partial void SaveChanges_Executing()
        {

            string[] clientLanguages = HttpContext.Current.Request.UserLanguages;

            if (clientLanguages.Length > 0)
            {
                // clientLanguages[0]  returns language in the format "en-US"
                CultureInfo clientCulture = new System.Globalization.CultureInfo(
                        clientLanguages[0]);
                Thread.CurrentThread.CurrentCulture = clientCulture;
                Thread.CurrentThread.CurrentUICulture = clientCulture;
            }

        }
    }
}