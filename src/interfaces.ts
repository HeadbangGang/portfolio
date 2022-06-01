export interface ProjectDataInterface {
    data?: ProjectDataObject[]
}

export interface ProjectDataObject {
    title: string
    demoUrl?: string
    projectUrl?:string
    image?: ImageContent,
    description: string
    id: string
}

interface ImageContent {
    screenshot?: {
        name: string
        fileType: string
    },
    icon?: {
        name: string
        fileType: string
    }
}
