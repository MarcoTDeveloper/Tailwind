import { ComponentProps } from "react"

type rootProps = ComponentProps<'div'>

export function Root(props: rootProps) {
    return <div {...props}/>
}