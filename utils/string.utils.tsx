export const urlify = (text: string | null | undefined) => {
  if (!text || text.includes("<script")) return "";
  if (!text.includes("https")) return text;

  const urlRegex = /(\(https?:\/\/[^,]+)/g;
  const removeBracketsRegex = /[()]/g;
  const removeWordsInBracketsRegex = /(\[.*?\])/g;
  const removeUselessCharacters = /[ ()\]\[]/g;
  const r = text.replace(urlRegex, (url: string) => {
    const temp = text.substring(0, text.indexOf(url));
    const linkName = text
      .substring(temp.lastIndexOf("["), temp.length)
      .replace(removeUselessCharacters, "");
    return `&nbsp;<a target="_blank" href="${url.replace(
      removeBracketsRegex,
      ""
    )}">${linkName}</a>`;
  });
  return r.replace(removeWordsInBracketsRegex, "");
};
