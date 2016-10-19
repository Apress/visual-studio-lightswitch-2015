// You can use and redistribute the code from this book (and sample application) for non-commercial and 
// most commercial purposes as long as you acknowledge the source and authorship. 
// You should note the source of the code in any documentation as well as in the program code itself (as a comment). 
// The acknowledgment should include author, title, publisher, and ISBN. 
// An example of such an acknowledgment would be "Derived from Listing 2-10, LightSwitch 2015 by Tim Leung, published by Apress, ISBN 978-1-4842-0767-3".

using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LightSwitchApplication.Content
{
    /// <summary>
    /// Summary description for CloseIssues
    /// </summary>
    public class CloseIssues : IHttpHandler
    {

        //Listing 11-14. ASHX handler code to close multiple issues
        public void ProcessRequest(HttpContext context)
        {
            context.Response.ContentType = "text/plain";
            try
            {
                string csvIssueIds = context.Request["csvData"].ToString();
                string[] arrIssueIds = csvIssueIds.Split(",".ToCharArray());

                using (ServerApplicationContext serverContext = LightSwitchApplication.ServerApplicationContext.CreateContext())
                {

                    foreach (string id in arrIssueIds)
                    {
                        Issue i = serverContext.DataWorkspace.ApplicationData.Issues_SingleOrDefault(int.Parse(id));
                        i.ClosedDateTime = DateTime.Now;
                    }

                    serverContext.DataWorkspace.ApplicationData.SaveChanges();
                }

                context.Response.Write("Issues Updated");

            }
            catch (Exception ex)
            {
                context.Response.Write("Server error: " + ex.Message);
            }

        }

        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
    }
}