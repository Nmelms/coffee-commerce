This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

Issues encountered:
Hosting front and backend separately locally.
basic understanding of client vs server components
using async await only on server components.
creating single and dynamic api endpoints and pages.
updating state on a server component.
First attempted passing in a client component into a server component (the add to cart button) ending up using the cart rest api
state did not presist when navigating to a from the page.
creating a nonce token
decided on creating my own post api routes and trying to use primsa
attemp to connect with prisma but will overwirte database
statred using the rest api propley with a nonce
working on passing cart token
eventually was able to understand how to save the cart token
made a post request inside a post request and saved the cart toek in local storage
