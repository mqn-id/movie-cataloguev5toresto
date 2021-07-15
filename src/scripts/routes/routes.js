import Home from '../views/pages/home';
import Review from '../views/pages/review';
import Detail from '../views/pages/detail';
import Like from '../views/pages/like';

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/review': Review,
  '/detail/:id': Detail,
  '/like': Like,
};

export default routes;
