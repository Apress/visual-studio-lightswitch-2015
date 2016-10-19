// You can use and redistribute the code from this book (and sample application) for non-commercial and 
// most commercial purposes as long as you acknowledge the source and authorship. 
// You should note the source of the code in any documentation as well as in the program code itself (as a comment). 
// The acknowledgment should include author, title, publisher, and ISBN. 
// An example of such an acknowledgment would be "Derived from Listing 2-10, LightSwitch 2015 by Tim Leung, published by Apress, ISBN 978-1-4842-0767-3".

using Microsoft.LightSwitch;
using System.Text;
using System.Linq;
using System.Collections.Generic;
using System;
using System.Text.RegularExpressions;

namespace LightSwitchApplication
{
    public partial class Engineer
    {

        //Listing 2-1. Formatting strings in a computed property
        partial void Fullname_Compute(ref string result)
        {
            result = String.Format("{0} - {1}", Surname, Firstname);
        }

        //Listing 2-2. Calculating date differences
        partial void Age_Compute(ref int result)
        {
            DateTime now = DateTime.Today;
            int age = now.Year - DateOfBirth.Year;
            if (DateOfBirth > now.AddYears(-age)) age--;
            result = age;
        }

        //Listing 2-3. Using navigation properties in a computed property
        partial void IssueCount_Compute(ref int result)
        {
            result = this.Issues.Count();
        }

        //Listing 7-1. Creating a validation warning
        partial void EmailAddress_Validate(EntityValidationResultsBuilder results)
        {
            // results.AddPropertyError("<Error-Message>");

            if (System.String.IsNullOrEmpty(EmailAddress))
            {
                results.AddPropertyResult("Email Address recommended", ValidationSeverity.Informational);
            }
        }


        //Listing 7-4. Regex validation to check Social Security numbers
        partial void SSN_Validate(
        EntityValidationResultsBuilder results)
        {
            string pattern =
              @"^(?!000)([0-6]\d{2}|7([0-6]\d|7[012]))([ -]?)(?!00)\d\d\3(?!0000)\d{4}$";
            if (SSN != null && !Regex.IsMatch(SSN, pattern))
            {
                results.AddPropertyError(
                  "Enter SSN in format 078-05-1120");
            }
        }



        //Listing 7-9. Enforcing unique records
        partial void ClearanceReference_Validate(EntityValidationResultsBuilder results)
        {
            if (ClearanceReference != null &&
              ClearanceReference.Length > 0)
            {
                var duplicatesOnServer = (
                  from eng in
                  this.DataWorkspace.ApplicationData.Engineers.Cast<Engineer>()
                  where (eng.Id != this.Id) &&
                  eng.ClearanceReference != null &&
                  eng.ClearanceReference.Equals(this.ClearanceReference,
                    StringComparison.CurrentCultureIgnoreCase)
                  select eng
                 ).ToArray();

                var duplicatesOnClient = (
                  from eng in
                  this.DataWorkspace.ApplicationData.Details.GetChanges().
                    OfType<Engineer>()
                  where (eng != this) &&
                  eng.ClearanceReference != null &&
                    eng.ClearanceReference.Equals(this.ClearanceReference,
                      StringComparison.CurrentCultureIgnoreCase)
                  select eng
                 ).ToArray();


                var deletedOnClient =
                  this.DataWorkspace.ApplicationData.Details.GetChanges().
                   DeletedEntities.OfType<Engineer>().ToArray();

                var anyDuplicates =
                  duplicatesOnServer.Union(duplicatesOnClient).
                   Distinct().Except(deletedOnClient).Any();

                if (anyDuplicates)
                {
                    results.AddPropertyError(
                      "The clearance reference already exists");
                }
            }
        }



    }
}