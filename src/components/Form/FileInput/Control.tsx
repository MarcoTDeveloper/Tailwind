'use client'

import { ChangeEvent, ComponentProps } from "react"
import { useFileInput } from "./Root"

export type ControlProps = ComponentProps<'input'>

export function Control({ multiple = false, ...props }: ControlProps) {
    const { id, onFilesSelected } = useFileInput()

    function handleFilesSelected(e: ChangeEvent<HTMLInputElement>) {
        if (!e.target.files?.length) {
            return
        }

        const files = Array.from(e.target.files)

        onFilesSelected(files, multiple)
    }

    return (
        <input
            type="file"
            className="sr-only"
            onChange={handleFilesSelected}
            multiple={multiple}
            id={id}
            {...props}
        />
    )
}