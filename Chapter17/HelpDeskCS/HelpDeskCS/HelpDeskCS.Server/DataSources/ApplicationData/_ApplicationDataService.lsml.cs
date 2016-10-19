//You can use and redistribute the code from this book (and sample application) for non-commercial and 
//most commercial purposes as long as you acknowledge the source and authorship. 
//You should note the source of the code in any documentation as well as in the program code itself (as a comment). 
//The acknowledgment should include author, title, publisher, and ISBN. 
//An example of such an acknowledgment would be "Derived from Listing 2-10, LightSwitch 2015 by Tim Leung, published by Apress, ISBN 978-1-4842-0767-3".

using Microsoft.LightSwitch.Security.Server;
using Microsoft.LightSwitch;
using System.Text;
using System.Linq;
using System.Collections.Generic;
using System;
using System.Web;
using System.IO;
using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Wordprocessing;


namespace LightSwitchApplication
{
    //Listing 17-1. Code to generate a Word document with the OpenXML SDK 
    public partial class ApplicationDataService
    {
        partial void TimesheetReports_Inserting(TimesheetReport entity)
        {
            string wordDocument;

            //Retrieve the Engineer
            DataWorkspace workspace = new DataWorkspace();
            var timesheetEngineer =
        workspace.ApplicationData.Engineers_SingleOrDefault(
          entity.EngineerId);

            if (timesheetEngineer != null)
            {
                DateTime startOfMonth;
                startOfMonth = new DateTime(DateTime.Now.Year, DateTime.Now.Month, 1);

                //Retrieve timesheet records for engineer for current month
                var timesheetRecords =
          workspace.ApplicationData.Timesheets.Where(
              tsRec => tsRec.Engineer.Id == entity.EngineerId &&
                tsRec.EntryDate > startOfMonth);

                wordDocument =
            HttpContext.Current.Server.MapPath(
              @"~\bin\HelpDeskCS.Server\Reports\TimesheetTemplate.docx");

                Byte[] byteArray = File.ReadAllBytes(wordDocument);
                using (MemoryStream mem = new MemoryStream())
                {
                    mem.Write(byteArray, 0, (int)byteArray.Length);

                    using (WordprocessingDocument wordDoc =
                        WordprocessingDocument.Open(mem, true))
                    {

                        MainDocumentPart mainDocPart = wordDoc.MainDocumentPart;

                        //Insert the bookmark values
                        InsertBookmarkValue(ref mainDocPart,
                  "EngineerSurname", timesheetEngineer.Surname);

                        InsertBookmarkValue(ref mainDocPart, "EngineerFirstname",
                           timesheetEngineer.Firstname);

                        IEnumerable<TableProperties> docTableProperties =
                   mainDocPart.Document.Descendants<TableProperties>().Where(
                      prop => (prop.TableCaption != null) &&
                          prop.TableCaption.Val.Value == "TimesheetEntries");

                        //Find a reference to the table
                        Table tableTimesheet = (Table)docTableProperties.First().Parent;
                        IEnumerable<TableRow> rowsTimeseet =
                           tableTimesheet.Descendants<TableRow>();

                        //Loop through the timesheet records
                        foreach (Timesheet tsRec in timesheetRecords)
                        {
                            TableRow rowCopy =
                        (TableRow)tableTimesheet.Descendants<
                           TableRow>().Skip(1).First().CloneNode(true);

                            IEnumerable<TableCell> rowCells =
                                  rowCopy.Descendants<TableCell>();

                            rowCells.ElementAt(0).Append(
                               GetParagraph(tsRec.EntryDate.ToShortDateString()));
                            rowCells.ElementAt(1).Append(
                               GetParagraph(tsRec.Issue.Subject));
                            rowCells.ElementAt(2).Append(
                               GetParagraph(tsRec.DurationMins.ToString()));


                            tableTimesheet.InsertAfter(rowCopy.CloneNode(true),
                                tableTimesheet.Descendants<TableRow>().Skip(1).First());
                        }

                        mainDocPart.Document.Save();
                    }

                    //Save the Word document to the table
                    entity.ReportData = mem.ToArray();
                }
            }

        }

        private void InsertBookmarkValue(ref MainDocumentPart mainPart,
            String bookmarkName, String bookmarkValue)
        {
            var docBookmarks = mainPart.Document.Descendants<BookmarkStart>().Where(
                bm => bm.Name == bookmarkName);
            BookmarkStart docBookmark = docBookmarks.SingleOrDefault();
            Text docText = new Text(bookmarkValue);
            Run docRun = new Run();
            docRun.Append(docText);
            docBookmark.Parent.Append(docRun);
        }

        private Paragraph GetParagraph(String text)
        {
            return new Paragraph(
                new Run(
                    new Text(text)));
        }



    }
}
