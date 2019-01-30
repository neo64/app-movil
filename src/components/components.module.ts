import { NgModule } from '@angular/core';
import { FbButtonIconComponent } from './fb-button-icon/fb-button-icon';
import { FbTituloSubtituloComponent } from './fb-titulo-subtitulo/fb-titulo-subtitulo';
import { FbButtonComponent } from './fb-button/fb-button';
@NgModule({
	declarations: [FbButtonIconComponent,
    FbTituloSubtituloComponent,
    FbButtonComponent],
	imports: [],
	exports: [FbButtonIconComponent,
    FbTituloSubtituloComponent,
    FbButtonComponent]
})
export class ComponentsModule {}
