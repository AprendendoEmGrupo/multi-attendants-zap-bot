import { FirebaseStorageAdapter } from './adapters/firebase-storage.adapter'
import { MessageService } from './services/message.service'

const firebaseStorageAdapter: FirebaseStorageAdapter =
  new FirebaseStorageAdapter()
const messageService = new MessageService(firebaseStorageAdapter)

messageService.publishMediaMessage()
