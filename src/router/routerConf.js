// import BlogContent from '../pages/blogContent';
import Blog from '../pages/blog';

// const page404=Loadable({loader:() => import('pages/404'),loading: Loading});
const routerConf = [
  // {
  //   path: '/blogcontent',
  //   layout: null,
  //   component: BlogContent
  //   // redirect: '/sales-plan'
  // },
  {
    path: '/blog',
    layout: null,
    component: Blog
    // redirect: '/sales-plan'
  }
  // {
  //   path: '*',
  //   layout: MainLayout,
  //   component: page404,
  // }
]

export default routerConf;
