// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import NxWelcome from './nx-welcome';
import {Button, NextUIProvider} from "@nextui-org/react";

export function App() {
  return (
    <NextUIProvider>
      <Button>Press me</Button>
    </NextUIProvider>
  );
}

export default App;
