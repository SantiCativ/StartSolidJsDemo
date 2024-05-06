import { Suspense } from "solid-js";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Title } from "@solidjs/meta";
import Counter from "~/components/Counter/Counter";

export default function index() {
  return (
    <main>
      <img src="/images/logo-untdf.png" alt="logasos"  style="width:200px; height:200px; "/>
      <Counter />
      
    </main>
  );
  const styles={
    container:{
      width:'200px',
      height:'200px'
    }
  }
}
