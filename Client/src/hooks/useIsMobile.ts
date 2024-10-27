import { useQueryClient } from "react-query";

function useIsMobile(): boolean {
  const queryClient = useQueryClient();

  return queryClient.getQueryData("isMobile") || false;
}

export default useIsMobile;
