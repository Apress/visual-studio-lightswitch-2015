// You can use and redistribute the code from this book (and sample application) for non-commercial and 
// most commercial purposes as long as you acknowledge the source and authorship. 
// You should note the source of the code in any documentation as well as in the program code itself (as a comment). 
// The acknowledgment should include author, title, publisher, and ISBN. 
// An example of such an acknowledgment would be "Derived from Listing 2-10, LightSwitch 2015 by Tim Leung, published by Apress, ISBN 978-1-4842-0767-3".

using Microsoft.LightSwitch.Presentation.Extensions;
using Microsoft.LightSwitch.Presentation;
using Microsoft.LightSwitch.Framework.Client;
using Microsoft.LightSwitch;
using System.Collections.Generic;
using System.IO.IsolatedStorage;
using System.IO;
using System.Linq;
using System;

namespace LightSwitchApplication
{
    public partial class EditableIssuesGrid
    {

        //Listing 7-11. Validating deletions—client code
        partial void EditableIssuesGrid_SaveError(
           Exception exception, ref bool handled)
        {
            ValidationException validationExc =
              (exception as ValidationException);
            if (validationExc != null)
            {

                var entities = from v in validationExc.ValidationResults
                               let e = (v.Target as IEntityObject)
                               where (e != null &&
                                 e.Details.EntityState == EntityState.Deleted)
                               select e;

                foreach (IEntityObject e in entities)
                {
                    e.Details.DiscardChanges();
                }
            }
        }


    }

}