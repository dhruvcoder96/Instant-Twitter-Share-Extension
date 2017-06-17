var lst = ["selection","link","image","page"];
for(var i=0;i<lst.length;i++){
chrome.contextMenus.create({
  title:"Twitter Sharing Assistant for "+lst[i],
  contexts:[lst[i]],
  onclick:func,
  id:lst[i]
});
}


function func(abc,tab){
  switch(abc.menuItemId){
    case "selection": chrome.windows.create({url:"https://twitter.com/share?text="+abc.selectionText+"--Shared via a Chrome Extension by Dhruv Dangwal",type:"panel"});
    break;
    case "link": chrome.windows.create({url:"https://twitter.com/share?url="+abc.linkUrl+"-- Shared via a Chrome Extension by Dhruv Dangwal", type:"panel"});
    break;
    case "image": chrome.windows.create({url:"https://twitter.com/share?url="+abc.srcUrl+"-- Shared via a Chrome Extension by Dhruv Dangwal", type:"panel"});
    break;
    case "page": chrome.windows.create({url:"https://twitter.com/share?text="+tab.title+"  "+abc.pageUrl+"--Shared via a Chrome Extension by Dhruv Dangwal", type:"panel"});
    break;
  }
}
