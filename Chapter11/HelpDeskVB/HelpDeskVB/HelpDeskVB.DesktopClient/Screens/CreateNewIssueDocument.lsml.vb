'You can use and redistribute the code from this book (and sample application) for non-commercial and 
'most commercial purposes as long as you acknowledge the source and authorship. 
'You should note the source of the code in any documentation as well as in the program code itself (as a comment). 
'The acknowledgment should include author, title, publisher, and ISBN. 
'An example of such an acknowledgment would be "Derived from Listing 2-10, LightSwitch 2015 by Tim Leung, published by Apress, ISBN 978-1-4842-0767-3".

Imports System.Windows.Controls
Imports Microsoft.LightSwitch.Threading

Namespace LightSwitchApplication

    Public Class CreateNewIssueDocument

        Private Sub CreateNewIssueDocument_InitializeDataWorkspace(ByVal saveChangesTo As Global.System.Collections.Generic.List(Of Global.Microsoft.LightSwitch.IDataService))
            ' Write your code here.
            Me.IssueDocumentProperty = New IssueDocument()
        End Sub

        Private Sub CreateNewIssueDocument_Saved()
            ' Write your code here.
            Me.Close(False)
            Application.Current.ShowDefaultScreen(Me.IssueDocumentProperty)
        End Sub


        'Listing 11-7. Uploading a file in desktop clients

        Private Sub UploadFileToDatabase_Execute()

            'Invoke the method on the main UI thread                             
            Dispatchers.Main.Invoke(Sub()

                                        Dim openDialog As New Controls.OpenFileDialog
                                        openDialog.Filter = "All files|*.*"
                                        'Use this syntax to only allow Word/Excel files
                                        'openDialog.Filter = "Word Files|*.doc|Excel Files |*.xls" 

                                        If openDialog.ShowDialog = True Then
                                            Using fileData As System.IO.FileStream = openDialog.File.OpenRead

                                                Dim fileLen As Long = fileData.Length

                                                If (fileLen > 0) Then
                                                    Dim fileBArray(fileLen - 1) As Byte
                                                    fileData.Read(fileBArray, 0, fileLen)
                                                    fileData.Close()



                                                    Me.IssueDocumentProperty.IssueFile = fileBArray
                                                    Me.IssueDocumentProperty.FileExtension = openDialog.File.Extension.ToString()
                                                    Me.IssueDocumentProperty.DocumentName = openDialog.File.Name

                                                End If

                                            End Using
                                        End If

                                    End Sub)

        End Sub


    End Class



End Namespace