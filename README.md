# Portales del Gobierno de San Juan

![Gobierno de San Juan – Portales](https://img.shields.io/badge/Gobierno%20de%20San%20Juan-Portales-615E62?labelColor=EC6608&style=for-the-badge)
![Shadcn](https://img.shields.io/badge/shadcn%2Fui-000000?style=for-the-badge&logo=shadcnui&logoColor=white)
![NextJS](https://img.shields.io/badge/next%20js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![Turborepo](https://img.shields.io/badge/Turborepo-0C0606?style=for-the-badge&logo=turborepo&logoColor=EF4444)

Este monorepositorio centraliza el desarrollo de los Portales del Gobierno de San Juan, implementando una arquitectura moderna y escalable que optimiza tanto el desarrollo como la experiencia del usuario final.

## 🚀 Stack Tecnológico

### Core Technologies
- **[Next.js 15](https://nextjs.org/)**: Framework full-stack de React con soporte para App Router, Server Components, renderizado híbrido (SSR/SSG) y optimizaciones automáticas de rendimiento
- **[Turborepo](https://turbo.build/)**: Build system de alta performance para monorepositorios con caché distribuido, ejecución paralela de tareas y optimización de CI/CD
- **[Shadcn/ui](https://ui.shadcn.com/)**: Sistema de componentes modular basado en Radix UI primitives y Tailwind CSS, garantizando accesibilidad y consistencia visual

### Development Tools
- **TypeScript**: Tipado estático para mayor robustez y mejor experiencia de desarrollo
- **ESLint + Prettier**: Análisis estático de código y formateo automático
- **PNPM**: Gestor de paquetes eficiente con workspaces nativos

## 🏗️ Arquitectura del Ecosistema

Esta combinación tecnológica crea un ecosistema sinérgico donde:

- **Next.js** proporciona la base para aplicaciones web performantes con capacidades full-stack
- **Turborepo** orquesta el desarrollo del monorepositorio, habilitando la reutilización de código, configuraciones compartidas y builds optimizados
- **Shadcn/ui** asegura una experiencia de usuario uniforme y accesible across todos los portales gubernamentales
- **TypeScript** garantiza la calidad del código y facilita el mantenimiento a largo plazo

Esta arquitectura permite el desarrollo ágil de múltiples portales manteniendo la coherencia, escalabilidad y estándares de calidad requeridos para servicios gubernamentales digitales.

## 🏛️ Decisión Arquitectural: Estrategia Monorepositorio

La adopción de un monorepositorio para los Portales del Gobierno de San Juan responde a necesidades específicas del contexto gubernamental:

### Ventajas Estratégicas

**🔄 Consistencia y Gobernanza**
- Estandarización de componentes UI, patrones de desarrollo y configuraciones across todos los portales
- Control centralizado de versiones de dependencias, reduciendo vulnerabilidades de seguridad
- Aplicación uniforme de políticas de accesibilidad y cumplimiento normativo

**⚡ Eficiencia Operacional**
- Reutilización de código entre diferentes organismos gubernamentales
- Actualizaciones y mejoras propagadas instantáneamente a todos los portales
- Simplificación de procesos de CI/CD con builds incrementales vía Turborepo

**🛡️ Mantenibilidad y Calidad**
- Refactoring atómico que garantiza compatibilidad cross-portal
- Testing integrado que valida interoperabilidad entre aplicaciones
- Reducción significativa del overhead de mantenimiento técnico

**👥 Colaboración Interdisciplinaria**
- Facilitación del trabajo conjunto entre equipos de diferentes secretarías
- Visibilidad completa del ecosistema tecnológico gubernamental
- Transferencia de conocimiento optimizada entre desarrolladores

Esta arquitectura es particularmente valiosa en el contexto gubernamental donde la coherencia, seguridad y eficiencia en el uso de recursos públicos son fundamentales.

## 🚀 Desarrollo y Despliegue

### Configuración del Entorno de Desarrollo

#### Requisitos Previos
- **Node.js**: >= 20 (verificar con `node --version`)
- **PNPM**: >= 10.4.1 (instalar globalmente con `npm install -g pnpm`)
- **Git**: Para control de versiones

## 📋 Estándares de Codificación

### Calidad de Código

El proyecto implementa un sistema integral de calidad de código que debe ser respetado:

**🔍 Linting y Formateo**
- **ESLint**: Configuración personalizada ubicada en `packages/eslint-config` con reglas específicas para:
  - Configuración base (`./base`)
  - Next.js (`./next-js`) 
  - Componentes React internos (`./react-internal`)
- **Prettier**: Formateo automático de código para mantener consistencia visual
- **TypeScript**: Verificación de tipos estricta configurada en `packages/typescript-config`

**⚙️ Verificación Automatizada**
- Todos los cambios deben pasar las verificaciones de `turbo lint` y `turbo check-types`
- Los commits son validados automáticamente via hooks de pre-commit
- Las builds fallan si existen violaciones a las reglas establecidas

### Convenciones de Commits

Los commits deben seguir la especificación **Conventional Commits** para mantener un historial claro y generar changelogs automáticos:

### Desarrollo Asistido por IA

Para garantizar la coherencia y calidad en las soluciones implementadas con inteligencia artificial, el proyecto incluye un archivo `AGENTS.md` que establece:

- **Directrices específicas** para modelos de IA trabajando en este monorepo
- **Estándares arquitectónicos** que deben respetarse en cada contribución
- **Patrones de implementación** consistentes con la filosofía del proyecto
- **Contexto gubernamental** necesario para decisiones técnicas apropiadas

**📝 Uso Recomendado**
Al solicitar asistencia de IA para desarrollo, asegurate de:
1. Referenciar explícitamente el archivo `AGENTS.md` en tu prompt
2. Proporcionar contexto específico del componente o aplicación objetivo
3. Validar que la solución propuesta cumple con los estándares establecidos

**🎯 Integración con Cursor IDE**

Para desarrolladores que utilizan Cursor como editor de código, el proyecto incluye un archivo `.cursorrules` que traduce y optimiza todas las directrices establecidas en `AGENTS.md` específicamente para este entorno de desarrollo:

- **Configuración automática**: Las reglas se aplican automáticamente al abrir el proyecto
- **Contexto optimizado**: Formato específicamente diseñado para la IA integrada de Cursor
- **Coherencia**: Fomenta que las sugerencias de código mantengan los estándares del proyecto
- **Flujo mejorado**: Reduce la necesidad de referencias manuales durante el desarrollo

Esto proporciona una experiencia de desarrollo más fluida mientras mantiene la adherencia a los principios arquitectónicos establecidos.

Esta metodología asegura que todas las contribuciones generadas por IA mantengan la integridad arquitectónica y cumplan con los requisitos específicos del ecosistema gubernamental.