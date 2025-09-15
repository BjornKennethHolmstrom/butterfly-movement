# The Butterfly Movement Website

An experimental platform exploring how individual reflection connects to collective action on global challenges through systemic thinking.

## Project Status

This is currently an experimental project - a digital exploration of ideas, tools, and approaches for addressing interconnected global challenges through integrative thinking. Rather than representing an established movement, it serves as an invitation to consider what such a movement might look like.

The project emerged in 2024 as part of broader explorations into transformative politics and consciousness development, serving as a testing ground for concepts that bridge personal development with systems thinking.

## Overview

The website serves as a digital laboratory for individuals interested in exploring global challenges through a lens that emphasizes interconnection and integration. Built with SvelteKit and designed with accessibility and internationalization in mind, it offers tools for understanding systemic challenges and reflecting on personal contribution.

## Key Features

- Multilingual support (English and Swedish)
- Dark/light mode
- Responsive design
- Accessibility focused
- Interactive visualizations of interconnected global challenges
- Self-reflection tools for discovering personal contribution paths
- Experimental approaches to engaging children in systems thinking

## Tech Stack

- **Framework:** SvelteKit
- **Styling:** TailwindCSS
- **Icons:** Lucide Icons
- **Internationalization:** svelte-i18n
- **Charts/Diagrams:** Mermaid
- **Deployment:** GitHub Pages (static site generation)

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

- **Home:** Introduction to the experimental platform and key concepts
- **About:** Project origins, principles, and experimental vision
- **Global Issues:** Interactive exploration of 10 interconnected global challenges
- **Self-Reflection:** Tools for personal reflection and discovering contribution paths
- **Involving Children:** Experimental approaches to engaging younger generations in systems thinking

## Development Philosophy

This project serves as a testing ground for ideas about:
- How individual reflection can connect to collective action
- Whether systemic thinking tools can be made accessible without academic complexity
- What role technology might play in fostering integrative consciousness
- How to bridge personal development with awareness of global challenges

Results from this experiment may inform future projects, but the primary value lies in the exploration itself.

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

This is an open exploration. Contributions welcome from those interested in:
- Improving accessibility and user experience
- Testing and refining the self-reflection tools
- Expanding language support
- Developing better visualizations of interconnected challenges
- Providing feedback on the experimental approaches

### Internationalization

- Translation files are located in `src/lib/i18n/`
- Supported languages: English (en) and Swedish (sv)
- Add new translations through the JSON files in the i18n directory

### Current Community Status

Community features (Discord integration) are currently disabled while we assess interest and develop appropriate moderation frameworks. The focus remains on developing and testing the conceptual tools and approaches.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Contact Björn Kenneth Holmström at bjorn.kenneth.holmstrom@gmail.com or open an issue in the GitHub repository.
