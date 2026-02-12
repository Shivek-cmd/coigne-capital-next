import Image from "next/image";
import Link from "next/link";

const LOGO_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663201658479/eFrBxfDfdGjOmCXT.png";

export default function Footer() {
  return (
    <footer className="py-12 bg-[#080808] border-t border-[#1a1a1a]" role="contentinfo">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <Image src={LOGO_URL} alt="Coigne Capital" width={140} height={56} className="h-14 w-auto" />
          </div>

          <nav aria-label="Footer navigation" className="flex items-center gap-8">
            <Link href="/#about" className="font-body text-sm text-[#FAFAF5]/50 hover:text-[#C9A962] transition-colors">About</Link>
            <Link href="/#services" className="font-body text-sm text-[#FAFAF5]/50 hover:text-[#C9A962] transition-colors">Services</Link>
            <Link href="/#approach" className="font-body text-sm text-[#FAFAF5]/50 hover:text-[#C9A962] transition-colors">Approach</Link>
            <Link href="/#contact" className="font-body text-sm text-[#FAFAF5]/50 hover:text-[#C9A962] transition-colors">Contact</Link>
          </nav>

          <p className="font-body text-sm text-[#FAFAF5]/40">
            &copy; {new Date().getFullYear()} Coigne Capital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
