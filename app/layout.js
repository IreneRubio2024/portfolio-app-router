import "./globals.css";

export const viewport = {
  width: "device-width",
  initialScale: 1,
};
export const metadata = {
  title: "Irene Rubio — Frontend Developer",
  description: "Portfolio de Irene Rubio, frontend developer especializada en UX y accesibilidad.",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
}
