//Listing 11-12. Multi-select JavaScript helper files

var issueArray = [];

// Add id value to the array if not exists
function checkIssue(id) {
    if (issueArray.indexOf(id) == -1) // id isn't already in the array
    {
        issueArray.push(id);
    }
}

// Remove id value from the array
function uncheckIssue(id) {
    var i = issueArray.indexOf(id);
    if (i != -1) {
        issueArray.splice(i, 1);
    }
}

// Clear the contents of the array
function clearCheckedIssues() {
    issueArray.length = 0;
}

// Get a CSV representation of the array
function getCheckedIssues() {
    return issueArray.join(", ");
}
