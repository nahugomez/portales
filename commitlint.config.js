module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // Nuevas características
        'fix', // Correcciones de bugs
        'docs', // Documentación
        'style', // Cambios que no afectan el código (espacios en blanco, formato, etc.)
        'refactor', // Refactorización de código
        'perf', // Mejoras de rendimiento
        'test', // Agregar o corregir tests
        'chore', // Cambios en el build process o herramientas auxiliares
        'ci', // Cambios en archivos de configuración de CI
        'build', // Cambios que afectan el sistema de build
        'revert', // Revertir un commit anterior
      ],
    ],
    'type-case': [2, 'always', 'lower'],
    'type-empty': [2, 'never'],
    'subject-case': [2, 'always', 'lower'],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'header-max-length': [2, 'always', 72],
  },
};
