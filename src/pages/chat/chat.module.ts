import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatPage } from './chat';
import { EmojiPickerComponentModule } from "../../components/emoji-picker/emoji-picker.module";
import { EmojiProvider } from "../../providers/emoji/emoji";

@NgModule({
  declarations: [
    //ChatPage,
  ],
  imports: [
	EmojiPickerComponentModule,
    IonicPageModule.forChild(ChatPage),
  ],
  providers: [
    EmojiProvider
  ]
})
export class ChatPageModule {}
