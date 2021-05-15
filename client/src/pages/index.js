import loadable from '@loadable/component';

export const Home = loadable(() => import( /* webpackChunkName: "Home" */ './Home'))
export const Sub = loadable(() =>  import( /* webpackChunkName: "Sub" */ './Sub'))
export const Register = loadable(() => import( /* webpackChunkName: "Register" */ './Register'))

// /* webpackChunkName: "Home" */ : chunk file name을 지정해줌 
// 따로 지정하지 않을시 file name은 숫자로 표기 됨

// /* webpackPreload: true */ : 호출 시점에 브라우저가 반드시 가져오게 한다.
// /* webpackPrefetch: true */ : 호출 시점에 가져오지 않고, 브라우저가 여유가 될때 가져오게 한다. 