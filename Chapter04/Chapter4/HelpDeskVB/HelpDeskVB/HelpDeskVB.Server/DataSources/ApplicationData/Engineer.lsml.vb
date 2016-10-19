'You can use and redistribute the code from this book (and sample application) for non-commercial and 
'most commercial purposes as long as you acknowledge the source and authorship. 
'You should note the source of the code in any documentation as well as in the program code itself (as a comment). 
'The acknowledgment should include author, title, publisher, and ISBN. 
'An example of such an acknowledgment would be "Derived from Listing 2-10, LightSwitch 2015 by Tim Leung, published by Apress, ISBN 978-1-4842-0767-3".

Imports System.Text.RegularExpressions

Namespace LightSwitchApplication
    Public Class Engineer

        'Listing 2-1. Formatting strings in a computed property
        Private Sub Fullname_Compute(ByRef result As String)
            result = String.Format("{0} - {1}", Surname, Firstname)
        End Sub

        'Listing 2-2. Calculating date differences
        Private Sub Age_Compute(ByRef result As Integer)
            result = DateDiff(DateInterval.Year, DateOfBirth, Now)
        End Sub

        'Listing 2-3. Using navigation properties in a computed property
        Private Sub IssueCount_Compute(ByRef result As Integer)
            result = Issues.Count()
        End Sub


    End Class
End Namespace
