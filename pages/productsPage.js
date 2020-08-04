const productDetailPage = require('./productDetailPage.js')
class productsPage {
    get productsList(){
        return $$("//a[@class='product_img_link']")   
    }    
    
    
    //action
    
    clickOnProduct(productId){
        productId="id_product="+productId;
        for(let i=0;i<=this.productsList.length-1;i++) {
            const href = this.productsList[i].getAttribute("href");
            if(href.includes(productId)){
                this.productsList[i].click();
                break;
            }
        }
        browser.pause(15000);
        browser.switchToFrame(0);
        return productDetailPage;
    }
}

module.exports = new productsPage();
