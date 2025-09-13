import { use } from "react";
import Navbar from "../components/Navbar";
import { SessionProvider } from "next-auth/react";

export default function layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
      <main className="font-work-sans">
          <Navbar />
        {children}
      </main>
  );
}