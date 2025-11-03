# Contact Form Setup Guide

## 📋 Overview

Your contact form is configured to use **Netlify Forms** and can automatically send submissions to Google Sheets using Zapier.

## ✅ Current Form Status

The form is already properly configured with:
- ✅ Netlify Forms enabled (`data-netlify="true"`)
- ✅ Spam protection (honeypot field)
- ✅ All required fields captured:
  - Name
  - Email
  - Company
  - Facility Size
  - Message
  - Consent checkbox

## 🔗 Setting Up Google Sheets Integration

### Step 1: Deploy Your Site to Netlify

**The form only works after deployment to Netlify.** It won't work on localhost.

1. Your code is already pushed to GitHub
2. Netlify should auto-deploy from your branch
3. Wait for deployment to complete
4. Test the form on your live Netlify URL

### Step 2: Test Form Submission

1. Go to your live site: `https://[your-site].netlify.app/contact`
2. Fill out and submit the form
3. You should see a Netlify success page
4. Go to Netlify Dashboard → Forms → You should see the submission

**Netlify Dashboard Location:**
- Log into Netlify
- Select your site
- Go to **Forms** tab
- You'll see all submissions listed

### Step 3: Create Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it: **"Voltry Contact Form Submissions"**
4. Add these column headers in Row 1:
   - `Timestamp`
   - `Name`
   - `Email`
   - `Company`
   - `Facility Size`
   - `Message`
   - `Consent`

### Step 4: Set Up Zapier (Free Account Works!)

#### 4.1 Create Zapier Account
1. Go to [Zapier.com](https://zapier.com)
2. Sign up for free account (100 tasks/month free)

#### 4.2 Create New Zap
1. Click **"Create Zap"**
2. Name it: **"Netlify Forms to Google Sheets"**

#### 4.3 Set Up Trigger
1. **Choose App:** Search for "Netlify"
2. **Choose Event:** "New Form Submission"
3. **Connect Account:** Sign in to Netlify
4. **Configure Trigger:**
   - Select your Netlify site
   - Select form name: **"contact"**
5. **Test Trigger:**
   - Click "Test trigger"
   - It should find your test submission
   - If none found, submit form again on live site

#### 4.4 Set Up Action
1. **Choose App:** Search for "Google Sheets"
2. **Choose Event:** "Create Spreadsheet Row"
3. **Connect Account:** Sign in to Google
4. **Configure Action:**
   - **Spreadsheet:** Select "Voltry Contact Form Submissions"
   - **Worksheet:** Select "Sheet1"
   - **Map Fields:**
     - Timestamp → Click "Insert Data" → Select "Submitted At"
     - Name → Insert "Name"
     - Email → Insert "Email"
     - Company → Insert "Company"
     - Facility Size → Insert "Facility Size"
     - Message → Insert "Message"
     - Consent → Insert "Consent"

#### 4.5 Test and Publish
1. **Test Action:** Click "Test action"
2. Check Google Sheet - you should see a new row!
3. **Publish Zap:** Turn on the Zap

### Step 5: Test End-to-End

1. Go to your live contact form
2. Fill out with test data
3. Submit
4. Within 1-2 minutes, check Google Sheet
5. New row should appear automatically! 🎉

## 📊 What Happens Now

Every form submission will:
1. ✅ Be captured by Netlify Forms (backup in Netlify dashboard)
2. ✅ Trigger Zapier automation
3. ✅ Add new row to Google Sheets
4. ✅ Include timestamp for easy tracking

## 🔔 Optional: Add Slack/Email Notifications

You can add multiple actions to the same Zap:

### Add Slack Notification
1. In your Zap, click **"+"** to add another action
2. Choose **Slack**
3. Event: "Send Channel Message"
4. Configure:
   - Channel: #sales (or wherever you want)
   - Message:
   ```
   🎯 New Contact Form Submission!

   Name: [Name]
   Email: [Email]
   Company: [Company]
   Facility Size: [Facility Size]
   Message: [Message]
   ```

### Add Email Notification
1. In your Zap, click **"+"** to add another action
2. Choose **Email by Zapier**
3. Event: "Send Outbound Email"
4. Configure:
   - To: your-sales-email@voltry.com
   - Subject: "New Contact Form: [Name] from [Company]"
   - Body: Include all form fields

## 🐛 Troubleshooting

### Form submissions not appearing in Netlify?
- Make sure site is deployed (not localhost)
- Check Netlify build logs for form detection
- Netlify should say "1 form detected" during build

### Zapier not triggering?
- Make sure Zap is turned ON (published)
- Check you selected correct Netlify site and form name
- Try submitting form again
- Check Zapier Task History for errors

### Google Sheet not updating?
- Check Zapier Task History - did action succeed?
- Verify Google Sheets permissions in Zapier
- Make sure column headers match exactly

## 📈 Upgrade Options

**Free Tier Limits:**
- Netlify Forms: 100 submissions/month (free)
- Zapier Free: 100 tasks/month
- Google Sheets: Unlimited

**If you exceed limits:**
- Netlify Forms: $19/mo for 1,000 submissions
- Zapier: $19.99/mo for 750 tasks
- Or switch to custom API integration (no limits!)

## 🚀 Next Steps

After you have this working, you can:
1. Add Airtable integration (better than Sheets for CRM)
2. Connect to HubSpot CRM
3. Set up email automation
4. Add SMS notifications via Twilio
5. Custom API integration (I can build this!)

## 📞 Need Help?

If you run into issues:
1. Check Netlify Forms tab - submissions appearing?
2. Check Zapier Task History - what's the error?
3. Let me know where it's failing and I'll help debug!

---

**Current Status:** ✅ Form is ready for Zapier connection. Just deploy to Netlify and follow steps above!
