import ApiService from '@/services/api.service';

const BankService = {
    GetAll(){
        return ApiService.get(`/Bank/GetAll`)
    }, 
    GetList(Search,SortColumn, OrderType, PageNumber, PageLimit){
        return ApiService.get(`/Bank/GetList?Search=${Search}&SortColumn=${SortColumn}&OrderType=${OrderType}&PageNumber=${PageNumber}&PageLimit=${PageLimit}`)
    },
    Get(id){
        return ApiService.get(`/Bank/Get?id=${id}`)
    },
    Update(data){
        return ApiService.post('/Bank/Update',data)
    },
    Delete(id){
        return ApiService.delete(`/Bank/Delete?id=${id}`)
    }
}
export default BankService