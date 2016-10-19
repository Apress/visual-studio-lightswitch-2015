//You can use and redistribute the code from this book (and sample application) for non-commercial and 
//most commercial purposes as long as you acknowledge the source and authorship. 
//You should note the source of the code in any documentation as well as in the program code itself (as a comment). 
//The acknowledgment should include author, title, publisher, and ISBN. 
//An example of such an acknowledgment would be "Derived from Listing 2-10, LightSwitch 2015 by Tim Leung, published by Apress, ISBN 978-1-4842-0767-3".

using Microsoft.LightSwitch.Presentation.Extensions;
using Microsoft.LightSwitch.Presentation;
using Microsoft.LightSwitch.Framework.Client;
using Microsoft.LightSwitch;
using System.Collections.Generic;
using System.IO.IsolatedStorage;
using System.IO;
using System.Linq;
using System;
using System.Windows.Browser;
using System.Runtime.InteropServices.Automation;
using System.Windows.Controls;
using System.Windows.Data;

namespace LightSwitchApplication
{
    public partial class EngineersManagerGrid
    {
        partial void OpenEngineerIssueReport_Execute()
        {
            // Listing 16-6. Opening web pages in a new browser window
            string urlPath = string.Format(
                @"http://localhost:35178/Reports/IssuesByEngineer.aspx?EngineerId={0}",
            Engineers.SelectedItem.Id);

            if (AutomationFactory.IsAvailable)
            {
                var shell = AutomationFactory.CreateObject("Shell.Application");
                shell.ShellExecute(urlPath, "", "", "open", 1);
            }
            else
            {
                HtmlPage.Window.Invoke(urlPath);
            }

        }

        partial void EngineersManagerGrid_Created()
        {
            // Listing 16-7. Displaying a web page with the web browser control 

            var control0 = this.FindControl("ReportProperty");
            control0.ControlAvailable += (sender, e) =>
               ((WebBrowser)e.Control).Navigate(
            new Uri(@"http://localhost:35178/Reports/ReportPage.aspx"));


            //Listing 16-8. Showing a web page on a LightSwitch List and Details screen 

            IdToReportUrlConverter converter = new IdToReportUrlConverter();

            var control = this.FindControl("Engineers_SelectedItem_Id");

            control.SetBinding(ApressControlsCS.WebBrowser.URIProperty,
               "Value", converter, BindingMode.OneWay);




        }
    }



    public class IdToReportUrlConverter : IValueConverter
    {
        public object Convert(object value, Type targetType,
           object parameter, System.Globalization.CultureInfo culture)
        {
            if (value != null)
            {
                return new Uri(
           @"http://localhost:35178//Reports/IssuesByEngineer.aspx?EngineerId=" +
                    value.ToString());
            }
            else
            {
                return new Uri(@"about:blank");
            }
        }

        public object ConvertBack(object value, Type targetType,
           object parameter, System.Globalization.CultureInfo culture)
        {
            return new NotImplementedException();
        }
    }


}