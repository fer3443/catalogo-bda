export const getAge = (year: string) => {
  if (!year) return "";
  const age = new Date().getFullYear() - parseInt(year);
  return age;
}