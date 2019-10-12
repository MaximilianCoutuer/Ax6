
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;

namespace Ax6.ComponentCapture
{
    //Install-Package Selenium.Support
    //Install-Package Selenium.Chrome.WebDriver

    public class Capture
    {
        public Capture(string url, string outputfile)
        {
            ChromeOptions options = new ChromeOptions();
            options.AddArgument("headless");//Comment if we want to see the window. 
            var driver = new ChromeDriver(Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location), options);
            driver.Navigate().GoToUrl(url);
            var screenshot = (driver as ITakesScreenshot).GetScreenshot();
            screenshot.SaveAsFile(outputfile);
            driver.Close();
            driver.Quit();
        }




    }
}
