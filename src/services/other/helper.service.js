import ApiService from "../api.service";
const HelperService = {
    GetLanguageList() {
        return ApiService.get('/Helper/GetLanguageList/')
    },
    GetStateList() {
        return ApiService.get('/Helper/GetStateList')
    },
    GetQualCategoryTypeList() {
        return ApiService.get('/Helper/GetQualCategoryTypeList/')
    },
    GetStatusList() {
        return ApiService.get('/Helper/GetStatusList/')
    },
    GetTableList() {
        return ApiService.get('/Helper/GetTableList/')
    },
    GetCalculationTypeList() {
        return ApiService.get('/Helper/GetCalculationTypeList/')
    },
    GetAllAgeDegree() {
        return ApiService.get('/Helper/GetAllAgeDegree/')
    },
    GetAllSportCertificateType() {
        return ApiService.get('/Helper/GetAllSportCertificateType/')
    },
    GetAllCostScheduleType() {
        return ApiService.get('/Helper/GetAllCostScheduleType/')
    },
    GetAllPaymentType() {
        return ApiService.get('/Helper/GetAllPaymentType/')
    },
    GetAllParticipantType() {
        return ApiService.get('/Helper/GetAllParticipantType/')
    },
    GetAllTransportType() {
        return ApiService.get('/Helper/GetAllTransportType/')
    },
    GetAllDistriButionType() {
        return ApiService.get('/Helper/GetAllDistriButionType/')
    },
    GetAllScoreCalculationType() {
        return ApiService.get('/Helper/GetAllScoreCalculationType/')
    },
    GetFixingDocumentTypeList() {
        return ApiService.get('/Helper/GetFixingDocumentTypeList/')
    },
    GetCalculationMethodList() {
        return ApiService.get('/Helper/GetCalculationMethodList/')
    },
    GetCalculateByTimetype() {
        return ApiService.get('/Helper/GetCalculateByTimetype/')
    },
    GetHRTimeSheetType() {
        return ApiService.get('/Helper/GetHRTimeSheetType')   
    },
    HrEmpAppointOrderType(lang) {
        return ApiService.get(`/Helper/HrEmpAppointOrderType?lang=${lang}`)
    },
    GetMinimumValueTypeList(lang) {
        return ApiService.get(`/Helper/GetMinimumValueTypeList?lang=${lang}`)
    },
    GetCurrencyCourse(currencyCode) {
        return ApiService.get(`/Helper/GetCurrencyCourse?currencyCode=${currencyCode}`)
    },
    GetOrganizationTypeList() {
        return ApiService.get('/Helper/GetOrganizationTypeList/')
    },
    GetStaffCategoryList() {
        return ApiService.get('/Helper/GetStaffCategoryList/')
    },
    GetAllScoreType() {
        return ApiService.get('/Helper/GetAllScoreType/')
    },
    GetAllSportOrgRatingCalcIndicator() {
        return ApiService.get('/Helper/GetAllSportOrgRatingCalcIndicator/')
    },
    GetMinimumValuelist() {
        return ApiService.get('/Helper/GetMinimumValuelist/')
    },
    GetCalculationKindlist() {
        return ApiService.get('/Helper/GetCalculationKindlist/')
    },
    GetTariffScaleTypeList(lang) {
        return ApiService.get(`/Helper/GetTariffScaleTypeList`)
    },
    GetOblastList(lang) {
        return ApiService.get(`/Helper/GetOblastList`)
    },
    GetMinimumValueTypeList(lang) {
        return ApiService.get(`/Helper/GetMinimumValueTypeList`)
    },
    GetGenderList(lang) {
        return ApiService.get(`Helper/GetGenderList?lang=${lang}`)
    },
    GetModuleList() {
        return ApiService.get('Helper/GetModuleList')
    },
    GetStaffingType(lang) {
        return ApiService.get(`Helper/GetStaffingType`)
    },
    GetOblastList() {
        return ApiService.get(`Helper/GetOblastList`)
    },
    GetEmployeeEnrolment(personid) {
        return ApiService.get(`Helper/GetEmployeeEnrolment?personid=${personid}`)
    },
    GetOrganizationData(organizationid) {
        return ApiService.get(`Helper/GetOrganizationData?organizationid=${organizationid}`)
    },
    GetFixedMinimumValueByDate(minimumvaluetypeid, ondate) {
        return ApiService.get(`Helper/GetFixedMinimumValueByDate?minimumvaluetypeid=${minimumvaluetypeid}&ondate=${ondate}`)
    },
    GetRoleList() {
        return ApiService.get(`Helper/GetRoleList`)
    },
    GetEmploymentType(lang) {
        return ApiService.get(`/Helper/GetEmploymentType?lang=${lang}`)
    },
    GetRoundingTypeList(lang) {
        return ApiService.get(`/Helper/GetRoundingTypeList`)
    },
    GetExciseRateTypeList() {
        return ApiService.get('/Helper/GetExciseRateTypeList')
    },
    GetCustomJobTypeList() {
        return ApiService.get('/Helper/GetCustomJobTypeList')
    },
    GetAllExternalDataSource() {
        return ApiService.get('/Helper/GetAllExternalDataSource')
    },
    GetFileExtensionList() {
        return ApiService.get('/Helper/GetFileExtensionList')
    },
    GetAllSportQualSpecialty() {
        return ApiService.get('/Helper/GetAllSportQualSpecialty')
    },
    GetAllSportCompetitionType() {
        return ApiService.get('/Helper/GetAllSportCompetitionType')
    },
    GetAllPrivilegeResultType() {
        return ApiService.get('/Helper/GetAllPrivilegeResultType')
    },
    GetAllPrivilegeLevel() {
        return ApiService.get('/Helper/GetAllPrivilegeLevel')
    },
    GetAllPositionType() {
        return ApiService.get('/Helper/GetAllPositionType')
    },
    GetAllRatingPeriod() {
        return ApiService.get('/Helper/GetAllRatingPeriod')
    },

}
export default HelperService