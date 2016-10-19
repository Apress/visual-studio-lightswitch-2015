'You can use and redistribute the code from this book (and sample application) for non-commercial and 
'most commercial purposes as long as you acknowledge the source and authorship. 
'You should note the source of the code in any documentation as well as in the program code itself (as a comment). 
'The acknowledgment should include author, title, publisher, and ISBN. 
'An example of such an acknowledgment would be "Derived from Listing 2-10, LightSwitch 2015 by Tim Leung, published by Apress, ISBN 978-1-4842-0767-3".

Imports System.Windows.Data

'Listing 19-5. Value Converter That Returns a String Representation of a Time Duration 

Namespace Presentation.Controls
    Public Class SplitMinutes
        Implements IValueConverter

        Public Function Convert(
              value As Object, targetType As System.Type,
              parameter As Object, culture As System.Globalization.CultureInfo
            ) As Object Implements System.Windows.Data.IValueConverter.Convert

            Dim ts As TimeSpan = TimeSpan.FromMinutes(CInt(value))
            Return String.Format(
               "{0}hrs {1}mins", Math.Floor(ts.TotalHours), ts.Minutes)

        End Function

        Public Function ConvertBack(value As Object, targetType As System.Type,
           parameter As Object, culture As System.Globalization.CultureInfo) As Object Implements System.Windows.Data.IValueConverter.ConvertBack
            Return Nothing
        End Function

    End Class

End Namespace
