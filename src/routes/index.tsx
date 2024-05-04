import { Suspense } from "solid-js";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Title } from "@solidjs/meta";
import Counter from "~/components/Counter";

export default function index() {
  return (
    <main>
      <Title>Hello World</Title>
      <h1>Hello world!</h1>
      <img src="/images/logo-untdf.png" alt="logasos"  style="width:200px; height:200px; "/>
      <Counter />
      <p>
        Visit{" "}
        <a href="https://start.solidjs.com" target="_blank">
          start.solidjs.com
        </a>{" "}
        to learn how to build SolidStart apps.
      </p>
      {/* <Router root={(props) => <Suspense>{props.children}</Suspense>}>
        <FileRoutes />
      </Router> */}
    </main>
  );
  const styles={
    container:{
      width:'200px',
      height:'200px'
    }
  }
}
