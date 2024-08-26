function useDelete(arr: any, id: any) {
    const deleteArr = arr.filter((task: any) => {
        if (task.id == id) return false;
        return true;
    })
  return deleteArr
}

export default useDelete;
