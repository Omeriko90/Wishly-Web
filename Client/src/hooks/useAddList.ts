import { useMutation, useQueryClient } from "react-query";
import api from "src/api";
import List from "src/types/list";

function useAddList(
  onError?: (error: Error) => void,
  onSuccess?: (newList: List) => void
) {
  const queryClient = useQueryClient();

  return useMutation(
    "createList",
    async (newList: List) => {
      const list = await api.addList(newList);
      return list.data;
    },
    {
      onSuccess: (data: List) => {
        queryClient.setQueryData(["list", data._id], data);
        onSuccess?.(data);
      },
      onError: (error: Error) => {
        onError?.(error);
      },
    }
  );
}

export default useAddList;
