'You can use and redistribute the code from this book (and sample application) for non-commercial and 
'most commercial purposes as long as you acknowledge the source and authorship. 
'You should note the source of the code in any documentation as well as in the program code itself (as a comment). 
'The acknowledgment should include author, title, publisher, and ISBN. 
'An example of such an acknowledgment would be "Derived from Listing 2-10, LightSwitch 2015 by Tim Leung, published by Apress, ISBN 978-1-4842-0767-3".

Imports LightSwitchApplication

Public Class StatusChart
    Inherits System.Web.UI.Page

    'Listing 16-4. Binding a chart control to LightSwitch data
    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load

        If Not Page.IsPostBack AndAlso
          Not Request.Params("EngineerId") Is Nothing Then

            Using AppContext As ServerApplicationContext =
                LightSwitchApplication.ServerApplicationContext.CreateContext()

                Using Workspace As DataWorkspace =
                  AppContext.Application.CreateDataWorkspace()

                    Dim Eng As Engineer =
                    Workspace.ApplicationData.Engineers_SingleOrDefault(Request.Params("EngineerID"))

                    Dim chartData = From iss In Eng.Issues
                                    Group iss By iss.Priority.PriorityDesc Into
                                        priorityGroup = Group, PriorityCount = Count()

                    Chart1.DataSource = chartData
                    Chart1.DataBind()



                End Using

            End Using

        End If

    End Sub

End Class





