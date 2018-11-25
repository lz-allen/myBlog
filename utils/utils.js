function IsPC () {
  let flag = true
  let userAgentInfo = navigator.userAgent.toLowerCase()
  let Agents = new Array('android', 'iphone', 'symbianOS', 'windows phone', 'ipad', 'ipod')
  for (var v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false
      break
    }
  }
  if (window.screen.width >= 768) {
    flag = true
  }
  return flag
}

function formatTime (time) {
  let date = new Date(time)
  return date.getFullYear() + '-' + addZero((date.getMonth() + 1)) + '-' + addZero(date.getDate())
}

function addZero (num) {
  return num < 10 ? '0' + num : '' + num
}

export {
  IsPC,
  formatTime
}
