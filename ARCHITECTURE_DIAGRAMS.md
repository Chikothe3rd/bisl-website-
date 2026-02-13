# Code Structure & Architecture Diagrams

## 📊 Layered Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    UI Layer (React)                         │
│                 (Components & Pages)                         │
├─────────────────────────────────────────────────────────────┤
│                   Logic Layer                                │
│           (Custom Hooks & Services)                         │
├─────────────────────────────────────────────────────────────┤
│            Configuration Layer                               │
│           (Constants & Configuration)                        │
├─────────────────────────────────────────────────────────────┤
│              Type Layer                                      │
│           (TypeScript Interfaces)                           │
└─────────────────────────────────────────────────────────────┘
```

## 🧩 Component Composition

### Header Component Structure

```
Header (Main)
├── HeaderLogo
│   └── Logo + Brand name
├── HeaderNav
│   └── Navigation links
├── HeaderCTA
│   └── Phone + Quote button
├── MobileMenuButton
│   └── Menu toggle
└── MobileMenu
    └── Mobile navigation
```

### Hero Component Structure

```
Hero (Main)
├── HeroBackground
│   └── Video + Gradients
├── HeroBadge
│   └── Trust statement
├── (Content)
│   ├── h1 - Headline
│   └── p - Subheadline
├── HeroCTA
│   └── Action buttons
├── HeroFeatures
│   └── Feature badges
├── HeroStats
│   └── Stats cards
└── ScrollIndicator
    └── Scroll animation
```

## 🎯 Data Flow

### Component State Flow

```
Component
    ↓
useScroll Hook
    ↓
addScrollListener (Service)
    ↓
Window scroll event
    ↓
Update state
    ↓
Re-render
```

### Configuration Flow

```
Constants (navigation.ts, hero.ts)
    ↓
Import in Component/Hook
    ↓
Use in rendering/logic
    ↓
Update constant = update everywhere
```

## 📁 File Organization Hierarchy

```
src/
│
├── components/
│   ├── Header/
│   │   ├── index.tsx              ← Main component
│   │   ├── HeaderLogo.tsx         ← Sub-component
│   │   ├── HeaderNav.tsx          ← Sub-component
│   │   ├── HeaderCTA.tsx          ← Sub-component
│   │   ├── MobileMenuButton.tsx   ← Sub-component
│   │   └── MobileMenu.tsx         ← Sub-component
│   │
│   ├── Hero/
│   │   ├── index.tsx              ← Main component
│   │   ├── HeroBadge.tsx          ← Sub-component
│   │   ├── HeroCTA.tsx            ← Sub-component
│   │   ├── HeroFeatures.tsx       ← Sub-component
│   │   ├── HeroStats.tsx          ← Sub-component
│   │   ├── HeroBackground.tsx     ← Sub-component
│   │   └── ScrollIndicator.tsx    ← Sub-component
│   │
│   ├── layouts/
│   │   ├── AppLayout.tsx          ← Full page layout
│   │   ├── PageLayout.tsx         ← Page content layout
│   │   └── index.ts               ← Barrel export
│   │
│   ├── ui/                        ← shadcn UI components
│   │
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Features.tsx
│   ├── Footer.tsx
│   ├── Industries.tsx
│   ├── NavLink.tsx
│   ├── PageHero.tsx
│   ├── Projects.tsx
│   └── Services.tsx
│
├── pages/
│   ├── Index.tsx                  ← Home page
│   ├── About.tsx                  ← About page
│   ├── Services.tsx               ← Services page
│   ├── Industries.tsx             ← Industries page
│   ├── Projects.tsx               ← Projects page
│   ├── Contact.tsx                ← Contact page
│   └── NotFound.tsx               ← 404 page
│
├── hooks/
│   ├── index.ts                   ← Barrel export
│   ├── useScroll.ts               ← Scroll hook
│   ├── useMobileMenu.ts           ← Mobile menu hook
│   ├── use-toast.ts               ← Toast hook
│   └── use-mobile.tsx             ← Mobile detection
│
├── services/
│   ├── index.ts                   ← Barrel export
│   ├── scroll.ts                  ← Scroll utilities
│   └── routing.ts                 ← Routing utilities
│
├── constants/
│   ├── index.ts                   ← Barrel export
│   ├── navigation.ts              ← Nav config
│   └── hero.ts                    ← Hero config
│
├── types/
│   └── index.ts                   ← All interfaces
│
├── lib/
│   └── utils.ts                   ← Utility functions
│
├── assets/                        ← Images, videos, etc.
│
├── App.tsx                        ← Root component
├── App.css                        ← Global styles
├── main.tsx                       ← Entry point
├── index.css                      ← Base styles
└── vite-env.d.ts                  ← Type definitions
```

## 🔄 Data & Logic Flow Diagram

```
┌──────────────────────┐
│   React Component    │
│   (Header.tsx)       │
└──────────┬───────────┘
           │
           ↓
┌──────────────────────────────────┐
│   Custom Hooks                   │
│   useScroll()                    │
│   useMobileMenu()                │
└──────────┬───────────────────────┘
           │
           ↓
┌──────────────────────────────────┐
│   Services (Pure Functions)      │
│   scroll.ts                      │
│   routing.ts                     │
└──────────┬───────────────────────┘
           │
           ↓
┌──────────────────────────────────┐
│   Constants (Configuration)      │
│   navigation.ts                  │
│   hero.ts                        │
└──────────┬───────────────────────┘
           │
           ↓
┌──────────────────────────────────┐
│   Types (TypeScript)             │
│   NavLink, Feature, etc.         │
└──────────────────────────────────┘
```

## 🎛️ Component Interaction Pattern

```
App
 │
 ├── AppLayout
 │    ├── Header
 │    │   ├── useScroll()  ──→  services/scroll.ts  ──→  constants/navigation.ts
 │    │   └── useMobileMenu()  ──→  types/index.ts
 │    │
 │    ├── Page Content
 │    │   ├── Hero
 │    │   │   ├── HeroBadge  ──→  constants/hero.ts
 │    │   │   ├── HeroCTA
 │    │   │   ├── HeroFeatures  ──→  HERO_FEATURES
 │    │   │   ├── HeroStats
 │    │   │   ├── HeroBackground
 │    │   │   └── ScrollIndicator  ──→  useScroll()
 │    │   │
 │    │   └── Other Components
 │    │
 │    └── Footer
 │
 └── Route handling
```

## 📋 Barrel Export Pattern

```
hooks/
├── useScroll.ts
├── useMobileMenu.ts
├── use-toast.ts
└── index.ts  ← Exports everything
    export { useScroll }
    export { useMobileMenu }
    export { useToast }

// Usage:
import { useScroll, useMobileMenu } from "@/hooks"
// Instead of:
import { useScroll } from "@/hooks/useScroll"
import { useMobileMenu } from "@/hooks/useMobileMenu"
```

## 🔀 State Management Flow

### Scroll State Flow

```
Window Scroll Event
        ↓
addScrollListener (in useScroll.ts)
        ↓
setIsScrolled(true/false)
setScrollY(number)
        ↓
Return { isScrolled, scrollY }
        ↓
Component re-renders with new state
        ↓
UI updates (e.g., header style changes)
```

### Mobile Menu State Flow

```
User clicks menu button
        ↓
toggle() function
        ↓
setIsOpen(!isOpen)
        ↓
Return { isOpen, toggle, open, close }
        ↓
Component re-renders
        ↓
Mobile menu shows/hides
```

## 🔗 Import Dependencies

```
Component imports:
    ↓
Hooks (@/hooks)
    ↓
Services (@/services)
    ↓
Constants (@/constants)
    ↓
Types (@/types)

All go through barrel exports (index.ts)
```

## 🎨 Component Responsibility Matrix

| Component        | Responsibility       | State                    | Props               |
| ---------------- | -------------------- | ------------------------ | ------------------- |
| Header           | Render header layout | useScroll, useMobileMenu | -                   |
| HeaderLogo       | Display logo         | -                        | to?: string         |
| HeaderNav        | Display nav links    | -                        | -                   |
| HeaderCTA        | Display CTA          | -                        | -                   |
| MobileMenuButton | Toggle button        | -                        | isOpen, onToggle    |
| MobileMenu       | Mobile nav           | -                        | isOpen, onClose     |
| Hero             | Render hero section  | -                        | -                   |
| HeroBadge        | Display badge        | -                        | -                   |
| HeroCTA          | Display buttons      | -                        | -                   |
| HeroFeatures     | Display features     | -                        | features: Feature[] |
| HeroStats        | Display stats        | -                        | -                   |
| HeroBackground   | Display background   | -                        | -                   |
| ScrollIndicator  | Show scroll hint     | -                        | -                   |

## 📊 File Count Summary

```
Before Refactoring:
├── Header.tsx          (136 lines)
├── Hero.tsx            (116 lines)
└── Other components

After Refactoring:
├── components/
│   ├── Header/         (6 files, ~200 lines total)
│   ├── Hero/           (7 files, ~280 lines total)
│   └── layouts/        (3 files, ~60 lines total)
├── hooks/              (3 files, ~80 lines total)
├── services/           (3 files, ~100 lines total)
├── constants/          (3 files, ~80 lines total)
└── types/              (1 file, ~50 lines total)

Total new structure: 29+ files
Improved organization: ✅
Modularity: ✅✅✅
Maintainability: ✅✅✅
```

## 🎯 Development Workflow

```
1. Need to add feature
        ↓
2. Identify what type:
   ├─ UI? → Create component
   ├─ Logic? → Create hook or service
   ├─ Config? → Add to constants
   ├─ Types? → Add interface
   └─ Multiple? → Combine above
        ↓
3. Follow existing patterns
        ↓
4. Import from barrel exports
        ↓
5. Test (services easiest to test)
        ↓
6. Update types if needed
```

## 🧪 Testing Architecture

```
Services (Pure Functions)
├─ Easy to test ✅
├─ No dependencies ✅
└─ Deterministic ✅

Hooks
├─ Medium difficulty
├─ Use renderHook ✅
└─ Mock services

Components
├─ Hard to test (UI)
├─ Use React Testing Library
└─ Mock hooks & services
```

## 📈 Scalability Path

```
Current (Small App)
    ↓
Add Context API (Shared State)
    ↓
Add React Query (Server State)
    ↓
Add Error Boundaries (Error Handling)
    ↓
Add Code Splitting (Performance)
    ↓
Add Storybook (Documentation)
    ↓
Production Ready (Large App)
```

## 🔐 Type Safety Flow

```
TypeScript Interface
(@/types/index.ts)
        ↓
Define prop types
        ↓
Component uses interface
        ↓
IDE shows autocomplete ✅
        ↓
Compile-time type checking ✅
        ↓
Runtime errors reduced ✅
```

## 📚 Knowledge Base Structure

```
REFACTORING_INDEX.md
├─ Overview
├─ What was created
├─ Learn more (links to other docs)
└─ Next steps

    ↓ Read for deep dive ↓

ARCHITECTURE.md
├─ Project structure
├─ Design principles
├─ Usage examples
├─ Testing strategy
└─ Migration guide

    ↓ Read for practical use ↓

DEVELOPER_GUIDE.md
├─ Quick start
├─ Common patterns
├─ Import best practices
├─ How to add features
└─ Examples
```

---

This visual representation helps you understand:

- 🎯 How code is organized
- 🔄 How data flows
- 📦 How components relate
- 🧩 How pieces fit together
- 📚 How to navigate documentation
