export default interface Wish {
  _id: string;
  title: string;
  description?: string;
  listId: string;
  url?: string;
  imageUrl?: string;
}
