import { useQuery, useQueryClient } from "react-query";
import api from "src/api/index";
import Wish from "src/types/wish";

function useGetListWishes(listId: string) {
  const queryCleint = useQueryClient();
  return useQuery(["list-wishes", listId], async () => {
    const wishes = await api.getListWishes(listId);
    wishes.data.forEach((wish: Wish) => {
      queryCleint.setQueryData(["wish", wish._id], wish);
    });
    return wishes.data;
  });
}

export default useGetListWishes;
