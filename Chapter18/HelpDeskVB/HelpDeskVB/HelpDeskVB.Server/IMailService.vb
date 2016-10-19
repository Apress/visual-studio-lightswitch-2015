'You can use and redistribute the code from this book (and sample application) for non-commercial and 
'most commercial purposes as long as you acknowledge the source and authorship. 
'You should note the source of the code in any documentation as well as in the program code itself (as a comment). 
'The acknowledgment should include author, title, publisher, and ISBN. 
'An example of such an acknowledgment would be "Derived from Listing 2-10, LightSwitch 2015 by Tim Leung, published by Apress, ISBN 978-1-4842-0767-3".

Imports System.ServiceModel
Imports System.ServiceModel.Web

'Listing 18 - 3.Defining the Interface for Your Web Service
Namespace LightSwitchApplication
    <ServiceContract()>
    Public Interface IMailService

        <OperationContract()>
        <WebInvoke(Method:="POST",
                   BodyStyle:=WebMessageBodyStyle.Wrapped,
                   ResponseFormat:=WebMessageFormat.Xml)>
        Function SendMailSOAP(
          emailTo As String, subject As String, body As String) As String

        <OperationContract()>
        <WebInvoke(Method:="POST",
                   ResponseFormat:=WebMessageFormat.Json,
                   BodyStyle:=WebMessageBodyStyle.Wrapped)>
        Function SendMailREST(
          emailTo As String, subject As String, body As String) As String

    End Interface

End Namespace
