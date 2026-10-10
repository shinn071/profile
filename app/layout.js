import { Poppins, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata = {
  title: "Sharmaine M. Iglesia | Portfolio",
  description:
    "Meet Sharmaine M. Iglesia, an IT student specializing in Network Design and Management with interests in cybersecurity and web development.",
  openGraph: {
    title: "Sharmaine M. Iglesia | Portfolio",
    description:
      "An IT student exploring networking, cybersecurity, and web development.",
    siteName: "Sharmaine M. Iglesia | Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Sharmaine M. Iglesia | Portfolio",
    description:
      "An IT student exploring networking, cybersecurity, and web development.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${plusJakartaSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
