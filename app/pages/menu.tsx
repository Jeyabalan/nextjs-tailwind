import Link from "next/link";

export default async function MenuPage() {
  const menus = [
    { name: "Home", path: "/" },
    { name: "Posts", path: "/posts" },
    { name: "Comments", path: "/comments" },
  ];

  return (
    <div className="flex flex-col w-1/5 p-5 bg-blue-800 text-white">
      {menus.map((menu: { name: string; path: string }, index: number) => (
        <Link className="p-2" key={index} href={menu.path}>
          {menu.name}
        </Link>
      ))}
    </div>
  );
}
