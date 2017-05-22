export const news = state => state.news
export const topics = state => state.topics
export const sections = state => state.sections
export const posts = state => state.posts
export const topicPosts = state => state.topicPosts
export const sectionList = state => state.sectionList
export const index = state => state.index
export const loading = state => state.loading
export const flag = state => {
    
    if(window.localStorage.getItem("news")!=null){
            return !state.flag
    }
    return state.flag
}
export const shortComments = state => state.shortComments
export const longComments = state => state.longComments
