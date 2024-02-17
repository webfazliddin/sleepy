import ApiService from "../api.service";

const AccountService = {
  Login(data, Headers) {
    return ApiService.post("/api/Account/login", data, Headers);
  },
  // GenerateToken(data, Headers) {
  //   return ApiService.post("Account/GenerateToken", data, Headers);
  // },
  // SignIn(data) {
  //   return ApiService.post(`/Account/SignIn`, data);
  // },
  Logout(){
    return ApiService.get(`/Account/Logout`)
  }
  // LoginByEImzo(data) {
  //   return ApiService.post("account/LoginByEImzo", data);
  // },
  // GetUserInfo(data) {
  //   return ApiService.get("account/GetUserInfo");
  // },
  // ChangeLanguage(data) {
  //   return ApiService.post("account/ChangeLanguage", data);
  // },
  // GetChallenge() {
  //   return ApiService.get("account/GetChallenge");
  // },
  // IsUserRegistered(data) {
  //   return ApiService.post("account/IsUserRegistered", data);
  // },
  // SendSMSCode(data, headers) {
  //   return ApiService.post("account/SendSMSCode", data, headers);
  // },
  // CheckSMSCode(data, headers) {
  //   return ApiService.post("account/CheckSMSCode", data, headers);
  // },
  // Registrate(data, headers) {
  //   return ApiService.post("account/Registrate", data, headers);
  // },
  // LoginTwoFactor(data, headers) {
  //   return ApiService.post("account/LoginTwoFactor", data, headers);
  // },
  // GetByPassportData(Seria, Number, DateOfBirth) {
  //   return ApiService.get(
  //     `account/GetByPassportData?Seria=${Seria}&Number=${Number}&DateOfBirth=${DateOfBirth}`
  //   );
  // },
  // IsUserRegisteredDto(data) {
  //   return ApiService.post("account/IsUserRegisteredDto", data);
  // },
  // RestorePassword(data) {
  //   return ApiService.post("account/RestorePassword", data);
  // },
  // RestorePasswordConfirm(data, headers) {
  //   return ApiService.post("account/RestorePasswordConfirm", data, headers);
  // },
};
export default AccountService;
