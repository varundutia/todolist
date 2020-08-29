import { Component, Prop, h, State } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;
  // @State() ack: boolean = false;
  @Prop() csss: string;
  // private getText(): string {
  //   return format(this.first, this.middle, this.last);
  // }
  handleClick(event: UIEvent) {
    // alert('Received the button click!');
    var a=document.getElementById(this.first);
    document.getElementById("main").removeChild(a);
    // this.ack=true;
  }
  
  render() {
    var stmt = <div><span>{this.first}</span><button onClick={this.handleClick.bind(this)}>✓</button></div>;
    return stmt;
  }
}
