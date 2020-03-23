import React from "react";
import "./App.scss";
import catPhoto from "./cat.jpg";

import { Stack } from "./Stack/Stack";
import { Box } from "./Box/Box";
import { ContentBlock } from "./ContentBlock/ContentBlock";
import { Cluster } from "./Cluster/Cluster";
import { Frame } from "./Frame/Frame";
import { Switcher } from "./Switcher/Switcher";

function App() {
  return (
    <main className="App">
      <Stack space="xl">
        <h1 className="font-size:giant font-weight:bold">Layout Primitives</h1>
        <section>
          <Stack>
            <h2 className="font-size:bigger font-weight:bold">ContentBlock</h2>
            <ContentBlock>
              <p>
                ContentBlock (maybe rename to TextBlock?) confines the block to
                a readable width. Default is "md" and sets an ideal max-width of
                70 characters.
              </p>
            </ContentBlock>
            <ContentBlock width="sm">
              <p>
                This is a small width block that confines the width to 50
                characters. Not sure why we would need this, but who knows. It
                does have the benefit of being a little more legible
              </p>
            </ContentBlock>
            <ContentBlock width="lg">
              <p>
                This is a large width block. It actually exceeds the recommended
                reading width of a column of text. But I know there will be some
                idiot that will complain about how text is wrapping at a smaller
                width so whatever.
              </p>
            </ContentBlock>
          </Stack>
        </section>

        <section>
          <Stack>
            <h2 className="font-size:bigger font-weight:bold">Box</h2>

            <ContentBlock>
              <p>
                A Box is a self-contained design unit with uniform padding and
                border. Optionally you can add a shadow because why not?!
              </p>
            </ContentBlock>

            <Switcher>
              <Box shadow="1">Box</Box>
              <Box shadow="2">Box</Box>
            </Switcher>
            <Switcher>
              <Box shadow="3">Box</Box>
              <Box shadow="4">Box</Box>
            </Switcher>
            <Switcher>
              <Box hasBorder>Box</Box>
              <Box hasBorder>Box</Box>
            </Switcher>
            <Switcher>
              <Box hasBorder>Box</Box>
              <Box hasBorder>Box</Box>
            </Switcher>
          </Stack>
        </section>

        <section>
          <Stack>
            <h2 className="font-size:bigger font-weight:bold">Stack</h2>

            <ContentBlock>
              <p>
                Stack displays children in a vertical stack with space between
                the children, but with no space above or below the stack itself.
              </p>
            </ContentBlock>

            <Stack space="sm">
              <Box className="blue">Stack child</Box>
              <Box className="blue">Stack child</Box>
              <Box className="blue">Stack child</Box>
            </Stack>
          </Stack>
        </section>

        <section>
          <Stack>
            <h2 className="font-size:bigger font-weight:bold">Cluster</h2>

            <ContentBlock>
              <p>
                Cluster maintains uniform spacing and alignment of elements
                displayed inline, so that they wrap correctly without adding
                extra space above, below, or on the left and right edges.
              </p>
            </ContentBlock>

            <Cluster margin="sm">
              <Box padding="sm" className="yellow">
                Foo Bar
              </Box>
              <Box padding="md" className="yellow">
                Foo bar baz
              </Box>
              <Box padding="lg" className="yellow">
                Bip
              </Box>
              <Box padding="md" className="yellow">
                Bip Bop
              </Box>
              <Box padding="sm" className="yellow">
                Bip Bop
              </Box>
              <Box padding="md" className="yellow">
                Foo Bar
              </Box>
              <Box padding="sm" className="yellow">
                Foo bar baz
              </Box>
              <Box padding="md" className="yellow">
                Bip
              </Box>
              <Box padding="md" className="yellow">
                Bippie Bop Apple Tree Bunch
              </Box>
              <Box padding="lg" className="yellow">
                Foo Bar
              </Box>
              <Box padding="sm" className="yellow">
                Foo bar baz
              </Box>

              <Box padding="md" className="yellow">
                Bip Bop
              </Box>
            </Cluster>
          </Stack>
        </section>

        <section>
          <Stack>
            <h2 className="font-size:bigger font-weight:bold">Switcher</h2>

            <ContentBlock>
              <Stack space="sm">
                <p>
                  Switcher displays children horizontally if the parent
                  container's width is larger than the given threshold, and
                  vertically if it is smaller than the threshold.
                </p>
                <p>
                  Essentially, a media query breakpoint, except it breaks at the
                  provided threshold instead of a set of pre-defined window
                  widths.
                </p>
              </Stack>
            </ContentBlock>

            <Switcher threshold="800px">
              <Box className="red">Foo</Box>
              <Box className="red">Bar</Box>
              <Box className="red">Baz</Box>
            </Switcher>
          </Stack>
        </section>

        <section>
          <Stack>
            <h2 className="font-size:bigger font-weight:bold">Frame</h2>

            <ContentBlock>
              <Stack space="sm">
                <p>
                  Frame crops its child to conform to an provided aspect ratio.
                  Allows images to be displayed using a standard img tag instead
                  of having to use a background image.
                </p>
                <p>
                  In addition to forcing an aspect ratio, Frame can also control
                  scaling and positioning of images
                </p>
                <p>Intended for images or video, but works with anything.</p>
              </Stack>
            </ContentBlock>

            <Switcher threshold="500px">
              <div>
                <Frame aspectRatio="2:3" objectPosition="-30px 10px" scale="2">
                  <img src={catPhoto} alt="Cat" />
                </Frame>
              </div>
              <div>
                <Frame aspectRatio="1:1" objectPosition="10px 10px" scale="1.5">
                  <img src={catPhoto} alt="Cat" />
                </Frame>
              </div>
              <div>
                <Frame aspectRatio="4:3" objectPosition="10px 0" scale="1.5">
                  <img src={catPhoto} alt="Cat" />
                </Frame>
              </div>
              <div>
                <Frame aspectRatio="16:9">
                  <img src={catPhoto} alt="Cat" />
                </Frame>
              </div>
            </Switcher>
          </Stack>
        </section>
      </Stack>
    </main>
  );
}

export default App;
