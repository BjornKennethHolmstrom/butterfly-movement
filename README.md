# The Butterfly Movement Website

A multilingual website for The Butterfly Movement, focused on addressing global challenges through reflection, collaboration, and meaningful action.

## Overview

The Butterfly Movement website serves as a digital hub for individuals interested in contributing to positive global change. Built with SvelteKit and designed with accessibility and internationalization in mind, the site offers resources and tools for understanding global challenges and taking meaningful action.

## Key Features

- 🌍 Multilingual support (English and Swedish)
- 🎨 Dark/light mode
- 📱 Responsive design
- ♿ Accessibility focused
- 🔄 Interactive visualizations of global challenges
- 🤔 Self-reflection tools
- 👥 Community engagement features

## Tech Stack

- **Framework:** SvelteKit
- **Styling:** TailwindCSS
- **Icons:** Lucide Icons
- **Internationalization:** svelte-i18n
- **Charts/Diagrams:** Recharts, Mermaid
- **Deployment:** Static site generation

## Project Structure

```
src/
├── lib/
│   ├── components/    # Reusable UI components
│   ├── i18n/         # Internationalization setup
│   └── stores/       # Svelte stores for state management
├── routes/
│   ├── [lang]/       # Language-specific routes
│   │   ├── about/    # About section
│   │   ├── issues/   # Global issues section
│   │   ├── reflect/  # Self-reflection tools
│   │   └── children/ # Children involvement section
│   └── api/         # API routes
└── static/          # Static assets
```

## Main Pages

- **Home:** Introduction to the movement and key initiatives
- **About:** Movement history, principles, and vision
- **Global Issues:** Interactive exploration of global challenges
- **Self-Reflection:** Tools for personal reflection and action
- **Involving Children:** Resources for engaging younger generations

## Development

### Prerequisites

- Node.js (v18 or higher)
- npm or pnpm

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/username/butterfly-movement-website.git
   cd butterfly-movement-website
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   pnpm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

4. Build for production:
   ```bash
   npm run build
   # or
   pnpm build
   ```

### Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

### Internationalization

- Translation files are located in `src/lib/i18n/`
- Supported languages: English (en) and Swedish (sv)
- Add new translations through the JSON files in the i18n directory

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Contact Björn Kenneth Holmström at bjorn.kenneth.holmstrom@gmail.com or open an issue in the GitHub repository.
