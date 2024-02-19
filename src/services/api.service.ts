import axios from '@/utils/axios';

const ApiService = {
  _401interceptor : null as any,
  removeHeader() {
    axios.defaults.headers.common = {};
  },
  setHeader() {
    axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem(
      "auth_token"
    )}`;
  },
  get(resource:string) {
    return axios.get(resource);
  },

  post(resource:string, data:object, headers:any) {
    return axios.post(resource, data, {
      headers: headers,
    });
  },
  formData(resource:string, data:object) {
    return axios.post(resource, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
  token(resource:string, data:object) {
    return axios.post(resource, data, {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    });
  },
  put(resource:string, data:object) {
    return axios.put(resource, data);
  },

  delete(resource:string) {
    return axios.delete(resource);
  },
  print(resourse:string) {
    return axios.get(resourse, {
      responseType: "blob",
    });
  },
  printtemp(resourse:string, data:object) {
    return axios.post(resourse, data, {
      responseType: "blob",
    });
  },
  blobandjson(resourse:string, data:object) {
    return axios.post(resourse, data, {
      headers: {
        "Content-Type": "application/json",
      },
      responseType: "blob",
    });
  },
  customRequest(data:string) {
    return axios(data);
  },

  mount401Interceptor() {
    this._401interceptor = axios.interceptors.response.use(
      (response) => {
        return response;
      },
      async (error) => {
        if (error.request.status == 401) {
          localStorage.clear();
          window.location.href = "/auth/login";
        }
        if (error.request.status == 403) {
          window.location.href = "/error/403";
        }
        throw error;
      }
    );
  },

  unmount401Interceptor() {
    axios.interceptors.response.eject(this._401interceptor);
  },
};

export default ApiService;
