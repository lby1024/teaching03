import mockjs from 'mockjs'
import { useEffect, useState } from 'react'

export type RankItem = {
  name: string,
  id: number
}

export function useRank() {
  const [data, setData] = useState<RankItem[]>([])

  useEffect(() => {
    const arr: RankItem[] = []
    for (let i = 0; i < 39; i++) {
      const { name } = mockjs.mock({ name: '@cname' })
      arr.push({ id: i + 1, name })
    }
    setData(arr)
  }, [])

  return data
}