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
using System.Reflection;

namespace LightSwitchApplication
{
    //'Listing 17 - 6.Mail merge code 
    public partial class BuildLetter
    {
        dynamic wordApp;
        dynamic wordDoc;
        object missingValue = System.Reflection.Missing.Value;

        // Here are the values of the WdMailMergeDestination Enum 
        const int wdSendToNewDocument = 0;
        const int wdSendToPrinter = 1;
        const int wdSendToEmail = 2;
        const int wdSendToFax = 3;

        const int wdStory = 6;
        const int wdMove = 0;

        partial void CreateMailMerge_Execute()
        {
            dynamic wordMailMerge;
            dynamic wordMergeFields;
            dynamic wordSelection;
            dynamic wordRange;

            // Create an instance of Word  and make it visible 
            wordApp = AutomationFactory.CreateObject("Word.Application");
            wordApp.Visible = true;

            //// Open the template file 
            //wordDoc =
            //    wordApp.Documents.Open(
            //      @"\\Fileserver\Docs\MailMergeTemplate.dotx");              


            var resourceInfo = System.Windows.Application.GetResourceStream(  new Uri("Resources/MailMergeTemplate.dotx", UriKind.Relative));

            string path = Environment.GetFolderPath(
              Environment.SpecialFolder.MyDocuments) + "MailMergeTemplate.dotx";

            //Write the stream to the file
            System.IO.Stream stream = resourceInfo.Stream;
            byte[] buffer = new byte[stream.Length];
            stream.Read(buffer, 0, int.Parse(stream.Length.ToString()));
            File.WriteAllBytes(path, buffer);

            wordDoc = wordApp.Documents.Open(path);

            wordDoc.Select();

            wordMailMerge = wordDoc.MailMerge;

            // Create a MailMerge Data file 
            CreateMailMergeDataFile();

            wordMergeFields = wordMailMerge.Fields;
            wordMailMerge.Destination = wdSendToNewDocument;


            // Move to the end of the document and append text
            wordSelection = wordApp.Selection;
            wordSelection.EndKey(wdStory, wdMove);
            wordSelection.TypeText("Our Ref: ");
            wordRange = wordSelection.Range;
            wordMergeFields.Add(wordRange, "DepartmentManager");
            wordSelection.TypeText("-" + DateTime.Now.ToShortDateString());


            //Carry out the actual mail merge.
            wordMailMerge.Execute(false);

            // Close the original form document                                                                   
            wordDoc.Saved = true;
            wordDoc.Close(false, ref missingValue, ref missingValue);

            // Release references 
            wordMailMerge = null;
            wordMergeFields = null;
            wordDoc = null;
            wordApp = null;
        }

        private void CreateMailMergeDataFile()
        {
            dynamic wordDataDoc;

            var fileName = Environment.GetFolderPath(
                          Environment.SpecialFolder.MyDocuments) + "DataDoc.doc";

            var header = "DepartmentName, DepartmentManager, Address1";

            wordDoc.MailMerge.CreateDataSource(ref fileName,
               ref missingValue,
                 ref missingValue, ref header);

            // Open the data document to insert data 
            wordDataDoc = wordApp.Documents.Open(ref fileName);

            // Loop through the department screen collection 
            // Start at rowCount 2 because row 1 contains the column headers 
            int rowCount = 2;
            foreach (Department d in Departments)
            {
                FillRow(
                  wordDataDoc, rowCount,
                  d.DepartmentName, d.DepartmentManager, d.Address1);
                rowCount++;
            }

            // Save and close the file 
            wordDataDoc.Save();
            wordDataDoc.Close(false, ref missingValue, ref missingValue);
        }

        private void FillRow(dynamic wordDoc, int Row,
           string Text1, string Text2, string Text3)

        {
            if (Row > wordDoc.Tables[1].Rows.Count)
            {
                wordDoc.Tables[1].Rows.Add();
            }

            // Insert the data into the table 
            wordDoc.Tables[1].Cell(Row, 1).Range.InsertAfter(Text1);
            wordDoc.Tables[1].Cell(Row, 2).Range.InsertAfter(Text2);
            wordDoc.Tables[1].Cell(Row, 3).Range.InsertAfter(Text3);
        }

        partial void CreateMailMerge_CanExecute(ref bool result)
        {
            result = AutomationFactory.IsAvailable;
        }

    }
}
