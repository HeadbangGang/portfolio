export interface ProjectDataInterface {
    data?: ProjectDataObject[]
}

export interface ProjectDataObject {
    title: string
    demoUrl?: string
    projectUrl?:string
    image?: {
        name: string
        fileType: string
    },
    description: string
}
