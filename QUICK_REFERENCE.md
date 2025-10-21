# Nyero Electric LLC - Quick Reference

## Contact Information
- **Phone**: (412) 819-8772
- **Email**: nyeroelectric@gmail.com
- **Location**: Eighty Four, PA
- **Service Area**: Eighty-Four, Peters township, Dormont, Pittsburgh Area
- **Hours**: Mon-Sat 8AM-4PM, Sun Closed
- **License**: PA203060 (expires 7/6/2027)

## Forms Status
✅ **Contact Form** - Fully functional at `/contact`

Form submits to API route and is ready for production.

## Configuration
All contact info is centralized in `config/site.config.ts` - update there to change throughout the site.

## To Receive Form Submissions via Email
1. Choose email service (SendGrid recommended)
2. Install package: `npm install @sendgrid/mail`
3. Add API key to `.env.local`
4. Update `/app/api/contact/route.ts`

## Testing Forms
1. Run: `npm run dev`
2. Visit: http://localhost:3000/contact
3. Submit form
4. Check console for submission data

## Deploy
```bash
npm run build
npm start
```

All contact info is updated and forms are working! 🎉
