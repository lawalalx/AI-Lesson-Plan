import Image from "next/image";
import Link from "next/link";

export default function LogoButton() {
  return (
    <Link href="/">
      <Image src="/logo.png" width={120} height={120} alt="Logo" />
    </Link>
  );
}
