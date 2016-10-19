using Microsoft.LightSwitch;
using System.Text;
using System.Linq;
using System.Collections.Generic;
using System;

namespace LightSwitchApplication
{
    public partial class IssueDocument
    {
        //Listing 11-10. Validating file sizes

        partial void IssueFile_Validate(EntityValidationResultsBuilder results)
        {
            if (IssueFile != null)
            {
                var sizeInMB = IssueFile.Length / 1048576;
                if (sizeInMB > 2)
                {
                    results.AddPropertyError("File cannot be > 2MB");
                }
            }
        }
    }
}