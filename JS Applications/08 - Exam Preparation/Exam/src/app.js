import page from '../node_modules/page/page.mjs'
import { authMiddleware } from './middlewares/authMiddleware.js';
import { renderContentMiddleware, renderNavigationMiddleware } from './middlewares/renderMiddleware.js';
import { creatView } from './views/creatView.js';
import { dashboardView } from './views/dashboarView.js';
import { deleteView } from './views/deleteView.js';
import { detailsView } from './views/detailsView.js';
import { donateView } from './views/donateView.js';
import { editView } from './views/editView.js';
import { homeView } from './views/homeView.js';
import { loginView } from './views/loginView.js';
import { logoutView } from './views/logoutView.js';
import { registerView } from './views/registerView.js';

page(authMiddleware)
page(renderNavigationMiddleware)
page(renderContentMiddleware)

page('/',homeView)
page('/login',loginView)
page('/register',registerView)
page('/logout',logoutView)
page('/dashboard',dashboardView)
page('/creat',creatView)
page('/details/:id',detailsView)
page('/edit/:id',editView)
page('/delete/:id',deleteView)
page('/donate/:id',donateView)

page.start();