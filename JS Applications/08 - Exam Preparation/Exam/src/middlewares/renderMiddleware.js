import { render } from '../../node_modules/lit-html/lit-html.js';
import { navigationView } from '../views/navigationView.js';

const headerElement = document.querySelector('.nav');
const contentElement = document.getElementById("content");

export const renderNavigationMiddleware = (ctx, next) => {

    render(navigationView(ctx), headerElement);
  
    next();
  };

  export const renderContentMiddleware = (ctx, next) => {
    ctx.render = templateResult => {
      render(templateResult, contentElement);
    };
  
    next();
  };
  