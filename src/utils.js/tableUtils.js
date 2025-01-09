export const getDataForPage=(data,pageNumber,pageSize)=>{
  const startIndex = (pageNumber - 1) * pageSize; 
  const endIndex = startIndex + pageSize;
  const rows=data.slice(startIndex, endIndex);
  if(rows.length>0 && rows.length<pageSize){
    let obj={};
        Object.keys(data.length>0?data[0]:{}).map((key)=>{obj[key]=""})
        obj["isFiller"]=true
    while(rows.length<pageSize){
        rows.push(obj)
    }
  }
  return rows
}