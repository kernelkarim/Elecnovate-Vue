import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import UserInterfaceExperience from './views/user-interface-experience'
import ContactUs from './views/contact-us'
import AboutUs from './views/about-us'
import DevelopmentExcellenceHub from './views/development-excellence-hub'
import GraphicDesign from './views/graphic-design'
import Home from './views/home'
import WebsiteDesign from './views/website-design'
import DesignFeatures from './views/design-features'
import OurStory from './views/our-story'
import SocialMediaDesign from './views/social-media-design'
import NotFound from './views/not-found'
import './style.css'

Vue.use(Router)
Vue.use(Meta)
export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'User-Interface-Experience',
      path: '/user-interface-experience',
      component: UserInterfaceExperience,
    },
    {
      name: 'Contact-us',
      path: '/contact-us',
      component: ContactUs,
    },
    {
      name: 'About-us',
      path: '/about-us',
      component: AboutUs,
    },
    {
      name: 'Development-Excellence-Hub',
      path: '/development-excellence-hub',
      component: DevelopmentExcellenceHub,
    },
    {
      name: 'Graphic-Design',
      path: '/graphic-design',
      component: GraphicDesign,
    },
    {
      name: 'Home',
      path: '/',
      component: Home,
    },
    {
      name: 'Website-Design',
      path: '/website-design',
      component: WebsiteDesign,
    },
    {
      name: 'Design-Features',
      path: '/design-features',
      component: DesignFeatures,
    },
    {
      name: 'Our-Story',
      path: '/our-story',
      component: OurStory,
    },
    {
      name: 'Social-Media-Design',
      path: '/social-media-design',
      component: SocialMediaDesign,
    },
    {
      name: '404 - Not Found',
      path: '**',
      component: NotFound,
      fallback: true,
    },
  ],
})
