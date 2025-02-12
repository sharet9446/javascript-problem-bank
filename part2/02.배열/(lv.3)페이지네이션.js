/**
 * [(lv.3)게시판-페이징.js]
 *
 * getPage(pageNumber, perPage)를 사용해,
 * - pageNumber가 1부터 시작될 때, 해당 페이지의 게시글 배열을 반환하세요.
 * - 범위를 벗어나면 빈 배열을 반환하세요.
 * - posts는 외부에서 주어진 데이터이며, slice 등을 이용해 구현하세요.
 *
 * @param {number} pageNumber
 * @param {number} perPage
 * @returns {object[]}
 */

const posts = [
  { id: 1, title: "Hello" },
  { id: 2, title: "World" },
  { id: 3, title: "JavaScript" },
  { id: 4, title: "Paging" },
  { id: 5, title: "Example" },
];

function getPage(pageNumber, perPage) {
  if (pageNumber <= 0 || perPage <= 0) {
    return [];
  }
  const deletePage = (pageNumber - 1) * perPage;
  const page = posts.slice(deletePage, deletePage + perPage);
  return page;
}

// export 를 수정하지 마세요.
export { getPage, posts };
