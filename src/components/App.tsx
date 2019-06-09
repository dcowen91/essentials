/** @jsx jsx */

import { Global, css, jsx } from "@emotion/core";
import * as React from "react";

export class App extends React.Component {
  public render(): React.ReactNode {
    const bodyStyle = css({
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      width: "100vw",
      backgroundColor: "rgb(40, 41, 54)"
    });
    const divStyle = css({
      color: "white"
    });
    return (
      <div css={bodyStyle}>
        <Global
          styles={{
            body: {
              margin: 0,
              padding: 0
            },
            "*": {
              fontFamily:
                "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
            }
          }}
        />
        <div css={divStyle}>{"Henlo there"}</div>
      </div>
    );
  }
}
