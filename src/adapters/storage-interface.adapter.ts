export interface ParamsToUploadFile {
  name: string
  content: string | Buffer
}

export interface StorageIntefaceAdapter {
  upload(params: ParamsToUploadFile): Promise<string>
}
