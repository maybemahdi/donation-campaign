import toast from "react-hot-toast";

export const getSaved = () => {
  let saved = [];
  const storedInLocal = localStorage.getItem("item");
  if (storedInLocal) {
    saved = JSON.parse(storedInLocal);
  }
  return saved;
};

// save
export const savetoLocal = (selectedData) => {
  let saved = getSaved();
  const isExist = saved.find((i) => i.id === selectedData.id);
  if (isExist) {
    return toast.error("Already Donated");
  }
  toast.success(`You Just Donated to ${selectedData.title}`);
  saved.push(selectedData);
  localStorage.setItem("item", JSON.stringify(saved));
};
