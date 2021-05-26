import { IRouter } from "aurelia-direct-router";

export class WelcomePage {
  constructor(@IRouter private router: IRouter) {
  }
  
  public message = 'Welcome to Aurelia 2!';
  public value: string = "Demo";
  
  onGoToAboutClick() {
    this.router.load({
      component: "about-page",
      options: {
        append: true
      }
    })
  }
}
