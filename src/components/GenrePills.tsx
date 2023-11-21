import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "../components/Button"
import { useEffect, useRef, useState } from "react"

type GenrePillProps = {
    genres: any
    selectedGenre: any
    onSelect: (genre: any) => void
}
const TRANSLATE_AMOUNT = 200

export function GenrePills({ genres, selectedGenre, onSelect }: GenrePillProps) {
    const [translate, setTranslate] = useState(0)
    const [isLeftVisible, setIsLeftVisible] = useState(true)
    const [isRightVisible, setIsRightVisible] = useState(true)
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (containerRef.current == null) return

        const observer = new ResizeObserver(entries => {
            const container = entries[0]?.target
            if (container == null) return

            setIsLeftVisible(translate > 0)
            setIsRightVisible(translate + container.clientWidth < container.scrollWidth)
        })

        observer.observe(containerRef.current)

        return () => {
            observer.disconnect()
        }
    }, [genres, translate])

    return (
        <div ref={containerRef} className="overflow-x-hidden relative bg-vault-background">
            <div className="flex bg-vault-background mb-4 whitespace-nowrap gap-3 transition-transform w-[max-content]" style={{ transform: `translateX(-${translate}px)` }}>
                {genres.map(genre => (
                    <Button 
                    key={genre}
                    onClick={() => onSelect(genre)}
                    variant={selectedGenre === genre ? "selectedGenre" : "genres"}
                    className="py-1 px-3 rounded-lg whitespace-nowrap"
                    >
                        {genre}
                    </Button>
                ))}
            </div>
            {isLeftVisible && (
                <div className="absolute bg-vault-background left-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-vault-background from-50% to-transparent w-24 h-full">
                    <Button size="icon" 
                    className="h-full aspect-square w-auto p-1.5" 
                    onClick={() => {
                        setTranslate(translate => {
                            const newTranslate = translate - TRANSLATE_AMOUNT
                            if (newTranslate <= 0) return 0
                            return newTranslate
                        })
                    }}>
                        <ChevronLeft/>
                    </Button>
                </div>
            )}
            {isRightVisible && (
                <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-gradient-to-l from-vault-background from-50% to-transparent w-24 h-full flex justify-end">
                    <Button size="icon" 
                    className="h-full aspect-square w-auto p-1.5"
                    onClick={() => {
                        setTranslate(translate => {
                            if (containerRef.current == null) {
                                return translate
                            }
                            const newTranslate = translate + TRANSLATE_AMOUNT
                            const edge = containerRef.current.scrollWidth
                            const width = containerRef.current.clientWidth
                            if (newTranslate + width >= edge) {
                                return edge - width
                            }
                            return newTranslate
                        })
                    }}
                    >
                        <ChevronRight/>
                    </Button>
                </div>
            )}
        </div>
    )
}