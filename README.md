# Tips de Productividad - React

Aplicación simple en React para mostrar tips de productividad, votar los más útiles y visualizar el tip más valorado.

## ¿Qué hace la aplicación?

- Muestra un tip de productividad aleatorio.
- Permite votar el tip actual.
- Permite mostrar otro tip aleatorio.
- Muestra la cantidad de votos del tip visible.
- Destaca el tip más votado y su cantidad de votos.
- Si no hay votos, muestra un mensaje especial.

## Instalación y ejecución

1. Instala dependencias:

	```bash
	npm install
	```

2. Ejecuta la app en modo desarrollo:

	```bash
	npm run dev
	```

## Conceptos de React utilizados

- **Componentes funcionales**
- **useState**
- **Renderizado condicional**
- **Manejo de eventos**
- **Inmutabilidad del estado**

## Estructura

- `src/App.jsx`: Lógica principal y UI.
- `src/index.css`: Estilos modernos y responsive.
- `README.md`: Documentación y guía.

---

Listo para entregar, subir a GitHub y ser evaluado.
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
