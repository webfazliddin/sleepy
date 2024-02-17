
import ApiService from '@/services/api.service';

const MfyService = {
    GetAll(RegionId){
        return ApiService.get(`/Mfy/GetAll?RegionId=${RegionId}`)
    },
    GetMfyList() {
        return ApiService.get(`/Mfy/GetMfyList`)
    }, 
    GetList(Search,SortColumn, OrderType, PageNumber, PageLimit){
        return ApiService.get(`/Mfy/GetList?Search=${Search}&SortColumn=${SortColumn}&OrderType=${OrderType}&PageNumber=${PageNumber}&PageLimit=${PageLimit}`)
    },
    Get(id){
        return ApiService.get(`/Mfy/Get?id=${id}`)
    },
    Update(data){
        return ApiService.post('/Mfy/Update',data)
    },
    Delete(id){
        return ApiService.delete(`/Mfy/Delete?id=${id}`)
    }
}
export default MfyService