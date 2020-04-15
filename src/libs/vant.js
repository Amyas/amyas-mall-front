import {
  Search,
  Swipe,
  SwipeItem,
  Lazyload,
  Grid,
  GridItem,
  List,
  Image,
  Loading,
  Tabbar,
  TabbarItem,
  Sidebar,
  SidebarItem,
  Tabs,
  Tab,
  Card,
  Stepper,
  SwipeCell,
  Button,
  SubmitBar,
  Checkbox,
  Cell,
  CellGroup,
  Radio,
  RadioGroup
} from 'vant'

export default Vue => {
  Vue
    .use(Search)
    .use(Swipe)
    .use(SwipeItem)
    .use(Lazyload)
    .use(Grid)
    .use(GridItem)
    .use(List)
    .use(Image)
    .use(Loading)
    .use(Tabbar)
    .use(TabbarItem)
    .use(Sidebar)
    .use(SidebarItem)
    .use(Tabs)
    .use(Tab)
    .use(Card)
    .use(Stepper)
    .use(SwipeCell)
    .use(Button)
    .use(SubmitBar)
    .use(Checkbox)
    .use(Cell)
    .use(CellGroup)
    .use(Radio)
    .use(RadioGroup)
}
