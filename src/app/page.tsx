import Image from 'next/image'
import { HomePageGridItems } from "@/components/HomePageGridItems"
import { homepageItems} from "./data/homepage"

export default function Home() {
  return (
    <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mr-4">
          {homepageItems.map(item => (
                <HomePageGridItems
                  key={item.title}
                  title={item.title}
                  link={item.link}
                  imagePath={item.imagePath}
                />
          ))}
        </div>
  )
}
