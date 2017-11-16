// get menu() {
//     return this.currentMenu[this.currentMenu.length - 1] || "";
// }
// set menu(item) {
//     console.log("looking for " + item);
//     var path = this._path(this.items, "title", item);
//     this.currentMenu = path.split(".");
//     console.log(this.currentMenu);
// }
//
// _path(c, k, v, currentPath, t) {
//     //0: file,edit; title, file1, undef, undef
//     //1: file1,file2; title, file1, root.file
//     console.log(arguments);
//     var currentPath = currentPath || "root";
//     //0: cp = root
//     //1: cp = root.file
//     for (var i = 0; i < c.length; i++) {
//         //0: true
//         if (c[i][k] == v) {
//             console.log("found " + v);
//             t = currentPath;
//             break;
//         }
//         //0: true
//         else if (c[i].hasOwnProperty("items")) {
//             console.log("looking at path of " + c[i][k]);
//             var path = this._path(c[i]["items"], k, v, currentPath + "." + c[i][k]);
//             if (path.includes(v)) {
//                 return path;
//             }
//         }
//         console.log(currentPath);
//     }
//
//     return t + "." + v;
// };
