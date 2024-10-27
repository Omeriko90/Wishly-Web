import { Grid } from "@mui/material";
import useGetListWishes from "src/hooks/useGetListWishes";
import { default as WishType } from "src/types/wish";
import Wish from "src/components/WishList/Wish";
import { useState } from "react";
import WishDetailsDialog from "./WishDetailsDialog";

interface WishListProps {
  listId: string;
  filterValue?: string;
  withUserSelection?: boolean;
}

function WishList({
  listId,
  withUserSelection,
  filterValue = "",
}: WishListProps) {
  const [selectedWish, setSelectedWish] = useState<string | null>(null);

  const { data: wishes } = useGetListWishes(listId);
  // const wishes = [
  //   {
  //     _id: "66c9ba49ff4c73e54a863cc4",
  //     title: "Diapers",
  //     description: "The best diapers in Tel Aviv area",
  //     url: "https://shop.super-pharm.co.il/infants-and-toddlers/diapering/3-6-diapers/%D7%97%D7%99%D7%AA%D7%95%D7%9C%D7%99%D7%9D-%D7%A9%D7%9C%D7%91-4-9-14-%D7%A7%22%D7%92/p/625474",
  //     listId: "66c98a6b262f8f3e5840e608",
  //     createdAt: "2024-10-01T13:53:04.195Z",
  //     updatedAt: "2024-10-01T13:53:04.195Z",
  //   },
  //   {
  //     _id: "66c9ba49ff4c73e54a863cc5",
  //     title: "Diapers",
  //     description: "The best diapers in Tel Aviv area",
  //     url: "https://shop.super-pharm.co.il/infants-and-toddlers/diapering/3-6-diapers/%D7%97%D7%99%D7%AA%D7%95%D7%9C%D7%99%D7%9D-%D7%A9%D7%9C%D7%91-4-9-14-%D7%A7%22%D7%92/p/625474",
  //     listId: "66c98a6b262f8f3e5840e608",
  //     createdAt: "2024-10-01T13:53:04.195Z",
  //     updatedAt: "2024-10-01T13:53:04.195Z",
  //   },
  //   {
  //     _id: "66c9ba49ff4c73e54a863cc6",
  //     title: "Diapers",
  //     description: "The best diapers in Tel Aviv area",
  //     url: "https://shop.super-pharm.co.il/infants-and-toddlers/diapering/3-6-diapers/%D7%97%D7%99%D7%AA%D7%95%D7%9C%D7%99%D7%9D-%D7%A9%D7%9C%D7%91-4-9-14-%D7%A7%22%D7%92/p/625474",
  //     listId: "66c98a6b262f8f3e5840e608",
  //     createdAt: "2024-10-01T13:53:04.195Z",
  //     updatedAt: "2024-10-01T13:53:04.195Z",
  //   },
  //   {
  //     _id: "66c9ba49ff4c73e54a863cc7",
  //     title: "Diapers",
  //     description: "The best diapers in Tel Aviv area",
  //     url: "https://shop.super-pharm.co.il/infants-and-toddlers/diapering/3-6-diapers/%D7%97%D7%99%D7%AA%D7%95%D7%9C%D7%99%D7%9D-%D7%A9%D7%9C%D7%91-4-9-14-%D7%A7%22%D7%92/p/625474",
  //     listId: "66c98a6b262f8f3e5840e608",
  //     createdAt: "2024-10-01T13:53:04.195Z",
  //     updatedAt: "2024-10-01T13:53:04.195Z",
  //   },
  //   {
  //     _id: "66c9ba49ff4c73e54a863cc8",
  //     title: "Diapers",
  //     description: "The best diapers in Tel Aviv area",
  //     url: "https://shop.super-pharm.co.il/infants-and-toddlers/diapering/3-6-diapers/%D7%97%D7%99%D7%AA%D7%95%D7%9C%D7%99%D7%9D-%D7%A9%D7%9C%D7%91-4-9-14-%D7%A7%22%D7%92/p/625474",
  //     listId: "66c98a6b262f8f3e5840e608",
  //     createdAt: "2024-10-01T13:53:04.195Z",
  //     updatedAt: "2024-10-01T13:53:04.195Z",
  //   },
  //   {
  //     _id: "66c9ba49ff4c73e54a863cc9",
  //     title: "Diapers",
  //     description: "The best diapers in Tel Aviv area",
  //     url: "https://shop.super-pharm.co.il/infants-and-toddlers/diapering/3-6-diapers/%D7%97%D7%99%D7%AA%D7%95%D7%9C%D7%99%D7%9D-%D7%A9%D7%9C%D7%91-4-9-14-%D7%A7%22%D7%92/p/625474",
  //     listId: "66c98a6b262f8f3e5840e608",
  //     createdAt: "2024-10-01T13:53:04.195Z",
  //     updatedAt: "2024-10-01T13:53:04.195Z",
  //   },
  //   {
  //     _id: "66c9ba49ff4c73e54a863cc9",
  //     title: "Diapers",
  //     description: "The best diapers in Tel Aviv area",
  //     url: "https://shop.super-pharm.co.il/infants-and-toddlers/diapering/3-6-diapers/%D7%97%D7%99%D7%AA%D7%95%D7%9C%D7%99%D7%9D-%D7%A9%D7%9C%D7%91-4-9-14-%D7%A7%22%D7%92/p/625474",
  //     listId: "66c98a6b262f8f3e5840e608",
  //     createdAt: "2024-10-01T13:53:04.195Z",
  //     updatedAt: "2024-10-01T13:53:04.195Z",
  //   },
  //   {
  //     _id: "66c9ba49ff4c73e54a863cc9",
  //     title: "Diapers",
  //     description: "The best diapers in Tel Aviv area",
  //     url: "https://shop.super-pharm.co.il/infants-and-toddlers/diapering/3-6-diapers/%D7%97%D7%99%D7%AA%D7%95%D7%9C%D7%99%D7%9D-%D7%A9%D7%9C%D7%91-4-9-14-%D7%A7%22%D7%92/p/625474",
  //     listId: "66c98a6b262f8f3e5840e608",
  //     createdAt: "2024-10-01T13:53:04.195Z",
  //     updatedAt: "2024-10-01T13:53:04.195Z",
  //   },
  //   {
  //     _id: "66c9ba49ff4c73e54a863cc9",
  //     title: "Diapers",
  //     description: "The best diapers in Tel Aviv area",
  //     url: "https://shop.super-pharm.co.il/infants-and-toddlers/diapering/3-6-diapers/%D7%97%D7%99%D7%AA%D7%95%D7%9C%D7%99%D7%9D-%D7%A9%D7%9C%D7%91-4-9-14-%D7%A7%22%D7%92/p/625474",
  //     listId: "66c98a6b262f8f3e5840e608",
  //     createdAt: "2024-10-01T13:53:04.195Z",
  //     updatedAt: "2024-10-01T13:53:04.195Z",
  //   },
  //   {
  //     _id: "66c9ba49ff4c73e54a863cc9",
  //     title: "Diapers",
  //     description: "The best diapers in Tel Aviv area",
  //     url: "https://shop.super-pharm.co.il/infants-and-toddlers/diapering/3-6-diapers/%D7%97%D7%99%D7%AA%D7%95%D7%9C%D7%99%D7%9D-%D7%A9%D7%9C%D7%91-4-9-14-%D7%A7%22%D7%92/p/625474",
  //     listId: "66c98a6b262f8f3e5840e608",
  //     createdAt: "2024-10-01T13:53:04.195Z",
  //     updatedAt: "2024-10-01T13:53:04.195Z",
  //   },
  // ];
  const handleWhishClick = (id: string) => {
    setSelectedWish(id);
  };
  return (
    <>
      <Grid
        container
        columnGap={3}
        rowGap={2}
        sx={{
          width: "100%",
          // justifyContent: "center",
          height: 375,
          overflowY: "auto",
        }}
      >
        {wishes
          ?.filter((wish: WishType) =>
            wish.title.toLowerCase().includes(filterValue.toLowerCase())
          )
          .map((wish: WishType) => (
            <Grid
              item
              xs={12}
              sm={5}
              md={3.5}
              sx={{ height: 170, display: "flex", justifyContent: "center" }}
            >
              <Wish key={wish._id} wish={wish} onClick={handleWhishClick} />
            </Grid>
          ))}
      </Grid>
      {selectedWish && (
        <WishDetailsDialog
          wishId={selectedWish}
          onClose={() => setSelectedWish(null)}
          withUserSelection={withUserSelection}
        />
      )}
    </>
  );
}

export default WishList;
