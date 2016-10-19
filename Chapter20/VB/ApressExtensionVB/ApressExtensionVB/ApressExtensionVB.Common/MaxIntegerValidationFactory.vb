'You can use and redistribute the code from this book (and sample application) for non-commercial and 
'most commercial purposes as long as you acknowledge the source and authorship. 
'You should note the source of the code in any documentation as well as in the program code itself (as a comment). 
'The acknowledgment should include author, title, publisher, and ISBN. 
'An example of such an acknowledgment would be "Derived from Listing 2-10, LightSwitch 2015 by Tim Leung, published by Apress, ISBN 978-1-4842-0767-3".

Imports System.ComponentModel.Composition
Imports Microsoft.LightSwitch.Runtime.Rules
Imports Microsoft.LightSwitch.Model

'Listing 20-4. Creating the Validation Factory Code 

<Export(GetType(IValidationCodeFactory))>
<ValidationCodeFactory("ApressExtensionVB:@MaxIntegerValidationId")>
Public Class MaxIntegerValidationFactory
    Implements IValidationCodeFactory

    Public Function Create(
       modelItem As Microsoft.LightSwitch.Model.IStructuralItem,
       attributes As System.Collections.Generic.IEnumerable(
          Of Microsoft.LightSwitch.Model.IAttribute)) As Microsoft.LightSwitch.Runtime.Rules.IAttachedValidation Implements Microsoft.LightSwitch.Runtime.Rules.IValidationCodeFactory.Create

        ' Enusre that the data type is a positive integer semantic
        ' type (or nullable positive integer)
        If Not IsValid(modelItem) Then
            Throw New InvalidOperationException("Unsupported data type.")
        End If
        Return New MaxIntegerValidation(attributes)
    End Function

    Public Function IsValid(modelItem As Microsoft.LightSwitch.Model.IStructuralItem) As Boolean Implements Microsoft.LightSwitch.Runtime.Rules.IValidationCodeFactory.IsValid

        Dim nullableType As INullableType = TryCast(modelItem, INullableType)

        ' Get underlying type if it is a INullableType.
        modelItem =
           If(nullableType IsNot Nothing, nullableType.UnderlyingType, modelItem)

        ' Ensure the type matches the business type, or the underlying type
        While TypeOf modelItem Is ISemanticType
            If String.Equals(DirectCast(modelItem, ISemanticType).Id,
               "ApressExtensionVB:DurationType",
                  StringComparison.Ordinal) Then
                Return True
            End If
            modelItem = DirectCast(modelItem, ISemanticType).UnderlyingType
        End While
        ' Don't apply the validation if the conditions aren't met
        Return False

    End Function
End Class
