var getStyle=function getStyle(elementNode,propName){return parseInt(getComputedStyle(elementNode).getPropertyValue(propName),10)};var setStyle=function setStyle(elementNode,propName,value){elementNode.style[propName]=value};var css=function css(elementNode,propName,value){return!value?getStyle(elementNode,propName):setStyle(elementNode,propName,value)};export default css;