'You can use and redistribute the code from this book (and sample application) for non-commercial and 
'most commercial purposes as long as you acknowledge the source and authorship. 
'You should note the source of the code in any documentation as well as in the program code itself (as a comment). 
'The acknowledgment should include author, title, publisher, and ISBN. 
'An example of such an acknowledgment would be "Derived from Listing 2-10, LightSwitch 2015 by Tim Leung, published by Apress, ISBN 978-1-4842-0767-3".

Imports System.Windows

'Listing 20-7. Creating a Custom Property Editor 

Public Class MaxIntegerEditorDialog
    Inherits Window

    Public Property Value As Nullable(Of Integer)
        Get
            Return MyBase.GetValue(MaxIntegerEditorDialog.ValueProperty)
        End Get
        Set(value As Nullable(Of Integer))
            MyBase.SetValue(MaxIntegerEditorDialog.ValueProperty, value)
        End Set
    End Property

    Public Shared ReadOnly ValueProperty As DependencyProperty =
        DependencyProperty.Register(
            "Value",
            GetType(Nullable(Of Integer)),
            GetType(MaxIntegerEditorDialog),
            New UIPropertyMetadata(0))

    Public Sub New()
        InitializeComponent()
    End Sub

End Class
