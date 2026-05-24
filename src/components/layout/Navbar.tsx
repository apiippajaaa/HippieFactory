import Link from "next/link";

const links = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Products",
    href: "/product",
  },
  {
    label: "Become Reseller",
    href: "/become-reseller",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-semibold tracking-[0.2em]">HIPPIE FACTORY</span>
        </Link>

        <nav className="flex items-center gap-8 text-sm text-white/70">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
