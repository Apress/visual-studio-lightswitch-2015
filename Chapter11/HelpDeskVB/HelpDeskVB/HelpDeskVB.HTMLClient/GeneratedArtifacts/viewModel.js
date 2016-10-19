/// <reference path="data.js" />

(function (lightSwitchApplication) {

    var $Screen = msls.Screen,
        $defineScreen = msls._defineScreen,
        $DataServiceQuery = msls.DataServiceQuery,
        $toODataString = msls._toODataString,
        $defineShowScreen = msls._defineShowScreen;

    function AddEditDepartment(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditDepartment screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Department" type="msls.application.Department">
        /// Gets or sets the department for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditDepartment.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditDepartment", parameters);
    }

    function BrowseDepartments(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseDepartments screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Departments" type="msls.VisualCollection" elementType="msls.application.Department">
        /// Gets the departments for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseDepartments.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseDepartments", parameters);
    }

    function ViewDepartment(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the ViewDepartment screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Department" type="msls.application.Department">
        /// Gets or sets the department for this screen.
        /// </field>
        /// <field name="details" type="msls.application.ViewDepartment.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ViewDepartment", parameters);
    }

    function AddEditEngineer(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditEngineer screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Engineer" type="msls.application.Engineer">
        /// Gets or sets the engineer for this screen.
        /// </field>
        /// <field name="EngineerToAdd" type="msls.application.Engineer">
        /// Gets or sets the engineerToAdd for this screen.
        /// </field>
        /// <field name="Subordinates" type="msls.VisualCollection" elementType="msls.application.Engineer">
        /// Gets the subordinates for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditEngineer.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditEngineer", parameters);
    }

    function BrowseEngineers(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseEngineers screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Engineers" type="msls.VisualCollection" elementType="msls.application.Engineer">
        /// Gets the engineers for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseEngineers.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseEngineers", parameters);
    }

    function ViewEngineer(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the ViewEngineer screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Engineer" type="msls.application.Engineer">
        /// Gets or sets the engineer for this screen.
        /// </field>
        /// <field name="details" type="msls.application.ViewEngineer.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ViewEngineer", parameters);
    }

    function AddEditIssueDocument(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditIssueDocument screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="IssueDocument" type="msls.application.IssueDocument">
        /// Gets or sets the issueDocument for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditIssueDocument.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditIssueDocument", parameters);
    }

    function BrowseIssueDocuments(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseIssueDocuments screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="IssueDocuments" type="msls.VisualCollection" elementType="msls.application.IssueDocument">
        /// Gets the issueDocuments for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseIssueDocuments.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseIssueDocuments", parameters);
    }

    function ViewIssueDocument(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the ViewIssueDocument screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="IssueDocument" type="msls.application.IssueDocument">
        /// Gets or sets the issueDocument for this screen.
        /// </field>
        /// <field name="details" type="msls.application.ViewIssueDocument.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ViewIssueDocument", parameters);
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

    function CloseSelectedIssues(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the CloseSelectedIssues screen.
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
        /// <field name="details" type="msls.application.CloseSelectedIssues.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "CloseSelectedIssues", parameters);
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

    function AddEditTimesheet(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditTimesheet screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Timesheet" type="msls.application.Timesheet">
        /// Gets or sets the timesheet for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditTimesheet.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditTimesheet", parameters);
    }

    function BrowseTimesheets(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseTimesheets screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Timesheets" type="msls.VisualCollection" elementType="msls.application.Timesheet">
        /// Gets the timesheets for this screen.
        /// </field>
        /// <field name="TotalMinutes" type="Number">
        /// Gets or sets the totalMinutes for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseTimesheets.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseTimesheets", parameters);
    }

    function ViewTimesheet(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the ViewTimesheet screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Timesheet" type="msls.application.Timesheet">
        /// Gets or sets the timesheet for this screen.
        /// </field>
        /// <field name="details" type="msls.application.ViewTimesheet.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ViewTimesheet", parameters);
    }

    function AppOptionsEdit(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AppOptionsEdit screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="AppOptionProperty" type="msls.application.AppOption">
        /// Gets or sets the appOptionProperty for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AppOptionsEdit.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AppOptionsEdit", parameters);
    }

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

    msls._addToNamespace("msls.application", {

        AddEditDepartment: $defineScreen(AddEditDepartment, [
            { name: "Department", kind: "local", type: lightSwitchApplication.Department }
        ], [
            { name: "GetLocation" }
        ]),

        BrowseDepartments: $defineScreen(BrowseDepartments, [
            {
                name: "Departments", kind: "collection", elementType: lightSwitchApplication.Department,
                createQuery: function () {
                    return this.dataWorkspace.ApplicationData.Departments;
                }
            }
        ], [
        ]),

        ViewDepartment: $defineScreen(ViewDepartment, [
            { name: "Department", kind: "local", type: lightSwitchApplication.Department }
        ], [
        ]),

        AddEditEngineer: $defineScreen(AddEditEngineer, [
            { name: "Engineer", kind: "local", type: lightSwitchApplication.Engineer },
            { name: "EngineerToAdd", kind: "local", type: lightSwitchApplication.Engineer },
            {
                name: "Subordinates", kind: "collection", elementType: lightSwitchApplication.Engineer,
                getNavigationProperty: function () {
                    if (this.owner.Engineer) {
                        return this.owner.Engineer.details.properties.Subordinates;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this;
                }
            }
        ], [
            { name: "AssignSubordinate" },
            { name: "DeassignSubordinate" }
        ]),

        BrowseEngineers: $defineScreen(BrowseEngineers, [
            {
                name: "Engineers", kind: "collection", elementType: lightSwitchApplication.Engineer,
                createQuery: function () {
                    return this.dataWorkspace.ApplicationData.Engineers;
                }
            }
        ], [
        ]),

        ViewEngineer: $defineScreen(ViewEngineer, [
            { name: "Engineer", kind: "local", type: lightSwitchApplication.Engineer }
        ], [
        ]),

        AddEditIssueDocument: $defineScreen(AddEditIssueDocument, [
            { name: "IssueDocument", kind: "local", type: lightSwitchApplication.IssueDocument }
        ], [
        ]),

        BrowseIssueDocuments: $defineScreen(BrowseIssueDocuments, [
            {
                name: "IssueDocuments", kind: "collection", elementType: lightSwitchApplication.IssueDocument,
                createQuery: function () {
                    return this.dataWorkspace.ApplicationData.IssueDocuments;
                }
            }
        ], [
        ]),

        ViewIssueDocument: $defineScreen(ViewIssueDocument, [
            { name: "IssueDocument", kind: "local", type: lightSwitchApplication.IssueDocument }
        ], [
        ]),

        AddEditIssue: $defineScreen(AddEditIssue, [
            { name: "Issue", kind: "local", type: lightSwitchApplication.Issue }
        ], [
        ]),

        BrowseIssues: $defineScreen(BrowseIssues, [
            {
                name: "Issues", kind: "collection", elementType: lightSwitchApplication.Issue,
                createQuery: function () {
                    return this.dataWorkspace.ApplicationData.Issues.expand("IssueStatus");
                }
            }
        ], [
        ]),

        CloseSelectedIssues: $defineScreen(CloseSelectedIssues, [
            {
                name: "Issues", kind: "collection", elementType: lightSwitchApplication.Issue,
                createQuery: function () {
                    return this.dataWorkspace.ApplicationData.Issues;
                }
            }
        ], [
            { name: "CloseIssues" }
        ]),

        ViewIssue: $defineScreen(ViewIssue, [
            { name: "Issue", kind: "local", type: lightSwitchApplication.Issue }
        ], [
        ]),

        AddEditTimesheet: $defineScreen(AddEditTimesheet, [
            { name: "Timesheet", kind: "local", type: lightSwitchApplication.Timesheet }
        ], [
        ]),

        BrowseTimesheets: $defineScreen(BrowseTimesheets, [
            {
                name: "Timesheets", kind: "collection", elementType: lightSwitchApplication.Timesheet,
                createQuery: function () {
                    return this.dataWorkspace.ApplicationData.Timesheets.expand("Engineer");
                }
            },
            { name: "TotalMinutes", kind: "local", type: Number }
        ], [
        ]),

        ViewTimesheet: $defineScreen(ViewTimesheet, [
            { name: "Timesheet", kind: "local", type: lightSwitchApplication.Timesheet }
        ], [
        ]),

        AppOptionsEdit: $defineScreen(AppOptionsEdit, [
            { name: "AppOptionProperty", kind: "local", type: lightSwitchApplication.AppOption }
        ], [
            { name: "SaveAppOption" }
        ]),

        Startup: $defineScreen(Startup, [
        ], [
        ]),

        showAddEditDepartment: $defineShowScreen(function showAddEditDepartment(Department, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditDepartment screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditDepartment", parameters, options);
        }),

        showBrowseDepartments: $defineShowScreen(function showBrowseDepartments(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseDepartments screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseDepartments", parameters, options);
        }),

        showViewDepartment: $defineShowScreen(function showViewDepartment(Department, options) {
            /// <summary>
            /// Asynchronously navigates forward to the ViewDepartment screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("ViewDepartment", parameters, options);
        }),

        showAddEditEngineer: $defineShowScreen(function showAddEditEngineer(Engineer, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditEngineer screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditEngineer", parameters, options);
        }),

        showBrowseEngineers: $defineShowScreen(function showBrowseEngineers(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseEngineers screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseEngineers", parameters, options);
        }),

        showViewEngineer: $defineShowScreen(function showViewEngineer(Engineer, options) {
            /// <summary>
            /// Asynchronously navigates forward to the ViewEngineer screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("ViewEngineer", parameters, options);
        }),

        showAddEditIssueDocument: $defineShowScreen(function showAddEditIssueDocument(IssueDocument, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditIssueDocument screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditIssueDocument", parameters, options);
        }),

        showBrowseIssueDocuments: $defineShowScreen(function showBrowseIssueDocuments(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseIssueDocuments screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseIssueDocuments", parameters, options);
        }),

        showViewIssueDocument: $defineShowScreen(function showViewIssueDocument(IssueDocument, options) {
            /// <summary>
            /// Asynchronously navigates forward to the ViewIssueDocument screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("ViewIssueDocument", parameters, options);
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

        showCloseSelectedIssues: $defineShowScreen(function showCloseSelectedIssues(options) {
            /// <summary>
            /// Asynchronously navigates forward to the CloseSelectedIssues screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("CloseSelectedIssues", parameters, options);
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

        showAddEditTimesheet: $defineShowScreen(function showAddEditTimesheet(Timesheet, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditTimesheet screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditTimesheet", parameters, options);
        }),

        showBrowseTimesheets: $defineShowScreen(function showBrowseTimesheets(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseTimesheets screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseTimesheets", parameters, options);
        }),

        showViewTimesheet: $defineShowScreen(function showViewTimesheet(Timesheet, options) {
            /// <summary>
            /// Asynchronously navigates forward to the ViewTimesheet screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("ViewTimesheet", parameters, options);
        }),

        showAppOptionsEdit: $defineShowScreen(function showAppOptionsEdit(options) {
            /// <summary>
            /// Asynchronously navigates forward to the AppOptionsEdit screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("AppOptionsEdit", parameters, options);
        }),

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
        })

    });

}(msls.application));
