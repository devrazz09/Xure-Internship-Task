export const FetchDataFromLocalStorage = () => {
  let data = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    data.push(JSON.parse(value));
  }
  return data;
}