interface IProps {
  arr: any,
  id: number | null
}

function useDelete({arr, id}: IProps) {
    const deleteArr = arr.filter((task: any) => {
        if (task.id == id) return false;
        return true;
    })
  return deleteArr
}

export default useDelete;
