export const fetchAsset = async (baseUrl: string, asset:string) => {
    try {
        let res: any = await fetch(`${baseUrl}/asset?fileName=${asset}`)
        res = await res.blob() as Promise<Blob>
        return URL.createObjectURL(res) as string
    } catch {
        () => {}
    }
}
