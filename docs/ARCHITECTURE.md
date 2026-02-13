# BISL Website - Refactored Architecture Guide

## Overview

This document outlines the improved project structure following modern React and clean architecture best practices.

## Project Structure

```
src/
├── components/
│   ├── Header/                 # Refactored header component
│   │   ├── index.tsx          # Main header with composition
│   │   ├── HeaderLogo.tsx     # Logo/branding component
│   │   ├── HeaderNav.tsx      # Desktop navigation menu
│   │   ├── HeaderCTA.tsx      # Call-to-action section
│   │   ├── MobileMenuButton.tsx  # Mobile menu toggle
│   │   └── MobileMenu.tsx     # Mobile navigation
│   │
│   ├── Hero/                  # Refactored hero section
│   │   ├── index.tsx          # Main hero component
│   │   ├── HeroBadge.tsx      # Hero badge with indicator
│   │   ├── HeroCTA.tsx        # Call-to-action buttons
│   │   ├── HeroFeatures.tsx   # Feature badges
│   │   ├── HeroStats.tsx      # Stats cards
│   │   ├── HeroBackground.tsx # Video background
│   │   └── ScrollIndicator.tsx # Scroll animation
│   │
│   ├── layouts/               # Layout components
│   │   ├── AppLayout.tsx      # Main app layout wrapper
│   │   ├── PageLayout.tsx     # Individual page layout
│   │   └── index.ts           # Layout exports
│   │
│   ├── ui/                    # Shadcn UI components
│   │
│   ├── NavLink.tsx
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Features.tsx
│   ├── Footer.tsx
│   ├── Industries.tsx
│   ├── PageHero.tsx
│   ├── Projects.tsx
│   └── Services.tsx
│
├── pages/
│   ├── Index.tsx              # Home page
│   ├── About.tsx              # About page
│   ├── Services.tsx           # Services page
│   ├── Industries.tsx         # Industries page
│   ├── Projects.tsx           # Projects page
│   ├── Contact.tsx            # Contact page
│   └── NotFound.tsx           # 404 page
│
├── hooks/
│   ├── index.ts               # Hooks barrel export
│   ├── useScroll.ts           # Scroll state management
│   ├── useMobileMenu.ts       # Mobile menu state
│   ├── use-toast.ts           # Toast notifications
│   ├── use-mobile.tsx         # Mobile detection
│   └── useToast.ts            # (alias)
│
├── services/
│   ├── index.ts               # Services barrel export
│   ├── scroll.ts              # Scroll utilities
│   └── routing.ts             # Routing utilities
│
├── constants/
│   ├── index.ts               # Constants barrel export
│   ├── navigation.ts          # Navigation config
│   └── hero.ts                # Hero section config
│
├── types/
│   └── index.ts               # Global TypeScript interfaces
│
├── lib/
│   └── utils.ts               # Utility functions
│
├── assets/                    # Static assets
│
├── App.tsx                    # Root component
├── App.css                    # Global styles
├── main.tsx                   # Entry point
├── index.css                  # Base styles
└── vite-env.d.ts              # Vite environment types
```

## Key Improvements

### 1. **Component Decomposition**

- **Before**: Monolithic components with mixed concerns
- **After**: Smaller, focused components with single responsibilities
  - Header split into: Logo, Nav, CTA, MobileMenuButton, MobileMenu
  - Hero split into: Badge, CTA, Features, Stats, Background, ScrollIndicator

**Benefits**:

- Easier to test individual components
- Better code reusability
- Improved maintainability
- Clearer component responsibilities

### 2. **Custom Hooks for Logic**

Created reusable hooks to extract component logic:

```typescript
// hooks/useScroll.ts
export const useScroll = ({ threshold = 10 }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  // ... scroll logic
};

// hooks/useMobileMenu.ts
export const useMobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  // ... menu logic with escape key handling
};
```

**Benefits**:

- Separated logic from UI
- Reusable across components
- Easier to test
- Reduces component complexity

### 3. **Centralized Configuration**

Extracted hardcoded values into constants:

```typescript
// constants/navigation.ts
export const NAV_LINKS: NavLink[] = [...]
export const CONTACT_INFO: ContactInfo = {...}
export const COMPANY_INFO = {...}

// constants/hero.ts
export const HERO_CONFIG: HeroConfig = {...}
export const HERO_FEATURES: Feature[] = [...]
```

**Benefits**:

- Single source of truth
- Easy content updates
- Type-safe configuration
- Reduced hardcoded strings

### 4. **Utility Services Layer**

Created reusable service functions:

```typescript
// services/scroll.ts
export const addScrollListener = (callback, threshold) => {...}
export const scrollToElement = (elementId, offset) => {...}
export const isScrolled = (threshold) => {...}

// services/routing.ts
export const navigateTo = (path) => {...}
export const normalizeRoute = (route) => {...}
```

**Benefits**:

- Shared functionality across app
- Easier to test pure functions
- Better code organization
- Reduced duplication

### 5. **Type Safety**

Centralized type definitions:

```typescript
// types/index.ts
export interface NavLink { ... }
export interface Feature { ... }
export interface HeroConfig { ... }
export interface PageConfig { ... }
```

**Benefits**:

- Better IDE support
- Fewer runtime errors
- Self-documenting code
- Consistent interfaces

### 6. **Layout Components**

Created reusable layout wrappers:

```typescript
// AppLayout: Wraps entire app (Header + Footer)
<AppLayout>
  <Hero />
  <Services />
</AppLayout>

// PageLayout: For individual pages
<PageLayout>
  <PageHero />
  <Content />
</PageLayout>
```

**Benefits**:

- Consistent layout structure
- Easier to modify global layout
- DRY principle applied
- Flexible composition

## Usage Examples

### Using AppLayout in Pages

```typescript
import { AppLayout } from "@/components/layouts";
import Hero from "@/components/Hero";

const HomePage = () => (
  <AppLayout>
    <Hero />
  </AppLayout>
);
```

### Using Hooks

```typescript
import { useScroll, useMobileMenu } from "@/hooks";

const MyComponent = () => {
  const { isScrolled } = useScroll({ threshold: 50 });
  const { isOpen, toggle } = useMobileMenu();

  return <div>{isScrolled ? "Scrolled!" : "Top"}</div>;
};
```

### Using Constants

```typescript
import { NAV_LINKS, CONTACT_INFO, HERO_CONFIG } from "@/constants";

// Access configuration
const phone = CONTACT_INFO.phone;
const navLinks = NAV_LINKS.map(link => ...);
```

### Using Services

```typescript
import { addScrollListener, navigateTo } from "@/services";

// Add scroll listener
const unsubscribe = addScrollListener((isScrolled, scrollY) => {
  console.log(isScrolled, scrollY);
});

// Navigate
navigateTo("/services.html");
```

## Design Principles Applied

### 1. **Single Responsibility Principle (SRP)**

Each component has one reason to change:

- `HeaderLogo`: Only manages logo display
- `HeaderNav`: Only manages navigation links
- `HeaderCTA`: Only manages CTA section

### 2. **DRY (Don't Repeat Yourself)**

- Navigation configuration in one place (constants/navigation.ts)
- Hero configuration in one place (constants/hero.ts)
- Scroll logic in reusable service (services/scroll.ts)

### 3. **Component Composition**

Build complex UIs from simple, composable pieces:

```typescript
<Header>
  <HeaderLogo />
  <HeaderNav />
  <HeaderCTA />
  <MobileMenuButton />
</Header>
```

### 4. **Separation of Concerns**

- **UI Logic**: React components
- **Business Logic**: Services and hooks
- **Configuration**: Constants
- **Types**: Type definitions

### 5. **Clean Architecture**

```
┌─────────────────────────────────────┐
│     UI Components (React)           │
├─────────────────────────────────────┤
│     Custom Hooks (Logic)            │
├─────────────────────────────────────┤
│     Services (Pure Functions)       │
├─────────────────────────────────────┤
│     Constants (Configuration)       │
├─────────────────────────────────────┤
│     Types (Interfaces)              │
└─────────────────────────────────────┘
```

## Migration Guide

### For Existing Components

When refactoring existing components, follow this pattern:

1. **Identify responsibilities** - What does this component do?
2. **Extract configuration** - Move hardcoded values to constants
3. **Extract logic** - Move state/logic to custom hooks
4. **Split components** - Create smaller, focused components
5. **Use composition** - Assemble components together

### Example: Refactoring a Component

**Before:**

```typescript
const ComplexComponent = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const items = [
    { id: 1, label: "Item 1" },
    { id: 2, label: "Item 2" },
  ];

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div>
      <header className={scrolled ? "bg-white" : "bg-transparent"}>
        <button onClick={() => setMenuOpen(!menuOpen)}>Menu</button>
        <div style={{ display: menuOpen ? "block" : "none" }}>
          {items.map(item => <a key={item.id}>{item.label}</a>)}
        </div>
      </header>
    </div>
  );
};
```

**After:**

```typescript
// constants/items.ts
export const MENU_ITEMS = [
  { id: 1, label: "Item 1" },
  { id: 2, label: "Item 2" },
];

// components/Menu.tsx
const Menu = ({ isOpen, items }: MenuProps) => (
  <div style={{ display: isOpen ? "block" : "none" }}>
    {items.map(item => <a key={item.id}>{item.label}</a>)}
  </div>
);

// components/Header.tsx (refactored)
const Header = () => {
  const { isScrolled } = useScroll({ threshold: 50 });
  const { isOpen, toggle } = useMobileMenu();

  return (
    <header className={isScrolled ? "bg-white" : "bg-transparent"}>
      <button onClick={toggle}>Menu</button>
      <Menu isOpen={isOpen} items={MENU_ITEMS} />
    </header>
  );
};
```

## Testing Implications

### Services (Easy to Test)

```typescript
// services/scroll.test.ts
describe("scroll service", () => {
  it("should detect scrolled state", () => {
    expect(isScrolled(10)).toBe(false);
    window.scrollY = 20;
    expect(isScrolled(10)).toBe(true);
  });
});
```

### Hooks (Medium to Test)

```typescript
// hooks/useScroll.test.ts
describe("useScroll hook", () => {
  it("should update scroll state on window scroll", () => {
    const { result } = renderHook(() => useScroll());
    expect(result.current.isScrolled).toBe(false);
  });
});
```

### Components (UI Tests)

```typescript
// Header.test.tsx
describe('Header', () => {
  it('should render header with logo', () => {
    render(<Header />);
    expect(screen.getByText('BISL')).toBeInTheDocument();
  });
});
```

## Performance Optimization Opportunities

1. **Code Splitting**: Consider lazy loading large components

   ```typescript
   const Hero = lazy(() => import("@/components/Hero"));
   ```

2. **Memoization**: Prevent unnecessary re-renders

   ```typescript
   export const HeaderLogo = memo(HeaderLogoComponent);
   ```

3. **Context API**: For global state

   ```typescript
   export const AppContext = createContext();
   ```

4. **React Query**: Already integrated for API calls
   ```typescript
   useQuery("key", fetcher);
   ```

## Next Steps

1. **Update remaining pages** to use AppLayout
2. **Create additional context** for global app state
3. **Add error boundaries** for better error handling
4. **Implement code splitting** for better performance
5. **Add comprehensive tests** for components and services
6. **Document component APIs** with Storybook (optional)

## File Organization Best Practices

✅ **Do:**

- Keep related files together (e.g., Header component with subcomponents)
- Use index.ts for barrel exports
- Create services for shared logic
- Centralize configuration
- Use consistent naming conventions

❌ **Don't:**

- Mix concerns in components
- Hardcode values
- Duplicate logic
- Create deeply nested folder structures
- Create catch-all utility files

## Summary

This refactored architecture provides:

- ✅ Better code organization
- ✅ Improved reusability
- ✅ Easier testing
- ✅ Better type safety
- ✅ Clearer separation of concerns
- ✅ Scalable structure for future growth
- ✅ Modern React best practices
- ✅ Clean architecture principles

For questions or improvements, follow the patterns established in this guide!
