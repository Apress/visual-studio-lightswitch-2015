/// <reference path="viewModel.js" />

(function (lightSwitchApplication) {

    var $element = document.createElement("div");

    lightSwitchApplication.Info.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.Info
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.Info,
            data: lightSwitchApplication.Info,
            value: lightSwitchApplication.Info
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.Info
        }
    };

    msls._addEntryPoints(lightSwitchApplication.Info, {
        /// <field>
        /// Called when a new Info screen is created.
        /// <br/>created(msls.application.Info screen)
        /// </field>
        created: [lightSwitchApplication.Info],
        /// <field>
        /// Called before changes on an active Info screen are applied.
        /// <br/>beforeApplyChanges(msls.application.Info screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.Info],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.Info().findContentItem("Group"); }]
    });

}(msls.application));