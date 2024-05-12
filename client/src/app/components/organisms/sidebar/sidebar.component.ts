import { ChangeDetectionStrategy, Component, HostBinding, inject, signal } from '@angular/core';
import { IconComponent } from '../../atoms/icon/icon.component';
import { TextComponent } from '../../atoms/text/text.component';
import { routes } from '../../../app.routes';
import { RoutingData } from '../../../interfaces/route-list.interface';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: '[organism-sidebar]',
  standalone: true,
  imports: [IconComponent, TextComponent, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  router = inject(Router);
  hideSidebar = signal(false);

  private subscription: Subscription = new Subscription();

  @HostBinding('class.organism-sidebar') myClass = true;
  sectionList: RoutingData[] | any = [];
  ngOnInit(): void {
    this.detectRouteChange();
    this.sectionList =
      routes[0].children
        ?.filter((route) => route.data)
        .map((item) => {
          return { ...item.data, path: item.path };
        }) || [];
  }

  detectRouteChange() {
    this.hideSidebarIfIsService(this.router.url);
    this.subscription = this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.hideSidebarIfIsService(event.url);
      });
  }

  hideSidebarIfIsService(route: string) {
    this.hideSidebar.set(route.includes('service'));
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
