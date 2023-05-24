import { useEffect, useState } from "react";

type TFn = () => Promise<any>

export function useData<T>(fn: TFn, time=0) {
    const [data, setData] = useState<T|null>(null)

    useEffect(() => {
        getData()
    }, [])

    async function getData() {
        const data: T = await fn()
        setData(data)
        if (!time) {
            return
        }
        const timer = setTimeout(() => {
            getData()
            clearTimeout(timer)
        }, time)
    }

    return [data]
}