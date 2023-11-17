import Image from "next/image"

type HomePageGridItemsProps = {
    title: string
    link: string
    imagePath: string
}

export function HomePageGridItems({
    title,
    link,
    imagePath
}: HomePageGridItemsProps) {
    return(
        <>
        <div className="flex flex-col gap-2 w-full">
            <a href={link} className="relative aspect-video w-full rounded-xl overflow-hidden">
                <Image 
                src={imagePath}
                className="text-vault-link block col-span-4  object-fill rounded-xl"
                alt={title}
                width={1000} // 100%
                height={1000} // 100%
                title={title}
                />
                <div className="absolute bottom-10 left-1/4 w-1/2 text-center bg-vault-menubar text-vault-link rounded-r-full rounded-l-full py-4">
                    <p className="font-vault-title font-title text-bold text-2xl">{title}</p>
                </div>
            </a>
        </div>
        </>
    )
}