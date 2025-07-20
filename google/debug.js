const text = '[[["MkEWBc","[["非常满意。","zh-CN","en",1],[]]",null,"generic"]]]&';

console.log('原始文本:', text);
console.log('encodeURIComponent结果:', encodeURIComponent(text));

// 模拟URL参数构建过程
const encodedText = encodeURIComponent(text);
const urlParam = `f.req=${encodedText}`;
console.log('作为URL参数:', urlParam);

// 验证：如果我们在URL中看到的是&结尾，说明%26被解码了
console.log('\n验证过程:');
console.log('1. 原始&字符的编码:', encodeURIComponent('&'));
console.log('2. 在URL参数中，%26会被解码回&');
console.log('3. 所以f.req参数末尾显示为&而不是%26'); 