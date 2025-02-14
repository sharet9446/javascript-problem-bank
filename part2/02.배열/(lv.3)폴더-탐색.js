/**
 * [(lv.3)폴더-탐색.js]
 *
 * 1) 아래와 같은 형태의 폴더 구조를 나타내는 객체가 있다고 가정합니다.
 *    const folder = {
 *       name: "root",
 *       subFolders: [
 *         { name: "sub1", subFolders: [] },
 *         { name: "sub2", subFolders: [ { name: "sub2_1", subFolders: [] } ] }
 *       ]
 *    };
 * 2) getAllFolderNames 라는 함수를 작성하여, 모든 폴더의 name을 배열로 반환하세요.
 *    예: ["root", "sub1", "sub2", "sub2_1"]
 * 3) 재귀함수를 활용하세요.
 *
 * @param {object} folder
 * @returns {string[]}
 */

// TODO: getAllFolderNames 함수를 작성하세요.

function getAllFolderNames(folder) {
  let folderName = [folder.name];
  folder.subFolders.forEach((subFolder) => {
    folderName = folderName.concat(getAllFolderNames(subFolder));
  });
  return folderName;
}

// export 를 수정하지 마세요.
export { getAllFolderNames };
