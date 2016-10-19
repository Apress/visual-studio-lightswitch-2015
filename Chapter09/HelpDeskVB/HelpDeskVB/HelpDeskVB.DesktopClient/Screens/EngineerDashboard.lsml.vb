'You can use and redistribute the code from this book (and sample application) for non-commercial and 
'most commercial purposes as long as you acknowledge the source and authorship. 
'You should note the source of the code in any documentation as well as in the program code itself (as a comment). 
'The acknowledgment should include author, title, publisher, and ISBN. 
'An example of such an acknowledgment would be "Derived from Listing 2-10, LightSwitch 2015 by Tim Leung, published by Apress, ISBN 978-1-4842-0767-3".

Namespace LightSwitchApplication

    Public Class EngineerDashboard

        Private Sub Engineer_Changed()
            ' Write your code here.
            Me.SetDisplayNameFromEntity(Me.Engineer)
        End Sub

        Private Sub EngineerDashboard_Saved()
            ' Write your code here.
            Me.SetDisplayNameFromEntity(Me.Engineer)
        End Sub

        'Listing 9 - 1.Constructing custom text to display on a screen
        Private Sub EngineerDashboard_InitializeDataWorkspace(saveChangesTo As List(Of IDataService))
            ' Write your code here.

            For Each issue In Top5OldestIssues
                IssuesOverdueLabel += issue.Subject + Environment.NewLine
            Next


            'Listing 9 - 13.Referencing a control using ControlAvailable 

            AddHandler Me.FindControl("IssuesOverdueLabel").ControlAvailable,
                Sub(sender As Object, e As ControlAvailableEventArgs)
                    Dim issueLabel = CType(e.Control,
                    System.Windows.Controls.TextBlock)
                    issueLabel.Foreground = New SolidColorBrush(Colors.Red)
                End Sub


        End Sub


        'Listing 9-2. Setting the screen title in code
        Private Sub Engineer_Loaded(succeeded As Boolean)
            ' Write your code here.
            Me.DisplayName = "Engineer Dashboard"

        End Sub

        'Listing 9-5. Opening screens from an unbound drop-down

        Private Sub OpenIssue_Execute()
            Me.Application.ShowIssueDetail(IssueSelectionProperty.Id)
        End Sub

        Private Sub RefreshAllScreens_Execute()

            'Listing 9 - 6.Refreshing all open screens
            Dim screens = Me.Application.ActiveScreens
            For Each s In screens
                Dim screen = s.Screen
                screen.Details.Dispatcher.BeginInvoke(
         Sub()
             screen.Refresh()
         End Sub)
            Next


        End Sub

        Private Sub ArchiveIssues_Execute()
            ' Write your code here.
            If Me.ShowMessageBox(
            "Are you sure you want delete all issues older than 12 months? (This is a demonstration of how to use a MessageBox)",
            "Confirm Delete", MessageBoxOption.YesNo) =
            System.Windows.MessageBoxResult.Yes Then
                'DeleteOldIssues()
            End If

        End Sub

        'Listing 9-20. Opening the combination Add/Edit screen to add a New record
        Private Sub OpenNewIssueScreen_Execute()
            Application.ShowAddEditIssue(Nothing)
        End Sub

    End Class

End Namespace