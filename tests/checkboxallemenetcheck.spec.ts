import{test,expect} from '@playwright/test'
test("Checkbox click all",async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/")
   const checkbox= page.getByRole('checkbox')
   const count = await checkbox.count()
   for(let i=0;i<count;i++)
   {
   await checkbox.nth(i).click()
   }
   await page.locator("#country").selectOption("india")
   await expect(page.locator("#country")).toHaveValue("india")




   await page.goto("https://demoqa.com/select-menu")
   await page.locator("#cars").selectOption(["Volvo","Audi"])
   await expect(page.locator("#cars")).toHaveValues(["volvo","audi"])
})
  test("Non select checkbox",async({page})=>
{
await page.goto("https://demoqa.com/select-menu")
await page .locator("#withOptGroup").click()
await page.locator("[class='mt-2 row']").nth(1).click()

})


