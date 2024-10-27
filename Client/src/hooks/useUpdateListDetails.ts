import { useMutation, useQueryClient } from "react-query";
import api from "src/api";
import List from "src/types/list";

function useUpdateListDetails(listId: string) {
  const queryClient = useQueryClient();
  return useMutation(
    "updateListDetails",
    async (list: List) => {
      const res = await api.updateListDetails(listId, list);
      return res.data;
    },
    {
      onSuccess: (updatedList: List) => {
        queryClient.setQueryData(["list", listId], (oldData?: List) => ({
          ...(oldData || {}),
          ...updatedList,
        }));
      },
    }
  );
}

export default useUpdateListDetails;
