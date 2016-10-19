//You can use and redistribute the code from this book (and sample application) for non-commercial and 
//most commercial purposes as long as you acknowledge the source and authorship. 
//You should note the source of the code in any documentation as well as in the program code itself (as a comment). 
//The acknowledgment should include author, title, publisher, and ISBN. 
//An example of such an acknowledgment would be "Derived from Listing 2-10, LightSwitch 2015 by Tim Leung, published by Apress, ISBN 978-1-4842-0767-3".

using System.ComponentModel.Composition;
using System.Windows;
using System.Windows.Markup;
using Microsoft.LightSwitch.Designers.PropertyPages;
using Microsoft.LightSwitch.RuntimeEdit;

//Listing 19-20. SilverlightEntityPropertyDropdownEditor Class 

namespace ApressExtensionCS.Editors
{
    [Export(typeof(IPropertyValueEditorProvider))]
    [PropertyValueEditorName("EntityPropertyDropdown")]
    [PropertyValueEditorType("System.String")]
    public class SilverlightEntityPropertyEditor
        : IPropertyValueEditorProvider
    {
        public IPropertyValueEditor GetEditor(IPropertyEntry entry)
        {
            return new Editor();
        }

        private class Editor : IPropertyValueEditor
        {
            public DataTemplate GetEditorTemplate(IPropertyEntry entry)
            {
                return (DataTemplate)XamlReader.Load(ControlTemplate);
            }
        }

        #region Constants

        private const string ControlTemplate = 
        "<DataTemplate" + 
        " xmlns=\"http://schemas.microsoft.com/winfx/2006/xaml/presentation\"" + 
        " xmlns:x=\"http://schemas.microsoft.com/winfx/2006/xaml\"" +
        " xmlns:editors=\"clr-namespace:ApressExtensionCS.Editors;assembly=ApressExtensionCS.Client.Design\">" + 
        "      <editors:SilverlightEntityPropertyDropdown/>" + 
        "</DataTemplate>";  
       
        #endregion

    }

}
