using System.Windows;

//Listing 20-7. Creating a Custom Property Editor 

public partial class MaxIntegerEditorDialog : Window                       
{
    public MaxIntegerEditorDialog()
    {
       InitializeComponent();
    }
    public int? Value
    {
        get { return (int?)GetValue(ValueProperty); }
        set { SetValue(ValueProperty, value); }
    }
    public static readonly DependencyProperty ValueProperty =              
        DependencyProperty.Register("Value", typeof(int?),
        typeof(MaxIntegerEditorDialog), new UIPropertyMetadata(0));
}
