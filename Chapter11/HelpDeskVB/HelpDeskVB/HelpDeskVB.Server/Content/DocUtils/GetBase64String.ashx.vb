'You can use and redistribute the code from this book (and sample application) for non-commercial and 
'most commercial purposes as long as you acknowledge the source and authorship. 
'You should note the source of the code in any documentation as well as in the program code itself (as a comment). 
'The acknowledgment should include author, title, publisher, and ISBN. 
'An example of such an acknowledgment would be "Derived from Listing 2-10, LightSwitch 2015 by Tim Leung, published by Apress, ISBN 978-1-4842-0767-3".

Imports System.Web
Imports System.Web.Services

Public Class GetBase64String
    Implements System.Web.IHttpHandler

    'Listing 11-2. Creating a page that returns the base-64 representation of a file
    Sub ProcessRequest(ByVal context As HttpContext) Implements IHttpHandler.ProcessRequest

        If context.Request.Files.Count = 1 Then
            Dim file = context.Request.Files(0)
            If file.ContentLength > 0 Then
                Dim inputStream = file.InputStream
                Dim base64Block As Byte() = New Byte(inputStream.Length - 1) {}
                inputStream.Read(base64Block, 0, base64Block.Length)

                'Add the preamble of "data:{mime-type};base64,".                                
                context.Response.Write("data:" & file.ContentType & ";base64," &
                               Convert.ToBase64String(base64Block))
            End If
        End If
    End Sub

    ReadOnly Property IsReusable() As Boolean Implements IHttpHandler.IsReusable
        Get
            Return False
        End Get
    End Property

End Class