import client from "@/api";


const AccountService = {
  Login(data, Headers) {
    return client.post("/api/Account/login");
  },
  GenerateToken(data, Headers) {
    return client.post("/api/Account/generatetoken");
  },
  SignIn(data) {
    return client.post(`/Account/SignIn`);
  },
};
export default AccountService;
