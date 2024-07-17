import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo.component';
import { MainComponent } from './components';

import { SubModule } from '../demo/sub';
import { SpeechRecognitionModule } from '../../projects/ngx-speech-recognition/src/public_api';

@NgModule({
  declarations: [DemoComponent, MainComponent],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    SpeechRecognitionModule.withConfig({
      lang: 'ja',

      interimResults: true,
      maxAlternatives: 10,

      // sample handlers.
      onaudiostart: (ev: Event) => console.log('onaudiostart', ev),
      onsoundstart: (ev: Event) => console.log('onsoundstart', ev),
      onspeechstart: (ev: Event) => console.log('onspeechstart', ev),
      onspeechend: (ev: Event) => console.log('onspeechend', ev),
      onsoundend: (ev: Event) => console.log('onsoundend', ev),
      onaudioend: (ev: Event) => console.log('onaudioend', ev),
      onresult: (ev: SpeechRecognitionEvent) => console.log('onresult', ev),
      onnomatch: (ev: SpeechRecognitionEvent) => console.log('onnomatch', ev),
      onerror: (ev: SpeechRecognitionError) => console.log('onerror', ev),
      onstart: (ev: Event) => console.log('onstart', ev),
      onend: (ev: Event) => console.log('onend', ev),
    }),

    // In SubModule, Component's providers are doing Demo
    // using SpeechRecognitionService generated.
    //
    SubModule,
  ],
  providers: [],
  bootstrap: [DemoComponent],
})
export class DemoModule {}
