// You can use and redistribute the code from this book (and sample application) for non-commercial and 
// most commercial purposes as long as you acknowledge the source and authorship. 
// You should note the source of the code in any documentation as well as in the program code itself (as a comment). 
// The acknowledgment should include author, title, publisher, and ISBN. 
// An example of such an acknowledgment would be "Derived from Listing 2-10, LightSwitch 2015 by Tim Leung, published by Apress, ISBN 978-1-4842-0767-3".

using Microsoft.LightSwitch.Security.Server;
using Microsoft.LightSwitch;
using System.Text;
using System.Linq;
using System.Collections.Generic;
using System;
using System.Data.Objects.SqlClient;

namespace LightSwitchApplication
{
    public partial class ApplicationDataService
    {


        //Listing 10-1. Filtering by child items
        partial void EngineersWithOutstandingIssues_PreprocessQuery(
            ref IQueryable<Engineer> query)
        {
            query = query
               .Where(engItem => engItem.Issues
               .Where(issueItem =>
                    issueItem.IssueStatus.StatusDescription == "Open")
               .Any());
        }



        //Listing 10-3. Returning all engineer records with related issue records

        partial void EngineersWithIssues_PreprocessQuery(ref IQueryable<Engineer> query)
        {
            query = query
               .Where(engItem => engItem.Issues.Any());
        }

        //Listing 10-5. Returning all users who have never raised issues

        partial void EngineersWithNoIssues_PreprocessQuery(ref IQueryable<Engineer> query)
        {
            query = query
               .Where(engItem => !engItem.Issues.Any());
        }


        //Listing 10-6. Filtering by month and year parameter values

        partial void IssuesByMonthAndYear_PreprocessQuery(int? IssueMonth, int? IssueYear, ref IQueryable<Issue> query)
        {
            if (IssueMonth.HasValue && IssueYear.HasValue)
            {
                query = query.Where(item =>
                  item.CreateDateTime.Month == IssueMonth.Value &&
                   item.CreateDateTime.Year == IssueYear.Value);
            }
        }


        //Listing 10-7. Top five departments with the greatest floor area
        partial void DepartmentsByFloorSpace_PreprocessQuery(
           ref IQueryable<Department> query)
        {
            query = query.OrderByDescending(
               deptItem => deptItem.FloorArea).Take(5);
        }



        //Listing 10-8. Query to match non-concurrent words

        partial void IssuesMatchAll_PreprocessQuery(string Criteria, ref IQueryable<Issue> query)
        {
            if (!String.IsNullOrEmpty(Criteria))
            {
                string[] searchWords =
                  Criteria.Split(" ".ToCharArray());

                query = query.Where(issueRecord =>
                 searchWords.All(criteriaWord =>
                  issueRecord.ProblemDescription.Contains(
                     criteriaWord)));
            }
        }



        //Listing 10-9. Query to partially match one or more words
        partial void IssuesMatchSome_PreprocessQuery(
           string Criteria, ref IQueryable<Issue> query)
        {
            if (!String.IsNullOrEmpty(Criteria))
            {
                string[] searchWords =
                  Criteria.Split(" ".ToCharArray());
                query = query.Where(issueRecord => searchWords.Any(
                  criteriaWord => issueRecord.ProblemDescription.Contains(
                    criteriaWord)));
            }
        }


        //Listing 10-10. Query to carry out Soundex search

        partial void EngineerPhoneticSearch_PreprocessQuery(
        string Name, ref IQueryable<Engineer> query)
        {
            query = query.Where(
               engRecord => engRecord.Firstname.Contains(Name) ||
                 SqlFunctions.SoundCode(engRecord.Firstname) ==
                    SqlFunctions.SoundCode(Name));
        }


    }
}