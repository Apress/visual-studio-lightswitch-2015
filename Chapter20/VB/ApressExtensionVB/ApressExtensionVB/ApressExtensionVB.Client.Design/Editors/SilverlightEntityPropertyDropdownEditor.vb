Imports System.ComponentModel.Composition
Imports System.Windows
Imports System.Windows.Markup
Imports Microsoft.LightSwitch.Designers.PropertyPages
Imports Microsoft.LightSwitch.RuntimeEdit

'Listing 19-20. SilverlightEntityPropertyDropdownEditor Class 

Namespace ApressExtensionVB.Editors

    <Export(GetType(IPropertyValueEditorProvider))>
    <PropertyValueEditorName("EntityPropertyDropdown")>
    <PropertyValueEditorType("System.String")>
    Public Class SilverlightEntityPropertyDropdownEditor
        Implements IPropertyValueEditorProvider

        Public Function GetEditor(entry As IPropertyEntry) As IPropertyValueEditor Implements IPropertyValueEditorProvider.GetEditor
            Return New Editor()
        End Function

        Private Class Editor
            Implements IPropertyValueEditor
            Public Function GetEditorTemplate(entry As IPropertyEntry) As DataTemplate Implements IPropertyValueEditor.GetEditorTemplate
                Return XamlReader.Load(
                   SilverlightEntityPropertyDropdownEditor.ControlTemplate)
            End Function

        End Class

        Private Const ControlTemplate As String =
          "<DataTemplate" +
          " xmlns=""http://schemas.microsoft.com/winfx/2006/xaml/presentation""" +
          " xmlns:x=""http://schemas.microsoft.com/winfx/2006/xaml""" +
          " xmlns:editors=""clr-namespace:ApressExtensionVB.Editors; assembly=ApressExtensionVB.Client.Design"">" +
            "   <editors:SilverlightEntityPropertyDropdown/>" +
            "</DataTemplate>"

    End Class
End Namespace
