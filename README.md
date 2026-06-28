# ChainProfile

ChainProfile is a Next.js application created with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

This repository contains the application source code and standard Next.js project structure.

Repository: [https://github.com/JoyceJudson/ChainProfile.git](https://github.com/JoyceJudson/ChainProfile.git)

## Overview

ChainProfile is built with [Next.js](https://nextjs.org), a React framework for building modern web applications.

The project uses the App Router structure and can be run locally with the standard Next.js development server.

The default page can be edited from `app/page.tsx`.

Changes made during development are reflected automatically in the browser.

## Features

- Built with Next.js
- Created using `create-next-app`
- Uses the App Router project structure
- Supports local development with hot reloading
- Uses `next/font` for font optimization
- Loads the Geist font family through the default Next.js font setup
- Ready for deployment on platforms that support Next.js

## Requirements

Before running the project, make sure you have one of the supported JavaScript package managers installed.

Common options include:

- npm
- Yarn
- pnpm
- Bun

You will also need a compatible Node.js environment for running a Next.js application.

## Getting Started

Clone the repository:

```bash
git clone https://github.com/JoyceJudson/ChainProfile.git
```

Move into the project directory:

```bash
cd ChainProfile
```

Install dependencies with your preferred package manager:

```bash
npm install
```

Or use another supported package manager:

```bash
yarn install
pnpm install
bun install
```

## Running the Development Server

Start the local development server:

```bash
npm run dev
```

You can also use:

```bash
yarn dev
pnpm dev
bun dev
```

After the server starts, open the application in your browser:

[http://localhost:3000](http://localhost:3000)

## Editing the Application

The main page can be edited in:

```text
app/page.tsx
```

When you save changes, the page updates automatically in the browser during development.

## Project Structure

A typical Next.js App Router project includes files and folders such as:

```text
app/
public/
package.json
next.config.*
tsconfig.json
```

The exact structure may change as the application grows.

## Fonts

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to optimize and load fonts.

The default setup loads [Geist](https://vercel.com/font), a font family provided by Vercel.

## Build

Create a production build with:

```bash
npm run build
```

Or with another package manager:
