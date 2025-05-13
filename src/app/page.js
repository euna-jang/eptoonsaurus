import Image from "next/image";

export const metadata = {
  title: '일상의웹툰사우르스',
  description: '일상의웹툰사우르스에 오신 것을 환영합니다',
  openGraph: {
    title: '일상의웹툰사우르스',
    description: '당신의 일상을 만화로 🦖',
    images: [
      {
        url: '/ept.svg',
        width: 150,
        height: 50,
        alt: 'Eptoon Logo',
      },
    ],
  },
};

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
