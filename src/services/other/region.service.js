import ApiService from '@/services/api.service';

const RegionService = {
    GetAll(lang, OblastId) {
        if (OblastId === 0 || OblastId == null || OblastId === undefined) {
            OblastId = 0;
        }
        return ApiService.get(`/Region/GetAll?lang=${'uz_latn'}&OblastId=${OblastId}`)
    },
    GetRegionList() {
        
        return ApiService.get(`/Region/GetRegionList`)
    },
    GetList(Search, SortColumn, OrderType, PageNumber, PageLimit) {
        return ApiService.get(`/Region/GetList?Search=${Search}&SortColumn=${SortColumn}&OrderType=${OrderType}&PageNumber=${PageNumber}&PageLimit=${PageLimit}`)
    },
    Get(id) {
        return ApiService.get(`/Region/Get?id=${id}`)
    },
    Update(data) {
        return ApiService.post('/Region/Update', data)
    },
    Delete(id) {
        return ApiService.delete(`/Region/Delete?id=${id}`)
    }
}
export default RegionService