// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = {padrao:[
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: icon('ic_analytics'),
  },
  {
    title: 'user',
    path: '/dashboard/user',
    icon: icon('ic_user'),
  },
  {
    title: 'Vendas',
    path: '/dashboard/vendas',
    icon: icon('ic_cart'),
  },
  {
    title: 'Estabelecimentos',
    path: '/dashboard/blog',
    icon: icon('ic_blog'),
  },
  {
    title: 'Pagamentos',
    path: '/login',
    icon: icon('ic_lock'),
  },
  {
    title: 'Not found',
    path: '/404',
    icon: icon('ic_disabled'),
  },
  {
    title: 'Teste',
    path: '/dashboard/test',
    icon: icon('ic_disable'),
  }
],
master:[
  {
    title: 'Criar Acesso',
    path: '/acess',
    icon: icon('ic_analytics')
  },
  {
    title: 'Criar Estabelecimento',
    path: '/estebelecimento',
    icon: icon('ic_analytics')
  },
  {
    title: 'Criar Usuário',
    path: '/usuario',
    icon: icon('ic_analytics')
  },
  {
    title: 'Listar',
    path: '/lista',
    icon: icon('ic_analytics')
  }
]
};


/* {padrao:[
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: icon('ic_analytics'),
  },
  {
    title: 'user',
    path: '/dashboard/user',
    icon: icon('ic_user'),
  },
  {
    title: 'Transferencias',
    path: '/dashboard/products',
    icon: icon('ic_cart'),
  },
  {
    title: 'Estabelecimentos',
    path: '/dashboard/blog',
    icon: icon('ic_blog'),
  },
  {
    title: 'Pagamentos',
    path: '/login',
    icon: icon('ic_lock'),
  },
  {
    title: 'Not found',
    path: '/404',
    icon: icon('ic_disabled'),
  },
],
master:[
  {
    title: 'Criar Acesso',
    path: '/acess',
    icon: icon('ic_analytics')
  },
  {
    title: 'Criar Estabelecimento',
    path: '/estebelecimento',
    icon: icon('ic_analytics')
  },
  {
    title: 'Criar Usuário',
    path: '/usuario',
    icon: icon('ic_analytics')
  },
  {
    title: 'Listar',
    path: '/lista',
    icon: icon('ic_analytics')
  }
]
}; */ 
export default navConfig;
