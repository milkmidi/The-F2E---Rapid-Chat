import { type ChatType } from '@/utils/types';


const random = (max:number) => Math.floor(Math.random() * max);

const typeArr:string[] = ['message', 'image', 'file', 'emoticon'];
const emoticonArr:string[] = ['hi', 'lol', 'no', 'ok', 'thx', 'wtf'];


export const generateMockData = (me:boolean = false) => ({
  id: (+new Date()).toString() + random(99999),
  me,
  type: typeArr[random(4)],
  message: 'Message',
  fileName: 'FileName',
  fileSize: `${random(1000) + 100}kb`,
  image: 'https://fakeimg.pl/250x100/2ecc71?text=image',
  emoticon: `sticker-${emoticonArr[random(emoticonArr.length)]}`,
});

export const mockData = (length:number = 5):ChatType[] => {
  const a:number[] = Array.from(Array(length).keys());
  return a.map(() => (generateMockData(Math.random() > 0.5)));
};
