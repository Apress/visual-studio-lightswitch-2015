'You can use and redistribute the code from this book (and sample application) for non-commercial and 
'most commercial purposes as long as you acknowledge the source and authorship. 
'You should note the source of the code in any documentation as well as in the program code itself (as a comment). 
'The acknowledgment should include author, title, publisher, and ISBN. 
'An example of such an acknowledgment would be "Derived from Listing 2-10, LightSwitch 2015 by Tim Leung, published by Apress, ISBN 978-1-4842-0767-3".

Imports System.Web
Imports System.Web.Services

Public Class CloseIssues
    Implements System.Web.IHttpHandler

    'Listing 11-14. ASHX hHandler code to close multiple issues
    Sub ProcessRequest(ByVal context As HttpContext) Implements IHttpHandler.ProcessRequest

        context.Response.ContentType = "text/plain"
        Try

            Dim csvIssueIds As String = context.Request("csvData").ToString
            Dim arrIssueIds As Array = Strings.Split(csvIssueIds, ",")

            Using serverContext =
          LightSwitchApplication.ServerApplicationContext.CreateContext()

                For Each id In arrIssueIds

                    Dim issue =
                  serverContext.DataWorkspace.ApplicationData.
                    Issues_SingleOrDefault(CInt(id))

                    issue.ClosedDateTime = Date.Now

                Next

                serverContext.DataWorkspace.ApplicationData.SaveChanges()

            End Using

            context.Response.Write("Issues Updated")

        Catch ex As Exception
            context.Response.Write("Server error: " & ex.Message)
        End Try

    End Sub

    ReadOnly Property IsReusable() As Boolean Implements IHttpHandler.IsReusable
        Get
            Return False
        End Get
    End Property

End Class