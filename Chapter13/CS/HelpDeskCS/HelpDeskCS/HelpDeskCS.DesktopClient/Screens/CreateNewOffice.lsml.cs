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
using System.Windows.Controls;
using LightSwitchApplication.UserCode;

using System.Windows.Data;

namespace LightSwitchApplication
{
    public partial class CreateNewOffice
    {
        partial void CreateNewOffice_InitializeDataWorkspace(global::System.Collections.Generic.List<global::Microsoft.LightSwitch.IDataService> saveChangesTo)
        {
            // Write your code here.
            this.OfficeProperty = new Office();
        }

        partial void CreateNewOffice_Saved()
        {
            // Write your code here.
            this.Close(false);
            Application.Current.ShowDefaultScreen(this.OfficeProperty);
        }

        partial void CreateNewOffice_Activated()
        {
            // Listing 13-4. Data-Binding the Slider Control
            var buildingCapacity = this.FindControl("BuildingCapacity");

            IntToDoubleConverter converter = new IntToDoubleConverter();
            buildingCapacity.SetBinding(Slider.ValueProperty,
              "Value",
                BindingMode.TwoWay);
        }
    }
}