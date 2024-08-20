import instance from '../api';


export const fetchActualites = async () => {
    const response = await instance.get('/actualites/')
                                      .then((res: any)=>{
                                        return res
                                      })
    return response;
}

export const createActualites = async (data: any) => {
    const response = await instance.post('/actualites/',data)
    .then((res: any)=>{
      return res
    })
    return response;
}

export const editActualites = async (data: any) => {
    const response = await instance.put('/actualites/',data)
    .then((res: any)=>{
      return res
    })
    return response;
}


export const viewActualites = async (id: any) => {
    const response = await instance.get(`/actualites/${id}/`)
    .then((res: any)=>{
      return res
    })
    return response;
}

export const deleteActualites = async (id: any) => {
    const response = await instance.delete(`/actualites/${id}/`)
    .then((res: any)=>{
      return res
    })
    return response;
}