import Wish from "src/types/wish";
import api from "./api";
import List from "src/types/list";
import { AxiosResponse } from "axios";
import User from "src/types/user";

interface ApiType {
  getUserLists: (userId: string) => Promise<AxiosResponse<List[]>>;
  getList: (listId: string) => Promise<AxiosResponse<List>>;
  getListWishes: (listId: string) => Promise<AxiosResponse<Wish[]>>;
  addList: (newList: List) => Promise<AxiosResponse<List>>;
  signUp: (
    fullName: string,
    email: string,
    password: string
  ) => Promise<AxiosResponse<User>>;
  login: (email: string, password: string) => Promise<AxiosResponse<User>>;
  updateListDetails: (
    listId: string,
    list: List
  ) => Promise<AxiosResponse<List>>;
  updateListWishes: (
    listId: string,
    wishes: Wish[]
  ) => Promise<AxiosResponse<Wish[]>>;
  selectWish: (
    wishId: string,
    email: string,
    name: string
  ) => Promise<AxiosResponse<Wish>>;
  deleteListWishes: (
    listId: string,
    wishIds: string[]
  ) => Promise<AxiosResponse<boolean>>;
}

const Api: ApiType = {
  signUp: (fullName, email, password) =>
    api.post("/user", { fullName, email, password }),
  login: (email, password) => api.post("/user/login", { email, password }),
  getUserLists: (userId: string) => api.get(`/user/${userId}/lists`),
  getList: (listId: string) => api.get(`/list/${listId}`),
  getListWishes: (listId: string) => api.get(`/list/${listId}/wishes`),
  addList: (newList: List) => api.post("/list", { list: newList }),
  selectWish: (wishId: string, email: string, fullName: string) =>
    api.put(`/public/wish/${wishId}/select`, { email, fullName }),
  updateListDetails: (listId: string, list: List) =>
    api.put(`/list/${listId}`, list),
  updateListWishes: (listId: string, wishes: Wish[]) =>
    api.put(`/list/${listId}/wishes`, { wishes }),
  deleteListWishes: (listId: string, wishIds: string[]) =>
    api.delete(`/list/${listId}/wishes`, { data: { wishIds } }),
};

export default Api;
