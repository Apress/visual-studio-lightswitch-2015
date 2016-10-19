'You can use and redistribute the code from this book (and sample application) for non-commercial and 
'most commercial purposes as long as you acknowledge the source and authorship. 
'You should note the source of the code in any documentation as well as in the program code itself (as a comment). 
'The acknowledgment should include author, title, publisher, and ISBN. 
'An example of such an acknowledgment would be "Derived from Listing 2-10, LightSwitch 2015 by Tim Leung, published by Apress, ISBN 978-1-4842-0767-3".

Imports System
Imports System.ComponentModel.Composition
Imports Microsoft.LightSwitch.Runtime.Shell

Namespace Presentation.Shells.Components

    <Export(GetType(IShell))>
    <Shell(ApressShell.ShellId)>
    Friend Class ApressShell
        Implements IShell

#Region "IShell Members"

        Public ReadOnly Property Name As String Implements IShell.Name
            Get
                Return ApressShell.ShellId
            End Get
        End Property

        Public ReadOnly Property ShellUri As Uri Implements IShell.ShellUri
            Get
                Return New Uri("/ApressExtensionVB.Client;component/Presentation/Shells/ApressShell.xaml", UriKind.Relative)
            End Get
        End Property

#End Region

#Region "Constants"

        Friend Const ShellId As String = "ApressExtensionVB:ApressShell"

#End Region

    End Class

End Namespace