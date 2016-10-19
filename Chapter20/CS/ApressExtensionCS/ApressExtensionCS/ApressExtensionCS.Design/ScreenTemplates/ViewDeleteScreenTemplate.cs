//You can use and redistribute the code from this book (and sample application) for non-commercial and 
//most commercial purposes as long as you acknowledge the source and authorship. 
//You should note the source of the code in any documentation as well as in the program code itself (as a comment). 
//The acknowledgment should include author, title, publisher, and ISBN. 
//An example of such an acknowledgment would be "Derived from Listing 2-10, LightSwitch 2015 by Tim Leung, published by Apress, ISBN 978-1-4842-0767-3".

using System;
using System.Collections.Generic;
using System.ComponentModel.Composition;
using System.Linq;
using System.Management;
using System.Text;

using Microsoft.LightSwitch.Designers.ScreenTemplates.Model;
using Microsoft.LightSwitch.Model;
using Microsoft.LightSwitch.Model.Storage;

using Microsoft.LightSwitch.DesignTime;

namespace ApressExtensionCS.ScreenTemplates
{
    internal class ViewDeleteScreenTemplate : IScreenTemplate
    {
        #region IScreenTemplate Members


        //Listing 20-25. Creating an HTML Client Screen Template Extension 


        public void Generate(IScreenTemplateHost host)
        {

            //1 Add a tab
            var screenTab = host.AddContentItem(host.ScreenTabPagesContentItem,
                "Tab1", ContentItemKind.Group);

            // 2 Add a group and data items
            ContentItem screenGroup =
                    host.AddContentItem(screenTab,
                "Group1", host.PrimaryDataSourceProperty);

            screenGroup.View = "Microsoft.LightSwitch.MobileWeb:RowsLayout";
            host.ExpandContentItem(screenGroup,
                disableNavigationPropertyGeneration: false,
                    disableGeneratedPropertyGeneration: false);

            //3 Add a popup called ConfirmDelete
            var popupControl = host.AddContentItem(
                host.ScreenDialogPagesContentItem, "ConfirmDelete",
                   ContentItemKind.Group);

            //4.1 Add a string property for the popup title
            ScreenProperty titleProperty =
                (ScreenProperty)host.AddScreenProperty(":String?", "PopupTitle");

            //4.2 Add a text control to the popup and bind it to the string property
            var titleControl = host.AddContentItem(popupControl,
                 "PopupTitle", titleProperty);
            titleControl.View = "Microsoft.LightSwitch.MobileWeb:Text";

            //5 Add OK and Cancel methods and add a command to the popup
            ScreenMethod methodDoDelete = host.AddScreenMethod("DoDelete");
            CallExpression callExpDoDelete = host.CreateCallExpression(methodDoDelete.Id);
            ChainExpression chainExpDoDelete =
                host.CreateChainExpression(callExpDoDelete);
            ScreenExpressionTree expTreeDoDelete =
                new ScreenExpressionTree() { Body = chainExpDoDelete };
            ContentItem commandDoDelete = host.AddContentItem(
                popupControl,
                "DoDelete",
                ContentItemKind.Command);
            host.SetDisplayName(commandDoDelete, "OK");

            //6.1 Create a method to show the popup window
            var commandShowPopup = new ContentItem();
            commandShowPopup.Kind = ContentItemKind.Command;
            ScreenMethod methodShowPopup = host.AddScreenMethod("ShowPopup");
            CallExpression callExpression = host.CreateCallExpression(methodShowPopup.Id);
            ChainExpression chainExpression = host.CreateChainExpression(callExpression);
            ScreenExpressionTree expTreeShowPopup =
                new ScreenExpressionTree() { Body = chainExpression };
            host.SetControlPropertyExpressionTree(
                commandShowPopup,
                "Microsoft.LightSwitch.MobileWeb:RootControl",
                "Tap",
                expTreeShowPopup);

            //6.2 Configure the button to show the trash icon
            ConstantExpression constExpTrashIcon = new ConstantExpression();
            constExpTrashIcon.ResultType = ":String";
            constExpTrashIcon.Value = "msls-trash";
            ChainExpression chainExpTrashIcon =
               host.CreateChainExpression(constExpTrashIcon);
            ScreenExpressionTree expTreeTrashIcon =
                new ScreenExpressionTree() { Body = chainExpTrashIcon };

            host.SetControlPropertyExpressionTree(
                commandShowPopup,
                "Microsoft.LightSwitch.MobileWeb:RootCommand",
                "Icon",
                expTreeTrashIcon);

            host.SetDisplayName(commandShowPopup, "ShowPopup");
            screenTab.CommandItems.Add(commandShowPopup);

            //7 Add the JavaScript code for the methods

            StringBuilder sb = new StringBuilder();
            sb.Append("{0}myapp.{1}.created = function (screen) {{");
            sb.Append("{0}    screen.PopupTitle = 'Confirm Delete';");
            sb.Append("{0}}};");

            sb.Append("{0}myapp.{1}.DoDelete_execute = function (screen) {{");
            sb.Append("{0}    screen.{2}.deleteEntity();");
            sb.Append("{0}    return myapp.commitChanges();");
            sb.Append("{0}}};");

            sb.Append("{0}myapp.{1}.ShowPopup_execute = function (screen) {{");
            sb.Append("{0}    return screen.showPopup('ShowPopup');");
            sb.Append("{0}}};");

            host.AddScreenCodeBehind(String.Format(sb.ToString(),
                Environment.NewLine,
                host.ScreenName,
                host.PrimaryDataSourceProperty.Name
                ));
        }




        #endregion

        #region IScreenTemplateMetadata Members

        public string Description
        {
            get { return "ViewDeleteScreenTemplate description"; }
        }

        public string DisplayName
        {
            get { return "ViewDeleteScreenTemplate"; }
        }

        public Uri PreviewImage
        {
            get { return new Uri("/ApressExtensionCS.Design;component/Resources/ScreenTemplateImages/ViewDeleteScreenTemplateLarge.png", UriKind.Relative); }
        }

        public RootDataSourceType RootDataSource
        {
            get { return RootDataSourceType.ScalarEntity; }
        }

        public string ScreenNameFormat
        {
            get { return "{0}ViewDeleteScreenTemplate"; }
        }

        public Uri SmallIcon
        {
            get { return new Uri("/ApressExtensionCS.Design;component/Resources/ScreenTemplateImages/ViewDeleteScreenTemplateSmall.png", UriKind.Relative); }
        }

        public bool SupportsChildCollections
        {
            get { return true; }
        }

        public string TemplateName
        {
            get { return ViewDeleteScreenTemplate.TemplateId; }
        }

        #endregion

        #region Constants

        internal const string TemplateId = "ApressExtensionCS:ViewDeleteScreenTemplate";

        #endregion
    }

    //Listing 20-24. Designating a screen template as an HTML Client screen template   

    [Export(typeof(IScreenTemplateFactory))]
    [Template(ViewDeleteScreenTemplate.TemplateId)]
    internal class ViewDeleteScreenTemplateFactory : IScreenTemplateFactory
    {
        #region IScreenTemplateFactory Members

        IScreenTemplate IScreenTemplateFactory.CreateScreenTemplate()
        {
            return new ViewDeleteScreenTemplate();
        }

        #endregion
    }
}