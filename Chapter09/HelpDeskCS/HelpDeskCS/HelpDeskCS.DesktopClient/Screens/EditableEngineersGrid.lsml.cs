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
    public partial class EditableEngineersGrid
    {
        partial void EditableEngineersGrid_InitializeDataWorkspace(List<IDataService> saveChangesTo)
        {

            // Listing 9 - 12.Making check boxes read-only 
            foreach (Engineer eng in Engineers)
            {
                this.FindControlInCollection(
                    "Active", eng).IsEnabled = false;
            }

        }
    }
}