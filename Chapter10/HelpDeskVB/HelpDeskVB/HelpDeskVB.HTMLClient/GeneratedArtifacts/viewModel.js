/// <reference path="data.js" />

(function (lightSwitchApplication) {

    var $Screen = msls.Screen,
        $defineScreen = msls._defineScreen,
        $DataServiceQuery = msls.DataServiceQuery,
        $toODataString = msls._toODataString,
        $defineShowScreen = msls._defineShowScreen;

    function Startup(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the Startup screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="details" type="msls.application.Startup.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "Startup", parameters);
    }

    function AddEditIssue(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditIssue screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Issue" type="msls.application.Issue">
        /// Gets or sets the issue for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditIssue.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditIssue", parameters);
    }

    function ViewIssue(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the ViewIssue screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Issue" type="msls.application.Issue">
        /// Gets or sets the issue for this screen.
        /// </field>
        /// <field name="details" type="msls.application.ViewIssue.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ViewIssue", parameters);
    }

    function BrowseIssues(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseIssues screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Issues" type="msls.VisualCollection" elementType="msls.application.Issue">
        /// Gets the issues for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseIssues.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseIssues", parameters);
    }

    function BrowseIssuesSearch(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseIssuesSearch screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="IssuesSearch" type="msls.VisualCollection" elementType="msls.application.Issue">
        /// Gets the issuesSearch for this screen.
        /// </field>
        /// <field name="IssueProblemDescription" type="String">
        /// Gets or sets the issueProblemDescription for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseIssuesSearch.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseIssuesSearch", parameters);
    }

    msls._addToNamespace("msls.application", {

        Startup: $defineScreen(Startup, [
        ], [
        ]),

        AddEditIssue: $defineScreen(AddEditIssue, [
            { name: "Issue", kind: "local", type: lightSwitchApplication.Issue }
        ], [
        ]),

        ViewIssue: $defineScreen(ViewIssue, [
            { name: "Issue", kind: "local", type: lightSwitchApplication.Issue }
        ], [
        ]),

        BrowseIssues: $defineScreen(BrowseIssues, [
            {
                name: "Issues", kind: "collection", elementType: lightSwitchApplication.Issue,
                createQuery: function () {
                    return this.dataWorkspace.ApplicationData.Issues;
                }
            }
        ], [
        ]),

        BrowseIssuesSearch: $defineScreen(BrowseIssuesSearch, [
            {
                name: "IssuesSearch", kind: "collection", elementType: lightSwitchApplication.Issue,
                createQuery: function (ProblemDescription) {
                    return this.dataWorkspace.ApplicationData.IssuesSearch(ProblemDescription);
                }
            },
            { name: "IssueProblemDescription", kind: "local", type: String }
        ], [
        ]),

        showStartup: $defineShowScreen(function showStartup(options) {
            /// <summary>
            /// Asynchronously navigates forward to the Startup screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("Startup", parameters, options);
        }),

        showAddEditIssue: $defineShowScreen(function showAddEditIssue(Issue, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditIssue screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditIssue", parameters, options);
        }),

        showViewIssue: $defineShowScreen(function showViewIssue(Issue, options) {
            /// <summary>
            /// Asynchronously navigates forward to the ViewIssue screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("ViewIssue", parameters, options);
        }),

        showBrowseIssues: $defineShowScreen(function showBrowseIssues(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseIssues screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseIssues", parameters, options);
        }),

        showBrowseIssuesSearch: $defineShowScreen(function showBrowseIssuesSearch(IssueProblemDescription, options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseIssuesSearch screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("BrowseIssuesSearch", parameters, options);
        })

    });

}(msls.application));
