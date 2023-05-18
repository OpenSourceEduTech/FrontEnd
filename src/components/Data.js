const homelist = [
  {
    id: "1",
    title: "과제 1",
  },
  {
    id: "2",
    title: "22",
  },
];
const getPostByNo = (no) => {
  const array = homelist.filter((x) => x.no == no);
  if (array.length == 1) {
    return array[0];
  }
  return null;
};
export { homelist, getPostByNo };
