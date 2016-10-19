//You can use and redistribute the code from this book (and sample application) for non-commercial and 
//most commercial purposes as long as you acknowledge the source and authorship. 
//You should note the source of the code in any documentation as well as in the program code itself (as a comment). 
//The acknowledgment should include author, title, publisher, and ISBN. 
//An example of such an acknowledgment would be "Derived from Listing 2-10, LightSwitch 2015 by Tim Leung, published by Apress, ISBN 978-1-4842-0767-3".

using System;
using System.Net;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Documents;
using System.Windows.Ink;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Animation;
using System.Windows.Shapes;
using System.Windows.Data ;


//Listing 19-5. Value Converter That Returns a String Representation of a Time Duration 

namespace ApressExtensionCS.Presentation.Controls
{
    public class SplitMinutes : IValueConverter
    {
        public object Convert(object value, Type targetType,
          object parameter, System.Globalization.CultureInfo culture)
        {
            TimeSpan ts = TimeSpan.FromMinutes(int.Parse(value.ToString()));
            return String.Format(
                "{0}hrs {1}mins", Math.Floor(ts.TotalHours), ts.Minutes);
        }

        public object ConvertBack(object value, Type targetType,
            object parameter, System.Globalization.CultureInfo culture)
        {
            return null;
        }
    }


}
