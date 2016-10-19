'You can use and redistribute the code from this book (and sample application) for non-commercial and 
'most commercial purposes as long as you acknowledge the source and authorship. 
'You should note the source of the code in any documentation as well as in the program code itself (as a comment). 
'The acknowledgment should include author, title, publisher, and ISBN. 
'An example of such an acknowledgment would be "Derived from Listing 2-10, LightSwitch 2015 by Tim Leung, published by Apress, ISBN 978-1-4842-0767-3".

Imports System.Web.UI.WebControls
Imports LightSwitchApplication

Public Class IssuesByEngineer
    Inherits System.Web.UI.Page


    'Listing 16-1. Binding a grid view control to LightSwitch data 
    Protected Sub Page_Load(
      ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load

        If Not Page.IsPostBack AndAlso
            Not Request.Params("EngineerId") Is Nothing Then

            Using AppContext As ServerApplicationContext =
                LightSwitchApplication.ServerApplicationContext.CreateContext()

                Using Workspace As DataWorkspace =
                  AppContext.Application.CreateDataWorkspace()

                    Dim Eng As Engineer =
                    Workspace.ApplicationData.Engineers_SingleOrDefault(Request.Params("EngineerID"))

                    If Not Eng Is Nothing Then
                        'Set the engineer name label
                        EngineerNameLabel.InnerText = ("Issue records for engineer: ") & Eng.Fullname

                        'Bind the issues grid
                        IssuesGrid.DataSource = Eng.Issues.Where(Function(a) a.Id < 5)
                        IssuesGrid.DataBind()

                        IssuesGrid2.DataSource = Eng.Issues.Where(Function(a) a.Id < 5)
                        IssuesGrid2.DataBind()

                    End If

                End Using

            End Using

        End If

    End Sub

    'Listing 16-3. Binding a nested child grid view control 
    Private Sub IssuesGrid2_RowDataBound(sender As Object, e As GridViewRowEventArgs) Handles IssuesGrid2.RowDataBound

        If e.Row.RowType = DataControlRowType.DataRow Then
            Dim childGrid = CType(e.Row.FindControl("childGrid"), GridView)
            childGrid.DataSource = CType(e.Row.DataItem, Issue).IssueResponses
            childGrid.DataBind()

        End If

    End Sub

End Class






