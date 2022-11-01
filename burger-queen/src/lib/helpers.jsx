// const filter = cell.map((item) => {
//     let listOfLists = Object.entries(item);
//     for (let i = 0; i < listOfLists.length; i++) {
//       listProducts.filter((string) => {
//         if (listOfLists[i].includes(string))
//           newListObject[string] = listOfLists[i][1];
//       })
//     }})

    export function filterAtributteList(filterKeys, listElements) {

        const newListElements = listElements.map((element) => {
            // console.log('objeto dal array', element)
            return Object.keys(element)
                .filter((key) => {
                    if (filterKeys.some(keyFilter => key.includes(keyFilter))) {
                        return key
                    }
                })
                .reduce((obj, key) => {
                    return Object.assign(obj, {
                        [key]: element[key]
                    })
                }, {})
    
        })
        return newListElements
    }
    