import ApiService from '@/services/api.service';

const OkedService = {
    GetAll(lang){
        return ApiService.get(`/Oked/GetAll`)
    }, 
    GetList(Search,SortColumn, OrderType, PageNumber, PageLimit){
        return ApiService.get(`/Oked/GetList?Search=${Search}&SortColumn=${SortColumn}&OrderType=${OrderType}&PageNumber=${PageNumber}&PageLimit=${PageLimit}`)
    },
    Get(id){
        return ApiService.get(`/Oked/Get?id=${id}`)
    },
    Update(data){
        return ApiService.post('/Oked/Update',data)
    },
    Delete(id){
        return ApiService.delete(`/Oked/Delete?id=${id}`)
    }
}
export default OkedService