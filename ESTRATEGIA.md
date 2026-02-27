# Estrategia de Automatización - SauceDemo

## 1. Enfoque General

La estrategia se basa en pruebas E2E (End-to-End) automatizadas utilizando
**Playwright** como motor de automatización web y **Cucumber** para la
especificación de escenarios en lenguaje Gherkin, siguiendo la metodología BDD
(Behavior Driven Development).

## 2. Patrones Utilizados

### Page Object Model (POM)
Cada página de la aplicación tiene su propia clase con los locadores y métodos:
- `LoginPage.js` → maneja el login y mensajes de error
- `InventoryPage.js` → maneja el catálogo de productos y carrito
- `CartPage.js` → maneja la vista del carrito de compras
- `CheckoutPage.js` → maneja el proceso de checkout y confirmación

Beneficios:
- Separación de responsabilidades
- Reutilización de código
- Fácil mantenimiento ante cambios de UI

### BDD con Gherkin
Los escenarios están escritos en lenguaje natural, facilitando la comunicación
entre el equipo técnico y de negocio:
- **Given** → precondición
- **When** → acción del usuario
- **Then** → resultado esperado

### Hooks Pattern
Se utilizan hooks `Before` y `After` para gestionar el ciclo de vida del
navegador, garantizando:
- Apertura de navegador antes de cada escenario
- Cierre limpio después de cada escenario
- Aislamiento entre tests

## 3. Organización de Tests por Tags

| Tag | Descripción |
|-----|-------------|
| @smoke | Tests críticos del flujo principal |
| @login | Tests relacionados al inicio de sesión |
| @cart | Tests relacionados al carrito de compras |
| @checkout | Tests relacionados al proceso de compra |
| @positive | Casos de uso exitosos |
| @negative | Casos de error y validación |

## 4. Cobertura de Usuarios

Se cubren dos tipos de usuarios definidos en los requisitos:
- **standard_user** → flujo completo sin restricciones
- **locked_out_user** → validación de bloqueo de cuenta

## 5. Flujo Principal Automatizado

1. Login con credenciales válidas
2. Agregar producto al carrito
3. Verificar producto en carrito
4. Completar información de envío
5. Confirmar compra

## 6. Configuración del Navegador

Se utiliza Chromium en modo **headless: false** para visualizar la ejecución
durante el desarrollo. En ambientes CI/CD se recomienda cambiar a
**headless: true** para mayor velocidad.

## 7. Reporte de Resultados

Cucumber genera automáticamente un reporte HTML en `reports/cucumber-report.html`
con el detalle de cada escenario, steps ejecutados y tiempo de respuesta.