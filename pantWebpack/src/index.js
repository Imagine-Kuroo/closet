import _ from 'lodash';
import './res/style/global.css'
import avatar from './res/img/avatar.jpg'

function component() {
  let element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  
  // 插入图片
  var myAvatar = new Image();
  myAvatar.src = avatar;
  element.appendChild(myAvatar);

  return element;
}

document.body.appendChild(component());