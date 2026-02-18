# Header & Navigation Issues + AI-Written Copy Analysis

**Date**: February 18, 2026

---

## 🔴 ISSUE #1: WRONG CONTACT INFO IN HEADER/NAV

### The Problem

Multiple hardcoded phone numbers and email addresses don't match the actual contact info:

| Component                                                 | Currently Shows                     | Should Show                          |
| --------------------------------------------------------- | ----------------------------------- | ------------------------------------ |
| **Mobile Menu** (`src/components/Header/MobileMenu.tsx`)  | +260 211 123 456                    | +260976219920                        |
| **Contact Page - Phone** (`src/components/Contact.tsx`)   | +260 211 123 456, +260 977 123 456  | +260976219920                        |
| **Contact Page - Email** (`src/components/Contact.tsx`)   | info@bisl.co.zm, support@bisl.co.zm | danny.phiri@broadimagessolutions.com |
| **Contact Page - Address** (`src/components/Contact.tsx`) | Plot 123, Cairo Road                | Lusaka, Zambia                       |

### Root Cause

Contact info is **hardcoded** in component files instead of using the centralized `src/constants/navigation.ts` which has the correct data.

### Solution

1. Update all hardcoded contact info to use `CONTACT_INFO` from `navigation.ts`
2. In `MobileMenu.tsx` - replace hardcoded "+260 211 123 456" with dynamic phone from config
3. In `Contact.tsx` - import and use `CONTACT_INFO` constant

---

## 🤖 ISSUE #2: AI-WRITTEN COPY - NEEDS HUMANIZATION

### The Problem

Almost every heading and description sounds generic, corporate, and AI-generated. This hurts BISL's credibility and authenticity.

### Affected Content

#### 1. **Hero Section** (`src/components/Hero.tsx`)

```typescript
// ❌ CURRENT (Too generic)
headline: "Transform Your Business With Intelligent IT Solutions"
subheadline: "From structured cabling to predictive analytics, BISL delivers
enterprise-grade technology solutions that power growth across Zambia's
leading organizations."
```

**Issues**: Buzzwords, corporate startup speak, not specific to BISL

**Better alternatives**:

- "Enterprise IT Built for Zambia"
- "Technology That Works When You Need It"
- "Reliable IT. Real Results."

---

#### 2. **Features Section** (`src/components/Features.tsx`)

| Feature  | Current (AI-Written)                                                                              | Better (Human)                                             |
| -------- | ------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| Security | "Industry-leading security protocols protect your data and infrastructure from evolving threats." | "Your data stays secure. 24/7 monitoring, zero surprises." |
| Support  | "Round-the-clock technical support to keep your systems running smoothly."                        | "3 AM crisis? We're awake. We fix it fast."                |
| Team     | "Certified professionals with deep expertise across all technology domains."                      | "Our team knows Zambia's enterprises inside out."          |
| Quality  | "Rigorous testing and quality control for every project we deliver."                              | "We get it right the first time."                          |

**Section Intro**:

```typescript
// ❌ Current
"We combine technical excellence with exceptional service to deliver results
that consistently exceed expectations."

// ✅ Better
"14 years of experience. Hundreds of successful projects. Your business is in
good hands."
```

---

#### 3. **Services Section** (`src/components/Services.tsx`)

```typescript
// ❌ CURRENT (Cliché title)
"End-to-End Technology Solutions for Modern Enterprises";

// ✅ BETTER (Direct, honest)
"IT Services That Fit Your Business";
```

**Service descriptions** also sound generic:

- Current: "Professional network infrastructure design and installation for reliable connectivity..."
- Better: "We build networks that don't fail."

---

#### 4. **Contact Section** (`src/components/Contact.tsx`)

```typescript
// ❌ CURRENT
heading: "Let's Build Something Great Together"
intro: "Ready to transform your business with innovative IT solutions? Get in
touch with our team for a free consultation."

// ✅ BETTER
heading: "Let's Talk"
// OR: "Ready to Get Started?"
// OR: "Have a Project in Mind?"

intro: "Tell us what you need. We'll tell you what's possible. Then we'll
build it together."
```

---

#### 5. **Projects Section** (`src/components/Projects.tsx`)

```typescript
// ❌ CURRENT
title: "Projects That Make an Impact"
intro: "Explore how we've helped organizations across Zambia transform their
operations with innovative, tailored technology solutions."

// ✅ BETTER
title: "Who We've Worked With"
// OR: "Recent Projects"

intro: "From universities to hospitals to banks - here's what we've built."
```

---

## 📋 FILES THAT NEED UPDATES

### High Priority (Wrong Contact Info)

1. `src/components/Header/MobileMenu.tsx` - Fix phone number
2. `src/components/Contact.tsx` - Fix all contact info (phone, email, address)
3. `src/components/Footer.tsx` - Check if it has contact info too

### Medium Priority (AI Copy)

1. `src/components/Hero.tsx` - Rewrite headline & subheadline
2. `src/constants/hero.ts` - Update HERO_CONFIG text
3. `src/components/Features.tsx` - Humanize feature descriptions
4. `src/components/Services.tsx` - Simplify title and descriptions

### Lower Priority (But Still Needed)

1. `src/components/Contact.tsx` - Section heading & intro
2. `src/components/Projects.tsx` - Title & intro text

---

## 🎯 STRATEGY FOR FIXES

### Option A: Minimal (Quick Fix)

- Just fix the contact info using constants
- Don't rewrite copy (faster but doesn't solve authenticity issue)

### Option B: Comprehensive (Recommended)

- Fix contact info using constants
- Rewrite all copy to be more human and BISL-specific
- Make sure nothing sounds AI-generated
- Create brand voice guidelines for future updates

### Copy Writing Principles for BISL

1. **Be Specific**: Don't say "leading organizations" - name them (universities, hospitals, banks)
2. **Be Honest**: What problems do you ACTUALLY solve? Make it concrete
3. **Be Direct**: Avoid buzzwords like "enterprise-grade", "innovative", "comprehensive"
4. **Be Casual**: You're solving real business problems - use plain language
5. **Show Personality**: What makes BISL different from other IT companies?

---

## SUMMARY

**Two Critical Issues Found**:

1. ❌ **Wrong contact info hardcoded everywhere** - needs to use CONTACT_INFO constant
2. ❌ **Generic AI-written copy throughout** - needs humanization and BISL-specific language

**Priority**: Contact info fixes are critical (wrong phone/email). Copy improvements are important for brand credibility.
