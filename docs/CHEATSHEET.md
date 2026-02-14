# 🚀 Quick Reference Cheat Sheet

## Import Patterns

### ✅ Correct

```typescript
import { useScroll, useMobileMenu } from "@/hooks";
import { NAV_LINKS, CONTACT_INFO } from "@/constants";
import { scrollToElement, navigateTo } from "@/services";
import { AppLayout } from "@/components/layouts";
import type { NavLink, Feature } from "@/types";
```

### ❌ Wrong

```typescript
import { useScroll } from "@/hooks/useScroll"; // ❌ Use barrel export
import { NAV_LINKS } from "@/constants/navigation"; // ❌ Use barrel export
```

---

## Hooks Reference

### useScroll()

```typescript
const { isScrolled, scrollY } = useScroll({ threshold: 10 });
// isScrolled: boolean
// scrollY: number
```

### useMobileMenu()

```typescript
const { isOpen, toggle, open, close } = useMobileMenu();
// isOpen: boolean
// toggle: () => void
// open: () => void
// close: () => void
```

---

## Services Reference

### scroll.ts

```typescript
isScrolled(threshold); // Check if scrolled past threshold
addScrollListener(callback); // Add scroll event listener
scrollToElement(id, offset); // Scroll to element
scrollToTop(behavior); // Scroll to top
```

### routing.ts

```typescript
navigateTo(path); // Navigate to page
normalizeRoute(route); // Normalize route path
isInternalLink(href); // Check if internal link
getActiveRoute(path, route); // Check if route is active
```

---

## Constants Reference

### navigation.ts

```typescript
NAV_LINKS[]         // Navigation links array
CONTACT_INFO        // Contact information
COMPANY_INFO        // Company details
```

### hero.ts

```typescript
HERO_CONFIG         // Hero section configuration
HERO_FEATURES[]     // Feature list
```

---

## Types Reference

```typescript
NavLink; // { to: string; label: string }
Feature; // { icon: Component; text: string }
HeroConfig; // Hero configuration type
ContactInfo; // { phone: string; ... }
PageConfig; // Page configuration type
```

---

## Layout Usage

### AppLayout (Full Page)

```typescript
import { AppLayout } from "@/components/layouts";

<AppLayout>
  <Hero />
  <Services />
</AppLayout>
```

### PageLayout (Content Only)

```typescript
import { PageLayout } from "@/components/layouts";

<PageLayout className="py-20">
  <PageHero />
  <Content />
</PageLayout>
```

---

## Component Patterns

### Simple Component

```typescript
interface MyComponentProps {
  title: string;
  onClick?: () => void;
}

export const MyComponent: React.FC<MyComponentProps> = ({
  title,
  onClick
}) => {
  return <button onClick={onClick}>{title}</button>;
};
```

### Component with Hooks

```typescript
export const MyComponent = () => {
  const { isScrolled } = useScroll();
  const { isOpen, toggle } = useMobileMenu();

  return (
    <div>
      {isScrolled && <BackToTop />}
      <button onClick={toggle}>{isOpen ? 'Close' : 'Open'}</button>
    </div>
  );
};
```

### Component with Constants

```typescript
import { NAV_LINKS } from "@/constants";

export const Navigation = () => (
  <nav>
    {NAV_LINKS.map(link => (
      <a key={link.to} href={link.to}>{link.label}</a>
    ))}
  </nav>
);
```

---

## Hook Patterns

### Basic Hook

```typescript
export const useMyHook = () => {
  const [state, setState] = useState(false);

  return { state, setState };
};
```

### Hook with Effect

```typescript
export const useMyHook = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Setup
    return () => {
      // Cleanup
    };
  }, []);

  return { data };
};
```

### Hook with Service

```typescript
export const useMyHook = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const unsubscribe = addScrollListener((isScrolled) => {
      setData(isScrolled);
    });

    return unsubscribe;
  }, []);

  return { data };
};
```

---

## File Structure Template

### New Component

```
components/
└── MyComponent/
    ├── index.tsx           ← Main component
    ├── MySubComponent1.tsx ← Sub-component
    ├── MySubComponent2.tsx ← Sub-component
    └── MySubComponent3.tsx ← Sub-component
```

### New Feature

```
// 1. Create constant if needed
constants/myFeature.ts

// 2. Create hook if needed
hooks/useMyFeature.ts

// 3. Create service if needed
services/myFeature.ts

// 4. Create component
components/MyFeature.tsx

// 5. Add types if needed
types/index.ts (add interface)

// 6. Export from barrel
hooks/index.ts
constants/index.ts
services/index.ts
```

---

## Testing Quick Reference

### Test a Service

```typescript
import { isScrolled } from "@/services";

test("detects scroll", () => {
  window.scrollY = 100;
  expect(isScrolled(50)).toBe(true);
});
```

### Test a Hook

```typescript
import { renderHook } from "@testing-library/react";
import { useScroll } from "@/hooks";

test("returns scroll state", () => {
  const { result } = renderHook(() => useScroll());
  expect(result.current.isScrolled).toBeDefined();
});
```

### Test a Component

```typescript
import { render, screen } from "@testing-library/react";
import { HeaderLogo } from "@/components/Header/HeaderLogo";

test("renders logo", () => {
  render(<HeaderLogo />);
  expect(screen.getByText("BISL")).toBeInTheDocument();
});
```

---

## Performance Tips

### Memoize Components

```typescript
import { memo } from "react";

export const MyComponent = memo(({ prop }) => {
  return <div>{prop}</div>;
});
```

### Memoize Callbacks

```typescript
const handleClick = useCallback(() => {
  // Handle click
}, [dependency]);
```

### Lazy Load Components

```typescript
import { lazy, Suspense } from "react";

const Hero = lazy(() => import("@/components/Hero"));

<Suspense fallback={<Loading />}>
  <Hero />
</Suspense>
```

---

## Common Mistakes to Avoid

### ❌ Hardcoding Values

```typescript
const navLinks = [
  { to: "/about", label: "About" }, // ❌ Use constants instead
];
```

### ✅ Use Constants

```typescript
import { NAV_LINKS } from "@/constants";
// Use NAV_LINKS
```

---

### ❌ Mixing Logic and UI

```typescript
const MyComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  // ... more logic
  return <div>{/* UI */}</div>;
};
```

### ✅ Extract Logic

```typescript
// Use hook or service
const { isOpen, toggle } = useMobileMenu();
return <div onClick={toggle}>Toggle</div>;
```

---

### ❌ Long Import Paths

```typescript
import { useScroll } from "@/hooks/useScroll"; // ❌
```

### ✅ Use Barrel Exports

```typescript
import { useScroll } from "@/hooks"; // ✅
```

---

### ❌ No Type Safety

```typescript
const MyComponent = ({ data }) => {
  // What is data?
  return <div>{data}</div>;
};
```

### ✅ Add Types

```typescript
interface MyComponentProps {
  data: string;
}

const MyComponent: React.FC<MyComponentProps> = ({ data }) => {
  return <div>{data}</div>;
};
```

---

## Command Reference

```bash
# Development
npm run dev           # Start dev server
npm run build         # Build for production
npm run preview       # Preview production build

# Code Quality
npm run lint          # Run ESLint
npm run test          # Run tests
npm run test:watch    # Run tests in watch mode
```

---

## Folder Navigation

```
cd src/components/Header    # Header components
cd src/components/Hero      # Hero components
cd src/pages                # Pages
cd src/hooks                # Custom hooks
cd src/services             # Utilities
cd src/constants            # Configuration
cd src/types                # Type definitions
```

---

## Documentation Links

| Document                     | Purpose              | When to Read          |
| ---------------------------- | -------------------- | --------------------- |
| **ARCHITECTURE.md**          | Deep technical guide | Planning architecture |
| **DEVELOPER_GUIDE.md**       | How to use patterns  | Learning patterns     |
| **REFACTORING_SUMMARY.md**   | What changed         | Onboarding            |
| **REFACTORING_INDEX.md**     | Overview             | Quick overview        |
| **ARCHITECTURE_DIAGRAMS.md** | Visual reference     | Understanding flow    |
| **CHEATSHEET.md**            | Quick reference      | While coding          |

---

## Quick Checklist

### Before Committing Code

- [ ] No hardcoded values
- [ ] Uses constants for configuration
- [ ] Proper type definitions
- [ ] Follows single responsibility
- [ ] Uses barrel exports
- [ ] No code duplication
- [ ] Readable and commented
- [ ] No console.log statements
- [ ] Works on mobile
- [ ] No TypeScript errors

### When Adding Features

- [ ] Identify component vs hook vs service
- [ ] Create in appropriate folder
- [ ] Add types in types/index.ts
- [ ] Add constants if configuration
- [ ] Create hook if logic
- [ ] Create service if utility
- [ ] Update barrel exports
- [ ] Follow existing patterns
- [ ] Document if complex

---

## Abbreviations

| Abbr      | Meaning                           |
| --------- | --------------------------------- |
| **SRP**   | Single Responsibility Principle   |
| **DRY**   | Don't Repeat Yourself             |
| **UI**    | User Interface                    |
| **API**   | Application Programming Interface |
| **JSX**   | JavaScript XML                    |
| **TS**    | TypeScript                        |
| **FC**    | Functional Component              |
| **Props** | Properties                        |
| **Hook**  | React Hook                        |

---

## Resources

```
Get Help:
- Check DEVELOPER_GUIDE.md
- Look at similar components
- Read ARCHITECTURE.md
- Check documentation comments
- Review type definitions

Learn More:
- React docs: https://react.dev
- TypeScript docs: https://typescriptlang.org
- React Hooks: https://react.dev/reference/react
```

---

## File Sizes Target

```
Component files:      20-80 lines
Hook files:          20-50 lines
Service files:       30-100 lines
Constant files:      50-100 lines
Type definition:     50-150 lines
```

If files are larger, consider splitting further!

---

## Troubleshooting

| Problem               | Solution                            |
| --------------------- | ----------------------------------- |
| Can't find module     | Use barrel export, check path       |
| Type error            | Check types/index.ts, verify import |
| Component not showing | Check CSS, z-index, display         |
| Hook not working      | Check dependencies array            |
| State not updating    | Check setState is correct           |
| Styling wrong         | Check Tailwind classes              |

---

## Quick Start Template

```typescript
// 1. Import what you need
import { useScroll } from "@/hooks";
import { NAV_LINKS } from "@/constants";
import type { NavLink } from "@/types";

// 2. Define types
interface MyComponentProps {
  title: string;
}

// 3. Create component
export const MyComponent: React.FC<MyComponentProps> = ({ title }) => {
  const { isScrolled } = useScroll();

  return (
    <div>
      <h1>{title}</h1>
      {isScrolled && <BackToTop />}
    </div>
  );
};

// 4. Export
export default MyComponent;
```

---

## Remember

✅ Keep it simple
✅ Follow patterns
✅ Use types
✅ Extract logic
✅ Centralize config
✅ Document complexity
✅ Test your code
✅ Refactor when needed

---

**Print this page and keep it handy while coding!** 📋
