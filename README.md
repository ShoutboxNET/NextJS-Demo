![Header](https://github.com/user-attachments/assets/52d6ff91-3425-4e31-bff3-426bbb6eb113)

<p align="center">
  <a href="https://docs.shoutbox.net/quickstart" style="font-size: 2em; text-decoration: underline; color: #0366d6;">Quickstart Docs</a>
</p>

<p align="center" style="font-size: 1.5em;">
  <b>Language & Framework guides</b>
</p>

<p align="center">
  <a href="https://docs.shoutbox.net/examples/nextjs-lib">Next.js</a> -
  <a href="https://docs.shoutbox.net/examples/typescript">Typescript</a> -
  <a href="https://docs.shoutbox.net/examples/javascript-lib">Javascript</a> -
  <a href="https://docs.shoutbox.net/examples/python-lib">Python</a> -
  <a href="https://docs.shoutbox.net/examples/php-lib">PHP</a> -
  <a href="https://docs.shoutbox.net/examples/php-laravel-lib">Laravel</a> -
  <a href="https://docs.shoutbox.net/examples/go">Go</a>
</p>

# Shoutbox.net Developer API - Next.js React Email Example

This is a Next.js application demonstrating how to use Shoutbox.net's Developer API to send transactional emails at scale. This example specifically showcases React Email components integration with Shoutbox for beautiful, responsive email templates.

## Setup

For this integration to work, you will need an <a href="https://hub.shoutbox.net" target="_blank">account</a> on <a href="https://shoutbox.net" target="_blank">Shoutbox.net</a>. You can create and copy the required API key on the <a href="https://hub.shoutbox.net/app/dashboard" target="_blank">Shoutbox.net dashboard</a>!

## Getting Started

### Installation

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

### Environment Variables

Create a `.env.local` file in the root directory and add your Shoutbox API key:

```bash
SHOUTBOX_API_KEY=your-api-key-here
```

### Running the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

This example includes:

- **Signup Form**: A complete user signup flow with email verification
- **React Email Templates**: Beautiful, responsive email templates using React components
- **API Routes**: Next.js API routes for handling email sending
- **Type Safety**: Full TypeScript support for better developer experience

## React Email Integration

This project uses React Email components to create dynamic, reusable email templates. Here's an example:

```tsx
import { Html, Body, Container, Text, Button, Section } from "@react-email/components";

interface WelcomeEmailProps {
  name: string;
  verificationUrl: string;
}

export function WelcomeEmail({ name, verificationUrl }: WelcomeEmailProps) {
  return (
    <Html>
      <Body style={{ backgroundColor: "#f6f9fc", fontFamily: "Arial, sans-serif" }}>
        <Container style={{ backgroundColor: "#ffffff", padding: "45px" }}>
          <Section>
            <Text style={{ fontSize: "24px", fontWeight: "bold" }}>
              Welcome to Shoutbox, {name}!
            </Text>
            <Text style={{ fontSize: "16px", color: "#525252" }}>
              Thanks for signing up. Please verify your email address to get started.
            </Text>
            <Button
              href={verificationUrl}
              style={{
                backgroundColor: "#0366d6",
                color: "#ffffff",
                padding: "12px 24px",
                borderRadius: "6px",
                textDecoration: "none",
                display: "inline-block",
                marginTop: "16px"
              }}
            >
              Verify Email
            </Button>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
```

## API Usage

### Sending an Email

Create an API route in `app/api/send-email/route.ts`:

```typescript
import { NextResponse } from "next/server";
import Shoutbox from "shoutboxnet";
import { WelcomeEmail } from "@/emails/welcome";

const client = new Shoutbox(process.env.SHOUTBOX_API_KEY!);

export async function POST(request: Request) {
  const { email, name } = await request.json();

  try {
    await client.sendEmail({
      from: "welcome@example.com",
      to: email,
      subject: "Welcome to Shoutbox!",
      react: <WelcomeEmail name={name} verificationUrl="https://example.com/verify" />,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
```

## Project Structure

```
├── app/
│   ├── api/
│   │   └── send-email/
│   │       └── route.ts      # API route for sending emails
│   ├── page.tsx              # Main signup page
│   └── layout.tsx            # Root layout
├── emails/
│   └── welcome.tsx           # React Email template
├── components/
│   └── signup-form.tsx       # Signup form component
└── public/
    └── ...                   # Static assets
```

## Learn More

To learn more about the technologies used in this project:

- [Shoutbox.net Documentation](https://docs.shoutbox.net) - Learn about Shoutbox features and API
- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features
- [React Email](https://react.email) - Learn about creating emails with React

## Deploy

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Support

If you need help with Shoutbox integration:
- Visit our [documentation](https://docs.shoutbox.net)
- Contact support at support@shoutbox.net
- Join our [Discord community](https://discord.gg/shoutbox)

## License

This example is licensed under the MIT License.