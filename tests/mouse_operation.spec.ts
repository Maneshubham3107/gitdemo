import{test,expect}from '@playwright/test'
test("Mouseoperation",async({page})=>
{
    await page.goto("https://demo.guru99.com/test/simple_context_menu.html")
    await page.getByText("Double-Click Me To See Alert").dblclick()
    await page.getByText("right click me").click({button:"right"})
     await page.waitForTimeout(20000)
})
 test("hover over",async({page})=>
{
await page.goto("https://www.spicejet.com/")
await page.getByText('Travel Policies', { exact: true }).hover()
await page.waitForTimeout(6000)
})

test("Drag and drop",async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/")
    const drag= await page.getByText("Drag me to my target",{exact:true})
   const drop= await page.getByText("Drop here",{exact:true})
  // drag.dragTo(drop)
 await drag.hover()
await page.mouse.down()
await drop.hover()
await page.mouse.up()

   await expect(page.locator("div#droppable")).toHaveText("Dropped!")
})