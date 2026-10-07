import{test,expect}from'@playwright/test'
test("Fileupload",async({page})=>
{
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")
    await page.locator("#filesToUpload").setInputFiles(["tests/testdata/Screenshot 2026-05-27 141855.png","tests/testdata/Screenshot 2026-05-27 142038.png"]) 
    await expect(page.locator("#fileList li").first()).toContainText("Screenshot 2026-05-27 141855.png")
    await expect(page.locator("#fileList li").last()).toContainText("Screenshot 2026-05-27 142038.png")
})
