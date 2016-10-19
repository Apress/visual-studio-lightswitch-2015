/// <reference path="viewModel.js" />

(function (lightSwitchApplication) {

    var $element = document.createElement("div");

    lightSwitchApplication.AddEditDepartment.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditDepartment
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditDepartment,
            data: lightSwitchApplication.AddEditDepartment,
            value: lightSwitchApplication.AddEditDepartment
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditDepartment,
            data: lightSwitchApplication.AddEditDepartment,
            value: lightSwitchApplication.AddEditDepartment
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditDepartment,
            data: lightSwitchApplication.AddEditDepartment,
            value: lightSwitchApplication.Department
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditDepartment,
            data: lightSwitchApplication.Department,
            value: lightSwitchApplication.Department
        },
        DepartmentName: {
            _$class: msls.ContentItem,
            _$name: "DepartmentName",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditDepartment,
            data: lightSwitchApplication.Department,
            value: String
        },
        Address1: {
            _$class: msls.ContentItem,
            _$name: "Address1",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditDepartment,
            data: lightSwitchApplication.Department,
            value: String
        },
        Address2: {
            _$class: msls.ContentItem,
            _$name: "Address2",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditDepartment,
            data: lightSwitchApplication.Department,
            value: String
        },
        City: {
            _$class: msls.ContentItem,
            _$name: "City",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditDepartment,
            data: lightSwitchApplication.Department,
            value: String
        },
        Postcode: {
            _$class: msls.ContentItem,
            _$name: "Postcode",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditDepartment,
            data: lightSwitchApplication.Department,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditDepartment,
            data: lightSwitchApplication.Department,
            value: lightSwitchApplication.Department
        },
        Country: {
            _$class: msls.ContentItem,
            _$name: "Country",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditDepartment,
            data: lightSwitchApplication.Department,
            value: String
        },
        DepartmentManager: {
            _$class: msls.ContentItem,
            _$name: "DepartmentManager",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditDepartment,
            data: lightSwitchApplication.Department,
            value: String
        },
        Longitude: {
            _$class: msls.ContentItem,
            _$name: "Longitude",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditDepartment,
            data: lightSwitchApplication.Department,
            value: String
        },
        Latitude: {
            _$class: msls.ContentItem,
            _$name: "Latitude",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditDepartment,
            data: lightSwitchApplication.Department,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditDepartment
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditDepartment, {
        /// <field>
        /// Called when a new AddEditDepartment screen is created.
        /// <br/>created(msls.application.AddEditDepartment screen)
        /// </field>
        created: [lightSwitchApplication.AddEditDepartment],
        /// <field>
        /// Called before changes on an active AddEditDepartment screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditDepartment screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditDepartment],
        /// <field>
        /// Called to determine if the GetLocation method can be executed.
        /// <br/>canExecute(msls.application.AddEditDepartment screen)
        /// </field>
        GetLocation_canExecute: [lightSwitchApplication.AddEditDepartment],
        /// <field>
        /// Called to execute the GetLocation method.
        /// <br/>execute(msls.application.AddEditDepartment screen)
        /// </field>
        GetLocation_execute: [lightSwitchApplication.AddEditDepartment],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditDepartment().findContentItem("Details"); }],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.AddEditDepartment().findContentItem("Group"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditDepartment().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditDepartment().findContentItem("left"); }],
        /// <field>
        /// Called after the DepartmentName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DepartmentName_postRender: [$element, function () { return new lightSwitchApplication.AddEditDepartment().findContentItem("DepartmentName"); }],
        /// <field>
        /// Called after the Address1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Address1_postRender: [$element, function () { return new lightSwitchApplication.AddEditDepartment().findContentItem("Address1"); }],
        /// <field>
        /// Called after the Address2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Address2_postRender: [$element, function () { return new lightSwitchApplication.AddEditDepartment().findContentItem("Address2"); }],
        /// <field>
        /// Called after the City content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        City_postRender: [$element, function () { return new lightSwitchApplication.AddEditDepartment().findContentItem("City"); }],
        /// <field>
        /// Called after the Postcode content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Postcode_postRender: [$element, function () { return new lightSwitchApplication.AddEditDepartment().findContentItem("Postcode"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditDepartment().findContentItem("right"); }],
        /// <field>
        /// Called after the Country content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Country_postRender: [$element, function () { return new lightSwitchApplication.AddEditDepartment().findContentItem("Country"); }],
        /// <field>
        /// Called after the DepartmentManager content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DepartmentManager_postRender: [$element, function () { return new lightSwitchApplication.AddEditDepartment().findContentItem("DepartmentManager"); }],
        /// <field>
        /// Called after the Longitude content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Longitude_postRender: [$element, function () { return new lightSwitchApplication.AddEditDepartment().findContentItem("Longitude"); }],
        /// <field>
        /// Called after the Latitude content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Latitude_postRender: [$element, function () { return new lightSwitchApplication.AddEditDepartment().findContentItem("Latitude"); }]
    });

    lightSwitchApplication.BrowseDepartments.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseDepartments
        },
        DepartmentList: {
            _$class: msls.ContentItem,
            _$name: "DepartmentList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseDepartments,
            data: lightSwitchApplication.BrowseDepartments,
            value: lightSwitchApplication.BrowseDepartments
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "DepartmentList",
            screen: lightSwitchApplication.BrowseDepartments,
            data: lightSwitchApplication.BrowseDepartments,
            value: lightSwitchApplication.BrowseDepartments
        },
        Departments: {
            _$class: msls.ContentItem,
            _$name: "Departments",
            _$parentName: "DepartmentList",
            screen: lightSwitchApplication.BrowseDepartments,
            data: lightSwitchApplication.BrowseDepartments,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseDepartments,
                _$entry: {
                    elementType: lightSwitchApplication.Department
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "Departments",
            screen: lightSwitchApplication.BrowseDepartments,
            data: lightSwitchApplication.Department,
            value: lightSwitchApplication.Department
        },
        DepartmentName: {
            _$class: msls.ContentItem,
            _$name: "DepartmentName",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseDepartments,
            data: lightSwitchApplication.Department,
            value: String
        },
        Address1: {
            _$class: msls.ContentItem,
            _$name: "Address1",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseDepartments,
            data: lightSwitchApplication.Department,
            value: String
        },
        Address2: {
            _$class: msls.ContentItem,
            _$name: "Address2",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseDepartments,
            data: lightSwitchApplication.Department,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseDepartments
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseDepartments, {
        /// <field>
        /// Called when a new BrowseDepartments screen is created.
        /// <br/>created(msls.application.BrowseDepartments screen)
        /// </field>
        created: [lightSwitchApplication.BrowseDepartments],
        /// <field>
        /// Called before changes on an active BrowseDepartments screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseDepartments screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseDepartments],
        /// <field>
        /// Called after the DepartmentList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DepartmentList_postRender: [$element, function () { return new lightSwitchApplication.BrowseDepartments().findContentItem("DepartmentList"); }],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.BrowseDepartments().findContentItem("Group"); }],
        /// <field>
        /// Called after the Departments content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Departments_postRender: [$element, function () { return new lightSwitchApplication.BrowseDepartments().findContentItem("Departments"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.BrowseDepartments().findContentItem("rows"); }],
        /// <field>
        /// Called after the DepartmentName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DepartmentName_postRender: [$element, function () { return new lightSwitchApplication.BrowseDepartments().findContentItem("DepartmentName"); }],
        /// <field>
        /// Called after the Address1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Address1_postRender: [$element, function () { return new lightSwitchApplication.BrowseDepartments().findContentItem("Address1"); }],
        /// <field>
        /// Called after the Address2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Address2_postRender: [$element, function () { return new lightSwitchApplication.BrowseDepartments().findContentItem("Address2"); }]
    });

    lightSwitchApplication.ViewDepartment.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewDepartment
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ViewDepartment,
            data: lightSwitchApplication.ViewDepartment,
            value: lightSwitchApplication.ViewDepartment
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "Details",
            screen: lightSwitchApplication.ViewDepartment,
            data: lightSwitchApplication.ViewDepartment,
            value: lightSwitchApplication.ViewDepartment
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.ViewDepartment,
            data: lightSwitchApplication.ViewDepartment,
            value: lightSwitchApplication.Department
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewDepartment,
            data: lightSwitchApplication.Department,
            value: lightSwitchApplication.Department
        },
        DepartmentName: {
            _$class: msls.ContentItem,
            _$name: "DepartmentName",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewDepartment,
            data: lightSwitchApplication.Department,
            value: String
        },
        Address1: {
            _$class: msls.ContentItem,
            _$name: "Address1",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewDepartment,
            data: lightSwitchApplication.Department,
            value: String
        },
        Address2: {
            _$class: msls.ContentItem,
            _$name: "Address2",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewDepartment,
            data: lightSwitchApplication.Department,
            value: String
        },
        City: {
            _$class: msls.ContentItem,
            _$name: "City",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewDepartment,
            data: lightSwitchApplication.Department,
            value: String
        },
        Postcode: {
            _$class: msls.ContentItem,
            _$name: "Postcode",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewDepartment,
            data: lightSwitchApplication.Department,
            value: String
        },
        Country: {
            _$class: msls.ContentItem,
            _$name: "Country",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewDepartment,
            data: lightSwitchApplication.Department,
            value: String
        },
        DepartmentManager: {
            _$class: msls.ContentItem,
            _$name: "DepartmentManager",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewDepartment,
            data: lightSwitchApplication.Department,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewDepartment,
            data: lightSwitchApplication.Department,
            value: lightSwitchApplication.Department
        },
        Longitude: {
            _$class: msls.ContentItem,
            _$name: "Longitude",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewDepartment,
            data: lightSwitchApplication.Department,
            value: String
        },
        Latitude: {
            _$class: msls.ContentItem,
            _$name: "Latitude",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewDepartment,
            data: lightSwitchApplication.Department,
            value: String
        },
        CreatedBy: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewDepartment,
            data: lightSwitchApplication.Department,
            value: String
        },
        Created: {
            _$class: msls.ContentItem,
            _$name: "Created",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewDepartment,
            data: lightSwitchApplication.Department,
            value: Date
        },
        ModifiedBy: {
            _$class: msls.ContentItem,
            _$name: "ModifiedBy",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewDepartment,
            data: lightSwitchApplication.Department,
            value: String
        },
        Modified: {
            _$class: msls.ContentItem,
            _$name: "Modified",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewDepartment,
            data: lightSwitchApplication.Department,
            value: Date
        },
        Department: {
            _$class: msls.ContentItem,
            _$name: "Department",
            _$parentName: "Details",
            screen: lightSwitchApplication.ViewDepartment,
            data: lightSwitchApplication.ViewDepartment,
            value: lightSwitchApplication.Department
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewDepartment
        }
    };

    msls._addEntryPoints(lightSwitchApplication.ViewDepartment, {
        /// <field>
        /// Called when a new ViewDepartment screen is created.
        /// <br/>created(msls.application.ViewDepartment screen)
        /// </field>
        created: [lightSwitchApplication.ViewDepartment],
        /// <field>
        /// Called before changes on an active ViewDepartment screen are applied.
        /// <br/>beforeApplyChanges(msls.application.ViewDepartment screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.ViewDepartment],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.ViewDepartment().findContentItem("Details"); }],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.ViewDepartment().findContentItem("Group"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.ViewDepartment().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.ViewDepartment().findContentItem("left"); }],
        /// <field>
        /// Called after the DepartmentName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DepartmentName_postRender: [$element, function () { return new lightSwitchApplication.ViewDepartment().findContentItem("DepartmentName"); }],
        /// <field>
        /// Called after the Address1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Address1_postRender: [$element, function () { return new lightSwitchApplication.ViewDepartment().findContentItem("Address1"); }],
        /// <field>
        /// Called after the Address2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Address2_postRender: [$element, function () { return new lightSwitchApplication.ViewDepartment().findContentItem("Address2"); }],
        /// <field>
        /// Called after the City content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        City_postRender: [$element, function () { return new lightSwitchApplication.ViewDepartment().findContentItem("City"); }],
        /// <field>
        /// Called after the Postcode content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Postcode_postRender: [$element, function () { return new lightSwitchApplication.ViewDepartment().findContentItem("Postcode"); }],
        /// <field>
        /// Called after the Country content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Country_postRender: [$element, function () { return new lightSwitchApplication.ViewDepartment().findContentItem("Country"); }],
        /// <field>
        /// Called after the DepartmentManager content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DepartmentManager_postRender: [$element, function () { return new lightSwitchApplication.ViewDepartment().findContentItem("DepartmentManager"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.ViewDepartment().findContentItem("right"); }],
        /// <field>
        /// Called after the Longitude content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Longitude_postRender: [$element, function () { return new lightSwitchApplication.ViewDepartment().findContentItem("Longitude"); }],
        /// <field>
        /// Called after the Latitude content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Latitude_postRender: [$element, function () { return new lightSwitchApplication.ViewDepartment().findContentItem("Latitude"); }],
        /// <field>
        /// Called after the CreatedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.ViewDepartment().findContentItem("CreatedBy"); }],
        /// <field>
        /// Called after the Created content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Created_postRender: [$element, function () { return new lightSwitchApplication.ViewDepartment().findContentItem("Created"); }],
        /// <field>
        /// Called after the ModifiedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ModifiedBy_postRender: [$element, function () { return new lightSwitchApplication.ViewDepartment().findContentItem("ModifiedBy"); }],
        /// <field>
        /// Called after the Modified content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Modified_postRender: [$element, function () { return new lightSwitchApplication.ViewDepartment().findContentItem("Modified"); }],
        /// <field>
        /// Called to render the Department content item.
        /// <br/>render(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Department_render: [$element, function () { return new lightSwitchApplication.ViewDepartment().findContentItem("Department"); }]
    });

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
        Subordinates: {
            _$class: msls.ContentItem,
            _$name: "Subordinates",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditEngineer,
            data: lightSwitchApplication.AddEditEngineer,
            value: lightSwitchApplication.AddEditEngineer
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "Subordinates",
            screen: lightSwitchApplication.AddEditEngineer,
            data: lightSwitchApplication.AddEditEngineer,
            value: lightSwitchApplication.AddEditEngineer
        },
        EngineerToAdd: {
            _$class: msls.ContentItem,
            _$name: "EngineerToAdd",
            _$parentName: "Group",
            screen: lightSwitchApplication.AddEditEngineer,
            data: lightSwitchApplication.AddEditEngineer,
            value: lightSwitchApplication.Engineer
        },
        Engineer: {
            _$class: msls.ContentItem,
            _$name: "Engineer",
            _$parentName: "EngineerToAdd",
            screen: lightSwitchApplication.AddEditEngineer,
            data: lightSwitchApplication.Engineer,
            value: lightSwitchApplication.Engineer
        },
        Group2: {
            _$class: msls.ContentItem,
            _$name: "Group2",
            _$parentName: "Group",
            screen: lightSwitchApplication.AddEditEngineer,
            data: lightSwitchApplication.AddEditEngineer,
            value: lightSwitchApplication.AddEditEngineer
        },
        AssignSubordinate: {
            _$class: msls.ContentItem,
            _$name: "AssignSubordinate",
            _$parentName: "Group2",
            screen: lightSwitchApplication.AddEditEngineer
        },
        Group1: {
            _$class: msls.ContentItem,
            _$name: "Group1",
            _$parentName: "Subordinates",
            screen: lightSwitchApplication.AddEditEngineer,
            data: lightSwitchApplication.AddEditEngineer,
            value: lightSwitchApplication.AddEditEngineer
        },
        Subordinates1: {
            _$class: msls.ContentItem,
            _$name: "Subordinates1",
            _$parentName: "Group1",
            screen: lightSwitchApplication.AddEditEngineer,
            data: lightSwitchApplication.AddEditEngineer,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.AddEditEngineer,
                _$entry: {
                    elementType: lightSwitchApplication.Engineer
                }
            }
        },
        Subordinates1Template: {
            _$class: msls.ContentItem,
            _$name: "Subordinates1Template",
            _$parentName: "Subordinates1",
            screen: lightSwitchApplication.AddEditEngineer,
            data: lightSwitchApplication.Engineer,
            value: lightSwitchApplication.Engineer
        },
        DeassignSubordinate: {
            _$class: msls.ContentItem,
            _$name: "DeassignSubordinate",
            _$parentName: "Subordinates1Template",
            screen: lightSwitchApplication.AddEditEngineer
        },
        Surname1: {
            _$class: msls.ContentItem,
            _$name: "Surname1",
            _$parentName: "Subordinates1Template",
            screen: lightSwitchApplication.AddEditEngineer,
            data: lightSwitchApplication.Engineer,
            value: String
        },
        Firstname1: {
            _$class: msls.ContentItem,
            _$name: "Firstname1",
            _$parentName: "Subordinates1Template",
            screen: lightSwitchApplication.AddEditEngineer,
            data: lightSwitchApplication.Engineer,
            value: String
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
        /// Called to determine if the AssignSubordinate method can be executed.
        /// <br/>canExecute(msls.application.AddEditEngineer screen)
        /// </field>
        AssignSubordinate_canExecute: [lightSwitchApplication.AddEditEngineer],
        /// <field>
        /// Called to execute the AssignSubordinate method.
        /// <br/>execute(msls.application.AddEditEngineer screen)
        /// </field>
        AssignSubordinate_execute: [lightSwitchApplication.AddEditEngineer],
        /// <field>
        /// Called to determine if the DeassignSubordinate method can be executed.
        /// <br/>canExecute(msls.application.AddEditEngineer screen)
        /// </field>
        DeassignSubordinate_canExecute: [lightSwitchApplication.AddEditEngineer],
        /// <field>
        /// Called to execute the DeassignSubordinate method.
        /// <br/>execute(msls.application.AddEditEngineer screen)
        /// </field>
        DeassignSubordinate_execute: [lightSwitchApplication.AddEditEngineer],
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
        Age_postRender: [$element, function () { return new lightSwitchApplication.AddEditEngineer().findContentItem("Age"); }],
        /// <field>
        /// Called after the Subordinates content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Subordinates_postRender: [$element, function () { return new lightSwitchApplication.AddEditEngineer().findContentItem("Subordinates"); }],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.AddEditEngineer().findContentItem("Group"); }],
        /// <field>
        /// Called after the EngineerToAdd content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EngineerToAdd_postRender: [$element, function () { return new lightSwitchApplication.AddEditEngineer().findContentItem("EngineerToAdd"); }],
        /// <field>
        /// Called after the Engineer content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Engineer_postRender: [$element, function () { return new lightSwitchApplication.AddEditEngineer().findContentItem("Engineer"); }],
        /// <field>
        /// Called after the Group2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group2_postRender: [$element, function () { return new lightSwitchApplication.AddEditEngineer().findContentItem("Group2"); }],
        /// <field>
        /// Called after the AssignSubordinate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AssignSubordinate_postRender: [$element, function () { return new lightSwitchApplication.AddEditEngineer().findContentItem("AssignSubordinate"); }],
        /// <field>
        /// Called after the Group1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group1_postRender: [$element, function () { return new lightSwitchApplication.AddEditEngineer().findContentItem("Group1"); }],
        /// <field>
        /// Called after the Subordinates1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Subordinates1_postRender: [$element, function () { return new lightSwitchApplication.AddEditEngineer().findContentItem("Subordinates1"); }],
        /// <field>
        /// Called after the Subordinates1Template content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Subordinates1Template_postRender: [$element, function () { return new lightSwitchApplication.AddEditEngineer().findContentItem("Subordinates1Template"); }],
        /// <field>
        /// Called after the DeassignSubordinate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DeassignSubordinate_postRender: [$element, function () { return new lightSwitchApplication.AddEditEngineer().findContentItem("DeassignSubordinate"); }],
        /// <field>
        /// Called after the Surname1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Surname1_postRender: [$element, function () { return new lightSwitchApplication.AddEditEngineer().findContentItem("Surname1"); }],
        /// <field>
        /// Called after the Firstname1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Firstname1_postRender: [$element, function () { return new lightSwitchApplication.AddEditEngineer().findContentItem("Firstname1"); }]
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
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "EngineerList",
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
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.BrowseEngineers().findContentItem("Group"); }],
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
        Age_postRender: [$element, function () { return new lightSwitchApplication.ViewEngineer().findContentItem("Age"); }]
    });

    lightSwitchApplication.AddEditIssueDocument.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditIssueDocument
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditIssueDocument,
            data: lightSwitchApplication.AddEditIssueDocument,
            value: lightSwitchApplication.AddEditIssueDocument
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditIssueDocument,
            data: lightSwitchApplication.AddEditIssueDocument,
            value: lightSwitchApplication.IssueDocument
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditIssueDocument,
            data: lightSwitchApplication.IssueDocument,
            value: lightSwitchApplication.IssueDocument
        },
        DocumentName: {
            _$class: msls.ContentItem,
            _$name: "DocumentName",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditIssueDocument,
            data: lightSwitchApplication.IssueDocument,
            value: String
        },
        FileExtension: {
            _$class: msls.ContentItem,
            _$name: "FileExtension",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditIssueDocument,
            data: lightSwitchApplication.IssueDocument,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditIssueDocument,
            data: lightSwitchApplication.IssueDocument,
            value: lightSwitchApplication.IssueDocument
        },
        IssueFile: {
            _$class: msls.ContentItem,
            _$name: "IssueFile",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditIssueDocument,
            data: lightSwitchApplication.IssueDocument,
            value: String
        },
        Issue: {
            _$class: msls.ContentItem,
            _$name: "Issue",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditIssueDocument,
            data: lightSwitchApplication.IssueDocument,
            value: lightSwitchApplication.Issue
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "Issue",
            screen: lightSwitchApplication.AddEditIssueDocument,
            data: lightSwitchApplication.Issue,
            value: lightSwitchApplication.Issue
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditIssueDocument
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditIssueDocument, {
        /// <field>
        /// Called when a new AddEditIssueDocument screen is created.
        /// <br/>created(msls.application.AddEditIssueDocument screen)
        /// </field>
        created: [lightSwitchApplication.AddEditIssueDocument],
        /// <field>
        /// Called before changes on an active AddEditIssueDocument screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditIssueDocument screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditIssueDocument],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditIssueDocument().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditIssueDocument().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditIssueDocument().findContentItem("left"); }],
        /// <field>
        /// Called after the DocumentName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DocumentName_postRender: [$element, function () { return new lightSwitchApplication.AddEditIssueDocument().findContentItem("DocumentName"); }],
        /// <field>
        /// Called after the FileExtension content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FileExtension_postRender: [$element, function () { return new lightSwitchApplication.AddEditIssueDocument().findContentItem("FileExtension"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditIssueDocument().findContentItem("right"); }],
        /// <field>
        /// Called to render the IssueFile content item.
        /// <br/>render(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IssueFile_render: [$element, function () { return new lightSwitchApplication.AddEditIssueDocument().findContentItem("IssueFile"); }],
        /// <field>
        /// Called after the Issue content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Issue_postRender: [$element, function () { return new lightSwitchApplication.AddEditIssueDocument().findContentItem("Issue"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditIssueDocument().findContentItem("RowTemplate"); }]
    });

    lightSwitchApplication.BrowseIssueDocuments.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseIssueDocuments
        },
        IssueDocumentList: {
            _$class: msls.ContentItem,
            _$name: "IssueDocumentList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseIssueDocuments,
            data: lightSwitchApplication.BrowseIssueDocuments,
            value: lightSwitchApplication.BrowseIssueDocuments
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "IssueDocumentList",
            screen: lightSwitchApplication.BrowseIssueDocuments,
            data: lightSwitchApplication.BrowseIssueDocuments,
            value: lightSwitchApplication.BrowseIssueDocuments
        },
        IssueDocuments: {
            _$class: msls.ContentItem,
            _$name: "IssueDocuments",
            _$parentName: "IssueDocumentList",
            screen: lightSwitchApplication.BrowseIssueDocuments,
            data: lightSwitchApplication.BrowseIssueDocuments,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseIssueDocuments,
                _$entry: {
                    elementType: lightSwitchApplication.IssueDocument
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "IssueDocuments",
            screen: lightSwitchApplication.BrowseIssueDocuments,
            data: lightSwitchApplication.IssueDocument,
            value: lightSwitchApplication.IssueDocument
        },
        DocumentName: {
            _$class: msls.ContentItem,
            _$name: "DocumentName",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseIssueDocuments,
            data: lightSwitchApplication.IssueDocument,
            value: String
        },
        FileExtension: {
            _$class: msls.ContentItem,
            _$name: "FileExtension",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseIssueDocuments,
            data: lightSwitchApplication.IssueDocument,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseIssueDocuments
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseIssueDocuments, {
        /// <field>
        /// Called when a new BrowseIssueDocuments screen is created.
        /// <br/>created(msls.application.BrowseIssueDocuments screen)
        /// </field>
        created: [lightSwitchApplication.BrowseIssueDocuments],
        /// <field>
        /// Called before changes on an active BrowseIssueDocuments screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseIssueDocuments screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseIssueDocuments],
        /// <field>
        /// Called after the IssueDocumentList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IssueDocumentList_postRender: [$element, function () { return new lightSwitchApplication.BrowseIssueDocuments().findContentItem("IssueDocumentList"); }],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.BrowseIssueDocuments().findContentItem("Group"); }],
        /// <field>
        /// Called after the IssueDocuments content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IssueDocuments_postRender: [$element, function () { return new lightSwitchApplication.BrowseIssueDocuments().findContentItem("IssueDocuments"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.BrowseIssueDocuments().findContentItem("rows"); }],
        /// <field>
        /// Called after the DocumentName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DocumentName_postRender: [$element, function () { return new lightSwitchApplication.BrowseIssueDocuments().findContentItem("DocumentName"); }],
        /// <field>
        /// Called after the FileExtension content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FileExtension_postRender: [$element, function () { return new lightSwitchApplication.BrowseIssueDocuments().findContentItem("FileExtension"); }]
    });

    lightSwitchApplication.ViewIssueDocument.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewIssueDocument
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ViewIssueDocument,
            data: lightSwitchApplication.ViewIssueDocument,
            value: lightSwitchApplication.ViewIssueDocument
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.ViewIssueDocument,
            data: lightSwitchApplication.ViewIssueDocument,
            value: lightSwitchApplication.IssueDocument
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewIssueDocument,
            data: lightSwitchApplication.IssueDocument,
            value: lightSwitchApplication.IssueDocument
        },
        DocumentName: {
            _$class: msls.ContentItem,
            _$name: "DocumentName",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewIssueDocument,
            data: lightSwitchApplication.IssueDocument,
            value: String
        },
        FileExtension: {
            _$class: msls.ContentItem,
            _$name: "FileExtension",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewIssueDocument,
            data: lightSwitchApplication.IssueDocument,
            value: String
        },
        Issue: {
            _$class: msls.ContentItem,
            _$name: "Issue",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewIssueDocument,
            data: lightSwitchApplication.IssueDocument,
            value: lightSwitchApplication.Issue
        },
        Id: {
            _$class: msls.ContentItem,
            _$name: "Id",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewIssueDocument,
            data: lightSwitchApplication.IssueDocument,
            value: Number
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewIssueDocument,
            data: lightSwitchApplication.IssueDocument,
            value: lightSwitchApplication.IssueDocument
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewIssueDocument
        }
    };

    msls._addEntryPoints(lightSwitchApplication.ViewIssueDocument, {
        /// <field>
        /// Called when a new ViewIssueDocument screen is created.
        /// <br/>created(msls.application.ViewIssueDocument screen)
        /// </field>
        created: [lightSwitchApplication.ViewIssueDocument],
        /// <field>
        /// Called before changes on an active ViewIssueDocument screen are applied.
        /// <br/>beforeApplyChanges(msls.application.ViewIssueDocument screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.ViewIssueDocument],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.ViewIssueDocument().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.ViewIssueDocument().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.ViewIssueDocument().findContentItem("left"); }],
        /// <field>
        /// Called after the DocumentName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DocumentName_postRender: [$element, function () { return new lightSwitchApplication.ViewIssueDocument().findContentItem("DocumentName"); }],
        /// <field>
        /// Called after the FileExtension content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FileExtension_postRender: [$element, function () { return new lightSwitchApplication.ViewIssueDocument().findContentItem("FileExtension"); }],
        /// <field>
        /// Called after the Issue content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Issue_postRender: [$element, function () { return new lightSwitchApplication.ViewIssueDocument().findContentItem("Issue"); }],
        /// <field>
        /// Called to render the Id content item.
        /// <br/>render(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Id_render: [$element, function () { return new lightSwitchApplication.ViewIssueDocument().findContentItem("Id"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.ViewIssueDocument().findContentItem("right"); }]
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
        CreateDateTime: {
            _$class: msls.ContentItem,
            _$name: "CreateDateTime",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseIssues,
            data: lightSwitchApplication.Issue,
            value: Date
        },
        IssueStatus: {
            _$class: msls.ContentItem,
            _$name: "IssueStatus",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseIssues,
            data: lightSwitchApplication.Issue,
            value: lightSwitchApplication.IssueStatus
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
        /// Called after the CreateDateTime content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreateDateTime_postRender: [$element, function () { return new lightSwitchApplication.BrowseIssues().findContentItem("CreateDateTime"); }],
        /// <field>
        /// Called after the IssueStatus content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IssueStatus_postRender: [$element, function () { return new lightSwitchApplication.BrowseIssues().findContentItem("IssueStatus"); }]
    });

    lightSwitchApplication.CloseSelectedIssues.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.CloseSelectedIssues
        },
        IssueList: {
            _$class: msls.ContentItem,
            _$name: "IssueList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.CloseSelectedIssues,
            data: lightSwitchApplication.CloseSelectedIssues,
            value: lightSwitchApplication.CloseSelectedIssues
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "IssueList",
            screen: lightSwitchApplication.CloseSelectedIssues,
            data: lightSwitchApplication.CloseSelectedIssues,
            value: lightSwitchApplication.CloseSelectedIssues
        },
        Issues: {
            _$class: msls.ContentItem,
            _$name: "Issues",
            _$parentName: "IssueList",
            screen: lightSwitchApplication.CloseSelectedIssues,
            data: lightSwitchApplication.CloseSelectedIssues,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.CloseSelectedIssues,
                _$entry: {
                    elementType: lightSwitchApplication.Issue
                }
            }
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Issues",
            screen: lightSwitchApplication.CloseSelectedIssues,
            data: lightSwitchApplication.Issue,
            value: lightSwitchApplication.Issue
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.CloseSelectedIssues
        }
    };

    msls._addEntryPoints(lightSwitchApplication.CloseSelectedIssues, {
        /// <field>
        /// Called when a new CloseSelectedIssues screen is created.
        /// <br/>created(msls.application.CloseSelectedIssues screen)
        /// </field>
        created: [lightSwitchApplication.CloseSelectedIssues],
        /// <field>
        /// Called before changes on an active CloseSelectedIssues screen are applied.
        /// <br/>beforeApplyChanges(msls.application.CloseSelectedIssues screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.CloseSelectedIssues],
        /// <field>
        /// Called to determine if the CloseIssues method can be executed.
        /// <br/>canExecute(msls.application.CloseSelectedIssues screen)
        /// </field>
        CloseIssues_canExecute: [lightSwitchApplication.CloseSelectedIssues],
        /// <field>
        /// Called to execute the CloseIssues method.
        /// <br/>execute(msls.application.CloseSelectedIssues screen)
        /// </field>
        CloseIssues_execute: [lightSwitchApplication.CloseSelectedIssues],
        /// <field>
        /// Called after the IssueList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IssueList_postRender: [$element, function () { return new lightSwitchApplication.CloseSelectedIssues().findContentItem("IssueList"); }],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.CloseSelectedIssues().findContentItem("Group"); }],
        /// <field>
        /// Called after the Issues content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Issues_postRender: [$element, function () { return new lightSwitchApplication.CloseSelectedIssues().findContentItem("Issues"); }],
        /// <field>
        /// Called to render the columns content item.
        /// <br/>render(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_render: [$element, function () { return new lightSwitchApplication.CloseSelectedIssues().findContentItem("columns"); }]
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

    lightSwitchApplication.AddEditTimesheet.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditTimesheet
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditTimesheet,
            data: lightSwitchApplication.AddEditTimesheet,
            value: lightSwitchApplication.AddEditTimesheet
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditTimesheet,
            data: lightSwitchApplication.AddEditTimesheet,
            value: lightSwitchApplication.Timesheet
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditTimesheet,
            data: lightSwitchApplication.Timesheet,
            value: lightSwitchApplication.Timesheet
        },
        DurationMins: {
            _$class: msls.ContentItem,
            _$name: "DurationMins",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditTimesheet,
            data: lightSwitchApplication.Timesheet,
            value: Number
        },
        Engineer: {
            _$class: msls.ContentItem,
            _$name: "Engineer",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditTimesheet,
            data: lightSwitchApplication.Timesheet,
            value: lightSwitchApplication.Engineer
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "Engineer",
            screen: lightSwitchApplication.AddEditTimesheet,
            data: lightSwitchApplication.Engineer,
            value: lightSwitchApplication.Engineer
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditTimesheet,
            data: lightSwitchApplication.Timesheet,
            value: lightSwitchApplication.Timesheet
        },
        Issue: {
            _$class: msls.ContentItem,
            _$name: "Issue",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditTimesheet,
            data: lightSwitchApplication.Timesheet,
            value: lightSwitchApplication.Issue
        },
        RowTemplate1: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate1",
            _$parentName: "Issue",
            screen: lightSwitchApplication.AddEditTimesheet,
            data: lightSwitchApplication.Issue,
            value: lightSwitchApplication.Issue
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditTimesheet
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditTimesheet, {
        /// <field>
        /// Called when a new AddEditTimesheet screen is created.
        /// <br/>created(msls.application.AddEditTimesheet screen)
        /// </field>
        created: [lightSwitchApplication.AddEditTimesheet],
        /// <field>
        /// Called before changes on an active AddEditTimesheet screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditTimesheet screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditTimesheet],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditTimesheet().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditTimesheet().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditTimesheet().findContentItem("left"); }],
        /// <field>
        /// Called after the DurationMins content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DurationMins_postRender: [$element, function () { return new lightSwitchApplication.AddEditTimesheet().findContentItem("DurationMins"); }],
        /// <field>
        /// Called after the Engineer content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Engineer_postRender: [$element, function () { return new lightSwitchApplication.AddEditTimesheet().findContentItem("Engineer"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditTimesheet().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditTimesheet().findContentItem("right"); }],
        /// <field>
        /// Called after the Issue content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Issue_postRender: [$element, function () { return new lightSwitchApplication.AddEditTimesheet().findContentItem("Issue"); }],
        /// <field>
        /// Called after the RowTemplate1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate1_postRender: [$element, function () { return new lightSwitchApplication.AddEditTimesheet().findContentItem("RowTemplate1"); }]
    });

    lightSwitchApplication.BrowseTimesheets.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseTimesheets
        },
        TimesheetList: {
            _$class: msls.ContentItem,
            _$name: "TimesheetList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseTimesheets,
            data: lightSwitchApplication.BrowseTimesheets,
            value: lightSwitchApplication.BrowseTimesheets
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "TimesheetList",
            screen: lightSwitchApplication.BrowseTimesheets,
            data: lightSwitchApplication.BrowseTimesheets,
            value: lightSwitchApplication.BrowseTimesheets
        },
        Timesheets: {
            _$class: msls.ContentItem,
            _$name: "Timesheets",
            _$parentName: "TimesheetList",
            screen: lightSwitchApplication.BrowseTimesheets,
            data: lightSwitchApplication.BrowseTimesheets,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseTimesheets,
                _$entry: {
                    elementType: lightSwitchApplication.Timesheet
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "Timesheets",
            screen: lightSwitchApplication.BrowseTimesheets,
            data: lightSwitchApplication.Timesheet,
            value: lightSwitchApplication.Timesheet
        },
        DurationMins: {
            _$class: msls.ContentItem,
            _$name: "DurationMins",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseTimesheets,
            data: lightSwitchApplication.Timesheet,
            value: Number
        },
        Engineer: {
            _$class: msls.ContentItem,
            _$name: "Engineer",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseTimesheets,
            data: lightSwitchApplication.Timesheet,
            value: lightSwitchApplication.Engineer
        },
        TotalMinutes: {
            _$class: msls.ContentItem,
            _$name: "TotalMinutes",
            _$parentName: "TimesheetList",
            screen: lightSwitchApplication.BrowseTimesheets,
            data: lightSwitchApplication.BrowseTimesheets,
            value: Number
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseTimesheets
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseTimesheets, {
        /// <field>
        /// Called when a new BrowseTimesheets screen is created.
        /// <br/>created(msls.application.BrowseTimesheets screen)
        /// </field>
        created: [lightSwitchApplication.BrowseTimesheets],
        /// <field>
        /// Called before changes on an active BrowseTimesheets screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseTimesheets screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseTimesheets],
        /// <field>
        /// Called after the TimesheetList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TimesheetList_postRender: [$element, function () { return new lightSwitchApplication.BrowseTimesheets().findContentItem("TimesheetList"); }],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.BrowseTimesheets().findContentItem("Group"); }],
        /// <field>
        /// Called after the Timesheets content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Timesheets_postRender: [$element, function () { return new lightSwitchApplication.BrowseTimesheets().findContentItem("Timesheets"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.BrowseTimesheets().findContentItem("rows"); }],
        /// <field>
        /// Called after the DurationMins content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DurationMins_postRender: [$element, function () { return new lightSwitchApplication.BrowseTimesheets().findContentItem("DurationMins"); }],
        /// <field>
        /// Called after the Engineer content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Engineer_postRender: [$element, function () { return new lightSwitchApplication.BrowseTimesheets().findContentItem("Engineer"); }],
        /// <field>
        /// Called after the TotalMinutes content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TotalMinutes_postRender: [$element, function () { return new lightSwitchApplication.BrowseTimesheets().findContentItem("TotalMinutes"); }]
    });

    lightSwitchApplication.ViewTimesheet.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewTimesheet
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ViewTimesheet,
            data: lightSwitchApplication.ViewTimesheet,
            value: lightSwitchApplication.ViewTimesheet
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.ViewTimesheet,
            data: lightSwitchApplication.ViewTimesheet,
            value: lightSwitchApplication.Timesheet
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewTimesheet,
            data: lightSwitchApplication.Timesheet,
            value: lightSwitchApplication.Timesheet
        },
        DurationMins: {
            _$class: msls.ContentItem,
            _$name: "DurationMins",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewTimesheet,
            data: lightSwitchApplication.Timesheet,
            value: Number
        },
        Engineer: {
            _$class: msls.ContentItem,
            _$name: "Engineer",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewTimesheet,
            data: lightSwitchApplication.Timesheet,
            value: lightSwitchApplication.Engineer
        },
        Issue: {
            _$class: msls.ContentItem,
            _$name: "Issue",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewTimesheet,
            data: lightSwitchApplication.Timesheet,
            value: lightSwitchApplication.Issue
        },
        CreatedBy: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewTimesheet,
            data: lightSwitchApplication.Timesheet,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewTimesheet,
            data: lightSwitchApplication.Timesheet,
            value: lightSwitchApplication.Timesheet
        },
        Created: {
            _$class: msls.ContentItem,
            _$name: "Created",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewTimesheet,
            data: lightSwitchApplication.Timesheet,
            value: Date
        },
        ModifiedBy: {
            _$class: msls.ContentItem,
            _$name: "ModifiedBy",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewTimesheet,
            data: lightSwitchApplication.Timesheet,
            value: String
        },
        Modified: {
            _$class: msls.ContentItem,
            _$name: "Modified",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewTimesheet,
            data: lightSwitchApplication.Timesheet,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewTimesheet
        }
    };

    msls._addEntryPoints(lightSwitchApplication.ViewTimesheet, {
        /// <field>
        /// Called when a new ViewTimesheet screen is created.
        /// <br/>created(msls.application.ViewTimesheet screen)
        /// </field>
        created: [lightSwitchApplication.ViewTimesheet],
        /// <field>
        /// Called before changes on an active ViewTimesheet screen are applied.
        /// <br/>beforeApplyChanges(msls.application.ViewTimesheet screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.ViewTimesheet],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.ViewTimesheet().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.ViewTimesheet().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.ViewTimesheet().findContentItem("left"); }],
        /// <field>
        /// Called after the DurationMins content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DurationMins_postRender: [$element, function () { return new lightSwitchApplication.ViewTimesheet().findContentItem("DurationMins"); }],
        /// <field>
        /// Called after the Engineer content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Engineer_postRender: [$element, function () { return new lightSwitchApplication.ViewTimesheet().findContentItem("Engineer"); }],
        /// <field>
        /// Called after the Issue content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Issue_postRender: [$element, function () { return new lightSwitchApplication.ViewTimesheet().findContentItem("Issue"); }],
        /// <field>
        /// Called after the CreatedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.ViewTimesheet().findContentItem("CreatedBy"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.ViewTimesheet().findContentItem("right"); }],
        /// <field>
        /// Called after the Created content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Created_postRender: [$element, function () { return new lightSwitchApplication.ViewTimesheet().findContentItem("Created"); }],
        /// <field>
        /// Called after the ModifiedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ModifiedBy_postRender: [$element, function () { return new lightSwitchApplication.ViewTimesheet().findContentItem("ModifiedBy"); }],
        /// <field>
        /// Called after the Modified content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Modified_postRender: [$element, function () { return new lightSwitchApplication.ViewTimesheet().findContentItem("Modified"); }]
    });

    lightSwitchApplication.AppOptionsEdit.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AppOptionsEdit
        },
        AppOptionList: {
            _$class: msls.ContentItem,
            _$name: "AppOptionList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AppOptionsEdit,
            data: lightSwitchApplication.AppOptionsEdit,
            value: lightSwitchApplication.AppOptionsEdit
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "AppOptionList",
            screen: lightSwitchApplication.AppOptionsEdit,
            data: lightSwitchApplication.AppOptionsEdit,
            value: lightSwitchApplication.AppOptionsEdit
        },
        AppOptionProperty: {
            _$class: msls.ContentItem,
            _$name: "AppOptionProperty",
            _$parentName: "AppOptionList",
            screen: lightSwitchApplication.AppOptionsEdit,
            data: lightSwitchApplication.AppOptionsEdit,
            value: lightSwitchApplication.AppOption
        },
        AuditChangesOn: {
            _$class: msls.ContentItem,
            _$name: "AuditChangesOn",
            _$parentName: "AppOptionProperty",
            screen: lightSwitchApplication.AppOptionsEdit,
            data: lightSwitchApplication.AppOption,
            value: Boolean
        },
        SendEmailOn: {
            _$class: msls.ContentItem,
            _$name: "SendEmailOn",
            _$parentName: "AppOptionProperty",
            screen: lightSwitchApplication.AppOptionsEdit,
            data: lightSwitchApplication.AppOption,
            value: Boolean
        },
        SMTPServer: {
            _$class: msls.ContentItem,
            _$name: "SMTPServer",
            _$parentName: "AppOptionProperty",
            screen: lightSwitchApplication.AppOptionsEdit,
            data: lightSwitchApplication.AppOption,
            value: String
        },
        SMTPPort: {
            _$class: msls.ContentItem,
            _$name: "SMTPPort",
            _$parentName: "AppOptionProperty",
            screen: lightSwitchApplication.AppOptionsEdit,
            data: lightSwitchApplication.AppOption,
            value: String
        },
        SMTPUsername: {
            _$class: msls.ContentItem,
            _$name: "SMTPUsername",
            _$parentName: "AppOptionProperty",
            screen: lightSwitchApplication.AppOptionsEdit,
            data: lightSwitchApplication.AppOption,
            value: String
        },
        SMTPPassword: {
            _$class: msls.ContentItem,
            _$name: "SMTPPassword",
            _$parentName: "AppOptionProperty",
            screen: lightSwitchApplication.AppOptionsEdit,
            data: lightSwitchApplication.AppOption,
            value: String
        },
        ReportServer: {
            _$class: msls.ContentItem,
            _$name: "ReportServer",
            _$parentName: "AppOptionProperty",
            screen: lightSwitchApplication.AppOptionsEdit,
            data: lightSwitchApplication.AppOption,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AppOptionsEdit
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AppOptionsEdit, {
        /// <field>
        /// Called when a new AppOptionsEdit screen is created.
        /// <br/>created(msls.application.AppOptionsEdit screen)
        /// </field>
        created: [lightSwitchApplication.AppOptionsEdit],
        /// <field>
        /// Called before changes on an active AppOptionsEdit screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AppOptionsEdit screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AppOptionsEdit],
        /// <field>
        /// Called to determine if the SaveAppOption method can be executed.
        /// <br/>canExecute(msls.application.AppOptionsEdit screen)
        /// </field>
        SaveAppOption_canExecute: [lightSwitchApplication.AppOptionsEdit],
        /// <field>
        /// Called to execute the SaveAppOption method.
        /// <br/>execute(msls.application.AppOptionsEdit screen)
        /// </field>
        SaveAppOption_execute: [lightSwitchApplication.AppOptionsEdit],
        /// <field>
        /// Called after the AppOptionList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AppOptionList_postRender: [$element, function () { return new lightSwitchApplication.AppOptionsEdit().findContentItem("AppOptionList"); }],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.AppOptionsEdit().findContentItem("Group"); }],
        /// <field>
        /// Called after the AppOptionProperty content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AppOptionProperty_postRender: [$element, function () { return new lightSwitchApplication.AppOptionsEdit().findContentItem("AppOptionProperty"); }],
        /// <field>
        /// Called after the AuditChangesOn content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AuditChangesOn_postRender: [$element, function () { return new lightSwitchApplication.AppOptionsEdit().findContentItem("AuditChangesOn"); }],
        /// <field>
        /// Called after the SendEmailOn content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SendEmailOn_postRender: [$element, function () { return new lightSwitchApplication.AppOptionsEdit().findContentItem("SendEmailOn"); }],
        /// <field>
        /// Called after the SMTPServer content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SMTPServer_postRender: [$element, function () { return new lightSwitchApplication.AppOptionsEdit().findContentItem("SMTPServer"); }],
        /// <field>
        /// Called after the SMTPPort content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SMTPPort_postRender: [$element, function () { return new lightSwitchApplication.AppOptionsEdit().findContentItem("SMTPPort"); }],
        /// <field>
        /// Called after the SMTPUsername content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SMTPUsername_postRender: [$element, function () { return new lightSwitchApplication.AppOptionsEdit().findContentItem("SMTPUsername"); }],
        /// <field>
        /// Called after the SMTPPassword content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SMTPPassword_postRender: [$element, function () { return new lightSwitchApplication.AppOptionsEdit().findContentItem("SMTPPassword"); }],
        /// <field>
        /// Called after the ReportServer content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ReportServer_postRender: [$element, function () { return new lightSwitchApplication.AppOptionsEdit().findContentItem("ReportServer"); }]
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