# Capstone Virtual Teaching Assistant (VTA)

This project is a Virtual Teaching Assistant (VTA) web application developed by Julia Kotovich. It is built with Next.js and provides an interactive chat interface for students and educators, as well as tools for feedback, settings, and training data management.

## Features

- **Chat with VTA:** Ask questions and receive instant answers from the AI assistant.
- **Feedback:** Provide feedback on the assistant's responses (like/dislike).
- **Settings:** Customize your experience and manage preferences.
- **Training Data Management:** Upload and manage training data to fine-tune the assistant.
- **Export Chat:** Download your chat history as a PDF file.

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm (v9 or higher)

### Installation
1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd VTA-FE-main
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure
- `app/` — Main application folder (pages, components, context, hooks, types)
- `app/components/` — React components (MainContent, SideBar, Modals, etc.)
- `app/Context/` — React context for chat state management
- `app/hooks/` — Custom React hooks
- `app/types/` — TypeScript type definitions
- `public/` — Static assets
- `README.md` — Project documentation

## Technologies Used
- Next.js 14
- React 18
- Tailwind CSS
- html2pdf.js (for PDF export)

## Author
Developed by **Julia Kotovich**

---

If you have any questions or suggestions, feel free to contact the author or open an issue in the repository.
