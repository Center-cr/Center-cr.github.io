//随机背景图片数组,图片可以换成图床链接，注意最后一条后面不要有逗号
var backimg =[
  "url(https://pic.imgdb.cn/item/676d157dd0e0a243d4eacb00.jpg)",
  "url(https://pic.imgdb.cn/item/676d15afd0e0a243d4eacbaf.jpg)",
  "url(https://pic.imgdb.cn/item/676d15aed0e0a243d4eacbad.jpg)",
  "url(https://pic.imgdb.cn/item/676d15aed0e0a243d4eacba8.jpg)"
];
//获取背景图片总数，生成随机数
var bgindex =Math.floor(Math.random() * backimg.length);
//重设背景图片
document.getElementById("web_bg").style.backgroundImage = backimg[bgindex];
//随机banner数组,图片可以换成图床链接，注意最后一条后面不要有逗号
var bannerimg =[
  "url(https://pic.imgdb.cn/item/676d157dd0e0a243d4eacb00.jpg)",
  "url(https://pic.imgdb.cn/item/676d15afd0e0a243d4eacbaf.jpg)",
  "url(https://pic.imgdb.cn/item/676d15aed0e0a243d4eacbad.jpg)",
  "url(https://pic.imgdb.cn/item/676d15aed0e0a243d4eacba8.jpg)"
];
//获取banner图片总数，生成随机数
var bannerindex =Math.floor(Math.random() * bannerimg.length);
//重设banner图片
document.getElementById("page-header").style.backgroundImage = bannerimg[bannerindex];