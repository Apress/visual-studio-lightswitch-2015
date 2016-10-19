'You can use and redistribute the code from this book (and sample application) for non-commercial and 
'most commercial purposes as long as you acknowledge the source and authorship. 
'You should note the source of the code in any documentation as well as in the program code itself (as a comment). 
'The acknowledgment should include author, title, publisher, and ISBN. 
'An example of such an acknowledgment would be "Derived from Listing 2-10, LightSwitch 2015 by Tim Leung, published by Apress, ISBN 978-1-4842-0767-3".

Imports DocumentFormat.OpenXml.Packaging
Imports System.IO
Imports DocumentFormat.OpenXml.Wordprocessing
Imports System.Web

Namespace LightSwitchApplication
    Public Class ApplicationDataService

        'Listing 17-1. Code to generate a Word document with the OpenXML SDK 
        Private Sub TimesheetReports_Inserting(entity As TimesheetReport)
            Dim wordDocument As String

            'Retrieve the Engineer
            Dim workspace = New DataWorkspace
            Dim timesheetEngineer =
         workspace.ApplicationData.Engineers_SingleOrDefault(
           entity.EngineerId)

            If Not timesheetEngineer Is Nothing Then

                Dim startOfMonth As Date
                startOfMonth = New DateTime(Now.Year, Now.Month, 1)

                'Retrieve timesheet records for engineer for current month
                Dim timesheetRecords =
            workspace.ApplicationData.Timesheets.Where(
                Function(tsRec) tsRec.Engineer.Id = entity.EngineerId And
                tsRec.EntryDate > startOfMonth)

                wordDocument =
                    HttpContext.Current.Server.MapPath(
                    "~\bin\HelpDeskVB.Server\Reports\TimesheetTemplate.docx")

                Dim byteArray As Byte() = File.ReadAllBytes(wordDocument)
                Using mem As MemoryStream = New MemoryStream
                    mem.Write(byteArray, 0, CInt(byteArray.Length))
                    Using wordDoc As WordprocessingDocument = WordprocessingDocument.Open(mem, True)

                        'Insert the bookmark values
                        InsertBookmarkValue(wordDoc.MainDocumentPart,
                   "EngineerSurname", timesheetEngineer.Surname)

                        InsertBookmarkValue(wordDoc.MainDocumentPart,
                   "EngineerFirstname", timesheetEngineer.Firstname)

                        Dim docTableProperties As IEnumerable(Of TableProperties)
                        docTableProperties =
                  wordDoc.MainDocumentPart.Document.Descendants(
                     Of TableProperties).Where(
                            Function(prop) Not prop.TableCaption Is Nothing AndAlso
                                prop.TableCaption.Val.Value = "TimesheetEntries")

                        'Find a reference to the table
                        Dim tableTimesheet As Table = docTableProperties.First().Parent
                        Dim rowsTimeseet = tableTimesheet.Descendants(Of TableRow)()

                        'Loop through the timesheet records
                        For Each tsRec As Timesheet In timesheetRecords
                            Dim rowCopy =
                       tableTimesheet.Descendants(
                          Of TableRow).Skip(1).First.CloneNode(True)
                            Dim rowCells = rowCopy.Descendants(Of TableCell)()

                            rowCells.ElementAt(0).Append(
                       GetParagraph(tsRec.EntryDate.ToShortDateString()))
                            rowCells.ElementAt(1).Append(
                       GetParagraph(tsRec.Issue.Subject))
                            rowCells.ElementAt(2).Append(
                       GetParagraph(tsRec.DurationMins.ToString()))


                            tableTimesheet.InsertAfter(rowCopy.CloneNode(True),
                        tableTimesheet.Descendants(Of TableRow).Skip(1).First)
                        Next

                        wordDoc.MainDocumentPart.Document.Save()
                    End Using

                    'Save the Word document to the table
                    entity.ReportData = mem.ToArray

                End Using

            End If

        End Sub

        'Word Helper Methods

        Private Sub InsertBookmarkValue(ByRef mainPart As MainDocumentPart, ByVal bookmarkName As String, bookmarkValue As String)

            Dim docBookmarks = From bm In mainPart.Document.Descendants(Of BookmarkStart)()
                               Where bm.Name = bookmarkName
                               Select bm
            Dim docBookmark = docBookmarks.SingleOrDefault
            Dim docText = New Text(bookmarkValue)
            Dim docRun = New Run()
            docRun.Append(docText)
            docBookmark.Parent.Append(docRun)

        End Sub

        Private Function GetParagraph(text As String) As Paragraph
            Return New Paragraph(
              New Run(
                New Text(text)))
        End Function



    End Class
End Namespace
