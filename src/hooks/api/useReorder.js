import {useContext, useState} from 'react';
import axios from "../../../utils/axios";
import {AlertContext} from "../../../contexts/AlertContext";

export default function useReorderBanners(fn, arr) {
  const [reorderLoading, setReorderLoading] = useState(false);
  const [errorReorder, setErrorReorder] = useState(null);
  const { initAlert } = useContext(AlertContext)

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result.map((multi, i) => ({idBanner: multi._id, Orden: i + 1}))
  };


  async function updateOrderBanners(data) {
    console.log(data);
    // try {
    //   setReorderLoading(true);
    //   const response = await axios.put(`/banners/banners_orden`, data);
    //   setReorderLoading(false);
    //   if (response.status === 200) {
    //     initAlert(true, 'success', 'Se edito el orden de la lista con exito!')
    //     await fn(false);
    //   }
    // } catch (err) {
    //   setErrorReorder(err);
    //   setReorderLoading(false);
    //   initAlert(true, 'error', 'Ocurrio un error, por favor intenta de nuevo...')
    //   console.log(err);
    // }
  }

  async function onDragEndCall(result) {
    console.log(result, arr)
    const {destination, source} = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    const newArr = reorder(arr, source.index, destination.index);
    console.log('newArray', newArr);
    await updateOrderBanners(newArr)
  }

  return {
    reorderLoading,
    errorReorder,
    onDragEnd: (e) => onDragEndCall(e)
  };
}
