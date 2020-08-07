// получение даты из timestamp и изменение формата даты
export function translateDate(timestamp: number): string {
  const messageDate = new Date(timestamp);
  let hours = messageDate.getHours().toString();
  let minutes = messageDate.getMinutes().toString();
  if (minutes.length < 2) {
    minutes = minutes.padStart(2, '0');
  }
  if (hours.length < 2) {
    hours = hours.padStart(2, '0');
  }
  return `${hours}:${minutes}`;
}

// форматирование сообщений
// *текст* - жирный шрифт
// _текст_ - курсив
// ~текст~ - зачеркивание
// ```текст```- моноширинный
export const textOptions = (messageText: string): { [key: string]: string } | {} => {
  if (/^\*.*\*$/.test(messageText)) {
    return {fontWeight: '900'}
  }
  if (/^_.*_$/.test(messageText)) {
    console.log(messageText);
    return {fontStyle: 'Italic'}
  }
  if (/^~.*~$/.test(messageText)) {
    return {textDecoration: 'line-through'}
  }
  if (/^```.*```$/.test(messageText)) {
    return {fontFamily: 'Courier New'}
  }
  return {};
}

// часть строки сообщения без символов форматирования
export const messageText = (messageText: string): string => {
  if (/^\*.*\*$/.test(messageText)) {
    return messageText.slice(1, messageText.length - 1);
  }
  if (/^_.*_$/.test(messageText)) {
    return messageText.slice(1, messageText.length - 1);
  }
  if (/^~.*~$/.test(messageText)) {
    return  messageText.slice(1, messageText.length - 1);
  }
  if (/^```.*```$/.test(messageText)) {
    return messageText.slice(3, messageText.length - 3);
  }
  return messageText;
}