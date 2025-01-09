export const getDataForPage=(data,pageNumber,pageSize)=>{
  const startIndex = (pageNumber - 1) * pageSize; 
  const endIndex = startIndex + pageSize;
  return data.slice(startIndex, endIndex);
}