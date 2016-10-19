//Listing 8-26. JavaScript changes
function toggleEngineerMenu() {
    $(".prols-menu-engineers").toggle();
    $(".prols-menu-issues").hide();
};

function toggleIssueMenu() {
    $(".prols-menu-issues").toggle();
    $(".prols-menu-engineers").hide();
};

function showHomeScreen() {
    $(".prols-menu-issues").hide();
    $(".prols-menu-engineers").hide();
    myapp.navigateHome();
};
