import axios from 'axios'

// 获取文章列表
const getList = (params) => {
  return new Promise((resolve, reject) => {
    axios.get('/client_demo_api/article/listData', {params}).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}

// 获取文章
const getArticle = (params) => {
  return new Promise((resolve, reject) => {
    axios.get('/client_demo_api/article/articleInfo', {params}).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}

const getCategory = () => {
  return new Promise((resolve, reject) => {
    axios.get('/client_demo_api/article/getCategory').then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}

const getRandomArticle = () => {
  return new Promise((resolve, reject) => {
    axios.get('/client_demo_api/article/randomArticle').then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}

export {
  getList,
  getArticle,
  getCategory,
  getRandomArticle
}
