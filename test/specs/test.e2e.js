var expect = require('chai').expect;


describe('Redirect to login page ', () => {
    it('Check title is present', async () => {
        browser.url("https://www.travis-ci.com")
        
        const title = await browser.getTitle();
        expect(title).to.equal("");
    })
    it('Check sign in button should be present is present', async () => {
        browser.url("https://www.travis-ci.com")
        
        const signInButton = await $('.et_pb_button'); 
        expect(signInButton).to.exist;
       
    })
})

describe('Redirect to product-cloud page ', () => {
    it('Check header Information', async () => {
        browser.url("https://www.travis-ci.com/product-cloud")
        
        const h1Element = await $("div h1"); 
        const text = await h1Element.getText(); 
        console.log(text)
        expect(text).to.equal("Improve Your DevOps Motion with CI/CD Software");
    })
})
