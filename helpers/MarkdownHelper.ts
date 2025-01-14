// eslint-disable-next-line import/prefer-default-export
export const findImages = (
  text: string
): { cleanedText: string; imageLinks: string[] } => {
  if (!text) {
    return {
      cleanedText: "",
      imageLinks: [],
    };
  }

  const pattern = /!\[.*?\]\(([^)]+)\)/g;
  const imageLinks = [];

  const cleanedText = text.replace(pattern, (match, link) => {
    imageLinks.push(link);
    return "";
  });

  return {
    cleanedText,
    imageLinks,
  };
};
