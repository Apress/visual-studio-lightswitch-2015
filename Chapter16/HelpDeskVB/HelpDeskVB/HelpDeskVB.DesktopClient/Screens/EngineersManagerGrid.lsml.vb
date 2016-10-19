'You can use and redistribute the code from this book (and sample application) for non-commercial and 
'most commercial purposes as long as you acknowledge the source and authorship. 
'You should note the source of the code in any documentation as well as in the program code itself (as a comment). 
'The acknowledgment should include author, title, publisher, and ISBN. 
'An example of such an acknowledgment would be "Derived from Listing 2-10, LightSwitch 2015 by Tim Leung, published by Apress, ISBN 978-1-4842-0767-3".

Imports System.Runtime.InteropServices.Automation
Imports System.Windows.Browser
Imports System.Windows.Controls
Imports System.Windows.Data

Namespace LightSwitchApplication
    Public Class EngineersManagerGrid


        'Listing 16-7. Displaying a web page with the web browser control 
        Private Sub EngineersManagerGrid_Created()
            ' Write your code here.

            Dim control = Me.FindControl("ReportProperty")
            AddHandler control.ControlAvailable,
                  Sub(send As Object, e As ControlAvailableEventArgs)
                      DirectCast(e.Control, WebBrowser).Navigate(
                        New Uri("http://localhost:9688/Reports/ReportPage.aspx"))
                  End Sub


            'Listing 16-8. Showing a web page on a LightSwitch List And Details screen 
            Dim control2 = Me.FindControl("Engineers_SelectedItem_Id")
            Dim converter As New IdToReportUrlConverter()
            control2.SetBinding(
      ApressControlsVB.WebBrowser.URIProperty,
         "Value", converter, BindingMode.OneWay)

        End Sub

        Private Sub OpenEngineerIssueReport_Execute()

            Dim urlPath = String.Format(
      "http://localhost:9688/Reports/IssuesByEngineer.aspx?EngineerId={0}",
        Engineers.SelectedItem.Id)

            If AutomationFactory.IsAvailable Then
                Dim shell = AutomationFactory.CreateObject("Shell.Application")
                shell.ShellExecute(urlPath, "", "", "open", 1)
            Else
                HtmlPage.Window.Invoke(urlPath)
            End If

        End Sub

    End Class

    Public Class IdToReportUrlConverter
        Implements IValueConverter

        Public Function Convert(
     value As Object,
     targetType As System.Type,
     parameter As Object,
     culture As System.Globalization.CultureInfo
   ) As Object Implements System.Windows.Data.IValueConverter.Convert

            If value IsNot Nothing Then
                Return New Uri(
           "http://localhost:9688/Reports/IssuesByEngineer.aspx?EngineerId=" &
             value.ToString)
            Else
                Return New Uri("about:blank")
            End If
        End Function

        Public Function ConvertBack(
      value As Object,
      targetType As System.Type,
      parameter As Object,
      culture As System.Globalization.CultureInfo
   ) As Object Implements System.Windows.Data.IValueConverter.ConvertBack

            Return New NotImplementedException
        End Function

    End Class

End Namespace
