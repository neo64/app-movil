import { NgModule } from '@angular/core';
import { FbButtonIconComponent } from './fb-button-icon/fb-button-icon';
import { FbTituloSubtituloComponent } from './fb-titulo-subtitulo/fb-titulo-subtitulo';
@NgModule({
	declarations: [FbButtonIconComponent,
    FbTituloSubtituloComponent],
	imports: [],
	exports: [FbButtonIconComponent,
    FbTituloSubtituloComponent]
})
export class ComponentsModule {}
