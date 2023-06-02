const homelist = [
  {
    id: "1",
    title: "과제 1",
    task: "https://t1.daumcdn.net/cfile/tistory/227D553C57BF67F830",
  },
  {
    id: "2",
    title: "22",
    task: "https://t1.daumcdn.net/cfile/tistory/227D553C57BF67F830",
  },
];
const getPostByNo = (no) => {
  const array = homelist.filter((x) => x.no == no);
  if (array.length == 1) {
    return array[0];
  }
  return null;
};
const Lecture = [
  {
    id: "1",
    title: "오픈소스고급설계",
  },
  {
    id: "2",
    title: "자료구조",
  },
  {
    id: "3",
    title: "프로그래밍1",
  },
];
export { homelist, getPostByNo, Lecture };
