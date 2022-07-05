import { getAccessToken } from './helpers'

interface ClientTokenData {
    client_id: string
    client_secret: string
}

export const fetchAsset = async (baseUrl: string, asset:string, clientTokenData: ClientTokenData) => {
    const token = await getAccessToken(clientTokenData)
    try {
        let res: any = await fetch(`${baseUrl}/asset?fileName=${asset}`, {
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
