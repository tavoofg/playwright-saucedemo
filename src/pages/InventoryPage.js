class InventoryPage {
    constructor(page) {
        this.page = page;
        this.productTitle = page.locator('.title');
        this.addToCartButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
        this.cartBadge = page.locator('.shopping_cart_badge');
        this.cartIcon = page.locator('.shopping_cart_link');
    }

    async isOnInventoryPage() {
        return await this.productTitle.isVisible();
    }

    async addProductToCart() {
        await this.addToCartButton.click();
    }

    async getCartCount() {
        return await this.cartBadge.textContent();
    }

    async goToCart() {
        await this.cartIcon.click();
    }
}

module.exports = { InventoryPage };