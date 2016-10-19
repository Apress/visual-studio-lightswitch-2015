'You can use and redistribute the code from this book (and sample application) for non-commercial and 
'most commercial purposes as long as you acknowledge the source and authorship. 
'You should note the source of the code in any documentation as well as in the program code itself (as a comment). 
'The acknowledgment should include author, title, publisher, and ISBN. 
'An example of such an acknowledgment would be "Derived from Listing 2-10, LightSwitch 2015 by Tim Leung, published by Apress, ISBN 978-1-4842-0767-3".

Namespace LightSwitchApplication

    Public Class EngineerDetail

        Private Sub Engineer_Loaded(succeeded As Boolean)
            ' Write your code here.
            Me.SetDisplayNameFromEntity(Me.Engineer)
        End Sub

        Private Sub Engineer_Changed()
            ' Write your code here.
            Me.SetDisplayNameFromEntity(Me.Engineer)
        End Sub

        Private Sub EngineerDetail_Saved()
            ' Write your code here.
            Me.SetDisplayNameFromEntity(Me.Engineer)
        End Sub



        'Listing 11-15. Assigning And deassigning subordinates

        Private Sub AssignSubordinate_Execute()
            Engineer.Subordinates.Add(EngineerToAdd)
            Me.Save()
            Subordinates.Refresh()
        End Sub

        Private Sub DeassignSubordinate_Execute()
            Engineer.Subordinates.Remove(Subordinates.SelectedItem)
            Me.Save()
            Subordinates.Refresh()
        End Sub

        Private Sub CountOfIssues_Execute()
            ' Write your code here.
            Dim startOfYear = New DateTime(DateTime.Now.Year, 1, 1)

            'Query 1
            Dim issuesLastMonth =
    Engineer.Issues.Where(
        Function(issueItem) issueItem.CreateDateTime > startOfYear).
            Count()

            'Query 2
            Dim issuesLastMonth2 =
    Engineer.IssuesQuery.Where(
        Function(issueItem) issueItem.CreateDateTime > startOfYear).Execute().Count()

        End Sub

        Private Sub MergeDuplicates_Execute()
            ' Listing 11 - 21.Querying an EntityCollection  
            Dim duplicates =
                From timeEntry In Engineer.Timesheets
                Group timeEntry By timeEntry.Issue Into issueGroup = Group, Count()
                Where issueGroup.Count() > 1
                Select issueGroup

            For Each dup In duplicates
                Dim totalDuration = dup.Sum(Function(timeEntry) timeEntry.DurationMins)
                Dim firstLine = dup.First
                firstLine.DurationMins = totalDuration
                dup.Except(New Timesheet() {firstLine}).ToList().ForEach(
              Sub(timeEntry) timeEntry.Delete())
            Next


        End Sub
    End Class

End Namespace