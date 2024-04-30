import { Component, HostBinding } from '@angular/core';
import { IconComponent } from '../../atoms/icon/icon.component';
import { TextComponent } from '../../atoms/text/text.component';
import { routes } from '../../../app.routes';
import { RoutingData } from '../../../interfaces/route-list.interface';

@Component({
  selector: '[organism-sidebar]',
  standalone: true,
  imports: [IconComponent, TextComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  @HostBinding('class.organism-sidebar') myClass = true;
  sectionList: RoutingData[] | any = [];
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.sectionList =
      routes[0].children?.filter((route) => route.data).map((item) => item.data) || [];

    console.log(this.sectionList);
  }
}
