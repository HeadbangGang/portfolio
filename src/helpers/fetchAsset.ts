import { getAccessToken } from './helpers'

export const fetchAsset = async (asset:string) => {
    const token = await getAccessToken()
    try {
        let res: any = await fetch(`${process.env.API_URL}/portfolio/asset?fileName=${asset}`, { // check this
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        res = await res.blob() as Promise<Blob>
        return URL.createObjectURL(res) as string
    } catch {
        () => {}
    }
}
