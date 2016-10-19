// You can use and redistribute the code from this book (and sample application) for non-commercial and 
// most commercial purposes as long as you acknowledge the source and authorship. 
// You should note the source of the code in any documentation as well as in the program code itself (as a comment). 
// The acknowledgment should include author, title, publisher, and ISBN. 
// An example of such an acknowledgment would be "Derived from Listing 2-10, LightSwitch 2015 by Tim Leung, published by Apress, ISBN 978-1-4842-0767-3".

using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LightSwitchApplication.Content.DocUtils
{
    /// <summary>
    /// Summary description for DownloadIssueDocument
    /// </summary>
    public class DownloadIssueDocument : IHttpHandler
    {

        //Listing 11-4. Issue file download code

        public void ProcessRequest(HttpContext context)
        {

            if (context.Request.Params["id"] != null)
            {
                context.Response.ContentType = "application/octet-stream";
                using (var serverContext =
                    LightSwitchApplication.ServerApplicationContext.CreateContext())
                {
                    var doc = serverContext.DataWorkspace.ApplicationData.IssueDocuments_SingleOrDefault(
                        int.Parse(context.Request.Params["id"]));

                    context.Response.AddHeader(
                        "Content-Disposition", "attachment;filename=" +
                          doc.DocumentName);

                    context.Response.BinaryWrite(doc.IssueFile);
                }
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