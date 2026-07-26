import Navbar from './Navbar';

// =========================================================
// Purpose
// =========================================================
// This file contains a shared page layout wrapper.
// It keeps spacing, navigation, and page width consistent.
//
// =========================================================
// What was built
// =========================================================
// Step 1: Defined shared container structure with consistent max-width and padding.
// Step 2: Integrated the top Navbar header navigation component.
// Step 3: Created a flexbox main content area that expands gracefully.
// Step 4: Rendered dynamic children components passed from individual pages.
//
// =========================================================
// Data in and data out
// =========================================================
// Data in: Page content from HomePage, PlayPage, and other pages.
// Data out: A consistent page frame.
//
// =========================================================
// Connects to
// =========================================================
// - src/App.jsx
// - src/components/layout/Navbar.jsx
// - src/pages/*
//
// =========================================================
// Avoid
// =========================================================
// Do not put riddle or user preference logic here.
// Do not make this layout so complex that pages are hard to read.
//
// =========================================================
// Beginner checklist
// =========================================================
// [x] Does this file handle layout only?
// [x] Can pages stay focused on their own content?
// [x] Is repeated page structure removed from individual pages?

export default function PageLayout({
  children,
  showNavbar = true,
  maxWidth = '1200px',
  style = {},
  ...props
}) {
  const containerStyle = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#f9fafb',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    color: '#111827',
  };

  const mainStyle = {
    flex: '1 0 auto',
    width: '100%',
    maxWidth: maxWidth,
    margin: '0 auto',
    padding: '24px 16px',
    boxSizing: 'border-box',
    ...style,
  };

  const footerStyle = {
    padding: '16px',
    textAlign: 'center',
    fontSize: '14px',
    color: '#6b7280',
    borderTop: '1px solid #e5e7eb',
    backgroundColor: '#ffffff',
  };

  return (
    <div style={containerStyle} {...props}>
      {/* Step 2: Top Navigation */}
      {showNavbar && <Navbar />}

      {/* Step 3 & 4: Main Page Shell */}
      <main style={mainStyle}>
        {children}
      </main>

      {/* Shared Footer */}
      <footer style={footerStyle}>
        <p style={{ margin: 0 }}>© {new Date().getFullYear()} Riddle AI Learning App</p>
      </footer>
    </div>
  );
}