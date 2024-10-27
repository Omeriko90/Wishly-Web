import { useQuery } from "react-query";
import api from "../api";

function useGetList(listId: string) {
  return useQuery(["list", listId], async () => {
    const list = await api.getList(listId);
    return list.data;
  });
}

export default useGetList;
