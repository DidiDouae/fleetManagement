import { Routes } from '@angular/router';

const Routing: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'builder',
    loadChildren: () =>
      import('./builder/builder.module').then((m) => m.BuilderModule),
  },
  {
    path: 'vehicule',
    loadChildren: () =>
      import('./vehicule/vehicule.module').then((m) => m.VehiculeModule),
  },
  {
    path: 'piece',
    loadChildren: () =>
      import('./piece/piece.module').then((m) => m.PieceModule),
  },
  {
    path: 'paiement',
    loadChildren: () =>
      import('./paiement/paiement.module').then((m) => m.PaiementModule),
  },
  {
    path: 'demande',
    loadChildren: () =>
      import('./demande/demande.module').then((m) => m.DemandeModule),
  },
  {
    path: 'mission',
    loadChildren: () =>
      import('./mission/mission.module').then((m) => m.MissionModule),
  },
  {
    path: 'chauffeur',
    loadChildren: () =>
      import('./chauffeur/chauffeur.module').then((m) => m.ChauffeurModule),
  },
  {
    path: 'consommation',
    loadChildren: () =>
      import('./consommation/consommation.module').then((m) => m.ConsommationModule),
  },
  {
    path: 'crafted/pages/profile',
    loadChildren: () =>
      import('../modules/profile/profile.module').then((m) => m.ProfileModule),
  },
  {
    path: 'crafted/account',
    loadChildren: () =>
      import('../modules/account/account.module').then((m) => m.AccountModule),
  },
  {
    path: 'crafted/pages/wizards',
    loadChildren: () =>
      import('../modules/wizards/wizards.module').then((m) => m.WizardsModule),
  },
  {
    path: 'crafted/widgets',
    loadChildren: () =>
      import('../modules/widgets-examples/widgets-examples.module').then(
        (m) => m.WidgetsExamplesModule
      ),
  },
  {
    path: 'apps/chat',
    loadChildren: () =>
      import('../modules/apps/chat/chat.module').then((m) => m.ChatModule),
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'error/404',
  },
];

export { Routing };
