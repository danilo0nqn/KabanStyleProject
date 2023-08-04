import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-doom-page',
  templateUrl: './doom-page.component.html',
  styleUrls: ['./doom-page.component.scss']
})
export class DoomPageComponent implements OnInit{
  doomFilesReady: boolean = false;
  @ViewChild('doomIframe') doomIframe!: ElementRef

  ngOnInit(): void {
    setTimeout(() => {
      this.doomFilesReady = true
    }, 0)
  }

  onJoystickKeyPress(keyPressed: any){
    console.log('inside ouJoystickKeyPress')
    if (this.doomIframe) {
      const event = new KeyboardEvent('keydown', { key: keyPressed });
      this.doomIframe.nativeElement.contentWindow.document.dispatchEvent(event)
      /* const iframeWindow = this.doomIframe.nativeElement.contentWindow;
      iframeWindow.postMessage({ type: 'keydown', key: keyPressed }, '*'); */
      document.addEventListener('keydown', e => {
        const frame = this.doomIframe.nativeElement;
      
        // dispatch a new event
        this.doomIframe.nativeElement.contentDocument.dispatchEvent(
          new KeyboardEvent('keydown', {key: keyPressed})
        );
      })
    }
  }
  buttonClicked(){
    console.log(this.doomIframe.nativeElement.contentDocument)
    console.log(this.doomIframe?.nativeElement.contentWindow)
    console.log(this.doomIframe?.nativeElement.contentWindow.KeyboardEvent)
  }
}
