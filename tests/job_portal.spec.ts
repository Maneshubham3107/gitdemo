import{test,expect} from '@playwright/test'
test("Shoughal ADMIN job portal SDLC project", async({page})=>
{
await page.goto("https://staging.shoughl.com/en/login")
await  page.locator("#email").fill("admin@shoughl.com")
await page.locator("#password").fill("admin@2026")
await  page.getByText("Login").nth(2).click()
await page.getByText("Jobs Moderation").first().click()
await page.getByRole('button',{name:'Reject'}).first().click()
await page.locator("[class='truncate']").last().click()
await page.locator("[class='flex items-center px-3 py-2 w-full rounded-md transition-colors cursor-pointer bg-primary-green']").click()
await page.locator("[class=' text-sm leading-[18px] text-[#1C1C1C]']").last().click()
await page.locator("[class='relative inline-flex h-5 w-9 items-center rounded-full transition-colors bg-neutral']").first().click()
//await page.locator("relative inline-flex h-5 w-9 items-center rounded-full transition-colors bg-neutral").first().click()
//await page.getByText("Suraj Mahajan").first().click()
//await page.locator("[class='flex flex-wrap items-center gap-2']").click()
})

 test("employer login",async({page})=>
{
    await page.goto("https://staging.shoughl.com/en/login")
    await page.locator("#email").fill("bedebe8061@crybio.com")
     await page.locator("#password").fill("Sample@12345")
     await page.getByText("Login").nth(2).click()
     await page.locator("//a[text()='Find jobs']").first().click()
     await page.getByRole('textbox',{name:'Enter your email'}).fill("kexidon766@airychen.com")
    await page.getByRole('button',{name:'Subscribe'}).click()
    })
     


test("Login for employee and apply job ",async({page})=>
{
    await page.goto("https://staging.shoughl.com/en/login")
    await page.locator("#email").fill("gevah86442@bejum.com")
     await page.locator("#password").fill("Sample@12345")
     await page.getByText("Login").nth(2).click()
     await page.locator("//*[text()='Jobs']").click()
     await page.getByRole('button',{name:"Apply Now"}).first().click()
     await page.getByRole('button',{name:'Continue'}).click()
     await page.getByRole('button',{name:'Next'}).click()
     await page.getByRole('button',{name:'Next'}).click()
     await page.getByPlaceholder("Write your answer").first().fill("Apply from playwright script by Shubham")
     await page.getByPlaceholder("Enter your years of remote work experience").fill("Apply from playwright script by Shubham")
    await page.locator("[class='h-[22.47px] w-full rounded-sm bg-background px-4 text-[9px] text-foreground outline-none ring-0 transition placeholder:text-[#5F6368] focus:border-lime-300 sm:h-12 sm:text-sm sm:placeholder:text-muted-foreground']").last().fill("Apply from playwright script by Shubham")
    await page.getByRole('button',{name:'Next'}).click()
    await page.getByRole('button',{name:'Submit Application'}).click()
})


test("admin verification", async ({ page }) => {

  await page.goto("https://staging.shoughl.com/en/login");

  await page.locator("#email").fill("admin@shoughl.com");
  await page.locator("#password").fill("admin@2026");

  await page.getByText("Login").nth(2).click();

  await page.getByText("Verification").click();

  await page.getByText("We Buy Dead Stocks").last().click();
});



test("for employeee",async({page})=>
{
     await page.goto("https://staging.shoughl.com/en/login")
    await page.locator("#email").fill("gevah86442@bejum.com")
     await page.locator("#password").fill("Sample@12345")
     await page.getByText("Login").nth(2).click()
     await  page.getByRole("switch").click()
     await page.locator("[class='flex justify-start items-center gap-3 md:gap-4 mb-3 md:mb-4']").first().click()
})


test("Boost plan for candidate /employee",async({page})=>
{
await page.goto("https://staging.shoughl.com/en/login")
    await page.locator("#email").fill("gevah86442@bejum.com")
     await page.locator("#password").fill("Sample@12345")
     await page.getByText("Login").nth(2).click()
     await page.locator("[class='lucide lucide-check h-3.75 w-3.75 lg:size-5']").click()
     await page.getByText("Extend boost").first().click()
     await page.locator("[class='p-Input-input p-Fieldset-input Input p-CardNumberInput-input Input--empty p-Input-input--textRight p-Input-input--numeric']").fill("4242 4242 4242 4242")
})