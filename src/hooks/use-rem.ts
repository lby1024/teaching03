import { useEffect } from "react"

export function useRem() {
    useEffect(() => {
        window.onresize = () => rem()
        rem()
    }, [])
}

function rem() {
    const w = document.documentElement.clientWidth || document.body.clientWidth
    const h = document.documentElement.clientHeight || document.body.clientHeight
    const htmlDom = document.getElementsByTagName('html')[0];
    if(w/h <= 16/9) {
        htmlDom.style.fontSize = `${w/1210*50}px`
    }
    else{
        const width = 16*h/9
        htmlDom.style.fontSize = `${width/1210*50}px`
    }
}