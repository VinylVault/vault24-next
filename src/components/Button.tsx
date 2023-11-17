import { VariantProps, cva } from "class-variance-authority"
import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

const buttonStyles = cva(["transition-colors"],{
    variants:{
        variant: {
            default: ["hover:bg-vault-link", "hover:text-vault-background", "text-vault-link"],
            genres: ["hover:bg-vault-genre", "hover:text-vault-background", "text-vault-background", "bg-vault-genreBackground", "italic", "font-bold", "font-styleGenre", "text-md"],
            selectedGenre: ["bg-vault-genre", "text-vault-background", "hover:text-vault-background", "hover:bg-vault-genreBackground", "italic", "font-bold", "font-styleGenre", "text-md"]
        },
        size: {
            default: ["rounded", "p-2"],
            icon: ["rounded-full", "w-15", "h-15", "flex", "items-center", "justify-center", "p-3", "text-vault-link"]
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
})

type ButtonProps = VariantProps<typeof buttonStyles> & ComponentProps<"button">

export function Button({variant, size, className, ...props }: ButtonProps) {
    return <button 
    {...props} 
    className={twMerge(buttonStyles({ variant, size }), className)}/>
}