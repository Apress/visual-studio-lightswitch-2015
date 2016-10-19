'You can use and redistribute the code from this book (and sample application) for non-commercial and 
'most commercial purposes as long as you acknowledge the source and authorship. 
'You should note the source of the code in any documentation as well as in the program code itself (as a comment). 
'The acknowledgment should include author, title, publisher, and ISBN. 
'An example of such an acknowledgment would be "Derived from Listing 2-10, LightSwitch 2015 by Tim Leung, published by Apress, ISBN 978-1-4842-0767-3".

Imports System.Runtime.InteropServices.Automation
Imports PdfSharp
Imports PdfSharp.Drawing
Imports PdfSharp.Pdf

Namespace LightSwitchApplication

    Public Class IssueDetail

        Private Sub Issue_Loaded(succeeded As Boolean)
            ' Write your code here.
            Me.SetDisplayNameFromEntity(Me.Issue)
        End Sub

        Private Sub Issue_Changed()
            ' Write your code here.
            Me.SetDisplayNameFromEntity(Me.Issue)
        End Sub

        Private Sub IssueDetail_Saved()
            ' Write your code here.
            Me.SetDisplayNameFromEntity(Me.Issue)
        End Sub

        'Listing 17-4. Microsoft Excel automation code 
        Private Sub ExportToExcel_Execute()
            If AutomationFactory.IsAvailable Then
                Try

                    Using excelApp =
                   AutomationFactory.CreateObject("Excel.Application")

                        Dim excelWorkbook = excelApp.Workbooks.Add
                        Dim excelWorksheet = excelWorkbook.ActiveSheet

                        ' Set the title text, set the style to bold and font size 16
                        excelWorksheet.Cells(1, 1).Value = Me.Issue.Subject
                        excelWorksheet.Cells(1, 1).Font.Bold = True
                        excelWorksheet.Cells(1, 1).Font.Size = 16

                        ' Set the issue header details.
                        excelWorksheet.Cells(1, 3).Value = "Issue Date:"
                        excelWorksheet.Cells(1, 4).Value =
                                Me.Issue.CreateDateTime.ToShortDateString
                        excelWorksheet.Cells(2, 3).Value = "Assigned Engineer:"
                        excelWorksheet.Cells(2, 4).Value = Me.Issue.AssignedEngineer.Fullname

                        ' Set the response header.
                        excelWorksheet.Cells(1, 6).Value = "Response Date:"
                        excelWorksheet.Cells(2, 6).Value = "Response Text:"

                        ' Start showing the responses from row 7
                        Dim currentRow As Integer = 7
                        For Each response In Me.Issue.IssueResponses
                            excelWorksheet.Cells(1, currentRow).Value =
                        response.ResponseDateTime.ToString
                            excelWorksheet.Cells(2, currentRow).Value =
                        response.ResponseText
                            currentRow += 1
                        Next

                        excelApp.Visible = True
                    End Using

                Catch ex As Exception
                    Throw New InvalidOperationException(
                 "Failed to create spreadsheet.", ex)
                End Try
            End If


        End Sub

        Private Sub ExportToPDF_Execute()
            ' Listing 17-8. Building PDF documents with the silverPDF library

            Microsoft.LightSwitch.Threading.Dispatchers.Main.BeginInvoke(
        Sub()
            Dim document As New PdfDocument()
            document.Info.Title = "Issue"

            ' Create an empty page
            Dim page As PdfPage = document.AddPage()

            ' Create a set of  fonts                                                        
            Dim fontHeader1 As New XFont("Verdana", 18, XFontStyle.Bold)
            Dim fontHeader2 As New XFont("Verdana", 14, XFontStyle.Bold)
            Dim fontNormal As New XFont("Verdana", 12, XFontStyle.Regular)

            ' Get an XGraphics object for drawing
            Dim gfx As XGraphics = XGraphics.FromPdfPage(page)

            ' Create the report text
            gfx.DrawString("HelpDesk - Issue Detail", fontHeader1,
              XBrushes.Black, New XRect(10, 10, 200, 18),
                XStringFormats.TopLeft)

            gfx.DrawString("Issue Id:" & Issue.Id.ToString(), fontNormal,
                XBrushes.Black, New XRect(10, 30, 200, 18),
                  XStringFormats.TopLeft)

            gfx.DrawString(Issue.Subject, fontHeader2,
                XBrushes.Black, New XRect(10, 50, 200, 18),
                  XStringFormats.TopLeft)

            '.... create other Elements here

            ' Save the document here
            Dim myDocuments As String = Environment.GetFolderPath(
                Environment.SpecialFolder.MyDocuments)

            document.Save(myDocuments & "\IssueReport.pdf")

            'optionally 'shell' the native PDF application to view the file
            Dim shell = AutomationFactory.CreateObject("Shell.Application")
            shell.ShellExecute(
               myDocuments & "\IssueReport.pdf", "", "", "open", 1)

        End Sub
        )

        End Sub
    End Class

End Namespace