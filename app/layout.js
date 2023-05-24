import head from "../app/head.jsx";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {head}
      <body>{children}</body>
    </html>
  )
}
