'You can use and redistribute the code from this book (and sample application) for non-commercial and 
'most commercial purposes as long as you acknowledge the source and authorship. 
'You should note the source of the code in any documentation as well as in the program code itself (as a comment). 
'The acknowledgment should include author, title, publisher, and ISBN. 
'An example of such an acknowledgment would be "Derived from Listing 2-10, LightSwitch 2015 by Tim Leung, published by Apress, ISBN 978-1-4842-0767-3".


Namespace LightSwitchApplication
    Public Class ApplicationDataService

        'Listing 12-2. Localizinga validation message in an HTML client application

        Private Sub SaveChanges_Executing()
            Dim clientLanguages = HttpContext.Current.Request.UserLanguages
            If clientLanguages.Length > 0 Then
                ' clientLanguages(0) returns language in the format "en-US"
                Dim clientCulture As New System.Globalization.CultureInfo(clientLanguages(0))
                Threading.Thread.CurrentThread.CurrentCulture = clientCulture
                Threading.Thread.CurrentThread.CurrentUICulture = clientCulture
            End If
        End Sub

    End Class

End Namespace
