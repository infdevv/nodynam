const NoDynam = {
  createFile: function(key, content = '') {
    localStorage.setItem(key, content);
  },
  createFolder: function(folderName) {
    localStorage.setItem(folderName, JSON.stringify([]));
  },
  writeFile: function(key, content) {
    localStorage.setItem(key, content);
  },
  appendToFile: function(key, content) {
    let existingContent = localStorage.getItem(key) || '';
    existingContent += content;
    localStorage.setItem(key, existingContent);
  },
  readFile: function(key) {
    return localStorage.getItem(key);
  },
  deleteFile: function(key) {
    localStorage.removeItem(key);
  },
  deleteFolder: function(folderName) {
    const contents = JSON.parse(localStorage.getItem(folderName));
    if (contents) {
      contents.forEach(item => localStorage.removeItem(item));
      localStorage.removeItem(folderName);
    }
  },
  listFolderContents: function(folderName) {
    return JSON.parse(localStorage.getItem(folderName)) || [];
  },
  addToFolder: function(folderName, itemKey) {
    let contents = JSON.parse(localStorage.getItem(folderName)) || [];
    contents.push(itemKey);
    localStorage.setItem(folderName, JSON.stringify(contents));
  }
};
