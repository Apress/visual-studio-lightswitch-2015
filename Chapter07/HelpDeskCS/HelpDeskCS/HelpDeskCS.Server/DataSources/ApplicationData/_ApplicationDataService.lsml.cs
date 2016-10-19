using Microsoft.LightSwitch.Security.Server;
using Microsoft.LightSwitch;
using System.Text;
using System.Linq;
using System.Collections.Generic;
using System;

namespace LightSwitchApplication
{
    public partial class ApplicationDataService
    {

        //Listing 7-5. Validating the counts of child items

        partial void Issues_Validate(Issue entity, EntitySetValidationResultsBuilder results)
        {
            if (entity.IssueDocuments.Count() > 10)
            {
                results.AddEntityError(
                  "Issues can only contain a maximum of 10 documents");
            }


            //Listing 7-10. Validating deletions on the server

            if (entity.Details.EntityState == EntityState.Deleted)
            {
                if (entity.IssueResponses.Where(s => s.AwaitingClient).Any())
                {
                    results.AddEntityError(
                      "Cannot delete issues with responses awaiting client.");
                }
            }


        }

        //Listing 7-10. Validating deletions on the server
        partial void Issues_Deleting(Issue entity)
        {
            // Check for validation errors for deletions
            if (entity.Details.ValidationResults.Errors.Any())
            {
                throw new ValidationException(
                  null, null, entity.Details.ValidationResults);
            }

            // Cascade delete children because delete rule is Restricted
            foreach (var childResp in entity.IssueResponses)
            {
                childResp.Delete();
            }
        }





    }
}