const KEYWORD_LENGHT: number = 3;

export const verifyTextLeng = (keyword: string) => {
  return keyword.length >= KEYWORD_LENGHT;
}