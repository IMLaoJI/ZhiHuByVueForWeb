export const ADD_NEWS = (state, news) => {
  state.news.push(news)
  state.news.sort((a, b) => {
    return b.date - a.date
  })
}

export const GETNEWS_BEFORE = (state, news) => {
  //console.log("2");
  state.news.push(news)
  state.news.sort((a, b) => {
    return b.date - a.date
  })
}

export const CHANGE_LOADING = (state) => {
  state.loading = !state.loading
}

export const UPDATE_NEWS = (state, news) => {
  let find = false

  state.news.forEach(x => {
    //对于同一天不同时间更新的新闻做处理
    if (x.date === news.date) {
      // 对相同日期的内容做处理
      news.stories.forEach(y => {
        if (!x.stories.some(z => { return z.id === y.id })) {
          x.stories.splice(0, 0, y)
        }
      })
      // 更新顶部轮播图
      news.top_stories.forEach(y => {
        if (!x.top_stories.some(z => { return z.id === y.id })) {
          x.top_stories.pop()
          x.top_stories.unshift(y)
        }
      })
      find = true
    }
  })

  if (!find) {
    state.news.push(news)
  }

  state.news.sort((a, b) => {
    return b.date - a.date
  })
}

export const ADD_TOPICS = (state, topics) => {
  state.topics = topics
}

export const ADD_SECTIONS = (state, sections) => {
  state.sections = sections
}

export const ADD_POSTS = (state, post) => {
  state.posts.push(post)
}

export const ADD_TOPICPOSTS = (state, posts) => {
  state.topicPosts = posts
}


export const ADD_SHORTCOMMENTS = (state, scomments) => {
  state.shortComments = scomments
}
export const ADD_LONGCOMMENTS = (state, lcomments) => {
  state.longComments = lcomments
}


export const ADD_SECTIONLIST = (state, section) => {
  state.sectionList = section
}

export const ADD_INDEX = (state) => {
  state.index++
}
