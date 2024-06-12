import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'Inicio',
  },
  {
    displayName: 'Dashboard',
    iconName: 'layout-dashboard',
    route: '/dashboard',
  },
  {
    navCap: 'Componentes',
  },
  {
    displayName: 'Reporte',
    iconName: 'rosette',
    route: '/ui-components/reporte',
  },
  {
    navCap: 'Evaluacion',
  },
  {
    displayName: 'Individual',
    iconName: 'rosette',
    route: '/ui-evaluacion/Evaluacion-individual',
  },
];
