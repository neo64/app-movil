import { NgModule } from '@angular/core';
import { FbButtonIconComponent } from './fb-button-icon/fb-button-icon';
import { FbTituloSubtituloComponent } from './fb-titulo-subtitulo/fb-titulo-subtitulo';
import { FbButtonComponent } from './fb-button/fb-button';
import { ExpandableComponent } from './expandable/expandable';
@NgModule({
	declarations: [FbButtonIconComponent,
    FbTituloSubtituloComponent,
    FbButtonComponent,
    ExpandableComponent],
	imports: [],
	exports: [FbButtonIconComponent,
    FbTituloSubtituloComponent,
    FbButtonComponent,
    ExpandableComponent]
})
export class ComponentsModule {}
