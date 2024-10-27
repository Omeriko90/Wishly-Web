import { useQueryClient } from "react-query";
import { default as WishType } from "src/types/wish";

function useGetWish(id: string) {
  const queryClient = useQueryClient();
  const wish: WishType | undefined = queryClient.getQueryData(["wish", id]);
  return wish;
}

export default useGetWish;
