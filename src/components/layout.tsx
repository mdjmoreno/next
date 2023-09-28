
import NavBar from "./NavBar";
import { useFont } from '../hooks/useFont';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [fontClassName] = useFont();
  return (
    <main className={fontClassName}>
      <NavBar />
      {children}
    </main>
  );
}
