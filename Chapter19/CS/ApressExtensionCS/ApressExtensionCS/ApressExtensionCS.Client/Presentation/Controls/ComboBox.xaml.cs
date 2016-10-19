//You can use and redistribute the code from this book (and sample application) for non-commercial and 
//most commercial purposes as long as you acknowledge the source and authorship. 
//You should note the source of the code in any documentation as well as in the program code itself (as a comment). 
//The acknowledgment should include author, title, publisher, and ISBN. 
//An example of such an acknowledgment would be "Derived from Listing 2-10, LightSwitch 2015 by Tim Leung, published by Apress, ISBN 978-1-4842-0767-3".


using System;
using System.ComponentModel.Composition;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Markup;
using System.Windows.Data;
using Microsoft.LightSwitch.Presentation;
using Microsoft.LightSwitch.Model;
using System.Collections.Generic;
using System.Linq;


namespace ApressExtensionCS.Presentation.Controls
{


    //Listing 19-10. ComboBox Code File  

    public partial class ComboBox : UserControl
    {

        //1 . INITIALIZE CONTROL & RETRIEVE PROPERTY SHEET VALUES
        public ComboBox()
        {
            InitializeComponent();

            this.SetBinding(ComboBox.ComboBoxQueryProperty,
              new Binding(
                "Properties[ApressExtensionCS:ComboBox/ComboQueryProperty]"));

            this.SetBinding(ComboBox.ComboDisplayItemProperty,
             new Binding(
          "Properties[ApressExtensionCS:ComboBox/ComboDisplayItemProperty]"));

            this.SetBinding(ComboBox.ContentItemProperty, new Binding());
        }

        //2. DEFINE DEPENDENCY PROPERTIES
        public string ComboDisplayItem
        {
            get { return (string)GetValue(ComboDisplayItemProperty); }
            set { SetValue(ComboDisplayItemProperty, value); }
        }

        public static readonly DependencyProperty ComboDisplayItemProperty =
           DependencyProperty.Register("ComboDisplayItem", typeof(string),
             typeof(ComboBox), new PropertyMetadata(ComboDisplayItemChanged));

        public string ComboBoxQuery
        {
            get { return (string)GetValue(ComboBoxQueryProperty); }
            set { SetValue(ComboBoxQueryProperty, value); }
        }

        public static readonly DependencyProperty ComboBoxQueryProperty =
            DependencyProperty.Register("ComboBoxQuery", typeof(string),
                typeof(ComboBox), new PropertyMetadata(ComboBoxQueryChanged));

        public IContentItem ContentItem
        {
            get { return (IContentItem)GetValue(ContentItemProperty); }
            set { SetValue(ContentItemProperty, value); }
        }

        public static readonly DependencyProperty ContentItemProperty =
           DependencyProperty.Register("ContentItem",
              typeof(IContentItem), typeof(ComboBox),
              new PropertyMetadata(ComboDisplayItemChanged));


        //3. HANDLE PROPERTY SHEET CHANGES
        private static void ComboDisplayItemChanged(DependencyObject d,
              DependencyPropertyChangedEventArgs e)
        {
            ((ComboBox)d).SetContentDataBinding();
        }

        private static void ComboBoxQueryChanged(DependencyObject d,
              DependencyPropertyChangedEventArgs e)
        {
            ((ComboBox)d).SetComboContentDataBinding();
        }

        //4. SET COMBO DATA SOURCE AND VALUE

        //Listing 19-10. ComboBox Code File  

        //        private void SetContentDataBinding()
        //        {
        //            if (!String.IsNullOrEmpty(ComboDisplayItem))
        //            {
        //                string str = @"<DataTemplate     
        //            xmlns=""http://schemas.microsoft.com/winfx/2006/xaml/presentation"">
        //            <TextBlock Text=""{Binding " + ComboDisplayItem + @"}"" />
        //              </DataTemplate>";

        //                Combo.ItemTemplate = (DataTemplate)XamlReader.Load(str);

        //                Binding selectedBinding = new Binding("Value");
        //                selectedBinding.Mode = BindingMode.TwoWay;
        //                Combo.SetBinding(
        //                  System.Windows.Controls.ComboBox.SelectedValueProperty,
        //                  selectedBinding);
        //            }
        //        }


        //Listing 19-12. ComboBox Control Code   
        private void SetContentDataBinding()
        {
            if (ContentItem != null)
            {

                IEntityType entityType = ContentItem.ResultingDataType as IEntityType;
                if (ContentItem != null)
                {
                    string displayProperty = ComboDisplayItem;
                    if (string.IsNullOrEmpty(displayProperty))
                    {
                        displayProperty =
                           CustomEditorHelper.GetSummaryProperty(entityType).Name;
                    }

                    if (!string.IsNullOrEmpty(displayProperty))
                    {
                        string str = @"<DataTemplate
              xmlns=""http://schemas.microsoft.com/winfx/2006/xaml/presentation"">
                   <TextBlock Text=""{Binding " +
                              displayProperty + @"}"" /> </DataTemplate>";

                        Combo.ItemTemplate = (DataTemplate)XamlReader.Load(str);

                        Binding selectedBinding = new Binding("Value");
                        selectedBinding.Mode = BindingMode.TwoWay;
                        Combo.SetBinding(
                           System.Windows.Controls.ComboBox.SelectedValueProperty,
                           selectedBinding);
                    }
                }
            }
        }


        private void SetComboContentDataBinding()
        {
            if (!string.IsNullOrEmpty(this.ComboBoxQuery))
            {
                Binding dataSourceBinding = new Binding(this.ComboBoxQuery);
                dataSourceBinding.Mode = BindingMode.OneTime;
                Combo.SetBinding(
                   System.Windows.Controls.ComboBox.ItemsSourceProperty,
                   dataSourceBinding);
            }
        }
    }





    [Export(typeof(IControlFactory))]
    [ControlFactory("ApressExtensionCS:ComboBox")]
    internal class ComboBoxFactory : IControlFactory
    {
        #region IControlFactory Members

        public DataTemplate DataTemplate
        {
            get
            {
                if (null == this.dataTemplate)
                {
                    this.dataTemplate = XamlReader.Load(ComboBoxFactory.ControlTemplate) as DataTemplate;
                }
                return this.dataTemplate;
            }
        }

        public DataTemplate GetDisplayModeDataTemplate(IContentItem contentItem)
        {
            return null;
        }

        #endregion

        #region Private Fields

        private DataTemplate dataTemplate;

        #endregion

        #region Constants

        private const string ControlTemplate =
            "<DataTemplate" +
            " xmlns=\"http://schemas.microsoft.com/winfx/2006/xaml/presentation\"" +
            " xmlns:x=\"http://schemas.microsoft.com/winfx/2006/xaml\"" +
            " xmlns:ctl=\"clr-namespace:ApressExtensionCS.Presentation.Controls;assembly=ApressExtensionCS.Client\">" +
            "<ctl:ComboBox/>" +
            "</DataTemplate>";

        #endregion
    }
}
