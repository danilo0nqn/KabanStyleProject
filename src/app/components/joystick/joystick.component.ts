import { Component, HostListener, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-joystick',
  templateUrl: './joystick.component.html',
  styleUrls: ['./joystick.component.scss']
})
export class JoystickComponent {
  stickPosition = { x: 0, y: 0 };
  isDragging = false;
  @ViewChild('joystick') joystickRef!: ElementRef;
  @ViewChild('textField') inputref!: ElementRef;
  @Output() simulateKeyPressOutput = new EventEmitter<string>();

  onTouchStart(event: TouchEvent): void {
    this.isDragging = true;
    this.onTouchMove(event); // Set initial position
  }

  onTouchMove(event: TouchEvent): void {
    if (this.isDragging) {
      const joystickElement = this.joystickRef.nativeElement;
      const joystickRect = joystickElement.getBoundingClientRect();
      const touch = event.touches[0];

      const offsetX = touch.clientX - joystickRect.left - joystickRect.width *1/2;/*  *50% - 66% */
      const offsetY = touch.clientY - joystickRect.top - joystickRect.height *1/2;
                                                                            /* *33% */
      this.stickPosition.x = Math.min(Math.max(offsetX, -joystickRect.width / 3), joystickRect.width / 3);
      this.stickPosition.y = Math.min(Math.max(offsetY, -joystickRect.height / 3), joystickRect.height / 3);
      if (this.stickPosition.y > 20){
        console.log('S');
        this.simulateKeyPress('s')
      } 
      if (this.stickPosition.y < -20) {
        console.log('W');
        this.simulateKeyPress('w')
        console.log(joystickRect.width + ' - ' + joystickRect.height)
      }
      if (this.stickPosition.x < -20){
        console.log('A')
        this.simulateKeyPress('a')
      }
      if (this.stickPosition.x > 20){
        console.log('D')
        this.simulateKeyPress('d')
      }
    }
  }

  simulateKeyPress(key: string) {
    const event = new KeyboardEvent('keydown', { key: key });
    if (dispatchEvent(event)){
      this.inputref.nativeElement.innerHTML = event.key
    }
    this.simulateKeyPressOutput.emit(key)
  }

  onTouchEnd(): void {
    this.isDragging = false;
    this.stickPosition = { x: 0, y: 0 };
  }

  getStickTransform(): string {
    return `translate(${this.stickPosition.x}px, ${this.stickPosition.y}px)`;
  }

  @HostListener('window:resize')
  onWindowResize(): void {
    // Reset the joystick position on window resize
    this.stickPosition = { x: 0, y: 0 };
  }
}
