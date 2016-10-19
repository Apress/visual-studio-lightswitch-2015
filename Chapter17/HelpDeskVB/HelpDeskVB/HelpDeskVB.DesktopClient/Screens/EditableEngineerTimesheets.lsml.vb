'You can use and redistribute the code from this book (and sample application) for non-commercial and 
'most commercial purposes as long as you acknowledge the source and authorship. 
'You should note the source of the code in any documentation as well as in the program code itself (as a comment). 
'The acknowledgment should include author, title, publisher, and ISBN. 
'An example of such an acknowledgment would be "Derived from Listing 2-10, LightSwitch 2015 by Tim Leung, published by Apress, ISBN 978-1-4842-0767-3".

Imports Microsoft.LightSwitch.Threading

Namespace LightSwitchApplication
    Public Class EditableEngineerTimesheets


        'Listing 17-3. .NET code that creates the document 
        Private Sub DownloadTimesheet_Execute()


            ' Create a document in a New workspace
            Dim workspace As DataWorkspace = New DataWorkspace
            Dim rpt As TimesheetReport =
                        workspace.ApplicationData.TimesheetReports.AddNew()
            rpt.EngineerId = Me.Engineers.SelectedItem.Id
            workspace.ApplicationData.SaveChanges()

            ' Show the save dialog box                                                    
            Dispatchers.Main.Invoke(
                        Sub()
                            Dim ms As System.IO.MemoryStream =
                                New System.IO.MemoryStream(rpt.ReportData)

                            Dispatchers.Main.Invoke(
                                Sub()
                                    Dim saveDialog As New Controls.SaveFileDialog
                                    saveDialog.DefaultFileName = "Timesheet.docx"
                                    If saveDialog.ShowDialog = True Then
                                        Using fileStream As Stream = saveDialog.OpenFile
                                            ms.WriteTo(fileStream)
                                        End Using
                                    End If
                                End Sub)
                        End Sub)


        End Sub



    End Class
End Namespace
