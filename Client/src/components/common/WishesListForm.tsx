import { useFieldArray, useForm } from "react-hook-form";
import Wish from "src/types/wish";
import WishForm from "./WishFrom";
import { useState } from "react";
import { Button, CircularProgress, List, ListItem } from "@mui/material";
import { Add } from "@mui/icons-material";

export interface FormValues {
  wishes: Wish[];
}

interface WishListFormProps {
  wishes?: Wish[];
  onSubmitForm: (data: FormValues, wishesToRemove: string[]) => void;
}

function WishesListForm(props: WishListFormProps) {
  const { wishes, onSubmitForm } = props;
  const [wishesToRemove, setWishesToRemove] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      wishes: wishes || [],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "wishes",
  });

  const handleDeleteWish = (wish: Wish, index: number) => {
    remove(index);
    if (wish._id) {
      setWishesToRemove((prevState) => [...prevState, wish._id]);
    }
  };

  const handleAddWish = () => {
    const newWish = {
      _id: "",
      title: "",
      description: "",
      url: "",
    };
    append(newWish);
  };

  const onSubmit = (data: FormValues) => {
    setIsLoading(true);
    onSubmitForm(data, wishesToRemove);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <Button
        onClick={handleAddWish}
        variant="text"
        color="primary"
        startIcon={<Add />}
        sx={{ alignSelf: "end" }}
      >
        Add Wish
      </Button>
      <List>
        {fields.map((wish, index) => (
          <ListItem key={wish.id}>
            <WishForm
              index={index}
              control={control}
              onDelete={() => handleDeleteWish(wish, index)}
            />
          </ListItem>
        ))}
      </List>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{ alignSelf: "end" }}
      >
        {isLoading ? (
          <CircularProgress size={20} sx={{ color: "#fff" }} />
        ) : (
          "Submit"
        )}
      </Button>
    </form>
  );
}

export default WishesListForm;
