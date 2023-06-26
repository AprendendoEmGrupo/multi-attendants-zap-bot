import { StorageIntefaceAdapter } from '../adapters/storage-interface.adapter'

export class MessageService {
  constructor(private readonly storage: StorageIntefaceAdapter) {}

  async publishMediaMessage() {
    await this.storage.upload({
      name: 'teste.png or teste.mp3',
      content: Buffer.from('abcabc', 'utf-8'),
    })
  }
}
