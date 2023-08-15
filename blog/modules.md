---
title: "odules Over Singletons in TypeScript"
date: 2023-08-15
excerpt:  A Pragmatic Approach
---

**Modules Over Singletons in TypeScript: A Pragmatic Approach**

In software development, certain challenges present themselves repeatedly. This repetition has paved the way for design patterns, serving as blueprints for common problems. The Singleton pattern is one such blueprint, ensuring only one instance of a class exists. But when we shift our gaze to TypeScript, a different player enters the arena: Modules. With an inherent feature set that provides much of what Singletons aim to achieve, Modules emerge as a more idiomatic choice for TypeScript developers. Here's why.

### The Nature of TypeScript

TypeScript extends JavaScript, introducing static typing, interfaces, and a robust module system. This module system ensures that when a module is imported, the same instance is consistently returned. It's essentially a built-in Singleton mechanism without the need for the traditional Singleton structure.

### Simplicity with Modules

Modules in TypeScript are straightforward. They encapsulate functionality, expose what's needed, and keep everything else private. Consider this configuration:

```typescript
// configModule.ts
export const apiUrl = "https://api.example.com";
export const apiKey = "12345";
```

Each import of `configModule` retrieves the same data. No additional patterns or structures are necessary.

### Flexibility and Change

Starting with a module and then realizing you need multiple instances later is far simpler with TypeScript modules than with traditional Singletons. Export the class or function, create instances as required, and adapt without restructuring your entire pattern.

### Less Boilerplate

Singletons require structure: private constructors, static methods, etc. Modules in TypeScript are more concise, cutting down on unnecessary boilerplate.

### Example: Simple Singleton to Module

**Singleton Approach:**

```typescript
class SingletonConfig {
  private static instance: SingletonConfig;
  public apiUrl: string;

  private constructor() {
    this.apiUrl = "https://api.example.com";
  }

  public static getInstance(): SingletonConfig {
    if (!SingletonConfig.instance) {
      SingletonConfig.instance = new SingletonConfig();
    }
    return SingletonConfig.instance;
  }
}

const configInstance = SingletonConfig.getInstance();
```

**Module Approach:**

```typescript
// configModule.ts
export const apiUrl = "https://api.example.com";
```

### Example: Complex Singleton to Module

**Singleton Approach:**

```typescript
class SingletonDatabase {
  private static instance: SingletonDatabase;
  private connection: any;

  private constructor() {
    this.connection = {}; // mock connection logic
  }

  public static getInstance(): SingletonDatabase {
    if (!SingletonDatabase.instance) {
      SingletonDatabase.instance = new SingletonDatabase();
    }
    return SingletonDatabase.instance;
  }

  query(sql: string) {
    // query logic using this.connection
  }
}

const dbInstance = SingletonDatabase.getInstance();
```

**Module Approach:**

```typescript
// databaseModule.ts
const connection = {}; // mock connection logic

export function query(sql: string) {
  // query logic using connection
}
```

### Conclusion

While Singletons have their place, TypeScript's architecture nudges developers toward using modules. When developing in TypeScript, modules provide a clean, consistent, and flexible approach that aligns more naturally with the language's design philosophy.