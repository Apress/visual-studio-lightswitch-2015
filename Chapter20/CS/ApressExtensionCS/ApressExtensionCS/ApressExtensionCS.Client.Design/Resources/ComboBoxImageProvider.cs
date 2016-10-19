//You can use and redistribute the code from this book (and sample application) for non-commercial and 
//most commercial purposes as long as you acknowledge the source and authorship. 
//You should note the source of the code in any documentation as well as in the program code itself (as a comment). 
//The acknowledgment should include author, title, publisher, and ISBN. 
//An example of such an acknowledgment would be "Derived from Listing 2-10, LightSwitch 2015 by Tim Leung, published by Apress, ISBN 978-1-4842-0767-3".

using System;
using System.ComponentModel.Composition;
using System.Globalization;
using System.Windows.Media.Imaging;

using Microsoft.LightSwitch.BaseServices.ResourceService;

namespace ApressExtensionCS.Resources
{
    [Export(typeof(IResourceProvider))]
    [ResourceProvider("ApressExtensionCS.ComboBox")]
    internal class ComboBoxImageProvider : IResourceProvider
    {
        #region IResourceProvider Members

        public object GetResource(string resourceId, CultureInfo cultureInfo)
        {
            return new BitmapImage(new Uri("/ApressExtensionCS.Client.Design;component/Resources/ControlImages/ComboBox.png", UriKind.Relative));
        }

        #endregion
    }
}