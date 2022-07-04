import { getAccessToken } from './helpers'
export const fetchAsset = async (baseUrl: string, asset:string) => {
    const token = await getAccessToken()
    try {
        let res: any = await fetch(`${baseUrl}/asset?fileName=${asset}`, {
            headers: {
                authorization: `Bearer ${token}`
            }
        })
        res = await res.blob() as Promise<Blob>
        return URL.createObjectURL(res) as string
    } catch {
        () => {}
    }
}
