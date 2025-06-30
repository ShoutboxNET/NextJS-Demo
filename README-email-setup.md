# React Email with Next.js 15.1 and Shoutbox

This project demonstrates how to send emails using React Email components with Next.js 15.1 and the Shoutbox email service.

## Features

- Next.js 15.1 with App Router
- React Email components for creating beautiful email templates
- Shoutbox integration for reliable email delivery
- Environment variables for secure API key management
- TypeScript support
- Tailwind CSS for styling

## Setup Instructions

1. **Install dependencies** (already done):
   ```bash
   npm install
   ```

2. **Configure environment variables**:
   - Open the `.env` file
   - Replace `your-shoutbox-api-key-here` with your actual Shoutbox API key
   - Update `EMAIL_FROM` and `EMAIL_TO` with appropriate email addresses

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Test the email functionality**:
   - Open http://localhost:3000
   - Fill in the name and email fields
   - Click "Send Email"
   - Check the configured inbox for the welcome email

## Project Structure

- `/app/emails/welcome-email.tsx` - React Email template component
- `/app/api/send-email/route.ts` - API route for sending emails
- `/app/page.tsx` - Frontend form for triggering email sends
- `/.env` - Environment variables (not committed to git)

## How It Works

1. The user fills out a form with their name and email
2. The form submits a POST request to `/api/send-email`
3. The API route uses the Shoutbox client to send an email
4. The email is rendered from the React Email component template
5. Shoutbox handles the email delivery

## Environment Variables

- `SHOUTBOX_API_KEY` - Your Shoutbox API key (required)
- `EMAIL_FROM` - Sender email address
- `EMAIL_TO` - Recipient email address (defaults to user input)

## Getting a Shoutbox API Key

1. Visit https://shoutbox.net
2. Sign up for an account
3. Generate an API key from your dashboard
4. Add it to your `.env` file

## Dependencies

- `next@15.1.6` - Next.js framework
- `@react-email/components` - React Email component library
- `@react-email/render` - Email rendering engine
- `shoutboxnet` - Shoutbox Node.js SDK