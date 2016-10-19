'You can use and redistribute the code from this book (and sample application) for non-commercial and 
'most commercial purposes as long as you acknowledge the source and authorship. 
'You should note the source of the code in any documentation as well as in the program code itself (as a comment). 
'The acknowledgment should include author, title, publisher, and ISBN. 
'An example of such an acknowledgment would be "Derived from Listing 2-10, LightSwitch 2015 by Tim Leung, published by Apress, ISBN 978-1-4842-0767-3".

Imports System
Imports System.Collections.Generic
Imports System.ComponentModel.Composition
Imports System.Linq
Imports System.Management
Imports System.Text

Imports Microsoft.LightSwitch.Designers.ScreenTemplates.Model
Imports Microsoft.LightSwitch.Model
Imports Microsoft.LightSwitch.Model.Storage

Imports Microsoft.LightSwitch.DesignTime

Namespace ScreenTemplates

    Friend Class ViewDeleteScreenTemplate
        Implements IScreenTemplate

#Region "IScreenTemplate Members"

        'Listing 20-25. Creating an HTML Client Screen Template Extension 

        Public Sub Generate(host As IScreenTemplateHost) Implements IScreenTemplate.Generate

            '1 Add a tab
            Dim screenTab = host.AddContentItem(host.ScreenTabPagesContentItem,
                "Tab1", ContentItemKind.Group)

            '2 Add a group and data items
            Dim screenGroup As ContentItem =
                    host.AddContentItem(screenTab,
                "Group1", host.PrimaryDataSourceProperty)

            screenGroup.View = "Microsoft.LightSwitch.MobileWeb:RowsLayout"
            host.ExpandContentItem(screenGroup, False, False)

            '3 Add a popup called ConfirmDelete
            Dim popupControl = host.AddContentItem(host.ScreenDialogPagesContentItem,
                 "ConfirmDelete", ContentItemKind.Group)

            '4.1 Add a string property for the popup title
            Dim titleProperty As ScreenProperty =
                host.AddScreenProperty(":String?", "PopupTitle")

            '4.2 Add a text control to the popup and bind it to the string property
            Dim titleControl = host.AddContentItem(popupControl,
                 "PopupTitle", titleProperty)

            titleControl.View = "Microsoft.LightSwitch.MobileWeb:Text"

            '5 Add OK and Cancel methods and add a command to the popup
            Dim methodDoDelete As ScreenMethod = host.AddScreenMethod("DoDelete")
            Dim callExpDoDelete As CallExpression =
                host.CreateCallExpression(methodDoDelete.Id)
            Dim chainExpDoDelete As ChainExpression =
                host.CreateChainExpression(callExpDoDelete)
            Dim expTreeDoDelete As New ScreenExpressionTree With {
                 .Body = chainExpDoDelete}

            Dim commandDoDelete As ContentItem = host.AddContentItem(
                popupControl,
                "DoDelete",
                ContentItemKind.Command)
            host.SetDisplayName(commandDoDelete, "OK")

            '6.1 Create a method to show the popup window
            Dim commandShowPopup = New ContentItem()
            commandShowPopup.Kind = ContentItemKind.Command
            Dim methodShowPopup As ScreenMethod = host.AddScreenMethod("ShowPopup")
            Dim CallExpression As CallExpression =
                host.CreateCallExpression(methodShowPopup.Id)
            Dim ChainExpression As ChainExpression =
                host.CreateChainExpression(CallExpression)
            Dim expTreeShowPopup As New ScreenExpressionTree With {
                .Body = ChainExpression}
            host.SetControlPropertyExpressionTree(
                commandShowPopup,
                "Microsoft.LightSwitch.MobileWeb:RootControl",
                "Tap",
                expTreeShowPopup)

            '6.2 Configure the button to show the trash icon
            Dim constExpTrashIcon As ConstantExpression = New ConstantExpression
            constExpTrashIcon.ResultType = ":String"
            constExpTrashIcon.Value = "msls-trash"
            Dim chainExpTrashIcon As ChainExpression =
               host.CreateChainExpression(constExpTrashIcon)
            Dim expTreeTrashIcon As New ScreenExpressionTree With {
                .Body = chainExpTrashIcon}

            host.SetControlPropertyExpressionTree(
                commandShowPopup,
                "Microsoft.LightSwitch.MobileWeb:RootCommand",
                "Icon",
                expTreeTrashIcon)

            host.SetDisplayName(commandShowPopup, "ShowPopup")
            screenTab.CommandItems.Add(commandShowPopup)

            '7 Add the JavaScript code for the methods
            Dim sb As New StringBuilder
            sb.Append("{0}myapp.{1}.created = function (screen) {{")
            sb.Append("{0}    screen.PopupTitle = 'Confirm Delete'")
            sb.Append("{0}}}")

            sb.Append("{0}myapp.{1}.DoDelete_execute = function (screen) {{")
            sb.Append("{0}    screen.{2}.deleteEntity()")
            sb.Append("{0}    return myapp.commitChanges()")
            sb.Append("{0}}}")

            sb.Append("{0}myapp.{1}.ShowPopup_execute = function (screen) {{")
            sb.Append("{0}    return screen.showPopup('ShowPopup')")
            sb.Append("{0}}}")

            host.AddScreenCodeBehind(String.Format(sb.ToString(),
                Environment.NewLine,
                host.ScreenName,
                host.PrimaryDataSourceProperty.Name
                ))

        End Sub


        Public ReadOnly Property Description As String Implements IScreenTemplateMetadata.Description
            Get
                Return "ViewDeleteScreenTemplate description"
            End Get
        End Property

        Public ReadOnly Property DisplayName As String Implements IScreenTemplateMetadata.DisplayName
            Get
                Return "ViewDeleteScreenTemplate"
            End Get
        End Property

        Public ReadOnly Property PreviewImage As Uri Implements IScreenTemplateMetadata.PreviewImage
            Get
                Return New Uri("/ApressExtensionVB.Design;component/Resources/ScreenTemplateImages/ViewDeleteScreenTemplateLarge.png", UriKind.Relative)
            End Get
        End Property

        Public ReadOnly Property RootDataSource As RootDataSourceType Implements IScreenTemplateMetadata.RootDataSource
            Get
                Return RootDataSourceType.ScalarEntity
            End Get
        End Property

        Public ReadOnly Property ScreenNameFormat As String Implements IScreenTemplateMetadata.ScreenNameFormat
            Get
                Return "{0}ViewDeleteScreenTemplate"
            End Get
        End Property

        Public ReadOnly Property SmallIcon As Uri Implements IScreenTemplateMetadata.SmallIcon
            Get
                Return New Uri("/ApressExtensionVB.Design;component/Resources/ScreenTemplateImages/ViewDeleteScreenTemplateSmall.png", UriKind.Relative)
            End Get
        End Property

        Public ReadOnly Property SupportsChildCollections As Boolean Implements IScreenTemplateMetadata.SupportsChildCollections
            Get
                Return True
            End Get
        End Property

        Public ReadOnly Property TemplateName As String Implements IScreenTemplateMetadata.TemplateName
            Get
                Return ViewDeleteScreenTemplate.TemplateId
            End Get
        End Property

#End Region

#Region "Constants"

        Friend Const TemplateId As String = "ApressExtensionVB:ViewDeleteScreenTemplate"

#End Region

    End Class

    'Listing 20-24. Designating a screen template as an HTML Client screen template   

    <Export(GetType(IScreenTemplateFactory))>
    <Template(ViewDeleteScreenTemplate.TemplateId)>
    <TargetPlatform(TargetPlatformNames.MobileWeb)>
    Friend Class ViewDeleteScreenTemplateFactory
        Implements IScreenTemplateFactory

#Region "IScreenTemplateFactory Members"

        Public Function CreateScreenTemplate() As IScreenTemplate Implements IScreenTemplateFactory.CreateScreenTemplate
            Return New ViewDeleteScreenTemplate()
        End Function

#End Region

    End Class

End Namespace
