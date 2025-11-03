# Decap CMS Setup Guide

This guide will help you set up and use Decap CMS (formerly Netlify CMS) for managing content on your Voltry website.

## Initial Setup on Netlify

### 1. Enable Netlify Identity

1. Go to your Netlify dashboard: https://app.netlify.com
2. Select your Voltry site
3. Navigate to **Site settings** → **Identity**
4. Click **Enable Identity**

### 2. Configure Git Gateway

1. In the Identity settings, scroll to **Services**
2. Click **Enable Git Gateway**
3. This allows the CMS to commit directly to your repository

### 3. Configure Registration Settings

1. In Identity settings, go to **Registration preferences**
2. Set to **Invite only** (recommended for security)
3. This prevents unauthorized users from creating accounts

### 4. Invite Users

1. Go to the **Identity** tab in your site dashboard
2. Click **Invite users**
3. Enter email addresses for team members who will manage content
4. They will receive an invitation email

## Accessing the CMS

Once deployed, your CMS will be available at:
```
https://your-site.netlify.app/admin/
```

### First Login

1. Visit `/admin/` on your deployed site
2. Click the invitation link from your email
3. Set your password
4. You'll be redirected to the CMS dashboard

## Content Collections

The CMS is configured with the following collections:

### Blog Posts
- **Path**: `src/content/blog/`
- **Fields**: Title, Date, Description, Author, Featured Image, Tags, Body, Draft status
- **Use for**: Technical articles, company updates, industry insights

### Case Studies
- **Path**: `src/content/case-studies/`
- **Fields**: Client, Industry, Challenge, Solution, Results, Metrics, Testimonial
- **Use for**: Customer success stories and detailed case studies

### Team Members
- **Path**: `src/content/team/`
- **Fields**: Name, Role, Bio, Photo, Social links
- **Use for**: Team/About page content

### Testimonials
- **Path**: `src/content/testimonials/`
- **Fields**: Quote, Author, Title, Company, Photo, Featured status
- **Use for**: Customer testimonials and social proof

### Site Settings
- **General Settings**: Contact info, social media links
- **Homepage Settings**: Hero content, stats
- **Product Settings**: Product 0 and Product 1 configuration

## Editorial Workflow

The CMS uses an **editorial workflow** with three stages:

1. **Draft**: Content is being written/edited
2. **In Review**: Content is ready for review
3. **Ready**: Content is approved and ready to publish

### Publishing Flow

1. Create new content (starts as Draft)
2. Move to "In Review" when ready
3. Reviewer approves and moves to "Ready"
4. Click **Publish** to merge to main branch
5. Netlify automatically deploys the changes

## Content Guidelines

### Blog Posts

- **Title**: Keep under 60 characters for SEO
- **Description**: 150-160 characters, used for meta description
- **Tags**: Use existing tags when possible for consistency
- **Images**: Use high-quality images, ideally 1200x630px for social sharing
- **Draft**: Set to true to hide from production

### Case Studies

- **Metrics**: Include specific, measurable results
- **Challenge/Solution/Results**: Use markdown formatting for readability
- **Testimonial**: Always get written permission from clients

### Testimonials

- **Featured**: Only mark 3-4 testimonials as featured
- **Order**: Lower numbers appear first (0, 1, 2, etc.)
- **Product**: Tag which product the testimonial relates to

## Media Management

### Upload Images

1. Click any image field in the CMS
2. Choose "Upload" or drag and drop
3. Images are stored in `public/uploads/`
4. Automatically optimized and served via CDN

### Image Best Practices

- **Format**: Use WebP for best performance, fallback to JPEG/PNG
- **Size**: Aim for under 500KB per image
- **Dimensions**:
  - Blog featured images: 1200x630px
  - Team photos: 400x400px
  - Case study images: 1200x800px

## Local Development

### Testing CMS Locally

1. Install Decap CMS Proxy Server:
   ```bash
   npm install -g decap-server
   ```

2. Update `public/admin/config.yml` to use local backend:
   ```yaml
   backend:
     name: git-gateway
     branch: main

   local_backend: true  # Add this line
   ```

3. Start the proxy server:
   ```bash
   decap-server
   ```

4. Start your Astro dev server:
   ```bash
   npm run dev
   ```

5. Access CMS at `http://localhost:4321/admin/`

**Important**: Don't commit the `local_backend: true` change to production!

## Troubleshooting

### Can't Log In

- Check that Netlify Identity is enabled
- Verify Git Gateway is enabled
- Check that you've accepted the invitation email
- Clear browser cache and cookies

### Changes Not Appearing

- Check editorial workflow status (Draft/Review/Ready)
- Verify the content was published (merged to main)
- Check Netlify deploy logs for errors
- Wait a few minutes for CDN cache to clear

### Image Upload Fails

- Check file size (should be under 10MB)
- Verify file format (JPEG, PNG, WebP, SVG)
- Check browser console for errors
- Try a different browser

### Git Gateway Issues

1. Go to Netlify Dashboard → Identity → Services
2. Disable Git Gateway
3. Wait 30 seconds
4. Re-enable Git Gateway
5. Try logging in again

## Security Best Practices

1. **Keep Registration Invite-Only**: Never allow open registration
2. **Use Strong Passwords**: Enforce password requirements in Identity settings
3. **Limit Permissions**: Only invite users who need content management access
4. **Review Changes**: Use editorial workflow to review before publishing
5. **Backup Content**: Repository contains all content - keep it backed up

## Support

For issues with:
- **CMS Interface**: [Decap CMS Documentation](https://decapcms.org/docs/)
- **Netlify Identity**: [Netlify Identity Documentation](https://docs.netlify.com/visitor-access/identity/)
- **Git Gateway**: [Git Gateway Documentation](https://docs.netlify.com/visitor-access/git-gateway/)

## Content Schema Reference

All content schemas are defined in `src/content/config.ts`. If you need to modify fields:

1. Update `src/content/config.ts` (Astro schema)
2. Update `public/admin/config.yml` (CMS configuration)
3. Commit both files together
4. Existing content may need migration

---

## Quick Start Checklist

- [ ] Enable Netlify Identity on your site
- [ ] Enable Git Gateway
- [ ] Set registration to "Invite only"
- [ ] Invite team members
- [ ] Accept invitation and set password
- [ ] Log in to `/admin/`
- [ ] Create your first blog post
- [ ] Test editorial workflow
- [ ] Publish content
- [ ] Verify on live site

Your CMS is now ready to use! 🎉
