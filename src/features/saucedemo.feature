Feature: SauceDemo - Flujo de Compra

  Background:
    Given el usuario abre la página de SauceDemo

  @smoke @login @positive
  Scenario: Login exitoso con usuario estándar
    When el usuario ingresa el usuario "standard_user" y contraseña "secret_sauce"
    Then el usuario debería ver la página de productos

  @login @negative
  Scenario: Login fallido con usuario bloqueado
    When el usuario ingresa el usuario "locked_out_user" y contraseña "secret_sauce"
    Then el usuario debería ver un mensaje de error

  @smoke @cart @positive
  Scenario: Agregar producto al carrito
    When el usuario ingresa el usuario "standard_user" y contraseña "secret_sauce"
    And el usuario agrega un producto al carrito
    Then el carrito debería mostrar 1 producto

  @cart @positive
  Scenario: Ver productos en el carrito
    When el usuario ingresa el usuario "standard_user" y contraseña "secret_sauce"
    And el usuario agrega un producto al carrito
    And el usuario va al carrito
    Then el usuario debería ver 1 producto en el carrito

  @smoke @checkout @positive
  Scenario: Completar proceso de compra
    When el usuario ingresa el usuario "standard_user" y contraseña "secret_sauce"
    And el usuario agrega un producto al carrito
    And el usuario va al carrito
    And el usuario procede al checkout
    And el usuario completa la información de envío
    And el usuario finaliza la compra
    Then el usuario debería ver el mensaje de confirmación