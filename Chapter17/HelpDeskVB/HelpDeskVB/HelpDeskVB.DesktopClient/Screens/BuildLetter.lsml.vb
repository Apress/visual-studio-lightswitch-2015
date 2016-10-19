'You can use and redistribute the code from this book (and sample application) for non-commercial and 
'most commercial purposes as long as you acknowledge the source and authorship. 
'You should note the source of the code in any documentation as well as in the program code itself (as a comment). 
'The acknowledgment should include author, title, publisher, and ISBN. 
'An example of such an acknowledgment would be "Derived from Listing 2-10, LightSwitch 2015 by Tim Leung, published by Apress, ISBN 978-1-4842-0767-3".

Imports System.Runtime.InteropServices.Automation
Imports System.Reflection

Namespace LightSwitchApplication
    Public Class BuildLetter

        'Listing 17 - 6.Mail merge code 

        ' Declare Global Variables 
        Private wordApp As Object
        Private wordDoc As Object
        Private missingValue As Object = System.Reflection.Missing.Value

        ' Here are the values of the WdMailMergeDestination Enum 
        Const wdSendToNewDocument As Integer = 0
        Const wdSendToPrinter As Integer = 1
        Const wdSendToEmail As Integer = 2
        Const wdSendToFax As Integer = 3

        Const wdStory As Integer = 6
        Const wdMove As Integer = 0

        Private Sub CreateMailMerge_Execute()

            Dim wordMailMerge As Object
            Dim wordMergeFields As Object
            Dim wordSelection As Object
            Dim wordRange As Object

            ' Create an instance of Word and make it visible. 
            wordApp = AutomationFactory.CreateObject("Word.Application")
            wordApp.Visible = True

            '' Open the template file 
            'wordDoc = wordApp.Documents.Open(
            '"\\Fileserver\Docs\MailMergeTemplate.dotx")

            Dim resourceInfo = System.Windows.Application.GetResourceStream(New Uri("Resources/MailMergeTemplate.dotx", UriKind.Relative))

            Dim path = Environment.GetFolderPath(Environment.SpecialFolder.MyDocuments) + "MailMergeTemplate.dotx"

            'Write the stream to the file
            Dim stream As System.IO.Stream = resourceInfo.Stream

            Dim buffer(0 To stream.Length - 1) As Byte
            stream.Read(buffer, 0, stream.Length)

            File.WriteAllBytes(path, buffer)
            wordDoc = wordApp.Documents.Open(path)

            wordDoc.Select()

            wordMailMerge = wordDoc.MailMerge

            ' Create a MailMerge Data file 
            CreateMailMergeDataFile()

            wordMergeFields = wordMailMerge.Fields
            wordMailMerge.Destination = wdSendToNewDocument

            ' Move to the end of the document and append text
            wordSelection = wordApp.Selection
            wordSelection.EndKey(wdStory, wdMove)
            wordSelection.TypeText("Our Ref: ")
            wordRange = wordSelection.Range
            wordMergeFields.Add(wordRange, "DepartmentManager")
            wordSelection.TypeText("-" & DateTime.Now.ToShortDateString)

            ' Carry out the actual mail merge
            wordMailMerge.Execute(False)

            ' Close the original form document
            wordDoc.Saved = True
            wordDoc.Close(False, missingValue, missingValue)

            ' Release References
            wordMailMerge = Nothing
            wordMergeFields = Nothing
            wordDoc = Nothing
            wordApp = Nothing

        End Sub

        Private Sub CreateMailMergeDataFile()

            Dim wordDataDoc As Object

            'Specify a Location with write access 
            Dim fileName As Object = Environment.GetFolderPath(
                          Environment.SpecialFolder.MyDocuments) + "DataDoc.doc"

            Dim header As Object =
               "DepartmentName, DepartmentManager, Address1"

            wordDoc.MailMerge.CreateDataSource(
              fileName, missingValue, missingValue, header)

            ' Open the data document to insert data 
            wordDataDoc = wordApp.Documents.Open(fileName)

            ' Loop through the department screen collection 
            ' Start at rowCount 2 because row 1 contains the column headers 

            Dim rowCount As Integer = 2
            For Each d As Department In Departments
                FillRow(wordDataDoc, rowCount, d.DepartmentName,
                   d.DepartmentManager, d.Address1)
                rowCount += 1
            Next

            ' Save and close the file 
            wordDataDoc.Save()
            wordDataDoc.Close(False)

        End Sub

        Private Sub FillRow(WordDoc As Object, Row As Integer,
                            Text1 As String, Text2 As String, Text3 As String)

            If Row > WordDoc.Tables(1).Rows.Count Then
                WordDoc.Tables(1).Rows.Add()
            End If

            ' Insert the data into the table
            WordDoc.Tables(1).Cell(Row, 1).Range.InsertAfter(Text1)
            WordDoc.Tables(1).Cell(Row, 2).Range.InsertAfter(Text2)
            WordDoc.Tables(1).Cell(Row, 3).Range.InsertAfter(Text3)

        End Sub

        Private Sub CreateMailMerge_CanExecute(ByRef result As Boolean)
            result = AutomationFactory.IsAvailable
        End Sub

    End Class
End Namespace

