# 🎮 Pokédex

Una Pokédex moderna y elegante construida con **Next.js 15**, **TypeScript** y **Tailwind CSS**, que consume la API de Pokémon para mostrar información detallada de los Pokémon.

![Pokédex Preview](https://img.shields.io/badge/Next.js-15.4.5-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)

## 📋 Tabla de Contenidos

- [✨ Características](#-características)
- [🛠️ Stack Tecnológico](#️-stack-tecnológico)
- [📋 Prerrequisitos](#-prerrequisitos)
- [🚀 Instalación](#-instalación)
- [🎯 Uso](#-uso)
- [📍 Rutas de la Aplicación](#-rutas-de-la-aplicación)
- [🎨 Características de Diseño](#-características-de-diseño)
- [📊 Funcionalidades Técnicas](#-funcionalidades-técnicas)
- [🤝 Contribuir](#-contribuir)
- [📄 Licencia](#-licencia)

## ✨ Características

- **🎯 Diseño Moderno**: Interfaz elegante con gradientes, animaciones y efectos hover
- **📱 Responsive**: Optimizado para todos los dispositivos
- **⚡ Performance**: Carga rápida con Next.js App Router
- **🎨 UX/UI Avanzado**: Transiciones suaves, micro-interacciones y feedback visual
- **📊 Estadísticas**: Análisis de vocales en nombres de Pokémon
- **🔍 Navegación Intuitiva**: Navegación clara entre secciones

## 🛠️ Stack Tecnológico

- **Framework**: Next.js 15 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **API**: [PokeAPI](https://pokeapi.co/)
- **Gestor de Paquetes**: pnpm

## 📋 Prerrequisitos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (versión 18.17 o superior)
- **pnpm** (recomendado) o npm

### Verificar instalaciones:

```bash
# Verificar Node.js
node --version

# Verificar npm (si usas npm)
npm --version

# Verificar pnpm (recomendado)
pnpm --version
```

### Instalar pnpm (si no lo tienes):

```bash
# Con npm
npm install -g pnpm

# Con curl (macOS/Linux)
curl -fsSL https://get.pnpm.io/install.sh | sh -

# Con PowerShell (Windows)
iwr https://get.pnpm.io/install.ps1 -useb | iex
```

## 🚀 Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/aalexlpez/pokedex.git
cd pokedex
```

### 2. Instalar dependencias

```bash
# Con pnpm (recomendado)
pnpm install

# Con npm
npm install
```

### 3. Ejecutar en modo desarrollo

```bash
# Con pnpm
pnpm dev

# Con npm
npm run dev
```

### 4. Abrir en el navegador

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

## 🎯 Uso

### Comandos disponibles

```bash
# Desarrollo
pnpm dev          # Ejecutar servidor de desarrollo
npm run dev

# Producción
pnpm build        # Construir para producción
pnpm start        # Ejecutar en producción

# Linting
pnpm lint         # Ejecutar ESLint
npm run lint
```

### Variables de entorno

Este proyecto no requiere variables de entorno adicionales ya que utiliza la API pública de Pokémon.

## 📍 Rutas de la Aplicación

### 🏠 **Ruta Principal** (`/`)
- Muestra los Pokémon del 1 al 9
- Tarjetas interactivas con efectos hover
- Botón "Ver detalles" para cada Pokémon
- Estadísticas de la colección

### 🔍 **Detalles del Pokémon** (`/pokemon/[id]`)
- Información completa del Pokémon seleccionado
- Imagen oficial de alta calidad
- Estadísticas base con barras de progreso
- Tipos con colores distintivos
- Habilidades (normales y ocultas)
- Altura y peso

### 🎲 **Pokémon Aleatorios** (`/random`)
- 5 Pokémon aleatorios del rango 1-500 (índices impares)
- Tabla de conteo de vocales en los nombres
- Estadísticas adicionales
- Lista de nombres analizados

## 🎨 Características de Diseño

### **UX/UI Extras Implementados:**

3. **🎯 Micro-interacciones**: Efectos de escala y sombras en tarjetas
4. **📱 Diseño Responsive**: Adaptable a móviles, tablets y desktop
5. **🎪 Scrollbar Personalizada**: Con gradientes y efectos hover
6. **🔍 Navegación Clara**: Menú superior con enlaces claros
7. **📊 Tablas Estilizadas**: Con hover effects y colores distintivos
8. **🎭 Página 404 Personalizada**: Con temática Pokémon
9. **💫 Efectos de Carga**: Animaciones de fade-in para elementos
10. **🎨 Paleta de Colores**: Consistente con tema Pokémon

### **Componentes Reutilizables:**
- `PokemonCard`: Tarjeta de Pokémon con efectos hover
- Utilidades de API: Funciones para interactuar con PokeAPI
- Tipos TypeScript: Interfaces definidas

## 📊 Funcionalidades Técnicas

- **App Router**: Uso obligatorio de Next.js App Router
- **Server Components**: Renderizado en servidor para mejor performance
- **TypeScript**: Tipado completo para mejor desarrollo
- **API Integration**: Consumo eficiente de PokeAPI
- **Error Handling**: Manejo de errores con páginas 404 personalizadas
- **SEO Optimizado**: Metadatos y estructura semántica

### Estructura del proyecto

```
pokedex/
├── src/
│   ├── app/                 # App Router de Next.js
│   │   ├── layout.tsx      # Layout principal
│   │   ├── page.tsx        # Página principal
│   │   ├── pokemon/        # Rutas de Pokémon
│   │   └── random/         # Página de Pokémon aleatorios
│   ├── components/         # Componentes reutilizables
│   ├── lib/               # Utilidades y configuración
│   └── types/             # Definiciones de TypeScript
├── public/                # Archivos estáticos
└── package.json           # Dependencias y scripts
```

---

Gracias por leer. **atte: Alex**
