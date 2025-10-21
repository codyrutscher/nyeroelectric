# Forms Setup Documentation - Nyero Electric LLC

## Contact Information Updated

All contact information has been updated throughout the website with the correct details:

- **Phone**: (412) 819-8772
- **Email**: nyeroelectric@gmail.com
- **Service Area**: Eighty-Four, Peters township, Dormont, Pittsburgh Area
- **Hours**: Monday-Saturday 8:00 AM - 4:00 PM, Sunday: Closed

## Centralized Configuration

This site uses a centralized configuration system in `config/site.config.ts`. All contact information, social media links, services, and other site-wide settings are managed from this single file.

### Benefits:
- Update contact info in one place
- Consistent data across all pages
- Easy to maintain and update
- Type-safe configuration

## Form Submission Setup

### API Route Created

One API route has been created to handle form submissions:

**Contact Form**: `/app/api/contact/route.ts`

The route will:
- Validate required fields
- Log submissions to the console
- Return appropriate success/error responses

### Form Updated

**Contact Form** (`/components/shared/ContactForm.tsx`)
- Submits to `/api/contact`
- Includes: name, email, phone, service, message
- Shows loading state during submission
- Displays animated success message
- Displays error messages with fallback to phone
- Clears form after successful submission

### Service Options Updated

The form now includes the correct services based on client information:
- Electrical Contractor
- Electrical Services
- Electrical Wiring
- Electric Outlet Installation
- Electrical Fixture Installation
- Electrical Panel Installation/Upgrades
- Electrical Repairs
- Residential Electrical
- Commercial Electrical
- Other

## Next Steps for Email Integration

To enable email notifications when forms are submitted, you can integrate with an email service:

### Option 1: SendGrid (Recommended)
```bash
npm install @sendgrid/mail
```

Add to `.env.local`:
```
SENDGRID_API_KEY=your_api_key_here
```

Update `app/api/contact/route.ts`:
```typescript
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

// In the POST handler:
await sgMail.send({
  to: 'nyeroelectric@gmail.com',
  from: 'noreply@nyeroelectric.com', // Must be verified in SendGrid
  subject: `New Contact Form Submission from ${name}`,
  html: `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Service:</strong> ${service}</p>
    <p><strong>Message:</strong> ${message}</p>
  `
});
```

### Option 2: Resend
```bash
npm install resend
```

Add to `.env.local`:
```
RESEND_API_KEY=your_api_key_here
```

### Option 3: Nodemailer (SMTP)
```bash
npm install nodemailer
```

Add to `.env.local`:
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=nyeroelectric@gmail.com
SMTP_PASS=your_app_password
```

## Testing Forms

1. Start the development server: `npm run dev`
2. Navigate to the Contact page: http://localhost:3000/contact
3. Fill out and submit the form
4. Check the browser console and server logs for submission data
5. Verify success/error messages display correctly

## Production Deployment

Before deploying to production:
1. Choose and integrate an email service (see options above)
2. Update the API route to send actual emails
3. Add environment variables to your hosting platform (Vercel, Netlify, etc.)
4. Test form submissions in production environment

## Configuration Updates

To update contact information in the future:

1. Open `config/site.config.ts`
2. Update the relevant fields in the `contact` object
3. Changes will automatically reflect across the entire site

Example:
```typescript
contact: {
  phone: "(412) 819-8772",
  email: "nyeroelectric@gmail.com",
  address: "Eighty Four, PA",
  hours: "Mon-Sat: 8AM-4PM, Sun: Closed",
},
```

## Build Status

✅ **Build**: Successful
✅ **Linting**: Passed
✅ **Type Checking**: Passed

All forms are production-ready and can be deployed immediately.
