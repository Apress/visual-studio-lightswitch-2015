'You can use and redistribute the code from this book (and sample application) for non-commercial and 
'most commercial purposes as long as you acknowledge the source and authorship. 
'You should note the source of the code in any documentation as well as in the program code itself (as a comment). 
'The acknowledgment should include author, title, publisher, and ISBN. 
'An example of such an acknowledgment would be "Derived from Listing 2-10, LightSwitch 2015 by Tim Leung, published by Apress, ISBN 978-1-4842-0767-3".

Imports System.Data.Objects.SqlClient

Namespace LightSwitchApplication
    Public Class ApplicationDataService

        'Listing 10-1. Filtering by child items
        Private Sub EngineersWithOutstandingIssues_PreprocessQuery(ByRef query As IQueryable(Of Engineer))

            query = query.
         Where(Function(engItem) engItem.Issues.
         Where(Function(issueItem) issueItem.IssueStatus.StatusDescription = "Open").Any())

        End Sub

        'Listing 10-3. Returning all engineer records with related issue records
        Private Sub EngineersWithIssues_PreprocessQuery(ByRef query As IQueryable(Of Engineer))
            query = query.Where(
       Function(engItem) engItem.Issues.Any())
        End Sub

        'Listing 10-5. Returning all users who have never raised issues
        Private Sub EngineersWithNoIssues_PreprocessQuery(ByRef query As System.Linq.IQueryable(
      Of LightSwitchApplication.Engineer))

            query = query.Where(
          Function(engItem) Not engItem.Issues.Any())
        End Sub

        'Listing 10-6. Filtering by month And year parameter values
        Private Sub IssuesByMonthAndYear_PreprocessQuery(IssueMonth As Integer?, IssueYear As Integer?, ByRef query As IQueryable(Of Issue))

            If IssueMonth.HasValue AndAlso IssueYear.HasValue Then
                query = query.Where(Function(item) item.CreateDateTime.Month = IssueMonth.Value AndAlso
         item.CreateDateTime.Year = IssueYear.Value)
            End If
        End Sub

        'Listing 10-7. Top five departments with the greatest floor area
        Private Sub DepartmentsByFloorSpace_PreprocessQuery(ByRef query As System.Linq.IQueryable(Of LightSwitchApplication.Department))
            query = query.OrderByDescending(Function(deptItem) deptItem.FloorArea).Take(5)
        End Sub

        'Listing 10-8. Query to match non-concurrent words
        Private Sub IssuesMatchAll_PreprocessQuery(criteria As String, ByRef query As IQueryable(Of Issue))

            If Not String.IsNullOrEmpty(criteria) Then
                Dim searchWords = criteria.Split(" ")

                query = query.Where(Function(issueRecord) searchWords.All(
                    Function(criteriaWord) issueRecord.ProblemDescription.Contains(criteriaWord)))
            End If
        End Sub


        'Listing 10-9. Query to partially match one Or more words
        Private Sub IssuesMatchSome_PreprocessQuery(criteria As String, ByRef query As IQueryable(Of Issue))

            If Not String.IsNullOrEmpty(criteria) Then
                Dim searchWords = criteria.Split(" ")

                query = query.Where(Function(issueRecord) searchWords.Any(Function(criteriaWord) issueRecord.ProblemDescription.Contains(criteriaWord)))
            End If

        End Sub

        'Listing 10-10. Query to carry out Soundex search
        Private Sub EngineerPhoneticSearch_PreprocessQuery(Name As String, ByRef query As IQueryable(Of Engineer))
            query = query.Where(Function(EngRecord) EngRecord.Firstname.Contains(Name) OrElse (SqlFunctions.SoundCode(EngRecord.Firstname) = SqlFunctions.SoundCode(Name)))
        End Sub

    End Class

End Namespace
