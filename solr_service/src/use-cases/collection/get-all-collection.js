function makeGetAllCollection({getAllCollection}) {  
    return async function getAllCollectionFun({ }) {
      return await getAllCollection({});
    };
  }
  
  module.exports = makeGetAllCollection;
  