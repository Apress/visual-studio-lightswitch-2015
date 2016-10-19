'You can use and redistribute the code from this book (and sample application) for non-commercial and 
'most commercial purposes as long as you acknowledge the source and authorship. 
'You should note the source of the code in any documentation as well as in the program code itself (as a comment). 
'The acknowledgment should include author, title, publisher, and ISBN. 
'An example of such an acknowledgment would be "Derived from Listing 2-10, LightSwitch 2015 by Tim Leung, published by Apress, ISBN 978-1-4842-0767-3".

Imports System.Web
Imports System.Web.Services

Public Class DownloadIssueDocument
    Implements System.Web.IHttpHandler

    'Listing 11-4. Issue file download code

    Sub ProcessRequest(
       ByVal context As HttpContext) Implements IHttpHandler.ProcessRequest

        If context.Request.Params("id") IsNot Nothing Then
            context.Response.ContentType = "application/octet-stream"

            Using serverContext =
           LightSwitchApplication.ServerApplicationContext.CreateContext

                Dim doc = serverContext.DataWorkspace.ApplicationData.IssueDocuments_SingleOrDefault(
                       context.Request.Params("id"))

                context.Response.AddHeader(
               "Content-Disposition", "attachment;filename=" &
                 doc.DocumentName)

                context.Response.BinaryWrite(doc.IssueFile)

            End Using

        End If

    End Sub

    ReadOnly Property IsReusable() As Boolean Implements IHttpHandler.IsReusable
        Get
            Return False
        End Get
    End Property

End Class