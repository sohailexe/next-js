import Navigation from "./components/Navigation";
import Logo from "./components/Logo";
export const metadata = {
  title: "Sohail Faiz",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Logo />
        <Navigation />
        <main>{children}</main>
        <footer>Copy Right by Sohail Faiz</footer>
      </body>
    </html>
  );
}
