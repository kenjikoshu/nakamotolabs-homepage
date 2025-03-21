# 中本研究所 | Nakamoto Labs

![Nakamoto Labs Logo](public/icons/NakamotoLogo.svg)

A modern, responsive website for Nakamoto Labs, a research organization dedicated to exploring Bitcoin technology, economics, and its potential to reshape the global financial landscape.

## Overview

Nakamoto Labs (中本研究所) is a Bitcoin-focused research institution that conducts in-depth analysis on the technical, economic, and social aspects of Bitcoin. This repository contains the source code for the organization's official website.

## Features

- Elegant, minimalist design inspired by the Bitcoin whitepaper aesthetic
- Full-screen hero section with the organization's logo and mission statement
- Research section showcasing multimedia content, including:
  - YouTube video analysis and commentary
  - Researcher profiles with expertise highlights
  - Research papers and journal publications
- Experiment section highlighting innovative projects like Satoshis.forex
- Fully responsive layout optimized for mobile, tablet, and desktop devices
- Multilingual support with both English and Chinese typography

## Technology Stack

- **Frontend Framework**: [Next.js 15](https://nextjs.org/) with App Router and React Server Components
- **Styling**: [TailwindCSS](https://tailwindcss.com/) for utility-first styling
- **Language**: [TypeScript](https://www.typescriptlang.org/) for type safety and improved developer experience
- **Performance**: Optimized fonts, images, and assets for fast loading
- **Development**: Turbopack for rapid development experience

## Getting Started

### Prerequisites

- Node.js (v18.17 or later recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/kenjikoshu/nakamotolabs-homepage.git
   cd nakamotolabs-homepage
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Building for Production

To create an optimized production build:

```bash
npm run build
```

To serve the production build locally:

```bash
npm run start
```

## Project Structure

```
nakamotolabs-homepage/
├── public/                 # Static assets
│   ├── fonts/              # Typography files
│   └── icons/              # SVG icons and logos
├── src/                    # Source code
│   └── app/                # Next.js App Router components
│       ├── globals.css     # Global styles
│       ├── layout.tsx      # Root layout component
│       └── page.tsx        # Homepage component
├── .gitignore              # Git ignore file
├── next.config.ts          # Next.js configuration
├── package.json            # Project dependencies
├── postcss.config.mjs      # PostCSS configuration
├── tailwind.config.ts      # TailwindCSS configuration
└── tsconfig.json           # TypeScript configuration
```

## Contributing

Contributions are welcome! If you'd like to contribute to the Nakamoto Labs website, please:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

Copyright © 2024 中本研究所 | Nakamoto Labs. All rights reserved. 