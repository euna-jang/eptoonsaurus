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
        <li className="list-none">About</li>
        <li className="list-none">Shop</li>
        <li className="list-none">Contact</li>
        <li className="list-none">Eptoonsaurus</li>
        <li className="list-none">Articles</li>
      </ul>
      </nav>
      <footer>
        <p>Copyright 2025 Eptoon. All rights reserved.</p>
      </footer>
    </div>
  );
}
