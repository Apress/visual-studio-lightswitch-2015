//You can use and redistribute the code from this book (and sample application) for non-commercial and 
//most commercial purposes as long as you acknowledge the source and authorship. 
//You should note the source of the code in any documentation as well as in the program code itself (as a comment). 
//The acknowledgment should include author, title, publisher, and ISBN. 
//An example of such an acknowledgment would be "Derived from Listing 2-10, LightSwitch 2015 by Tim Leung, published by Apress, ISBN 978-1-4842-0767-3".

using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace LightSwitchApplication.Reports
{
    public partial class IssuesByEngineer : System.Web.UI.Page
    {

        //Listing 16-1. Binding a grid view control to LightSwitch data 
        protected void Page_Load(object sender, EventArgs e)
        {

            if (!Page.IsPostBack && Request.Params["EngineerId"] != null)
            {
                using (ServerApplicationContext appContext =
                    LightSwitchApplication.ServerApplicationContext.CreateContext())
                {
                    using (DataWorkspace workspace =
                        appContext.Application.CreateDataWorkspace())
                    {
                        Engineer eng =
                            workspace.ApplicationData.Engineers_SingleOrDefault(
                                int.Parse(Request.Params["EngineerID"]));

                        //Set the engineer name label
                        EngineerNameLabel.InnerText = " Issue records for engineer: " + eng.Fullname;

                        //Bind the issues grid
                        IssuesGrid.DataSource = eng.Issues.Where(a => a.Id < 5);
                        IssuesGrid.DataBind();

                        IssuesGrid2.DataSource = eng.Issues.Where(a => a.Id < 5);
                        IssuesGrid2.DataBind();

                    }
                }
            }


        }


        //Listing 16-3. Binding a nested child grid view control 
        protected void IssuesGrid2_RowDataBound(object sender, GridViewRowEventArgs e)
        {
            if (e.Row.RowType == DataControlRowType.DataRow)
            {
                GridView childGrid = (GridView)e.Row.FindControl("childGrid");
                childGrid.DataSource = ((Issue)e.Row.DataItem).IssueResponses;
                childGrid.DataBind();
            }
        }


    }
}