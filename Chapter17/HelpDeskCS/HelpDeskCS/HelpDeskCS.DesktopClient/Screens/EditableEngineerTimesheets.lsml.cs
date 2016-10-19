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
using Microsoft.LightSwitch.Threading;
using System.Windows.Controls;

namespace LightSwitchApplication
{
    public partial class EditableEngineerTimesheets
    {
        //Listing 17-3. .NET code that creates the document 
        partial void DownloadTimesheet_Execute()
        {
            // Create a document in a new workspace
            DataWorkspace workspace = new DataWorkspace();
            TimesheetReport rpt =
                workspace.ApplicationData.TimesheetReports.AddNew();
            rpt.EngineerId = this.Engineers.SelectedItem.Id;
            workspace.ApplicationData.SaveChanges();

            // Show the save dialog box                         
            Dispatchers.Main.Invoke(() =>
            {
                System.IO.MemoryStream ms =
            new System.IO.MemoryStream(rpt.ReportData);
                Dispatchers.Main.Invoke(() =>
        {
                            SaveFileDialog saveDialog = new SaveFileDialog();
                            saveDialog.DefaultFileName = "Timesheet.docx";
                            if (saveDialog.ShowDialog() == true)
                            {
                                using (Stream fileStream = saveDialog.OpenFile())
                                {
                                    ms.WriteTo(fileStream);
                                }
                            }
                        });
            });


        }
    }
}