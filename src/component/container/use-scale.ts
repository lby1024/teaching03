import { useEffect, useState } from "react"

const designWidth = 1600
const designHeight = 900

export function useScale() {
    const [scale, setScale] = useState(1)

    function getScale() {
        const w = document.documentElement.clientWidth || document.body.clientWidth
        const h = document.documentElement.clientHeight || document.body.clientHeight
        const scale = w/h <= designWidth/designHeight ? w/designWidth : h/designHeight
        setScale(scale)
    }

    useEffect(() => {
        getScale()
        window.addEventListener('resize', () => {
            getScale()
        })
    }, [])

    return [scale]
}