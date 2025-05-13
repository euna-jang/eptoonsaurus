import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Image
        src="/ept.svg"
        alt="Eptoon Logo"
        width={150}
        height={50}
        priority
      />
      <nav>
      <ul>
        <li>About</li>
        <li>Shop</li>
        <li>Eptoonsaurus</li>
        <li>Articles</li>
      </ul>
      </nav>
    </div>
  );
}
