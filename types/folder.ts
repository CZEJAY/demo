export interface Folder {
    id: string
    name: string
    createdAt: string
    updatedAt: string
    memberCount: number
  }
  
  export interface CreateFolderPayload {
    name: string
  }
  
  export interface SearchFoldersParams {
    query: string
  }
  
  