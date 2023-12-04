import { ArrowLeft, Bell, Menu, Search, User } from "lucide-react"
import { Button } from "@/components/Button"
import { useState } from "react"
import { useSidebarContext } from "@/contexts/SidebarContext"
// import { Link } from "react-router-dom"

export function PageHeader() {
    const [showFullWidthSearch, setShowFullWidthSearch] = useState(false)
    return (
        <div className="flex gap-5 lg:gap-20 justify-between bg-vault-menubar pt-2 pb-2 px-2">
            <PageHeaderFirstSection hidden={false}/>
            <form className={`gap-4 flex-grow justify-center" ${showFullWidthSearch ? "flex" : "hidden md:flex"}`}>
                {showFullWidthSearch && (
                <Button onClick={() => setShowFullWidthSearch(false)} size="icon">
                    <ArrowLeft/>
                </Button>
                )}
                <div className="flex flex-grow max-w-[100%]">
                    <input
                        type="text"
                        placeholder="Search The Vinyl Vault"
                        className="w-full bg-vault-background text-vault-text p-2 rounded-l-full  border py-1 px-4 text-lg border-vault-link focus:bg-white focus:text-black outline-none"
                    />
                <Button size="icon" className="py-2 px-4 rounded-r-full rounded-l-none border-vault-link  border border-l-0 flex-shrink-0">
                    <Search/>
                </Button>
                </div>
                
            </form>
            <div className={`flex-shrink-0 md:gap-2 ${showFullWidthSearch ? "hidden" : "flex"}`}>
                <Button onClick={() => setShowFullWidthSearch(true)} size="icon" className="md:hidden">
                    <Search/>
                </Button>
                <Button size="icon">
                    <Bell/>
                </Button>
                <Button size="icon">
                    <User/>
                </Button>
            </div>
        </div>
    )
}

type PageHeaderFirstSectionProps = {
    hidden: boolean
}

export function PageHeaderFirstSection({ hidden }: PageHeaderFirstSectionProps) {
    const { toggleSidebar } = useSidebarContext()
    return (
        <div className={`gap-2 items-center flex-shrink-0 bg-vault-menubar  ${hidden ? "hidden" : "flex"}`}>
                <Button onClick={toggleSidebar} size="icon">
                    <Menu/>
                </Button>
                <a href="/" className="text-vault-title italic text-lg md:text-4xl font-title">The Vinyl Vault Show</a>
            </div>
    )
}