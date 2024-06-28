import { Sora, Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Layouts from "./commons/components/Layouts";
import SpotifyTop from "./commons/components/elements/SpotifyTop";
import TopLoader from "./commons/components/elements/TopLoader";
import ChatBubble from "./commons/components/elements/ChatBubble";
import NextTopLoader from "nextjs-toploader";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: {
    template: "%s | Ali",
    default: "Ali",
  },
  description: "Personal website, portfolio, roadmap, and more",
  keywords: [
    "Ahmadali",
    "Portfolio",
    "Ahmadali Portfolio",
    "Ali",
    "Ali Portfolio",
    "Ahmadali my id",
    "Ahmadali Ali Portfolio",
    "ali",
  ],
  authors: [{ name: "Ahmad" }, { name: "Ali", url: "https://Ahmadali.my.id" }],
  creator: "Ahmad Ali",
  openGraph: {
    title: "Ahmad Ali",
    description: "Personal website, portfolio, roadmap, and more of Ahmad Ali",
    url: "https://Ahmadali.my.id/",
    siteName: "Ahmad Ali",
    images: [
      {
        url: "https://res.cloudinary.com/dpkmhts3q/image/upload/v1719121598/Desain_tanpa_judul_19_gbf5jo.png",
        width: 1200,
        height: 630,
        alt: "Ahmad Ali",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light">
      <body className={sora.className}>
        <Providers>
          <SpotifyTop />
          {/* <TopLoader /> */}
          <NextTopLoader />
          <ChatBubble />
          <Layouts>{children}</Layouts>
        </Providers>
      </body>
    </html>
  );
}
