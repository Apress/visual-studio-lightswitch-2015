/// <reference path="viewModel.js" />

(function (lightSwitchApplication) {

    var $element = document.createElement("div");

    lightSwitchApplication.AddEditEngineer.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditEngineer
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditEngineer,
            data: lightSwitchApplication.AddEditEngineer,
            value: lightSwitchApplication.AddEditEngineer
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditEngineer,
            data: lightSwitchApplication.AddEditEngineer,
            value: lightSwitchApplication.Engineer
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditEngineer,
            data: lightSwitchApplication.Engineer,
            value: lightSwitchApplication.Engineer
        },
        Surname: {
            _$class: msls.ContentItem,
            _$name: "Surname",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditEngineer,
            data: lightSwitchApplication.Engineer,
            value: String
        },
        Firstname: {
            _$class: msls.ContentItem,
            _$name: "Firstname",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditEngineer,
            data: lightSwitchApplication.Engineer,
            value: String
        },
        DateOfBirth: {
            _$class: msls.ContentItem,
            _$name: "DateOfBirth",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditEngineer,
            data: lightSwitchApplication.Engineer,
            value: Date
        },
        LoginName: {
            _$class: msls.ContentItem,
            _$name: "LoginName",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditEngineer,
            data: lightSwitchApplication.Engineer,
            value: String
        },
        SSN: {
            _$class: msls.ContentItem,
            _$name: "SSN",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditEngineer,
            data: lightSwitchApplication.Engineer,
            value: String
        },
        EngineerPhoto: {
            _$class: msls.ContentItem,
            _$name: "EngineerPhoto",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditEngineer,
            data: lightSwitchApplication.Engineer,
            value: String
        },
        SecurityVetted: {
            _$class: msls.ContentItem,
            _$name: "SecurityVetted",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditEngineer,
            data: lightSwitchApplication.Engineer,
            value: Boolean
        },
        ClearanceReference: {
            _$class: msls.ContentItem,
            _$name: "ClearanceReference",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditEngineer,
            data: lightSwitchApplication.Engineer,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditEngineer,
            data: lightSwitchApplication.Engineer,
            value: lightSwitchApplication.Engineer
        },
        VettingExpiryDate: {
            _$class: msls.ContentItem,
            _$name: "VettingExpiryDate",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditEngineer,
            data: lightSwitchApplication.Engineer,
            value: Date
        },
        EmailAddress: {
            _$class: msls.ContentItem,
            _$name: "EmailAddress",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditEngineer,
            data: lightSwitchApplication.Engineer,
            value: String
        },
        UserProfile: {
            _$class: msls.ContentItem,
            _$name: "UserProfile",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditEngineer,
            data: lightSwitchApplication.Engineer,
            value: String
        },
        Manager: {
            _$class: msls.ContentItem,
            _$name: "Manager",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditEngineer,
            data: lightSwitchApplication.Engineer,
            value: lightSwitchApplication.Engineer
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "Manager",
            screen: lightSwitchApplication.AddEditEngineer,
            data: lightSwitchApplication.Engineer,
            value: lightSwitchApplication.Engineer
        },
        Fullname: {
            _$class: msls.ContentItem,
            _$name: "Fullname",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditEngineer,
            data: lightSwitchApplication.Engineer,
            value: String
        },
        IssueCount: {
            _$class: msls.ContentItem,
            _$name: "IssueCount",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditEngineer,
            data: lightSwitchApplication.Engineer,
            value: Number
        },
        Age: {
            _$class: msls.ContentItem,
            _$name: "Age",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditEngineer,
            data: lightSwitchApplication.Engineer,
            value: Number
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditEngineer
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditEngineer, {
        /// <field>
        /// Called when a new AddEditEngineer screen is created.
        /// <br/>created(msls.application.AddEditEngineer screen)
        /// </field>
        created: [lightSwitchApplication.AddEditEngineer],
        /// <field>
        /// Called before changes on an active AddEditEngineer screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditEngineer screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditEngineer],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditEngineer().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditEngineer().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditEngineer().findContentItem("left"); }],
        /// <field>
        /// Called after the Surname content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Surname_postRender: [$element, function () { return new lightSwitchApplication.AddEditEngineer().findContentItem("Surname"); }],
        /// <field>
        /// Called after the Firstname content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Firstname_postRender: [$element, function () { return new lightSwitchApplication.AddEditEngineer().findContentItem("Firstname"); }],
        /// <field>
        /// Called after the DateOfBirth content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateOfBirth_postRender: [$element, function () { return new lightSwitchApplication.AddEditEngineer().findContentItem("DateOfBirth"); }],
        /// <field>
        /// Called after the LoginName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LoginName_postRender: [$element, function () { return new lightSwitchApplication.AddEditEngineer().findContentItem("LoginName"); }],
        /// <field>
        /// Called after the SSN content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SSN_postRender: [$element, function () { return new lightSwitchApplication.AddEditEngineer().findContentItem("SSN"); }],
        /// <field>
        /// Called after the EngineerPhoto content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EngineerPhoto_postRender: [$element, function () { return new lightSwitchApplication.AddEditEngineer().findContentItem("EngineerPhoto"); }],
        /// <field>
        /// Called after the SecurityVetted content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SecurityVetted_postRender: [$element, function () { return new lightSwitchApplication.AddEditEngineer().findContentItem("SecurityVetted"); }],
        /// <field>
        /// Called after the ClearanceReference content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ClearanceReference_postRender: [$element, function () { return new lightSwitchApplication.AddEditEngineer().findContentItem("ClearanceReference"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditEngineer().findContentItem("right"); }],
        /// <field>
        /// Called after the VettingExpiryDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        VettingExpiryDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditEngineer().findContentItem("VettingExpiryDate"); }],
        /// <field>
        /// Called after the EmailAddress content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmailAddress_postRender: [$element, function () { return new lightSwitchApplication.AddEditEngineer().findContentItem("EmailAddress"); }],
        /// <field>
        /// Called after the UserProfile content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UserProfile_postRender: [$element, function () { return new lightSwitchApplication.AddEditEngineer().findContentItem("UserProfile"); }],
        /// <field>
        /// Called after the Manager content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Manager_postRender: [$element, function () { return new lightSwitchApplication.AddEditEngineer().findContentItem("Manager"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditEngineer().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the Fullname content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Fullname_postRender: [$element, function () { return new lightSwitchApplication.AddEditEngineer().findContentItem("Fullname"); }],
        /// <field>
        /// Called after the IssueCount content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IssueCount_postRender: [$element, function () { return new lightSwitchApplication.AddEditEngineer().findContentItem("IssueCount"); }],
        /// <field>
        /// Called after the Age content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Age_postRender: [$element, function () { return new lightSwitchApplication.AddEditEngineer().findContentItem("Age"); }]
    });

    lightSwitchApplication.BrowseEngineers.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseEngineers
        },
        EngineerList: {
            _$class: msls.ContentItem,
            _$name: "EngineerList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseEngineers,
            data: lightSwitchApplication.BrowseEngineers,
            value: lightSwitchApplication.BrowseEngineers
        },
        Engineers: {
            _$class: msls.ContentItem,
            _$name: "Engineers",
            _$parentName: "EngineerList",
            screen: lightSwitchApplication.BrowseEngineers,
            data: lightSwitchApplication.BrowseEngineers,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseEngineers,
                _$entry: {
                    elementType: lightSwitchApplication.Engineer
                }
            }
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Engineers",
            screen: lightSwitchApplication.BrowseEngineers,
            data: lightSwitchApplication.Engineer,
            value: lightSwitchApplication.Engineer
        },
        EngineerPhoto: {
            _$class: msls.ContentItem,
            _$name: "EngineerPhoto",
            _$parentName: "columns",
            screen: lightSwitchApplication.BrowseEngineers,
            data: lightSwitchApplication.Engineer,
            value: String
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "columns",
            screen: lightSwitchApplication.BrowseEngineers,
            data: lightSwitchApplication.Engineer,
            value: lightSwitchApplication.Engineer
        },
        Surname: {
            _$class: msls.ContentItem,
            _$name: "Surname",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseEngineers,
            data: lightSwitchApplication.Engineer,
            value: String
        },
        Firstname: {
            _$class: msls.ContentItem,
            _$name: "Firstname",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseEngineers,
            data: lightSwitchApplication.Engineer,
            value: String
        },
        DateOfBirth: {
            _$class: msls.ContentItem,
            _$name: "DateOfBirth",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseEngineers,
            data: lightSwitchApplication.Engineer,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseEngineers
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseEngineers, {
        /// <field>
        /// Called when a new BrowseEngineers screen is created.
        /// <br/>created(msls.application.BrowseEngineers screen)
        /// </field>
        created: [lightSwitchApplication.BrowseEngineers],
        /// <field>
        /// Called before changes on an active BrowseEngineers screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseEngineers screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseEngineers],
        /// <field>
        /// Called after the EngineerList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EngineerList_postRender: [$element, function () { return new lightSwitchApplication.BrowseEngineers().findContentItem("EngineerList"); }],
        /// <field>
        /// Called after the Engineers content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Engineers_postRender: [$element, function () { return new lightSwitchApplication.BrowseEngineers().findContentItem("Engineers"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.BrowseEngineers().findContentItem("columns"); }],
        /// <field>
        /// Called after the EngineerPhoto content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EngineerPhoto_postRender: [$element, function () { return new lightSwitchApplication.BrowseEngineers().findContentItem("EngineerPhoto"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.BrowseEngineers().findContentItem("rows"); }],
        /// <field>
        /// Called after the Surname content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Surname_postRender: [$element, function () { return new lightSwitchApplication.BrowseEngineers().findContentItem("Surname"); }],
        /// <field>
        /// Called after the Firstname content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Firstname_postRender: [$element, function () { return new lightSwitchApplication.BrowseEngineers().findContentItem("Firstname"); }],
        /// <field>
        /// Called after the DateOfBirth content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateOfBirth_postRender: [$element, function () { return new lightSwitchApplication.BrowseEngineers().findContentItem("DateOfBirth"); }]
    });

    lightSwitchApplication.ViewEngineer.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewEngineer
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ViewEngineer,
            data: lightSwitchApplication.ViewEngineer,
            value: lightSwitchApplication.ViewEngineer
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.ViewEngineer,
            data: lightSwitchApplication.ViewEngineer,
            value: lightSwitchApplication.Engineer
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewEngineer,
            data: lightSwitchApplication.Engineer,
            value: lightSwitchApplication.Engineer
        },
        Surname: {
            _$class: msls.ContentItem,
            _$name: "Surname",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewEngineer,
            data: lightSwitchApplication.Engineer,
            value: String
        },
        Firstname: {
            _$class: msls.ContentItem,
            _$name: "Firstname",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewEngineer,
            data: lightSwitchApplication.Engineer,
            value: String
        },
        DateOfBirth: {
            _$class: msls.ContentItem,
            _$name: "DateOfBirth",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewEngineer,
            data: lightSwitchApplication.Engineer,
            value: Date
        },
        LoginName: {
            _$class: msls.ContentItem,
            _$name: "LoginName",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewEngineer,
            data: lightSwitchApplication.Engineer,
            value: String
        },
        SSN: {
            _$class: msls.ContentItem,
            _$name: "SSN",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewEngineer,
            data: lightSwitchApplication.Engineer,
            value: String
        },
        EngineerPhoto: {
            _$class: msls.ContentItem,
            _$name: "EngineerPhoto",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewEngineer,
            data: lightSwitchApplication.Engineer,
            value: String
        },
        SecurityVetted: {
            _$class: msls.ContentItem,
            _$name: "SecurityVetted",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewEngineer,
            data: lightSwitchApplication.Engineer,
            value: Boolean
        },
        ClearanceReference: {
            _$class: msls.ContentItem,
            _$name: "ClearanceReference",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewEngineer,
            data: lightSwitchApplication.Engineer,
            value: String
        },
        VettingExpiryDate: {
            _$class: msls.ContentItem,
            _$name: "VettingExpiryDate",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewEngineer,
            data: lightSwitchApplication.Engineer,
            value: Date
        },
        EmailAddress: {
            _$class: msls.ContentItem,
            _$name: "EmailAddress",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewEngineer,
            data: lightSwitchApplication.Engineer,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewEngineer,
            data: lightSwitchApplication.Engineer,
            value: lightSwitchApplication.Engineer
        },
        UserProfile: {
            _$class: msls.ContentItem,
            _$name: "UserProfile",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewEngineer,
            data: lightSwitchApplication.Engineer,
            value: String
        },
        Manager: {
            _$class: msls.ContentItem,
            _$name: "Manager",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewEngineer,
            data: lightSwitchApplication.Engineer,
            value: lightSwitchApplication.Engineer
        },
        CreatedBy: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewEngineer,
            data: lightSwitchApplication.Engineer,
            value: String
        },
        Created: {
            _$class: msls.ContentItem,
            _$name: "Created",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewEngineer,
            data: lightSwitchApplication.Engineer,
            value: Date
        },
        ModifiedBy: {
            _$class: msls.ContentItem,
            _$name: "ModifiedBy",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewEngineer,
            data: lightSwitchApplication.Engineer,
            value: String
        },
        Modified: {
            _$class: msls.ContentItem,
            _$name: "Modified",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewEngineer,
            data: lightSwitchApplication.Engineer,
            value: Date
        },
        Fullname: {
            _$class: msls.ContentItem,
            _$name: "Fullname",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewEngineer,
            data: lightSwitchApplication.Engineer,
            value: String
        },
        IssueCount: {
            _$class: msls.ContentItem,
            _$name: "IssueCount",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewEngineer,
            data: lightSwitchApplication.Engineer,
            value: Number
        },
        Age: {
            _$class: msls.ContentItem,
            _$name: "Age",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewEngineer,
            data: lightSwitchApplication.Engineer,
            value: Number
        },
        Issues: {
            _$class: msls.ContentItem,
            _$name: "Issues",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ViewEngineer,
            data: lightSwitchApplication.ViewEngineer,
            value: lightSwitchApplication.ViewEngineer
        },
        Issues1: {
            _$class: msls.ContentItem,
            _$name: "Issues1",
            _$parentName: "Issues",
            screen: lightSwitchApplication.ViewEngineer,
            data: lightSwitchApplication.ViewEngineer,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.ViewEngineer,
                _$entry: {
                    elementType: lightSwitchApplication.Issue
                }
            }
        },
        columns1: {
            _$class: msls.ContentItem,
            _$name: "columns1",
            _$parentName: "Issues1",
            screen: lightSwitchApplication.ViewEngineer,
            data: lightSwitchApplication.Issue,
            value: lightSwitchApplication.Issue
        },
        Icon: {
            _$class: msls.ContentItem,
            _$name: "Icon",
            _$parentName: "columns1",
            screen: lightSwitchApplication.ViewEngineer,
            data: lightSwitchApplication.Issue,
            value: String
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "columns1",
            screen: lightSwitchApplication.ViewEngineer,
            data: lightSwitchApplication.Issue,
            value: lightSwitchApplication.Issue
        },
        Subject: {
            _$class: msls.ContentItem,
            _$name: "Subject",
            _$parentName: "rows",
            screen: lightSwitchApplication.ViewEngineer,
            data: lightSwitchApplication.Issue,
            value: String
        },
        TargetEndDateTime: {
            _$class: msls.ContentItem,
            _$name: "TargetEndDateTime",
            _$parentName: "rows",
            screen: lightSwitchApplication.ViewEngineer,
            data: lightSwitchApplication.Issue,
            value: Date
        },
        CreateDateTime: {
            _$class: msls.ContentItem,
            _$name: "CreateDateTime",
            _$parentName: "rows",
            screen: lightSwitchApplication.ViewEngineer,
            data: lightSwitchApplication.Issue,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewEngineer
        }
    };

    msls._addEntryPoints(lightSwitchApplication.ViewEngineer, {
        /// <field>
        /// Called when a new ViewEngineer screen is created.
        /// <br/>created(msls.application.ViewEngineer screen)
        /// </field>
        created: [lightSwitchApplication.ViewEngineer],
        /// <field>
        /// Called before changes on an active ViewEngineer screen are applied.
        /// <br/>beforeApplyChanges(msls.application.ViewEngineer screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.ViewEngineer],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.ViewEngineer().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.ViewEngineer().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.ViewEngineer().findContentItem("left"); }],
        /// <field>
        /// Called after the Surname content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Surname_postRender: [$element, function () { return new lightSwitchApplication.ViewEngineer().findContentItem("Surname"); }],
        /// <field>
        /// Called after the Firstname content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Firstname_postRender: [$element, function () { return new lightSwitchApplication.ViewEngineer().findContentItem("Firstname"); }],
        /// <field>
        /// Called after the DateOfBirth content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateOfBirth_postRender: [$element, function () { return new lightSwitchApplication.ViewEngineer().findContentItem("DateOfBirth"); }],
        /// <field>
        /// Called after the LoginName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LoginName_postRender: [$element, function () { return new lightSwitchApplication.ViewEngineer().findContentItem("LoginName"); }],
        /// <field>
        /// Called after the SSN content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SSN_postRender: [$element, function () { return new lightSwitchApplication.ViewEngineer().findContentItem("SSN"); }],
        /// <field>
        /// Called after the EngineerPhoto content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EngineerPhoto_postRender: [$element, function () { return new lightSwitchApplication.ViewEngineer().findContentItem("EngineerPhoto"); }],
        /// <field>
        /// Called after the SecurityVetted content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SecurityVetted_postRender: [$element, function () { return new lightSwitchApplication.ViewEngineer().findContentItem("SecurityVetted"); }],
        /// <field>
        /// Called after the ClearanceReference content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ClearanceReference_postRender: [$element, function () { return new lightSwitchApplication.ViewEngineer().findContentItem("ClearanceReference"); }],
        /// <field>
        /// Called after the VettingExpiryDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        VettingExpiryDate_postRender: [$element, function () { return new lightSwitchApplication.ViewEngineer().findContentItem("VettingExpiryDate"); }],
        /// <field>
        /// Called after the EmailAddress content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmailAddress_postRender: [$element, function () { return new lightSwitchApplication.ViewEngineer().findContentItem("EmailAddress"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.ViewEngineer().findContentItem("right"); }],
        /// <field>
        /// Called after the UserProfile content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UserProfile_postRender: [$element, function () { return new lightSwitchApplication.ViewEngineer().findContentItem("UserProfile"); }],
        /// <field>
        /// Called after the Manager content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Manager_postRender: [$element, function () { return new lightSwitchApplication.ViewEngineer().findContentItem("Manager"); }],
        /// <field>
        /// Called after the CreatedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.ViewEngineer().findContentItem("CreatedBy"); }],
        /// <field>
        /// Called after the Created content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Created_postRender: [$element, function () { return new lightSwitchApplication.ViewEngineer().findContentItem("Created"); }],
        /// <field>
        /// Called after the ModifiedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ModifiedBy_postRender: [$element, function () { return new lightSwitchApplication.ViewEngineer().findContentItem("ModifiedBy"); }],
        /// <field>
        /// Called after the Modified content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Modified_postRender: [$element, function () { return new lightSwitchApplication.ViewEngineer().findContentItem("Modified"); }],
        /// <field>
        /// Called after the Fullname content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Fullname_postRender: [$element, function () { return new lightSwitchApplication.ViewEngineer().findContentItem("Fullname"); }],
        /// <field>
        /// Called after the IssueCount content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IssueCount_postRender: [$element, function () { return new lightSwitchApplication.ViewEngineer().findContentItem("IssueCount"); }],
        /// <field>
        /// Called after the Age content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Age_postRender: [$element, function () { return new lightSwitchApplication.ViewEngineer().findContentItem("Age"); }],
        /// <field>
        /// Called after the Issues content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Issues_postRender: [$element, function () { return new lightSwitchApplication.ViewEngineer().findContentItem("Issues"); }],
        /// <field>
        /// Called after the Issues1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Issues1_postRender: [$element, function () { return new lightSwitchApplication.ViewEngineer().findContentItem("Issues1"); }],
        /// <field>
        /// Called after the columns1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns1_postRender: [$element, function () { return new lightSwitchApplication.ViewEngineer().findContentItem("columns1"); }],
        /// <field>
        /// Called after the Icon content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Icon_postRender: [$element, function () { return new lightSwitchApplication.ViewEngineer().findContentItem("Icon"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.ViewEngineer().findContentItem("rows"); }],
        /// <field>
        /// Called after the Subject content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Subject_postRender: [$element, function () { return new lightSwitchApplication.ViewEngineer().findContentItem("Subject"); }],
        /// <field>
        /// Called after the TargetEndDateTime content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TargetEndDateTime_postRender: [$element, function () { return new lightSwitchApplication.ViewEngineer().findContentItem("TargetEndDateTime"); }],
        /// <field>
        /// Called after the CreateDateTime content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreateDateTime_postRender: [$element, function () { return new lightSwitchApplication.ViewEngineer().findContentItem("CreateDateTime"); }]
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
        ClosedDateTime_postRender: [$element, function () { return new lightSwitchApplication.AddEditIssue().findContentItem("ClosedDateTime"); }]
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
        Modified_postRender: [$element, function () { return new lightSwitchApplication.ViewIssue().findContentItem("Modified"); }]
    });

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

}(msls.application));