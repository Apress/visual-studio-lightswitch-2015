'You can use and redistribute the code from this book (and sample application) for non-commercial and 
'most commercial purposes as long as you acknowledge the source and authorship. 
'You should note the source of the code in any documentation as well as in the program code itself (as a comment). 
'The acknowledgment should include author, title, publisher, and ISBN. 
'An example of such an acknowledgment would be "Derived from Listing 2-10, LightSwitch 2015 by Tim Leung, published by Apress, ISBN 978-1-4842-0767-3".

Namespace LightSwitchApplication

    Public Class CreateNewIssue

        'Listing 9-3. Setting default control values

        Private Sub CreateNewIssue_InitializeDataWorkspace(saveChangesTo As List(Of IDataService))

            Me.IssueProperty = New Issue()
            Me.IssueProperty.TargetEndDateTime = DateTime.Now.AddDays(3)
            Me.IssueProperty.Priority = PriorityMedium


            'Listing 9 - 10.Setting the focus to a control 
            Me.FindControl("ProblemDescription").Focus()

            If EngineerIDParam.HasValue Then

                'Listing 9 - 7.Using screen parameter values in code
                Me.IssueProperty.AssignedEngineer =
                 Me.DataWorkspace.ApplicationData.Engineers_SingleOrDefault(
                   EngineerIDParam.Value)

            End If


        End Sub

        Private Sub CreateNewIssue_Saved()

            'Listing 9 - 18.Reset the New Data Screen after a save
            'Me.Close(False)
            'Application.Current.ShowDefaultScreen(Me.IssueProperty)
            Me.IssueProperty = New Issue

        End Sub

        Private Sub CreateNewIssue_Created()

        End Sub
    End Class

End Namespace