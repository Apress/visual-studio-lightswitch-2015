'You can use and redistribute the code from this book (and sample application) for non-commercial and 
'most commercial purposes as long as you acknowledge the source and authorship. 
'You should note the source of the code in any documentation as well as in the program code itself (as a comment). 
'The acknowledgment should include author, title, publisher, and ISBN. 
'An example of such an acknowledgment would be "Derived from Listing 2-10, LightSwitch 2015 by Tim Leung, published by Apress, ISBN 978-1-4842-0767-3".

Imports System.Globalization

Namespace LightSwitchApplication
    Public Class EditableIssuesGrid
        Private Sub Archive_Execute()

            ' Listing 12-4.Localized version of displaying a message box

            Dim messageTitle As String
            Dim messageBody As String

            'Confirm Delete
            messageTitle = My.Resources.Client.ArchiveConfirmTitle

            'Are you sure you want delete all issues older than 12 months?
            messageBody = My.Resources.Client.ArchiveConfirmMessage

            If Me.ShowMessageBox(
                    messageBody,
                    messageTitle, MessageBoxOption.YesNo) =
                    System.Windows.MessageBoxResult.Yes Then

                'Add code here to carry out the deletion...

            End If


        End Sub
    End Class
End Namespace
