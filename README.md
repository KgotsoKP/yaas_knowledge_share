# Collaborative Teaching Hub by YAAS | YOLit Academy of Arts and Sciences

Welcome to the Collaborative Teaching Hub – a Next.js web app by YAAS | YOLit Academy, empowering educators to collaborate and elevate teaching. Share knowledge, methods, and resources, fostering a vibrant community of learning.

**Key Features:**
- **Interactive Collaboration:** Seamlessly share innovative teaching strategies.
- **Resource Sharing:** Easily upload, organize, and share lesson plans and materials.
- **Community-driven Q&A:** Engage in meaningful discussions.
- **Personalized Profiles:** Showcase your expertise and contributions.
- **Responsive Design:** Ensures a smooth user experience on all devices.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## ESLint and Prettier Setup (Optional)

To enhance code quality and maintain a consistent coding style, you can set up ESLint and Prettier in your development environment. Follow these steps:

1. **Install Required Packages:**
   Ensure you have the necessary npm packages installed. Run the following command to install them:

   ```bash
   npm install eslint-config-prettier@^9.1.0 eslint-config-standard@^17.1.0 eslint-plugin-tailwindcss@^3.14.0 --save-dev

## Configure VSCode Settings:

Add the following settings to your project's `.vscode/settings.json` file. Create the file if it doesn't exist:

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.addMissingImports": "explicit"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "editor.formatOnPaste": true
}


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
