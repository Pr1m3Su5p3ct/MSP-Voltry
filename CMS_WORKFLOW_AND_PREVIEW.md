# CMS Workflow & Preview Setup Guide

## 🎯 Current Status

### ✅ What's CMS-Controllable (Editable at /admin/)

**Homepage (`/`):**
- ✅ Hero section (title, subtitle, CTAs, trust badges)
- ✅ PSP cards (titles, descriptions)
- ✅ Features section (all text)
- ✅ Pricing tiers (all pricing details)
- ✅ Testimonials
- ✅ Stats section
- ✅ Final CTA

**Product 0 Page (`/product-0`):**
- ✅ Hero section
- ✅ Feature cards (titles, descriptions, details)
- ✅ ROI section

**Product 1 Page (`/product-1`):**
- ✅ Hero section
- ✅ Features
- ✅ Federation explainer
- ✅ Comparison table
- ✅ Demo section

**Contact Page (`/contact`):**
- ✅ Hero section
- ✅ Contact information (emails, location, hours)
- ✅ FAQ questions and answers

**Global Settings:**
- ✅ Site information
- ✅ Navigation menu
- ✅ Footer links

### ❌ What's NOT in CMS (Hardcoded)

**Structure & Design (Cannot be in CMS):**
- Visual effects (shimmer, float, glow animations)
- Colors, shadows, spacing
- Icon SVGs
- Form fields and validation
- Layout structure

**Content Still Hardcoded:**
- Form field labels on contact page
- Form validation messages

---

## 🚀 Enable Editorial Workflow + Preview

### Step 1: Re-enable Editorial Workflow

**What it does:**
- Create **Drafts** (not published yet)
- Move to **Review** (ready for approval)
- Publish to **live site**

**Current config:**
```yaml
# Editorial workflow disabled - changes save directly to main branch
# publish_mode: editorial_workflow
```

**To enable, uncomment it:**
```yaml
publish_mode: editorial_workflow
```

### Step 2: Configure Preview

Decap CMS has **two types of preview:**

#### A. **Built-in Preview Pane** (Right side of editor)

This shows a basic preview of your content **inside the CMS** as you type.

**Already enabled** - no configuration needed! When you edit content, you'll see a preview on the right.

#### B. **Deploy Preview** (Full site preview on Netlify)

This creates a **temporary deployment** so you can see the full site with your changes before publishing.

**Setup in Netlify Dashboard:**

1. Go to: **Site Settings** → **Build & Deploy** → **Deploy contexts**

2. Enable **Deploy Previews**:
   ```
   Deploy Previews: ✅ Any pull request against your production branch
   ```

3. **How it works with Editorial Workflow:**
   - You create/edit content in CMS
   - Save as **Draft**
   - Move to **In Review**
   - Decap CMS creates a **Pull Request** in GitHub
   - Netlify automatically builds a **preview URL**
   - Example: `deploy-preview-123--your-site.netlify.app`
   - You review the full site with changes
   - Click **Publish** → merges PR → goes live

---

## 📋 Step-by-Step Workflow

### Scenario: Marketing wants to update homepage hero text

**With Editorial Workflow:**

1. **Login to CMS** (`yoursite.com/admin`)

2. **Edit Content:**
   - Navigate to **Pages** → **Homepage**
   - Edit "Hero Section" → "Main Title"
   - Change text, see instant preview on right

3. **Save as Draft:**
   - Click **Save** (not publish)
   - Status: **Draft** ✍️

4. **Request Review:**
   - Click **Set Status** → **In Review**
   - This creates a Pull Request on GitHub
   - Netlify builds a preview deployment

5. **Preview the Full Site:**
   - Go to **Deploys** tab in Netlify
   - Find the deploy preview
   - Click to see **full site with changes**
   - Share URL with stakeholders

6. **Approve & Publish:**
   - If good → Click **Publish** in CMS
   - If needs changes → Edit draft, saves to same PR
   - Once published → Goes live on main site

**Without Editorial Workflow (Current Setup):**

1. Login to CMS
2. Edit content
3. Click **Publish**
4. Changes go live **immediately**
5. No review step, no preview

---

## 🔧 Enable Preview - Complete Config

### 1. Update config.yml

```yaml
backend:
  name: git-gateway
  branch: main

# ENABLE THIS FOR WORKFLOW:
publish_mode: editorial_workflow

# Preview settings
local_backend: false # Set to true for local development

# Media uploads
media_folder: "public/uploads"
public_folder: "/uploads"
```

### 2. Enable Git Gateway in Netlify

1. **Netlify Dashboard** → Your Site
2. **Site Settings** → **Identity**
3. **Enable Identity** (if not already)
4. **Services** → **Git Gateway** → **Enable**

### 3. Enable Deploy Previews

1. **Site Settings** → **Build & Deploy**
2. **Continuous Deployment** → **Deploy contexts**
3. Enable:
   ```
   ✅ Production branch: main
   ✅ Deploy previews: Any pull request against production branch
   ```

### 4. Invite Your Team

1. **Identity** tab → **Invite users**
2. Send invitations
3. They get email with setup link
4. Can now login to CMS

---

## 🎨 What You'll See

### In CMS Editor (Built-in Preview)

```
┌─────────────────────┬──────────────────────┐
│                     │                      │
│   EDITING PANE      │   PREVIEW PANE       │
│                     │                      │
│   Title: [____]     │   # Hero Title       │
│   Subtitle: [___]   │   Subtitle text      │
│   Button: [_____]   │   [CTA Button]       │
│                     │                      │
│   [Save Draft]      │   (updates live)     │
│                     │                      │
└─────────────────────┴──────────────────────┘
```

### Deploy Preview (Full Site)

```
Your change is in review!

Preview URL: https://deploy-preview-42--voltry.netlify.app

✅ See your changes on the full site
✅ Test all interactions
✅ Share with team for review
✅ Mobile/desktop responsive preview
```

---

## 📊 Comparison: With vs Without Workflow

| Feature | Without Workflow (Current) | With Workflow |
|---------|---------------------------|---------------|
| **Publish Speed** | Instant (risky) | Staged (safer) |
| **Preview** | Only in-editor | Full site preview |
| **Review Process** | None | Draft → Review → Publish |
| **Rollback** | Manual (git revert) | Don't publish the PR |
| **Team Collaboration** | One person publishes | Multiple reviewers |
| **Version Control** | All commits mixed | PRs per content change |

---

## 🚦 Recommendation

**For Solo/Small Team:**
- Keep editorial workflow **disabled** (current setup)
- Changes publish immediately
- Faster workflow
- Use Netlify's manual rollback if needed

**For Marketing Team/Multiple Editors:**
- **Enable** editorial workflow
- Get preview URLs for every change
- Marketing can draft, developers review
- Nothing goes live until approved
- Professional publishing process

---

## 🔍 Testing Preview Locally

Want to test CMS changes locally before pushing?

```bash
# Run Astro dev server
npm run dev

# In another terminal, run Decap CMS proxy
npx decap-server
```

Then:
1. Update config.yml: `local_backend: true`
2. Visit `localhost:4321/admin`
3. Make changes → see them instantly on `localhost:4321`
4. No need to commit to test!

---

## 📝 Summary

**Current State:**
- ✅ CMS controls ALL text content
- ✅ Simple workflow: edit → publish → live
- ❌ No preview before publishing
- ❌ No review process

**To Get Preview + Review:**
1. Uncomment `publish_mode: editorial_workflow` in config.yml
2. Enable Git Gateway in Netlify
3. Enable Deploy Previews in Netlify
4. Commit and push changes

**Result:**
- ✅ Draft → Review → Publish workflow
- ✅ Full site preview URLs
- ✅ Pull request per content change
- ✅ Team can review before live
- ✅ Easy rollback (don't merge PR)

---

## 🎯 Next Steps

1. **Decide:** Do you want workflow?
   - Solo dev → Keep simple (current)
   - Marketing team → Enable workflow

2. **If enabling workflow:**
   - Uncomment line in config.yml
   - Set up Git Gateway
   - Test with a draft post

3. **Train team:**
   - Show them Draft → Review → Publish flow
   - Share this document
   - Do a test run together

**Questions?** Check `CMS_SETUP.md` for troubleshooting.
