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

//Listing 18-8. Client-Side COM Code to Create an Outlook Message

using System.Runtime.InteropServices.Automation;

namespace LightSwitchApplication.UserCode
{
    public static class OutlookMailHelper
    {
        const int olMailItem = 0;
        const int olFormatPlain = 1;
        const int olFormatHTML = 2;

        public static void CreateEmail(                                           
           string toAddress, string subject, string body)
        {
            try
            {
                dynamic outlook = null;

                if (AutomationFactory.IsAvailable)                                                
                {
                    try
                    {
                        //Get the reference to the open Outlook App             
                        outlook =
                           AutomationFactory.GetObject("Outlook.Application");    
                    }
                    catch (Exception ex)
                    {
                        //Outlook isn't open, therefore try and open it
                        outlook =
                          AutomationFactory.CreateObject("Outlook.Application");
                    }

                    if (outlook != null)
                    {
                        //Create the email
                        dynamic mail = outlook.CreateItem(olMailItem);               
                        if (body.ToLower().Contains("<html>"))                            
                        {
                            mail.BodyFormat = olFormatHTML;
                            mail.HTMLBody = body;                                       
                        }
                        else
                        {
                            mail.BodyFormat = olFormatPlain;
                            mail.Body = body;
                        }
                        mail.Recipients.Add(toAddress);
                        mail.Subject = subject;

                        mail.Save();                                               
                        mail.Display();                                           
                        //uncomment this code to send the email immediately           
                        //mail.Send()                                     
                    }
                }
            }
            catch (Exception ex)
            {
                throw new InvalidOperationException(
                   "Failed to create email.", ex);
            }
        }
    }
}
