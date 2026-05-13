# Grovegrid

![Grovegrid Banner](public/new_cover.png)

Grovegrid is a high-performance landing page for a tech startup, built with a focus on visual impact, technical precision, and modern web standards.

## Core Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Email Service**: [Resend](https://resend.com/)

## Design Philosophy

Grovegrid leverages a modern aesthetic, characterized by:
- **Green Accents**: A signature green color palette.
- **Interactive Layers**: Dynamic grid systems to create depth.
- **Typography**: High-contrast headings paired with modern typefaces.
- **Micro-Interactions**: Smooth hover states and reveal animations.

## Key Features

- **Education Tech**: Complete digitalization systems for schools and coaching centers.
- **Media Portals**: High-performance newspaper and blogging platforms.
- **Inventory Solutions**: Intelligent management systems for pharmacies and local retail.
- **E-commerce Engines**: Professional online stores.
- **Responsive Architecture**: Fully optimized for mobile, tablet, and ultra-wide displays.

## Contact Form Integration

The contact form is powered by **Next.js Server Actions** and **Resend**. It supports:
- **Multiple Recipients**: Send notifications to multiple emails simultaneously.
- **Server-Side Security**: API keys are never exposed to the client.

### Environment Variables

To make the contact form work, create a `.env.local` file:

```env
RESEND_API_KEY=re_your_api_key
CONTACT_RECIPIENT_EMAIL=your_email@example.com
```

> [!NOTE]
> For multiple recipients, use a comma-separated list: `email1@example.com, email2@example.com`

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm / yarn / pnpm

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Grovegrid/grovegrid-landing.git
   cd grovegrid
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## Project Structure

```text
src/
├── app/            # Next.js App Router (Layouts & Pages)
├── components/     # Modular React components
└── lib/            # Utility functions and shared logic
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<p align="center">
  Built with precision by <strong>Grovegrid Engineering</strong>
</p>
