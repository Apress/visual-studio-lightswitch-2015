Option Strict Off

Imports System.Runtime.InteropServices.Automation

'Listing 18 - 8.Client - Side COM Code to Create an Outlook Message

Public Module OutlookMailHelper
    Const olMailItem As Integer = 0
    Const olFormatPlain As Integer = 1
    Const olFormatHTML As Integer = 2

    Public Sub CreateEmail(toAddress As String,
       subject As String, body As String)
        Try
            Dim outlook As Object = Nothing

            If AutomationFactory.IsAvailable Then
                Try
                    'Get the reference to the open Outlook App
                    outlook = AutomationFactory.GetObject("Outlook.Application")
                Catch ex As Exception
                    'Outlook isn't open, therefore try and open it
                    outlook =
                       AutomationFactory.CreateObject("Outlook.Application")
                End Try

                If outlook IsNot Nothing Then

                    Dim mail = outlook.CreateItem(olMailItem)
                    If body.ToLower().Contains("<html>") Then
                        mail.BodyFormat = olFormatHTML
                        mail.HTMLBody = body
                    Else
                        mail.BodyFormat = olFormatPlain
                        mail.Body = body
                    End If

                    mail.Recipients.Add(toAddress)
                    mail.Subject = subject

                    mail.Save()
                    mail.Display()
                    'uncomment this code to send the email immediately                   
                    'mail.Send()
                End If

            End If
        Catch ex As Exception
            Throw New InvalidOperationException("Failed to create email.", ex)
        End Try
    End Sub
End Module
