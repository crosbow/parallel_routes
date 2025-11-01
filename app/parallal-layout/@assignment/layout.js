import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
      <nav className="flex gap-5 text-gray-300">
        <Link href="/parallal-layout/one">One</Link>
        <Link href="/parallal-layout/two">Two</Link>
      </nav>
      <div>{children}</div>
    </>
  );
}
