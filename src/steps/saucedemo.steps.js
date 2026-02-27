const { Given, When, Then } = require('@cucumber/cucumber');
const { LoginPage } = require('../pages/LoginPage');
const { InventoryPage } = require('../pages/InventoryPage');
const { CartPage } = require('../pages/CartPage');
const { CheckoutPage } = require('../pages/CheckoutPage');

Given('el usuario abre la página de SauceDemo', async function () {
    this.loginPage = new LoginPage(this.page);
    await this.loginPage.navigate();
});

When('el usuario ingresa el usuario {string} y contraseña {string}', async function (username, password) {
    await this.loginPage.login(username, password);
});

Then('el usuario debería ver la página de productos', async function () {
    this.inventoryPage = new InventoryPage(this.page);
    const isVisible = await this.inventoryPage.isOnInventoryPage();
    if (!isVisible) throw new Error('No se redirigió a la página de productos');
});

Then('el usuario debería ver un mensaje de error', async function () {
    const errorMsg = await this.loginPage.getErrorMessage();
    if (!errorMsg.includes('Epic sadface')) throw new Error('No se mostró mensaje de error');
});

When('el usuario agrega un producto al carrito', async function () {
    this.inventoryPage = new InventoryPage(this.page);
    await this.inventoryPage.addProductToCart();
});

Then('el carrito debería mostrar 1 producto', async function () {
    const count = await this.inventoryPage.getCartCount();
    if (count !== '1') throw new Error('El carrito no muestra 1 producto');
});

When('el usuario va al carrito', async function () {
    await this.inventoryPage.goToCart();
    this.cartPage = new CartPage(this.page);
});

Then('el usuario debería ver 1 producto en el carrito', async function () {
    const count = await this.cartPage.getCartItemsCount();
    if (count !== 1) throw new Error('No se ve 1 producto en el carrito');
});

When('el usuario procede al checkout', async function () {
    await this.cartPage.proceedToCheckout();
    this.checkoutPage = new CheckoutPage(this.page);
});

When('el usuario completa la información de envío', async function () {
    await this.checkoutPage.fillShippingInfo('Gustavo', 'QA', '15001');
    await this.checkoutPage.clickContinue();
});

When('el usuario finaliza la compra', async function () {
    await this.checkoutPage.clickFinish();
});

Then('el usuario debería ver el mensaje de confirmación', async function () {
    const msg = await this.checkoutPage.getConfirmationMessage();
    if (!msg.includes('Thank you')) throw new Error('No se mostró mensaje de confirmación');
});