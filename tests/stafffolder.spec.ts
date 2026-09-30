import {test,expect} from '@playwright/test'
test("admin login",async({page})=>
{
    await page.goto("https://staffolder.testsdlc.in/organization/login")
    await page.locator("#email").fill("sophia.martin@unitecare.co.uk")
    await page.locator("#password").fill("ChangeMe123!")
    await page.getByText('Log In').click()
})
test("Click on sign up",async({page})=>
{
    await page.goto("https://staffolder.testsdlc.in/organization/login")
    await page.locator("[class='font-medium text-primary-600 hover:underline']").click()
})
 test("Click on remember btn && Click on forgot btn",async({page})=>
{
    await page.goto("https://staffolder.testsdlc.in/organization/login")
    await page.locator("#remember").click()
    await page.locator("[class='text-sm font-medium text-primary-600 hover:underline']").click()
})
test("click on pin btn",async({page})=>
{
    await page.goto("https://staffolder.testsdlc.in/organization/login")
     await page .locator("[class='flex-1 rounded-lg px-4 py-2 text-sm font-medium transition-colors bg-card text-primary shadow-sm']").click()
})