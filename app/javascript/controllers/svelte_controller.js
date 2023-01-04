import { Controller } from "@hotwired/stimulus";
import HelloWorld from "../svelte/HelloWorld.svelte";
import App from "../svelte/App.svelte";

// Connects to data-controller="svelte"
export default class extends Controller {
  connect() {
    console.log("Hello, Stimulus!", this.element);

    // const app = new HelloWorld({
    //   target: this.element,
    //   props: {
    //     target: "World",
    //   },
    // });

    const app = new App({
      target: this.element,
    });
  }
}
