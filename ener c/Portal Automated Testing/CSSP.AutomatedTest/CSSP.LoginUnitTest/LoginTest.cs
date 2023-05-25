using NUnit.Framework;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using System.Threading;

namespace CSSP.LoginUnitTest
{
    public class Tests
    {
        public static string sbxPortalURL = "https://csspsbx.powerappsportals.com/";
        public static string uatPortalURL = "https://csspuat.powerappsportals.com/";

        [Test]
        [Category("LoginTestSBX")]
        public void TestLoginSBX()
        {
            IWebDriver driver = new ChromeDriver();
            driver.Navigate().GoToUrl(sbxPortalURL);

            Thread.Sleep(10000);

            IWebElement element = driver.FindElement(By.Id("api"));
            IWebElement welcomeMessage = null;

            if (element.Displayed)
            {
                IWebElement emailAddress = driver.FindElement(By.Id("email"));
                emailAddress.SendKeys("silveiraeduardo8@hotmail.com");

                IWebElement password = driver.FindElement(By.Id("password"));
                password.SendKeys("test.123");

                IWebElement signinButton = driver.FindElement(By.Id("next-button"));
                signinButton.Click();

                Thread.Sleep(10000);
                welcomeMessage = driver.FindElement(By.ClassName("cssp-page-title"));
            }

            StringAssert.Contains("Home", welcomeMessage.Text);
            driver.Quit();

        }

        [Test]
        [Category("LoginTestUAT")]
        public void TestLoginUAT()
        {
            IWebDriver driver = new ChromeDriver();
            driver.Navigate().GoToUrl(uatPortalURL);

            Thread.Sleep(10000);

            IWebElement element = driver.FindElement(By.Id("api"));
            IWebElement welcomeMessage = null;

            if (element.Displayed)
            {
                IWebElement emailAddress = driver.FindElement(By.Id("email"));
                emailAddress.SendKeys("silveiraeduardo8@hotmail.com");

                IWebElement password = driver.FindElement(By.Id("password"));
                password.SendKeys("test.123");

                IWebElement signinButton = driver.FindElement(By.Id("next-button"));
                signinButton.Click();

                Thread.Sleep(10000);
                welcomeMessage = driver.FindElement(By.ClassName("cssp-page-title"));
            }

            StringAssert.Contains("Welcome", welcomeMessage.Text);
            driver.Quit();

        }

        [Test]
        [Category("NavigateToAccount")]
        public void NavigateToAccount()
        {
            IWebDriver driver = new ChromeDriver();
            driver.Navigate().GoToUrl("https://csspuat.powerappsportals.com/");

            Thread.Sleep(10000);

            IWebElement element = driver.FindElement(By.Id("api"));
            IWebElement welcomeMessage = null;

            if (element.Displayed)
            {
                IWebElement emailAddress = driver.FindElement(By.Id("email"));
                emailAddress.SendKeys("silveiraeduardo8@hotmail.com");

                IWebElement password = driver.FindElement(By.Id("password"));
                password.SendKeys("test.123");

                IWebElement signinButton = driver.FindElement(By.Id("next-button"));
                signinButton.Click();

                Thread.Sleep(10000);
                welcomeMessage = driver.FindElement(By.ClassName("cssp-page-title"));
            }

            StringAssert.Contains("Welcome", welcomeMessage.Text);
            driver.Quit();

        }

    }
}