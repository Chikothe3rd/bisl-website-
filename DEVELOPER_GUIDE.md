# Refactored BISL Website - Developer Guide

## Quick Start

This guide explains the refactored code structure and modern best practices implemented in this project.

## New Project Structure

### 🎯 Quick Navigation

- **Components** (`src/components/`) - Reusable UI components
- **Pages** (`src/pages/`) - Page-level components
- **Hooks** (`src/hooks/`) - Custom React hooks
- **Services** (`src/services/`) - Utility functions
- **Constants** (`src/constants/`) - Configuration & data
- **Types** (`src/types/`) - TypeScript interfaces
- **Layouts** (`src/components/layouts/`) - Layout wrappers

## What Changed?

### Component Architecture

#### ❌ Before (Monolithic)

```tsx
// Old Header component - 136 lines with mixed concerns
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    /* hardcoded links */
  ];

  return (
    <header>
      {/* Logo JSX */}
      {/* Nav JSX */}
      {/* CTA JSX */}
      {/* Mobile Menu JSX */}
    </header>
  );
};
```

#### ✅ After (Composed)

```tsx
// New Header component - Clean composition
const Header = () => {
  const { isScrolled } = useScroll();
  const { isOpen, toggle, close } = useMobileMenu();

  return (
    <header>
      <HeaderLogo />
      <HeaderNav />
      <HeaderCTA />
      <MobileMenuButton isOpen={isOpen} onToggle={toggle} />
      <MobileMenu isOpen={isOpen} onClose={close} />
    </header>
  );
};
```

### Key Differences

| Aspect                | Before                 | After                      |
| --------------------- | ---------------------- | -------------------------- |
| **File Organization** | Few large files        | Many focused files         |
| **Component Size**    | 100-150 lines          | 20-50 lines                |
| **Logic Reusability** | Isolated in components | Extracted to hooks         |
| **Configuration**     | Hardcoded strings      | Centralized constants      |
| **Type Safety**       | Basic types            | Comprehensive interfaces   |
| **Testability**       | Difficult              | Easy with services & hooks |

## Detailed Structure

### 📁 src/components/

**Small, focused components with single responsibilities:**

```
components/
├── Header/                      # Refactored header
│   ├── index.tsx               # Main component
│   ├── HeaderLogo.tsx          # Logo display (pure UI)
│   ├── HeaderNav.tsx           # Navigation links
│   ├── HeaderCTA.tsx           # CTA section
│   ├── MobileMenuButton.tsx    # Menu toggle button
│   └── MobileMenu.tsx          # Mobile navigation
│
├── Hero/                        # Refactored hero
│   ├── index.tsx               # Main component
│   ├── HeroBadge.tsx          # Status badge
│   ├── HeroCTA.tsx            # Action buttons
│   ├── HeroFeatures.tsx       # Feature list
│   ├── HeroStats.tsx          # Statistics cards
│   ├── HeroBackground.tsx     # Video background
│   └── ScrollIndicator.tsx    # Scroll hint
│
├── layouts/                    # Layout wrappers
│   ├── AppLayout.tsx          # App-wide layout
│   ├── PageLayout.tsx         # Page layout
│   └── index.ts               # Exports
│
└── [other components...]
```

**Benefits:**

- ✅ Easy to find code
- ✅ Simple to test
- ✅ Single responsibility
- ✅ Reusable pieces

### 🪝 src/hooks/

**Custom hooks for extracting logic:**

```typescript
// useScroll hook - Manages scroll state
import { useScroll } from "@/hooks";

const MyComponent = () => {
  const { isScrolled, scrollY } = useScroll({ threshold: 50 });

  return (
    <div>
      {isScrolled && <BackToTop />}
      Position: {scrollY}px
    </div>
  );
};

// useMobileMenu hook - Manages menu state
import { useMobileMenu } from "@/hooks";

const Header = () => {
  const { isOpen, toggle, open, close } = useMobileMenu();

  return (
    <>
      <button onClick={toggle}>Menu</button>
      {isOpen && <Menu onClose={close} />}
    </>
  );
};
```

**Why extract logic?**

- ✅ Reuse across components
- ✅ Easier to test
- ✅ Cleaner components
- ✅ Single concern

### ⚙️ src/services/

**Pure utility functions for shared logic:**

```typescript
// services/scroll.ts
import { isScrolled, addScrollListener, scrollToElement } from "@/services";

// Check scroll state
if (isScrolled(50)) {
  console.log("Scrolled more than 50px");
}

// Listen to scroll
const unsubscribe = addScrollListener((scrolled, position) => {
  console.log(scrolled, position);
});

// Scroll to element
scrollToElement("my-section", 100);

// services/routing.ts
import { navigateTo, normalizeRoute } from "@/services";

navigateTo("/about.html");
const route = normalizeRoute("about"); // "/about"
```

**Why use services?**

- ✅ Pure functions (easy to test)
- ✅ No dependencies
- ✅ Highly reusable
- ✅ Clear responsibilities

### 📋 src/constants/

**Centralized configuration:**

```typescript
// constants/navigation.ts
import { NAV_LINKS, CONTACT_INFO, COMPANY_INFO } from "@/constants";

// Navigation
NAV_LINKS.forEach((link) => {
  console.log(link.to, link.label); // "/about.html", "About Us"
});

// Contact
console.log(CONTACT_INFO.phone); // "+260 211 123 456"

// Company
console.log(COMPANY_INFO.name); // "BISL"

// constants/hero.ts
import { HERO_CONFIG, HERO_FEATURES } from "@/constants";

console.log(HERO_CONFIG.headline);
HERO_FEATURES.forEach((feature) => console.log(feature.text));
```

**Benefits:**

- ✅ Single source of truth
- ✅ Easy to update
- ✅ Type-safe
- ✅ No hardcoded strings

### 🔤 src/types/

**TypeScript interfaces:**

```typescript
import { NavLink, Feature, HeroConfig, PageConfig, ContactInfo } from "@/types";

const link: NavLink = { to: "/", label: "Home" };
const feature: Feature = { icon: CheckCircle, text: "Feature" };
const contact: ContactInfo = { phone: "+1234567890" };
```

**Benefits:**

- ✅ Type safety
- ✅ Better IDE support
- ✅ Self-documenting
- ✅ Compile-time errors

### 🎨 src/components/layouts/

**Wrapper components for consistent structure:**

```typescript
import { AppLayout, PageLayout } from "@/components/layouts";

// AppLayout wraps entire app
<AppLayout>
  <Hero />
  <Services />
  <Footer /> {/* Included in layout */}
</AppLayout>

// PageLayout wraps individual pages
<PageLayout className="py-20">
  <PageHero />
  <Content />
</PageLayout>
```

**Benefits:**

- ✅ Consistent structure
- ✅ DRY principle
- ✅ Easy to modify globally
- ✅ Composable

## Common Patterns

### Pattern 1: Using Hooks

```typescript
import { useScroll, useMobileMenu } from "@/hooks";

export const MyComponent = () => {
  // Hook 1: Scroll state
  const { isScrolled, scrollY } = useScroll({ threshold: 100 });

  // Hook 2: Mobile menu
  const { isOpen, toggle, close } = useMobileMenu();

  return (
    <div>
      <button onClick={toggle}>
        {isOpen ? "Close" : "Open"}
      </button>
      <p>Scrolled: {isScrolled}</p>
    </div>
  );
};
```

### Pattern 2: Using Constants

```typescript
import { NAV_LINKS, CONTACT_INFO } from "@/constants";

export const Navigation = () => {
  return (
    <nav>
      {NAV_LINKS.map(link => (
        <a key={link.to} href={link.to}>{link.label}</a>
      ))}
      <a href={`tel:${CONTACT_INFO.phone}`}>Call</a>
    </nav>
  );
};
```

### Pattern 3: Using Services

```typescript
import { scrollToElement, isScrolled } from "@/services";

export const ScrollButton = () => {
  const handleClick = () => {
    scrollToElement("my-section", 80);
  };

  const handleScroll = () => {
    if (isScrolled(200)) {
      // Do something
    }
  };

  return <button onClick={handleClick}>Scroll</button>;
};
```

### Pattern 4: Using Types

```typescript
import { NavLink, Feature, HeroConfig } from "@/types";

interface NavigationProps {
  links: NavLink[];
}

export const Navigation: React.FC<NavigationProps> = ({ links }) => {
  return (
    <nav>
      {links.map(link => (
        <a key={link.to} href={link.to}>{link.label}</a>
      ))}
    </nav>
  );
};
```

### Pattern 5: Using Layouts

```typescript
import { AppLayout, PageLayout } from "@/components/layouts";

// Full page with header and footer
export const HomePage = () => (
  <AppLayout>
    <Hero />
    <Services />
  </AppLayout>
);

// Just page content
export const AboutPage = () => (
  <PageLayout>
    <PageHero />
    <AboutContent />
  </PageLayout>
);
```

## Import Best Practices

### ✅ Good Imports

```typescript
// Import from barrel exports
import { useScroll, useMobileMenu } from "@/hooks";
import { NAV_LINKS, CONTACT_INFO } from "@/constants";
import { scrollToElement, navigateTo } from "@/services";
import { AppLayout } from "@/components/layouts";

// Import types
import type { NavLink, Feature } from "@/types";
```

### ❌ Bad Imports

```typescript
// Don't import from nested files
import { useScroll } from "@/hooks/useScroll"; // ❌
import { NAV_LINKS } from "@/constants/navigation"; // ❌

// Don't mix default and named imports
import { something, default as Component } from "@/file"; // ❌
```

## Adding New Features

### Adding a New Component

```typescript
// 1. Create component file
// src/components/MyComponent.tsx
import { Button } from "@/components/ui/button";

interface MyComponentProps {
  title: string;
  onClick?: () => void;
}

export const MyComponent: React.FC<MyComponentProps> = ({
  title,
  onClick
}) => {
  return <Button onClick={onClick}>{title}</Button>;
};

// 2. Use in parent
import { MyComponent } from "@/components/MyComponent";

const App = () => (
  <MyComponent title="Click me" onClick={() => {}} />
);
```

### Adding a New Hook

```typescript
// 1. Create hook file
// src/hooks/useMyHook.ts
import { useState, useCallback } from "react";

export const useMyHook = () => {
  const [state, setState] = useState(false);

  const toggle = useCallback(() => {
    setState(prev => !prev);
  }, []);

  return { state, toggle };
};

// 2. Export from index
// src/hooks/index.ts
export { useMyHook } from "./useMyHook";

// 3. Use in component
import { useMyHook } from "@/hooks";

const MyComponent = () => {
  const { state, toggle } = useMyHook();
  return <button onClick={toggle}>{state ? "On" : "Off"}</button>;
};
```

### Adding a New Service

```typescript
// 1. Create service file
// src/services/myService.ts
export const myFunction = (param: string): string => {
  return param.toUpperCase();
};

// 2. Export from index
// src/services/index.ts
export * from "./myService";

// 3. Use in code
import { myFunction } from "@/services";

const result = myFunction("hello"); // "HELLO"
```

### Adding a New Constant

```typescript
// 1. Create constant file
// src/constants/myConstants.ts
export const MY_CONFIG = {
  timeout: 5000,
  retries: 3,
};

// 2. Export from index
// src/constants/index.ts
export * from "./myConstants";

// 3. Use in code
import { MY_CONFIG } from "@/constants";

console.log(MY_CONFIG.timeout); // 5000
```

## Testing

### Testing Services (Easiest)

```typescript
// services/scroll.test.ts
import { isScrolled } from "@/services/scroll";

describe("scroll service", () => {
  it("should detect scrolled state", () => {
    expect(isScrolled(10)).toBe(false);

    window.scrollY = 20;
    expect(isScrolled(10)).toBe(true);
  });
});
```

### Testing Hooks

```typescript
// hooks/useScroll.test.ts
import { renderHook } from "@testing-library/react";
import { useScroll } from "@/hooks";

describe("useScroll hook", () => {
  it("should return scroll state", () => {
    const { result } = renderHook(() => useScroll());
    expect(result.current.isScrolled).toBe(false);
  });
});
```

### Testing Components

```typescript
// components/Header.test.tsx
import { render, screen } from "@testing-library/react";
import Header from "@/components/Header";

describe("Header", () => {
  it("should render header", () => {
    render(<Header />);
    expect(screen.getByText("BISL")).toBeInTheDocument();
  });
});
```

## Performance Tips

1. **Memoize components** when needed

   ```typescript
   export const MyComponent = memo(Component);
   ```

2. **Use useCallback** for event handlers

   ```typescript
   const handleClick = useCallback(() => {}, []);
   ```

3. **Lazy load components** for code splitting

   ```typescript
   const Hero = lazy(() => import("@/components/Hero"));
   ```

4. **Extract constants** outside components
   ```typescript
   const CONFIG = {
     /* ... */
   };
   ```

## Troubleshooting

### Import Errors

**Problem:** Can't find module

```
Module not found: '@/components/Header'
```

**Solution:** Check:

1. File exists at that path
2. Use correct casing
3. Check for typos in path

### TypeScript Errors

**Problem:** Type errors

```
Property 'isScrolled' does not exist
```

**Solution:** Check:

1. Correct import from barrel export
2. Check types file for interface
3. Verify hook/function signature

### Component Not Showing

**Problem:** Component renders but not visible

```
Likely CSS/styling issue
```

**Solution:**

1. Check Tailwind classes
2. Check z-index
3. Check display property
4. Check in browser DevTools

## File Checklist for New Pages

When creating a new page, ensure:

- [ ] Page component created in `src/pages/`
- [ ] Uses `AppLayout` or `PageLayout`
- [ ] Imports from barrel exports (`@/hooks`, `@/constants`, etc.)
- [ ] Has TypeScript types for props
- [ ] Uses `PageHero` for header
- [ ] No hardcoded strings (use constants)
- [ ] Uses reusable components
- [ ] Proper error boundaries
- [ ] Accessible HTML structure
- [ ] Mobile responsive

## Summary

### Before Refactoring

- 📝 Large monolithic components
- 🔗 Hardcoded values scattered
- 🧩 Logic tied to UI
- 🤷 Unclear structure

### After Refactoring

- ✂️ Small focused components
- 📍 Centralized configuration
- 🪝 Logic in hooks/services
- 🗺️ Clear, organized structure

### Key Files to Know

- `ARCHITECTURE.md` - Detailed architecture
- `REFACTORING_SUMMARY.md` - Summary of changes
- `src/constants/` - All configuration
- `src/hooks/` - Reusable logic
- `src/services/` - Utility functions
- `src/types/` - Type definitions

## Questions?

Refer to:

1. **ARCHITECTURE.md** - Full technical details
2. **REFACTORING_SUMMARY.md** - Change summary
3. **Code comments** - Inline documentation
4. **Component examples** - See existing components

## Need Help?

- Check existing components for patterns
- Look for similar features
- Read inline comments
- Refer to ARCHITECTURE.md
- Run tests to verify changes
