'You can use and redistribute the code from this book (and sample application) for non-commercial and 
'most commercial purposes as long as you acknowledge the source and authorship. 
'You should note the source of the code in any documentation as well as in the program code itself (as a comment). 
'The acknowledgment should include author, title, publisher, and ISBN. 
'An example of such an acknowledgment would be "Derived from Listing 2-10, LightSwitch 2015 by Tim Leung, published by Apress, ISBN 978-1-4842-0767-3".
Namespace LightSwitchApplication
    Public Class Setup
        Private Sub SetupData_Execute()

            ''Listing 6-1. Code to add new records
            'Dim statusOpen =
            '    Me.DataWorkspace.ApplicationData.IssueStatusSet.AddNew()
            'statusOpen.StatusDescription = "Open"

            'Dim statusClosed =
            '    Me.DataWorkspace.ApplicationData.IssueStatusSet.AddNew()
            'statusClosed.StatusDescription = "Closed"

            'Me.DataWorkspace.ApplicationData.SaveChanges()


            'Bonus code for setting up other records
            AddPriorityIfNotExists("Low")
            AddPriorityIfNotExists("Medium")
            AddPriorityIfNotExists("High")
            AddStatusIfNotExists("Raised")
            AddStatusIfNotExists("In Progress")
            AddStatusIfNotExists("Cancelled")
            AddStatusIfNotExists("Closed")
            AddDeptIfNotExists("Head Office")


        End Sub


        'Bonus code for setting up data
        Private Sub AddPriorityIfNotExists(PriorityDesc As String)
            If DataWorkspace.ApplicationData.Priorities.Where(Function(item) item.PriorityDesc = PriorityDesc).FirstOrDefault() Is Nothing Then
                Dim newPriority = DataWorkspace.ApplicationData.Priorities.AddNew()
                newPriority.PriorityDesc = PriorityDesc
            End If
        End Sub

        Private Sub AddStatusIfNotExists(StatusDesc As String)
            If DataWorkspace.ApplicationData.IssueStatusSet.Where(Function(item) item.StatusDescription = StatusDesc).FirstOrDefault() Is Nothing Then
                Dim newStatus = DataWorkspace.ApplicationData.IssueStatusSet.AddNew()
                newStatus.StatusDescription = StatusDesc
            End If
        End Sub

        Private Sub AddDeptIfNotExists(DeptDesc As String)
            If DataWorkspace.ApplicationData.Departments.Where(Function(item) item.DepartmentName = DeptDesc).FirstOrDefault() Is Nothing Then
                Dim newDept = DataWorkspace.ApplicationData.Departments.AddNew()
                newDept.DepartmentName = DeptDesc
                newDept.Address1 = "Address1"
                newDept.Address2 = "Address2"
                newDept.City = "City"
                newDept.Country = "Country"
                newDept.Postcode = "Postcode"
                newDept.DepartmentManager = "Manager"
            End If

        End Sub


        'Listing 6-2. Updating records with code
        Private Sub CloseAllIssues_Execute()
            'For Each issue As Issue In IssuesForLastYear
            '    issue.IssueStatus = IssueStatusClosed
            'Next
            'Me.DataWorkspace.ApplicationData.SaveChanges()
            For Each issue As Issue In Issues
                issue.IssueStatus = IssueStatusClosed
            Next


        End Sub

        'Listing 6-3. Code to delete records
        Private Sub DeleteAllIssues_Execute()
            'For Each issue As Issue In IssuesForLastYear
            '    issue.Delete()
            'Next
            'Me.DataWorkspace.ApplicationData.SaveChanges()
            For Each issue As Issue In Issues
                issue.Delete()
            Next

        End Sub
    End Class
End Namespace
