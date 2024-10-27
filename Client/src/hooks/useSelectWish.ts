import { useMutation, useQueryClient } from "react-query";
import Api from "src/api";
import { SelectWishFormValues } from "src/components/WishList/WishSelectForm";
import Wish from "src/types/wish";

function useSelectWish(
  wishId: string,
  onSuccess?: () => void,
  onError?: (error: Error) => void
) {
  const queryClient = useQueryClient();
  return useMutation(
    "selectWish",
    async (data: SelectWishFormValues) => {
      const res = await Api.selectWish(wishId, data.email, data.fullName);
      return res.data;
    },
    {
      onSuccess: (data: Wish) => {
        queryClient.setQueryData(["wish", wishId], data);
        onSuccess?.();
      },
      onError,
    }
  );
}

export default useSelectWish;
