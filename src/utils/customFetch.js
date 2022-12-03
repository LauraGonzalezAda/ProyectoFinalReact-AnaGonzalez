
const customFetch = (time,task) => {
    return new Promise ((resolve,reject) => {
        setTimeout(() => {
            if(task) {
                resolve(task)
            } else {
                reject('no se pudo consultar datos')
            }
        }, time)
    })
}

export default customFetch;