# Conventional Commits

Este proyecto utiliza [Conventional Commits](https://www.conventionalcommits.org/) para estandarizar los mensajes de commit.

## Formato

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

## Tipos de Commit

- **feat**: Nueva característica
- **fix**: Corrección de bug
- **docs**: Cambios en documentación
- **style**: Cambios que no afectan el código (formato, espacios, etc.)
- **refactor**: Refactorización de código
- **perf**: Mejoras de rendimiento
- **test**: Agregar o corregir tests
- **chore**: Cambios en build process o herramientas auxiliares
- **ci**: Cambios en archivos de configuración de CI
- **build**: Cambios que afectan el sistema de build
- **revert**: Revertir un commit anterior

## Ejemplos

```bash
# Nueva característica
git commit -m "feat: agregar autenticación con Google"

# Corrección de bug
git commit -m "fix: resolver error en validación de formulario"

# Documentación
git commit -m "docs: actualizar README con instrucciones de instalación"

# Refactorización
git commit -m "refactor: simplificar lógica de validación"

# Con scope
git commit -m "feat(auth): agregar login con Facebook"
```

## Hooks de Pre-commit

Antes de cada commit se ejecutan automáticamente:

1. **ESLint**: Verifica y corrige problemas de linting en archivos `.ts`, `.tsx`, `.js`, `.jsx`
2. **Prettier**: Formatea automáticamente todos los archivos modificados
3. **Commitlint**: Valida que el mensaje de commit siga el formato de Conventional Commits

## Comandos Útiles

```bash
# Formatear todos los archivos
pnpm format

# Verificar formato sin cambiar archivos
pnpm format:check

# Ejecutar lint en todo el proyecto
pnpm lint

# Ejecutar lint-staged manualmente
pnpm lint-staged
```

## Configuración

- **Husky**: Gestiona los git hooks
- **Lint-staged**: Ejecuta comandos solo en archivos modificados
- **Commitlint**: Valida mensajes de commit
- **Prettier**: Formatea código
- **ESLint**: Linting de código
