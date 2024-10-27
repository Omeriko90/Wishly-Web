import { useMutation, useQueryClient } from "react-query";
import Api from "src/api";
import Wish from "src/types/wish";

function useDeleteListWishes(listId: string) {
  const queryClient = useQueryClient();
  return useMutation("deleteListWishes", async (wishIds: string[]) => {
    try {
      await Api.deleteListWishes(listId, wishIds);
      wishIds.forEach((wishId) => queryClient.removeQueries(["wish", wishId]));
      const previousWishes = queryClient.getQueryData<Wish[]>([
        "list-wishes",
        listId,
      ]);
      if (previousWishes) {
        queryClient.setQueryData(
          ["list-wishes", listId],
          (oldData?: Wish[]) => {
            if (oldData) {
              return oldData.filter((wish) => !wishIds.includes(wish._id));
            }
            return [];
          }
        );
      }
    } catch (error) {
      console.error("Error:", error);
    }
  });
}

export default useDeleteListWishes;
