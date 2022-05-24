export interface ProjectDataInterface {
    data?: ProjectDataObject[]
}

export interface ProjectDataObject {
    title: string
    demoUrl?: string
    projectUrl?:string
    image?: string
}
