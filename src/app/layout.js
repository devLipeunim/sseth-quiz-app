import "./globals.css";

// import Navbar from "@/components/navbar/Navbar";
// import Footer from "@/components/footer/Footer";
// import { ThemeProvider } from "@/context/ThemeContext";
export const metadata = {
  title: "Quiz App | Home",
  description: "Created by SSETH",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link
        rel="apple-touch-icon"
        sizes="192x192"
        href="/images/gcc_og_logo.jpg"
      />
      <link
        rel="icon"
        type="image/jpeg"
        sizes="512x512"
        href="/images/gcc_og_logo.jpg"
      />
      <link
        rel="icon"
        type="image/jpeg"
        sizes="192x192"
        href="/images/Logo.jpg"
      />
      <link
        rel="icon"
        type="image/jpeg"
        sizes="32x32"
        href="/images/Logo.jpg"
      />
      <link
        rel="icon"
        type="image/jpeg"
        sizes="16x16"
        href="/images/Logo.jpg"
      />
      <link rel="shortcut icon" type="image/jpeg" href="/images/Logo.jpg" />
      {/* <link
        rel="stylesheet"
        href="https://breezeui.netlify.app/styles/breezeUI.css"
      /> */}

      <body>{children}</body>
    </html>
  );
}
