import { useMutation, useQueryClient } from "react-query";
import api from "src/api";
import Wish from "src/types/wish";

function useUpdateListWishes(listId: string) {
  const queryClient = useQueryClient();
  return useMutation(
    "updateListWishes",
    async (wishes: Wish[]) => {
      const res = await api.updateListWishes(listId, wishes);
      return res.data;
    },
    {
      onSuccess: (newWishes: Wish[]) => {
        queryClient.setQueryData(
          ["list-wishes", listId],
          (oldData?: Wish[]) => [...(oldData || []), ...newWishes]
        );
        newWishes.forEach((wish) =>
          queryClient.setQueryData(["wish", wish._id], wish)
        );
      },
    }
  );
}

export default useUpdateListWishes;
