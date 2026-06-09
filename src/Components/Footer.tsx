import InstagramIcon  from "./InstagramIcon";

export default function Footer() {
  return (
    <footer className="mt-auto bg-stone-800 px-4 py-8 md:px-8 md:py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8">

        {/* Logo */}
        <img
          src="/images/logo-white.png"
          alt="AnyMall"
          className="h-10 w-auto"
        />

        {/* Divider */}
        <div className="w-full border-t border-stone-600 pt-8">

          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

            {/* Links */}
            <nav className="flex flex-col gap-4 text-xs font-medium text-white md:flex-row md:gap-6">
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>

              <a href="#" className="hover:underline">
                Contact
              </a>
            </nav>

            {/* Social + Copyright */}
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-4">

              <a
                href="https://www.instagram.com/anymall.official"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-white hover:opacity-80 transition-opacity"
              >
                <InstagramIcon/>
              </a>

              <p className="text-[11px] text-white">
                © 2026 AnyMall. All rights reserved.
              </p>

            </div>

          </div>

        </div>

      </div>
    </footer>
  );
}