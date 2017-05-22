import NewsContent from 'components/NewsContent'
import NewsList from 'components/NewsList'
import TopicList from 'components/TopicList'
import SectionList from 'components/SectionList'
import Topics from 'components/Topics'
import Section from 'components/Section'
export default {
  routes: [{
      path: '/',
      component: NewsList
    },
    {
      path: '/news/:id',
      component: NewsContent
    },
    {
      path: '/topic/:id',
      component: TopicList
    },
    {
      path: '/section/:id',
      component: SectionList
    },
    {
      name:'topics',
      path: '/topics',
      component: Topics
    },
    {
      name:'sections',
      path: '/sections',
      component: Section
    }
  ]
}
