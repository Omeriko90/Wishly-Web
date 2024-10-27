import { Box } from "@mui/material";
import { useHistory } from "react-router-dom";
import ListForm from "../common/ListForm";
import List from "src/types/list";
import useAddList from "src/hooks/useAddList";
import { toast, ToastContainer } from "react-toastify";

function AddList() {
  const history = useHistory();

  const handleBack = () => history.push("/admin/lists");
  const handleError = (error: Error) => {
    toast.dark(
      `Failed to create list because of ${error.message}. Please try again later`,
      {
        position: "top-center",
      }
    );
  };
  const handleSuccess = (newList: List) => {
    toast.dark("List was created successfully", {
      position: "top-center",
    });
    setTimeout(() => history.push(`/admin/list/${newList._id}`), 2000);
  };

  const { mutate: addList } = useAddList(handleError, handleSuccess);
  const handleFormSubmit = (values: List) => {
    addList(values);
  };
  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <Box>
        <ListForm
          onSubmit={handleFormSubmit}
          formTitle="New List"
          cancelBtnLabel="Discard"
          saveBtnLabel="Create"
          onCancel={handleBack}
        />
      </Box>
      <ToastContainer autoClose={2000} />
    </Box>
  );
}

export default AddList;
