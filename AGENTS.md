# AI Development Guide - Turborepo Project

## Project Context

You are working on a **monorepo managed with Turborepo** that contains multiple Next.js applications. Your goal is to implement solutions that prioritize long-term maintenance and scalability.

## Fundamental Principles

### 1. Maintainability and Scalability
- **Top priority**: All solutions must facilitate future maintenance
- Write code that is easy to understand, modify, and extend
- Document important architectural decisions
- Consider the long-term impact of each implementation

### 2. Reusability
- **Avoid code duplication** at all costs
- Create reusable components, hooks, utilities, and functions
- Abstract common logic into shared packages
- Design consistent and flexible internal APIs

### 3. Don't Repeat Yourself (DRY)
- Before writing new code, check if a similar solution already exists
- If you find duplicated code, refactor it into a shared solution
- Centralize configurations, constants, and common types

## Monorepo Structure

```
├── apps/
│   ├── web/                 # Next.js applications
├── packages/
│   ├── ui/                  # Shared UI components
│   ├── eslint-config/       # Shared ESLint configurations
│   ├── typescript-config/   # Shared TypeScript configurations
|   ├── utils/               # Shared utilities
|   ├── types/               # Shared types
└── turbo.json
```

## Implementation Guidelines

### Components and UI
- **Always** check the `packages/ui/` package first before creating new components
- Create generic and configurable components through props
- Use design tokens and consistent design systems
- Implement variants using patterns like Compound Components or similar

### Business Logic
- Abstract complex logic into custom hooks or utilities
- Place reusable functions in `packages/utils/`
- Maintain clear separation of responsibilities
- Implement patterns like Repository, Service, or similar for data logic

### Configuration and Types
- Define shared TypeScript types in `packages/types/`
- Use enums and constants for repeated values to avoid magic strings
- Maintain consistent environment configurations across apps

### APIs and Data
- Standardize API response structure
- Create reusable wrappers/clients for external services
- Implement data validation using shared schemas (Zod)
- Centralize fetching and caching logic

## Pre-implementation Checklist

Before implementing any solution, verify:

- [ ] Does a similar solution already exist in the monorepo?
- [ ] Can I reuse existing components/utilities?
- [ ] Will this solution be useful in other parts of the project?
- [ ] Am I following the project's naming conventions?
- [ ] Is the solution generic enough but not over-engineered?

## Recommended Patterns

### For Components
```typescript
// ✅ Good: Generic and reusable component
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  children: React.ReactNode;
}

// ❌ Bad: Very specific component
interface LoginButtonProps {
  onLoginSuccess: () => void;
}
```

### For Utilities
```typescript
// ✅ Good: Generic utility
export const formatCurrency = (
  amount: number, 
  currency: string = 'USD'
) => { ... }

// ❌ Bad: Very specific function
export const formatUserBalance = (user: User) => { ... }
```

## Turborepo - Specific Considerations

### Dependencies
- Use `workspace:*` for internal dependencies
- Keep external dependencies synchronized between packages
- Update `turbo.json` when adding new scripts or dependencies

### Build and Deploy
- Properly configure `inputs` and `outputs` in turbo.json
- Ensure that changes in shared packages trigger rebuilds
- Optimize Turborepo cache for CI/CD

### Shared Scripts
- Centralize common scripts (lint, test, build) in the root
- Use `turbo run` to execute commands in parallel
- Maintain consistency in script names between packages

## Next.js - Best Practices

### Routing and Pages
- Use App Router when possible
- Implement shared layouts for similar pages
- Centralize metadata and SEO configuration

### Performance
- Implement lazy loading for heavy components
- Use Next.js Image optimization
- Configure bundle analyzer to monitor size

### State and Data
- Consider using React Query for data fetching
- Implement shared states using Context or libraries like Zustand
- Keep state as close as possible to where it's used

## Code Standards

### TypeScript
- Use `strict: true` in all configurations
- Define explicit types for important APIs and props
- Avoid `any`, use `unknown` when necessary

### Git and Version Control
- **Use Conventional Commits** for all commit messages
- Follow the format: `type(scope): description`
- Common types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`
- Examples:
  - `feat(ui): add Button component with loading state`
  - `fix(utils): resolve currency formatting for negative numbers`
  - `docs(readme): update installation instructions`
  - `refactor(auth): extract login logic to shared hook`

### Documentation
- Document main components with JSDoc
- Keep README updated in each package
- Document breaking changes in CHANGELOG

## Useful Commands

```bash
# Run command in specific workspace
turbo run build --filter=@workspace/ui

# Run in all apps
turbo run dev --filter=./apps/*

# Add dependency to specific package
pnpm add <package> --filter=@workspace/ui
```

## Resources and References

- [Turborepo Documentation](https://turbo.build/repo/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Monorepo Best Practices](https://monorepo.tools)

---

**Remember**: Long-term quality is more important than initial implementation speed. Take the necessary time to create robust and maintainable solutions.