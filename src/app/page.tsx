import PageTitle from "@/components/PageTitle";
import Image from "next/image";

const ARTICLES = [
  {
    title: "Trust;",
    imageUrl: "/images/home/trust.png",
  },
  {
    title: "Understanding your business;",
    imageUrl: "/images/home/understand.png",
  },
  {
    title: "Solutions; and",
    imageUrl: "/images/home/solution.png",
  },
  {
    title: "In your best interest.",
    imageUrl: "/images/home/interest.png",
  },
];

export default function Home() {
  return (
    <main>
      <PageTitle title="Welcome To CSP Legal LLC" />
      {ARTICLES.map((item, index) => (
        <div
          key={index}
          className="flex justify-between items-center mb-[60px] last:mb-0"
        >
          <div className="flex gap-5 h-fit">
            <Image
              alt=""
              src={"/images/home/bullet.png"}
              width={30}
              height={30}
            />
            <p className="text-primary text-xl leading-[22px] font-semibold">
              {item.title}
            </p>
          </div>
          <div className="md-l:w-[384px]">
            <div className="relative pt-[50%]">
              <Image fill alt={item.title} src={item.imageUrl} />
            </div>
          </div>
        </div>
      ))}
    </main>
  );
}
