export type ChatTypeEnum = 'message' | 'image' | 'file' | 'emoticon';


export const CHAT_MESSAGE: string = 'message';
export const CHAT_IMAGE: string = 'image';
export const CHAT_FILE: string = 'file';
export const CHAT_EMOTICON: string = 'emoticon';

export type ChatType = {
  type: ChatTypeEnum,
  id: string,
  me: boolean,
  message: string,
  image: string,
  fileName: string,
  fileSize: string,
  emotion: string,
}
