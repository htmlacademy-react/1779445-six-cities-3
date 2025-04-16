import {AppRoute} from '../../const.ts';

const getLayoutState = (pathname: AppRoute) => {
  let rootClassName = '';
  let linkClassName = '';
  let shouldRenderLoggedUser = true;
  let shouldRenderFooter = false;

  if(pathname === AppRoute.Root){
    rootClassName = 'page--gray page--main';
    linkClassName = 'header__logo-link--active';
  } else if(pathname === AppRoute.Login){
    rootClassName = 'page--gray page--main';
    shouldRenderLoggedUser = false;
  } else if(pathname === AppRoute.Favorites){
    shouldRenderFooter = true;
  }

  return {rootClassName, linkClassName, shouldRenderLoggedUser, shouldRenderFooter};
};

export {getLayoutState};
