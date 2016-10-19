<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="ReportPage.aspx.cs" Inherits="LightSwitchApplication.Reports.ReportPage" %>

<%@ register assembly="Microsoft.ReportViewer.WebForms, Version=12.0.0.0, Culture=neutral, PublicKeyToken=89845dcd8080cc91" namespace="Microsoft.Reporting.WebForms" tagprefix="rsweb" %>


<%--You can use and redistribute the code from this book (and sample application) for non-commercial and 
most commercial purposes as long as you acknowledge the source and authorship. 
You should note the source of the code in any documentation as well as in the program code itself (as a comment). 
The acknowledgment should include author, title, publisher, and ISBN. 
An example of such an acknowledgment would be "Derived from Listing 2-10, LightSwitch 2015 by Tim Leung, published by Apress, ISBN 978-1-4842-0767-3".--%>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
        <asp:scriptmanager runat="server"></asp:scriptmanager>
        <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:_IntrinsicData %>" SelectCommand="SELECT 'Leung' Surname, 
'Tim' Firstname, 
'2' LowPriorityCount, 
'5' MediumPriorityCount, 
'2' HighPriorityCount  
UNION
SELECT 'Smith' Surname, 
'Sally' Firstname, 
'2' LowPriorityCount, 
'6' MediumPriorityCount, 
'0' HighPriorityCount  
UNION
SELECT 'Brown' Surname, 
'Jools' Firstname, 
'2' LowPriorityCount, 
'6' MediumPriorityCount, 
'0' HighPriorityCount  
		"></asp:SqlDataSource>
        <rsweb:reportviewer runat="server" ID="rv02" Font-Names="Verdana" Font-Size="8pt" WaitMessageFont-Names="Verdana" WaitMessageFont-Size="14pt" Width="650px">
            <localreport reportpath="Reports\IssuePriorityBreakdownByEng.rdlc">
                <datasources>
                    <rsweb:ReportDataSource DataSourceId="SqlDataSource1" Name="DataSet1" />
                </datasources>
            </localreport>
        </rsweb:reportviewer>
    </div>
    </form>
</body>
</html>
