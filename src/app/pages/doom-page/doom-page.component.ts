import { Component, OnInit, ElementRef, ViewChild, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-doom-page',
  templateUrl: './doom-page.component.html',
  styleUrls: ['./doom-page.component.scss']
})
export class DoomPageComponent implements OnInit, OnDestroy{
  doomFilesReady: boolean = false;
  @ViewChild('doomIframe') doomIframe!: ElementRef
  mobileQuery: MediaQueryList
  private _mobileQueryListener: () => void;

  constructor(private changeDetectorRef: ChangeDetectorRef, media: MediaMatcher){
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.doomFilesReady = true
    }, 1500)
  }

  onJoystickKeyPress(keyPressed: any){
    console.log('inside ouJoystickKeyPress')
    if (this.doomIframe) {
      const event = new KeyboardEvent('keydown', { key: keyPressed });
      /* this.doomIframe.nativeElement.contentWindow.JSEvents.jsEventHandler(event); */
      this.doomIframe.nativeElement.focus()
      console.log(event)
      console.log(this.doomIframe.nativeElement.contentWindow.JSEvents.jsEventHandler)
      console.log(this.doomIframe.nativeElement.contentWindow.registerKeyEventCallback.userData)
      console.log(this.doomIframe.nativeElement.contentWindow.JSEvents.jsEventHandler(event))
    }
  }
  buttonClicked(){
    const event = new KeyboardEvent('keydown', 
    {
       key: "w",
       code: "KeyW",
       which: 87,
       keyCode: 87,
       bubbles: true,
       cancelable: true,
       ctrlKey: false,
       shiftKey: false,
       altKey: false,
       metaKey: false,
       repeat: false
    });
    console.log(event)
    /* this.doomIframe.nativeElement.contentWindow.JSEvents.jsEventHandler(event); */
    /* console.log(this.doomIframe.nativeElement.contentWindow.JSEvents.jsEventHandler(event)) */
    this.doomIframe.nativeElement.contentWindow.test(event)
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
