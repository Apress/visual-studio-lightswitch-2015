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
using System.Runtime.InteropServices.Automation;
using PdfSharp;
using PdfSharp.Drawing;
using PdfSharp.Pdf;

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

        //Listing 17-4. Microsoft Excel automation code 
        partial void ExportToExcel_Execute()
        {

            if (AutomationFactory.IsAvailable)                                           
    {
                try
                {
                    using (dynamic excelApp =
                        AutomationFactory.CreateObject("Excel.Application"))             
            {
                        var excelWorkbook = excelApp.Workbooks.Add();                    
                var excelWorksheet = excelWorkbook.ActiveSheet;                                                   

                        // Set the title text, set the style to bold and font size 16
                        excelWorksheet.Cells(1, 1).Value = this.Issue.Subject;
                        excelWorksheet.Cells(1, 1).Font.Bold = true;
                        excelWorksheet.Cells(1, 1).Font.Size = 16;

                        // Set the issue header details.
                        excelWorksheet.Cells(1, 3).Value = "Issue Date:";
                        excelWorksheet.Cells(1, 4).Value =
                           this.Issue.CreateDateTime.ToShortDateString();
                        excelWorksheet.Cells(2, 3).Value = "Assigned Engineer:";
                        excelWorksheet.Cells(2, 4).Value = this.Issue.Engineer.Fullname;

                        // Set the response header.
                        excelWorksheet.Cells(1, 6).Value = "Response Date:";
                        excelWorksheet.Cells(2, 6).Value = "Response Text:";

                        // Start showing the responses from row 7
                        int currentRow = 7;
                        foreach (IssueResponse response in this.Issue.IssueResponses)     
                {
                            excelWorksheet.Cells(1, currentRow).Value =
                                response.ResponseDateTime.ToString();
                            excelWorksheet.Cells(2, currentRow).Value =
                                response.ResponseText;
                            currentRow++;
                        }

                        excelApp.Visible = true;                                                  
            }
                }

                catch (Exception ex)
                {
                    throw new InvalidOperationException(
                        "Failed to create spreadsheet.", ex);
                }
            }

        }

        partial void ExportToPDF_Execute()
        {
            // Listing 17-8. Building PDF documents with the silverPDF library

            Microsoft.LightSwitch.Threading.Dispatchers.Main.BeginInvoke(() =>
            {
                PdfDocument document = new PdfDocument();                                    

        document.Info.Title = "Issue";

                // Create an empty page 
                PdfPage page = document.AddPage();                                           

        // Create a set of fonts                                                             
        XFont fontHeader1 = new XFont("Verdana", 18, XFontStyle.Bold);
                XFont fontHeader2 = new XFont("Verdana", 14, XFontStyle.Bold);
                XFont fontNormal = new XFont("Verdana", 12, XFontStyle.Regular);

                // Get an XGraphics object for drawing 
                XGraphics gfx = XGraphics.FromPdfPage(page);                                 

        // Create the report text 
        gfx.DrawString("HelpDesk - Issue Detail ", fontHeader1,                              
        XBrushes.Black, new XRect(10, 10, 200, 18), XStringFormats.TopCenter);
                                                                                                                            
                gfx.DrawString("Issue Id: " + Issue.Id.ToString(), fontNormal,
                    XBrushes.Black, new XRect(10, 30, 200, 18), XStringFormats.TopLeft);

                gfx.DrawString(Issue.Subject, fontHeader2,
                XBrushes.Black, new XRect(10, 50, 200, 18), XStringFormats.TopLeft);

                //.... create other Elements here 

                // Save the document here 
                string myDocuments =
                   Environment.GetFolderPath(Environment.SpecialFolder.MyDocuments);
                document.Save(myDocuments + "\\IssueReport.pdf");

                // optionally 'shell' the native PDF application to view the file
                var shell = AutomationFactory.CreateObject("Shell.Application");
                shell.ShellExecute(myDocuments + "\\IssueReport.pdf", "", "", "open", 1);

            });

        }
    }
}