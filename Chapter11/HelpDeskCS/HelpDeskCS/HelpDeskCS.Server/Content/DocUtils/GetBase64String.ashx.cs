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
    /// Summary description for GetBase64String
    /// </summary>
    public class GetBase64String : IHttpHandler
    {

        //Listing 11-2. Creating a page that returns the base-64 representation of a file
        public void ProcessRequest(HttpContext context)
        {
            if (context.Request.Files.Count == 1)
            {
                var file = context.Request.Files[0];
                if (file.ContentLength > 0)
                {
                    var inputStream = file.InputStream;
                    Byte[] base64Block = new Byte[inputStream.Length - 1];
                    inputStream.Read(base64Block, 0, base64Block.Length);

                    //Add the preamble of "data:{mime-type};base64,".                             
                    context.Response.Write("data:" + file.ContentType + ";base64," +
                                        Convert.ToBase64String(base64Block));
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