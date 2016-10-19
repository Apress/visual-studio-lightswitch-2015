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
    //Listing 16-4. Binding a chart control to LightSwitch data
    public partial class PriorityChart : System.Web.UI.Page
    {
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

                        var chartData =
                            from Issue iss in eng.Issues
                            group iss by iss.Priority.PriorityDesc into priorityGroup
                            select new
                            {
                                PriorityDesc = priorityGroup.Key,
                                PriorityCount = priorityGroup.Count()
                            };              

                Chart1.DataSource = chartData;
                        Chart1.DataBind();

                    }
                }
            }
        }

    }
}