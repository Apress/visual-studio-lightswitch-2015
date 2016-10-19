<%@ page language="vb" autoeventwireup="false" codebehind="IssuesByEngineer.aspx.vb" inherits=".IssuesByEngineer" %>

<%--You can use and redistribute the code from this book (and sample application) for non-commercial and 
most commercial purposes as long as you acknowledge the source and authorship. 
You should note the source of the code in any documentation as well as in the program code itself (as a comment). 
The acknowledgment should include author, title, publisher, and ISBN. 
An example of such an acknowledgment would be "Derived from Listing 2-10, LightSwitch 2015 by Tim Leung, published by Apress, ISBN 978-1-4842-0767-3".--%>

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        h1 {
            font-size: 20px;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <input type="button" value="Print" onclick="javascript: window.print()" />
            <h1 runat="server" id="EngineerNameLabel"></h1>

            <asp:GridView runat="server" ID="IssuesGrid" AutoGenerateColumns="False" CellPadding="4" ForeColor="#333333" GridLines="None">
                <AlternatingRowStyle BackColor="White" ForeColor="#284775" />
                <Columns>
                    <asp:BoundField DataField="Subject" HeaderText="Issue Subject"></asp:BoundField>
                    <asp:BoundField DataField="CreateDateTime" HeaderText="Create Date" DataFormatString="{0:d}"></asp:BoundField>
                    <asp:BoundField DataField="ClosedDateTime" HeaderText="Close Date" DataFormatString="{0:d}"></asp:BoundField>
                    <asp:BoundField DataField="ClosedByEngineer.Fullname" HeaderText="Closed By Engineer"></asp:BoundField>
                </Columns>
                <EditRowStyle BackColor="#999999" />
                <FooterStyle BackColor="#5D7B9D" Font-Bold="True" ForeColor="White" />
                <HeaderStyle BackColor="#5D7B9D" Font-Bold="True" ForeColor="White" />
                <PagerStyle BackColor="#284775" ForeColor="White" HorizontalAlign="Center" />
                <RowStyle BackColor="#F7F6F3" ForeColor="#333333" />
                <SelectedRowStyle BackColor="#E2DED6" Font-Bold="True" ForeColor="#333333" />
                <SortedAscendingCellStyle BackColor="#E9E7E2" />
                <SortedAscendingHeaderStyle BackColor="#506C8C" />
                <SortedDescendingCellStyle BackColor="#FFFDF8" />
                <SortedDescendingHeaderStyle BackColor="#6F8DAE" />
            </asp:GridView>

            <br />
            <br />



            <asp:GridView runat="server" ID="IssuesGrid2" AutoGenerateColumns="False" CellPadding="4" ForeColor="#333333" GridLines="None">
                <AlternatingRowStyle BackColor="White" ForeColor="#284775" />
                <Columns>

                    <asp:TemplateField HeaderText="Issue Subject">

                        <ItemTemplate>
                            <asp:Label ID="Label2" runat="server" Text='<%# Bind("Subject") %>'></asp:Label>
                        </ItemTemplate>
                        <ItemStyle VerticalAlign="Top" />
                    </asp:TemplateField>

                    <asp:TemplateField HeaderText="Issue Response Records ">

                        <ItemTemplate>

                            <asp:GridView runat="server" ID="childGrid" AutoGenerateColumns="False" BackColor="White" BorderColor="#CCCCCC" BorderStyle="None" BorderWidth="1px" CellPadding="4" ForeColor="Black" GridLines="Horizontal">
                                <Columns>
                                    <asp:BoundField DataField="ResponseDateTime" HeaderText="Date" DataFormatString="{0:d}"></asp:BoundField>
                                    <asp:BoundField DataField="ResponseText" HeaderText="Issue Response"></asp:BoundField>

                                </Columns>

                                <EmptyDataTemplate>
                                    There are no response records for the issue.  

                                </EmptyDataTemplate>

                                <FooterStyle BackColor="#CCCC99" ForeColor="Black" />
                                <HeaderStyle BackColor="#333333" Font-Bold="True" ForeColor="White" />
                                <PagerStyle BackColor="White" ForeColor="Black" HorizontalAlign="Right" />
                                <SelectedRowStyle BackColor="#CC3333" Font-Bold="True" ForeColor="White" />
                                <SortedAscendingCellStyle BackColor="#F7F7F7" />
                                <SortedAscendingHeaderStyle BackColor="#4B4B4B" />
                                <SortedDescendingCellStyle BackColor="#E5E5E5" />
                                <SortedDescendingHeaderStyle BackColor="#242121" />

                            </asp:GridView>
                        </ItemTemplate>
                    </asp:TemplateField>
                </Columns>
                <EditRowStyle BackColor="#999999" />
                <FooterStyle BackColor="#5D7B9D" Font-Bold="True" ForeColor="White" />
                <HeaderStyle BackColor="#5D7B9D" Font-Bold="True" ForeColor="White" />
                <PagerStyle BackColor="#284775" ForeColor="White" HorizontalAlign="Center" />
                <RowStyle BackColor="#F7F6F3" ForeColor="#333333" />
                <SelectedRowStyle BackColor="#E2DED6" Font-Bold="True" ForeColor="#333333" />
                <SortedAscendingCellStyle BackColor="#E9E7E2" />
                <SortedAscendingHeaderStyle BackColor="#506C8C" />
                <SortedDescendingCellStyle BackColor="#FFFDF8" />
                <SortedDescendingHeaderStyle BackColor="#6F8DAE" />
            </asp:GridView>


        </div>
    </form>
</body>
</html>