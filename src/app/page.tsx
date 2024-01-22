import Link from "next/link";

export default function Home() {
  return (
    <main className="main">
      <div>
        <h2>Welcome to Simplilearn</h2>
      </div>
      <Link href="/about">About</Link>
    </main>
  );
}
