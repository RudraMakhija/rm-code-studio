import { LinkedinIcon } from "lucide-react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-4 px-6 text-sm flex items-center justify-between">
      <span className="font-medium">Built by Rudra Makhija</span>
      <Link
        href="https://www.linkedin.com/in/rudramakhija/"
        target="_blank"
        className="flex items-center gap-2 text-gray-300 hover:text-white transition"
      >
        <LinkedinIcon className="size-4" />
        <span>Connect on LinkedIn</span>
      </Link>
    </footer>
  );
}
export default Footer;
