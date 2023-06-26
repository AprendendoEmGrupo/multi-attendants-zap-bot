import {
  ParamsToUploadFile,
  StorageIntefaceAdapter,
} from './storage-interface.adapter'

export class FirebaseStorageAdapter implements StorageIntefaceAdapter {
  upload(params: ParamsToUploadFile): Promise<string> {
    // logic to upload audio, image, photo or document.
    throw new Error('Method not implemented.')
  }
}
