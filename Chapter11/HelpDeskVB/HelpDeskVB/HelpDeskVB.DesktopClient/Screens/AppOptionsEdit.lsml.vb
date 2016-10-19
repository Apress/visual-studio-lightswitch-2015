'You can use and redistribute the code from this book (and sample application) for non-commercial and 
'most commercial purposes as long as you acknowledge the source and authorship. 
'You should note the source of the code in any documentation as well as in the program code itself (as a comment). 
'The acknowledgment should include author, title, publisher, and ISBN. 
'An example of such an acknowledgment would be "Derived from Listing 2-10, LightSwitch 2015 by Tim Leung, published by Apress, ISBN 978-1-4842-0767-3".

Namespace LightSwitchApplication

    Public Class AppOptionsEdit

        Private Sub AppOptionsEdit_InitializeDataWorkspace(ByVal saveChangesTo As Global.System.Collections.Generic.List(Of Global.Microsoft.LightSwitch.IDataService))

            'Listing 11-17. Creating a screen that works only with the first record

            Me.AppOptionProperty = DataWorkspace.ApplicationData.AppOptions.FirstOrDefault()
            If AppOptionProperty Is Nothing Then
                AppOptionProperty = New AppOption
            End If

        End Sub

        Private Sub AppOptionsEdit_Saved()
            ' Write your code here.
            Me.Close(False)
            Application.Current.ShowDefaultScreen(Me.AppOptionProperty)
        End Sub


    End Class

End Namespace