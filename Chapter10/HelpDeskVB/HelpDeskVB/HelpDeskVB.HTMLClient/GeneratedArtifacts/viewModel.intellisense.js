/// <reference path="viewModel.js" />

(function (lightSwitchApplication) {

    var $element = document.createElement("div");

    lightSwitchApplication.Startup.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.Startup
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.Startup,
            data: lightSwitchApplication.Startup,
            value: lightSwitchApplication.Startup
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.Startup
        }
    };

    msls._addEntryPoints(lightSwitchApplication.Startup, {
        /// <field>
        /// Called when a new Startup screen is created.
        /// <br/>created(msls.application.Startup screen)
        /// </field>
        created: [lightSwitchApplication.Startup],
        /// <field>
        /// Called before changes on an active Startup screen are applied.
        /// <br/>beforeApplyChanges(msls.application.Startup screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.Startup],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.Startup().findContentItem("Group"); }]
    });

    lightSwitchApplication.AddEditIssue.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditIssue
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditIssue,
            data: lightSwitchApplication.AddEditIssue,
            value: lightSwitchApplication.AddEditIssue
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditIssue,
            data: lightSwitchApplication.AddEditIssue,
            value: lightSwitchApplication.Issue
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditIssue,
            data: lightSwitchApplication.Issue,
            value: lightSwitchApplication.Issue
        },
        TargetEndDateTime: {
            _$class: msls.ContentItem,
            _$name: "TargetEndDateTime",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditIssue,
            data: lightSwitchApplication.Issue,
            value: Date
        },
        Subject: {
            _$class: msls.ContentItem,
            _$name: "Subject",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditIssue,
            data: lightSwitchApplication.Issue,
            value: String
        },
        CreateDateTime: {
            _$class: msls.ContentItem,
            _$name: "CreateDateTime",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditIssue,
            data: lightSwitchApplication.Issue,
            value: Date
        },
        ProblemDescription: {
            _$class: msls.ContentItem,
            _$name: "ProblemDescription",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditIssue,
            data: lightSwitchApplication.Issue,
            value: String
        },
        AssignedEngineer: {
            _$class: msls.ContentItem,
            _$name: "AssignedEngineer",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditIssue,
            data: lightSwitchApplication.Issue,
            value: lightSwitchApplication.Engineer
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "AssignedEngineer",
            screen: lightSwitchApplication.AddEditIssue,
            data: lightSwitchApplication.Engineer,
            value: lightSwitchApplication.Engineer
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditIssue,
            data: lightSwitchApplication.Issue,
            value: lightSwitchApplication.Issue
        },
        ClosedByEngineer: {
            _$class: msls.ContentItem,
            _$name: "ClosedByEngineer",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditIssue,
            data: lightSwitchApplication.Issue,
            value: lightSwitchApplication.Engineer
        },
        RowTemplate1: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate1",
            _$parentName: "ClosedByEngineer",
            screen: lightSwitchApplication.AddEditIssue,
            data: lightSwitchApplication.Engineer,
            value: lightSwitchApplication.Engineer
        },
        Priority: {
            _$class: msls.ContentItem,
            _$name: "Priority",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditIssue,
            data: lightSwitchApplication.Issue,
            value: lightSwitchApplication.Priority
        },
        RowTemplate2: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate2",
            _$parentName: "Priority",
            screen: lightSwitchApplication.AddEditIssue,
            data: lightSwitchApplication.Priority,
            value: lightSwitchApplication.Priority
        },
        IssueStatus: {
            _$class: msls.ContentItem,
            _$name: "IssueStatus",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditIssue,
            data: lightSwitchApplication.Issue,
            value: lightSwitchApplication.IssueStatus
        },
        RowTemplate3: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate3",
            _$parentName: "IssueStatus",
            screen: lightSwitchApplication.AddEditIssue,
            data: lightSwitchApplication.IssueStatus,
            value: lightSwitchApplication.IssueStatus
        },
        ClosedDateTime: {
            _$class: msls.ContentItem,
            _$name: "ClosedDateTime",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditIssue,
            data: lightSwitchApplication.Issue,
            value: Date
        },
        Icon: {
            _$class: msls.ContentItem,
            _$name: "Icon",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditIssue,
            data: lightSwitchApplication.Issue,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditIssue
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditIssue, {
        /// <field>
        /// Called when a new AddEditIssue screen is created.
        /// <br/>created(msls.application.AddEditIssue screen)
        /// </field>
        created: [lightSwitchApplication.AddEditIssue],
        /// <field>
        /// Called before changes on an active AddEditIssue screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditIssue screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditIssue],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditIssue().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditIssue().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditIssue().findContentItem("left"); }],
        /// <field>
        /// Called after the TargetEndDateTime content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TargetEndDateTime_postRender: [$element, function () { return new lightSwitchApplication.AddEditIssue().findContentItem("TargetEndDateTime"); }],
        /// <field>
        /// Called after the Subject content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Subject_postRender: [$element, function () { return new lightSwitchApplication.AddEditIssue().findContentItem("Subject"); }],
        /// <field>
        /// Called after the CreateDateTime content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreateDateTime_postRender: [$element, function () { return new lightSwitchApplication.AddEditIssue().findContentItem("CreateDateTime"); }],
        /// <field>
        /// Called after the ProblemDescription content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProblemDescription_postRender: [$element, function () { return new lightSwitchApplication.AddEditIssue().findContentItem("ProblemDescription"); }],
        /// <field>
        /// Called after the AssignedEngineer content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AssignedEngineer_postRender: [$element, function () { return new lightSwitchApplication.AddEditIssue().findContentItem("AssignedEngineer"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditIssue().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditIssue().findContentItem("right"); }],
        /// <field>
        /// Called after the ClosedByEngineer content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ClosedByEngineer_postRender: [$element, function () { return new lightSwitchApplication.AddEditIssue().findContentItem("ClosedByEngineer"); }],
        /// <field>
        /// Called after the RowTemplate1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate1_postRender: [$element, function () { return new lightSwitchApplication.AddEditIssue().findContentItem("RowTemplate1"); }],
        /// <field>
        /// Called after the Priority content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Priority_postRender: [$element, function () { return new lightSwitchApplication.AddEditIssue().findContentItem("Priority"); }],
        /// <field>
        /// Called after the RowTemplate2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate2_postRender: [$element, function () { return new lightSwitchApplication.AddEditIssue().findContentItem("RowTemplate2"); }],
        /// <field>
        /// Called after the IssueStatus content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IssueStatus_postRender: [$element, function () { return new lightSwitchApplication.AddEditIssue().findContentItem("IssueStatus"); }],
        /// <field>
        /// Called after the RowTemplate3 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate3_postRender: [$element, function () { return new lightSwitchApplication.AddEditIssue().findContentItem("RowTemplate3"); }],
        /// <field>
        /// Called after the ClosedDateTime content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ClosedDateTime_postRender: [$element, function () { return new lightSwitchApplication.AddEditIssue().findContentItem("ClosedDateTime"); }],
        /// <field>
        /// Called after the Icon content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Icon_postRender: [$element, function () { return new lightSwitchApplication.AddEditIssue().findContentItem("Icon"); }]
    });

    lightSwitchApplication.ViewIssue.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewIssue
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ViewIssue,
            data: lightSwitchApplication.ViewIssue,
            value: lightSwitchApplication.ViewIssue
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.ViewIssue,
            data: lightSwitchApplication.ViewIssue,
            value: lightSwitchApplication.Issue
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewIssue,
            data: lightSwitchApplication.Issue,
            value: lightSwitchApplication.Issue
        },
        TargetEndDateTime: {
            _$class: msls.ContentItem,
            _$name: "TargetEndDateTime",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewIssue,
            data: lightSwitchApplication.Issue,
            value: Date
        },
        Subject: {
            _$class: msls.ContentItem,
            _$name: "Subject",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewIssue,
            data: lightSwitchApplication.Issue,
            value: String
        },
        CreateDateTime: {
            _$class: msls.ContentItem,
            _$name: "CreateDateTime",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewIssue,
            data: lightSwitchApplication.Issue,
            value: Date
        },
        ProblemDescription: {
            _$class: msls.ContentItem,
            _$name: "ProblemDescription",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewIssue,
            data: lightSwitchApplication.Issue,
            value: String
        },
        AssignedEngineer: {
            _$class: msls.ContentItem,
            _$name: "AssignedEngineer",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewIssue,
            data: lightSwitchApplication.Issue,
            value: lightSwitchApplication.Engineer
        },
        ClosedByEngineer: {
            _$class: msls.ContentItem,
            _$name: "ClosedByEngineer",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewIssue,
            data: lightSwitchApplication.Issue,
            value: lightSwitchApplication.Engineer
        },
        Priority: {
            _$class: msls.ContentItem,
            _$name: "Priority",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewIssue,
            data: lightSwitchApplication.Issue,
            value: lightSwitchApplication.Priority
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewIssue,
            data: lightSwitchApplication.Issue,
            value: lightSwitchApplication.Issue
        },
        IssueStatus: {
            _$class: msls.ContentItem,
            _$name: "IssueStatus",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewIssue,
            data: lightSwitchApplication.Issue,
            value: lightSwitchApplication.IssueStatus
        },
        ClosedDateTime: {
            _$class: msls.ContentItem,
            _$name: "ClosedDateTime",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewIssue,
            data: lightSwitchApplication.Issue,
            value: Date
        },
        CreatedBy: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewIssue,
            data: lightSwitchApplication.Issue,
            value: String
        },
        Created: {
            _$class: msls.ContentItem,
            _$name: "Created",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewIssue,
            data: lightSwitchApplication.Issue,
            value: Date
        },
        ModifiedBy: {
            _$class: msls.ContentItem,
            _$name: "ModifiedBy",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewIssue,
            data: lightSwitchApplication.Issue,
            value: String
        },
        Modified: {
            _$class: msls.ContentItem,
            _$name: "Modified",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewIssue,
            data: lightSwitchApplication.Issue,
            value: Date
        },
        Icon: {
            _$class: msls.ContentItem,
            _$name: "Icon",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewIssue,
            data: lightSwitchApplication.Issue,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewIssue
        }
    };

    msls._addEntryPoints(lightSwitchApplication.ViewIssue, {
        /// <field>
        /// Called when a new ViewIssue screen is created.
        /// <br/>created(msls.application.ViewIssue screen)
        /// </field>
        created: [lightSwitchApplication.ViewIssue],
        /// <field>
        /// Called before changes on an active ViewIssue screen are applied.
        /// <br/>beforeApplyChanges(msls.application.ViewIssue screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.ViewIssue],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.ViewIssue().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.ViewIssue().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.ViewIssue().findContentItem("left"); }],
        /// <field>
        /// Called after the TargetEndDateTime content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TargetEndDateTime_postRender: [$element, function () { return new lightSwitchApplication.ViewIssue().findContentItem("TargetEndDateTime"); }],
        /// <field>
        /// Called after the Subject content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Subject_postRender: [$element, function () { return new lightSwitchApplication.ViewIssue().findContentItem("Subject"); }],
        /// <field>
        /// Called after the CreateDateTime content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreateDateTime_postRender: [$element, function () { return new lightSwitchApplication.ViewIssue().findContentItem("CreateDateTime"); }],
        /// <field>
        /// Called after the ProblemDescription content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProblemDescription_postRender: [$element, function () { return new lightSwitchApplication.ViewIssue().findContentItem("ProblemDescription"); }],
        /// <field>
        /// Called after the AssignedEngineer content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AssignedEngineer_postRender: [$element, function () { return new lightSwitchApplication.ViewIssue().findContentItem("AssignedEngineer"); }],
        /// <field>
        /// Called after the ClosedByEngineer content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ClosedByEngineer_postRender: [$element, function () { return new lightSwitchApplication.ViewIssue().findContentItem("ClosedByEngineer"); }],
        /// <field>
        /// Called after the Priority content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Priority_postRender: [$element, function () { return new lightSwitchApplication.ViewIssue().findContentItem("Priority"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.ViewIssue().findContentItem("right"); }],
        /// <field>
        /// Called after the IssueStatus content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IssueStatus_postRender: [$element, function () { return new lightSwitchApplication.ViewIssue().findContentItem("IssueStatus"); }],
        /// <field>
        /// Called after the ClosedDateTime content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ClosedDateTime_postRender: [$element, function () { return new lightSwitchApplication.ViewIssue().findContentItem("ClosedDateTime"); }],
        /// <field>
        /// Called after the CreatedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.ViewIssue().findContentItem("CreatedBy"); }],
        /// <field>
        /// Called after the Created content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Created_postRender: [$element, function () { return new lightSwitchApplication.ViewIssue().findContentItem("Created"); }],
        /// <field>
        /// Called after the ModifiedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ModifiedBy_postRender: [$element, function () { return new lightSwitchApplication.ViewIssue().findContentItem("ModifiedBy"); }],
        /// <field>
        /// Called after the Modified content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Modified_postRender: [$element, function () { return new lightSwitchApplication.ViewIssue().findContentItem("Modified"); }],
        /// <field>
        /// Called after the Icon content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Icon_postRender: [$element, function () { return new lightSwitchApplication.ViewIssue().findContentItem("Icon"); }]
    });

    lightSwitchApplication.BrowseIssues.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseIssues
        },
        IssueList: {
            _$class: msls.ContentItem,
            _$name: "IssueList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseIssues,
            data: lightSwitchApplication.BrowseIssues,
            value: lightSwitchApplication.BrowseIssues
        },
        Issues: {
            _$class: msls.ContentItem,
            _$name: "Issues",
            _$parentName: "IssueList",
            screen: lightSwitchApplication.BrowseIssues,
            data: lightSwitchApplication.BrowseIssues,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseIssues,
                _$entry: {
                    elementType: lightSwitchApplication.Issue
                }
            }
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Issues",
            screen: lightSwitchApplication.BrowseIssues,
            data: lightSwitchApplication.Issue,
            value: lightSwitchApplication.Issue
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "columns",
            screen: lightSwitchApplication.BrowseIssues,
            data: lightSwitchApplication.Issue,
            value: lightSwitchApplication.Issue
        },
        Subject: {
            _$class: msls.ContentItem,
            _$name: "Subject",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseIssues,
            data: lightSwitchApplication.Issue,
            value: String
        },
        TargetEndDateTime: {
            _$class: msls.ContentItem,
            _$name: "TargetEndDateTime",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseIssues,
            data: lightSwitchApplication.Issue,
            value: Date
        },
        CreateDateTime: {
            _$class: msls.ContentItem,
            _$name: "CreateDateTime",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseIssues,
            data: lightSwitchApplication.Issue,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseIssues
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseIssues, {
        /// <field>
        /// Called when a new BrowseIssues screen is created.
        /// <br/>created(msls.application.BrowseIssues screen)
        /// </field>
        created: [lightSwitchApplication.BrowseIssues],
        /// <field>
        /// Called before changes on an active BrowseIssues screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseIssues screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseIssues],
        /// <field>
        /// Called after the IssueList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IssueList_postRender: [$element, function () { return new lightSwitchApplication.BrowseIssues().findContentItem("IssueList"); }],
        /// <field>
        /// Called after the Issues content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Issues_postRender: [$element, function () { return new lightSwitchApplication.BrowseIssues().findContentItem("Issues"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.BrowseIssues().findContentItem("columns"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.BrowseIssues().findContentItem("rows"); }],
        /// <field>
        /// Called after the Subject content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Subject_postRender: [$element, function () { return new lightSwitchApplication.BrowseIssues().findContentItem("Subject"); }],
        /// <field>
        /// Called after the TargetEndDateTime content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TargetEndDateTime_postRender: [$element, function () { return new lightSwitchApplication.BrowseIssues().findContentItem("TargetEndDateTime"); }],
        /// <field>
        /// Called after the CreateDateTime content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreateDateTime_postRender: [$element, function () { return new lightSwitchApplication.BrowseIssues().findContentItem("CreateDateTime"); }]
    });

    lightSwitchApplication.BrowseIssuesSearch.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseIssuesSearch
        },
        IssueList: {
            _$class: msls.ContentItem,
            _$name: "IssueList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseIssuesSearch,
            data: lightSwitchApplication.BrowseIssuesSearch,
            value: lightSwitchApplication.BrowseIssuesSearch
        },
        IssueProblemDescription: {
            _$class: msls.ContentItem,
            _$name: "IssueProblemDescription",
            _$parentName: "IssueList",
            screen: lightSwitchApplication.BrowseIssuesSearch,
            data: lightSwitchApplication.BrowseIssuesSearch,
            value: String
        },
        IssuesSearch: {
            _$class: msls.ContentItem,
            _$name: "IssuesSearch",
            _$parentName: "IssueList",
            screen: lightSwitchApplication.BrowseIssuesSearch,
            data: lightSwitchApplication.BrowseIssuesSearch,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseIssuesSearch,
                _$entry: {
                    elementType: lightSwitchApplication.Issue
                }
            }
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "IssuesSearch",
            screen: lightSwitchApplication.BrowseIssuesSearch,
            data: lightSwitchApplication.Issue,
            value: lightSwitchApplication.Issue
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "columns",
            screen: lightSwitchApplication.BrowseIssuesSearch,
            data: lightSwitchApplication.Issue,
            value: lightSwitchApplication.Issue
        },
        Subject: {
            _$class: msls.ContentItem,
            _$name: "Subject",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseIssuesSearch,
            data: lightSwitchApplication.Issue,
            value: String
        },
        TargetEndDateTime: {
            _$class: msls.ContentItem,
            _$name: "TargetEndDateTime",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseIssuesSearch,
            data: lightSwitchApplication.Issue,
            value: Date
        },
        CreateDateTime: {
            _$class: msls.ContentItem,
            _$name: "CreateDateTime",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseIssuesSearch,
            data: lightSwitchApplication.Issue,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseIssuesSearch
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseIssuesSearch, {
        /// <field>
        /// Called when a new BrowseIssuesSearch screen is created.
        /// <br/>created(msls.application.BrowseIssuesSearch screen)
        /// </field>
        created: [lightSwitchApplication.BrowseIssuesSearch],
        /// <field>
        /// Called before changes on an active BrowseIssuesSearch screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseIssuesSearch screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseIssuesSearch],
        /// <field>
        /// Called after the IssueList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IssueList_postRender: [$element, function () { return new lightSwitchApplication.BrowseIssuesSearch().findContentItem("IssueList"); }],
        /// <field>
        /// Called after the IssueProblemDescription content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IssueProblemDescription_postRender: [$element, function () { return new lightSwitchApplication.BrowseIssuesSearch().findContentItem("IssueProblemDescription"); }],
        /// <field>
        /// Called after the IssuesSearch content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IssuesSearch_postRender: [$element, function () { return new lightSwitchApplication.BrowseIssuesSearch().findContentItem("IssuesSearch"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.BrowseIssuesSearch().findContentItem("columns"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.BrowseIssuesSearch().findContentItem("rows"); }],
        /// <field>
        /// Called after the Subject content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Subject_postRender: [$element, function () { return new lightSwitchApplication.BrowseIssuesSearch().findContentItem("Subject"); }],
        /// <field>
        /// Called after the TargetEndDateTime content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TargetEndDateTime_postRender: [$element, function () { return new lightSwitchApplication.BrowseIssuesSearch().findContentItem("TargetEndDateTime"); }],
        /// <field>
        /// Called after the CreateDateTime content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreateDateTime_postRender: [$element, function () { return new lightSwitchApplication.BrowseIssuesSearch().findContentItem("CreateDateTime"); }]
    });

}(msls.application));