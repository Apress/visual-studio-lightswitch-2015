//You can use and redistribute the code from this book (and sample application) for non-commercial and 
//most commercial purposes as long as you acknowledge the source and authorship. 
//You should note the source of the code in any documentation as well as in the program code itself (as a comment). 
//The acknowledgment should include author, title, publisher, and ISBN. 
//An example of such an acknowledgment would be "Derived from Listing 2-10, LightSwitch 2015 by Tim Leung, published by Apress, ISBN 978-1-4842-0767-3".

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.LightSwitch;
using System.Text.RegularExpressions;

namespace LightSwitchApplication
{
    public partial class Engineer
    {

        partial void FullName_Compute(ref string result)
        {
            if (Firstname != null && Surname != null)
            {
                result = String.Format("{0} - {1}",
                    Surname.ToString(), Firstname.ToString());
            }
        }

        partial void Age_Compute(ref int result)
        {
            DateTime now = DateTime.Today;
            int age = now.Year - DateOfBirth.Year;
            if (DateOfBirth > now.AddYears(-age)) age--;
            result = age;
        }

  
    }
}
