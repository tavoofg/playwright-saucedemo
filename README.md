# Playwright + Cucumber - Automatización SauceDemo

Suite de pruebas automatizadas para la aplicación web [SauceDemo](https://www.saucedemo.com/) utilizando Playwright con Cucumber e implementando el patrón Page Object Model.

## Tecnologías

- Node.js 22
- Playwright 1.50.1
- Cucumber 11.2.0
- JavaScript

## Estructura del Proyecto
```
src/
├── features/
│   └── saucedemo.feature      # Escenarios de prueba en Gherkin
├── pages/
│   ├── LoginPage.js           # POM - Página de Login
│   ├── InventoryPage.js       # POM - Página de Productos
│   ├── CartPage.js            # POM - Página del Carrito
│   └── CheckoutPage.js        # POM - Página de Checkout
├── steps/
│   └── saucedemo.steps.js     # Step definitions
└── hooks/
    └── hooks.js               # Configuración Before/After
cucumber.json                  # Configuración de Cucumber
```

## Requisitos Previos

- Node.js 18 o superior
- npm

## Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/tavoofg/playwright-saucedemo.git
cd playwright-saucedemo
```

2. Instalar dependencias:
```bash
npm install
```

3. Instalar navegadores de Playwright:
```bash
npx playwright install chromium
```

## Ejecución

### Ejecutar todos los tests:
```bash
npm test
```

### Ejecutar solo tests @smoke:
```bash
npm run test:smoke
```

### Ejecutar solo tests de login:
```bash
npm run test:login
```

### Ejecutar solo tests de carrito:
```bash
npm run test:cart
```

### Ejecutar solo tests de checkout:
```bash
npm run test:checkout
```

## Reporte

Al ejecutar los tests se genera un reporte HTML en:
```
reports/cucumber-report.html
```

## Credenciales de Prueba

| Usuario | Contraseña | Tipo |
|---------|-----------|------|
| standard_user | secret_sauce | Usuario estándar |
| locked_out_user | secret_sauce | Usuario bloqueado |

## Cobertura de Tests

| Escenario | Tag | Resultado |
|-----------|-----|-----------|
| Login exitoso con standard_user | @smoke @login @positive | ✅ |
| Login fallido con locked_out_user | @login @negative | ✅ |
| Agregar producto al carrito | @smoke @cart @positive | ✅ |
| Ver productos en el carrito | @cart @positive | ✅ |
| Completar proceso de compra | @smoke @checkout @positive | ✅ |

## Estrategia de Automatización

Ver [ESTRATEGIA.md](ESTRATEGIA.md) para más detalles.