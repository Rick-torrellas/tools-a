import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Button from "react-bootstrap/Button";
import { CopyToClipboard } from "react-copy-to-clipboard";

import Icons, {Imagen} from "./Icons";
import dataRaw from "./../data/data";

export default function Content() {
  return (
    <Container fluid>
      <Fila />
    </Container>
  );
}
function Fila() {
  return (
    <Row xs={1} sm={2} md={2} lg={4} xl={4} xxl={4} className="g-4">
      {dataRaw.map((data) => {
        return (
          <Colum
            title={data.title}
            desc={data.desc}
            npmClone={data.npmClone}
            githubClone={data.githubClone}
            githubRepo={data.githubRepo}
            npmRepo={data.npmRepo}
            docs={data.docs}
            logoPath={data.logoPath}
            officialPage={data.officialPage}
          />
        );
      })}
    </Row>
  );
}
function Colum(props) {
  return (
    <Col >
      <Cartas
        title={props.title}
        desc={props.desc}
        npmClone={props.npmClone}
        githubClone={props.githubClone}
        githubRepo={props.githubRepo}
        npmRepo={props.npmRepo}
        docs={props.docs}
        logoPath={props.logoPath}
        officialPage={props.officialPage}
      />
    </Col>
  );
}
function Cartas(props) {
  const title = props.title;
  const desc = props.desc;
  const npmClone = props.npmClone;
  const githubClone = props.githubClone;
  const githubRepo = props.githubRepo;
  const npmRepo = props.npmRepo;
  const docs = props.docs;
  const logoPath = props.logoPath;
  const officialPage = props.officialPage;
  // Debug
  if (
    title ||
    desc ||
    npmClone ||
    githubClone ||
    githubRepo ||
    npmRepo ||
    docs ||
    logoPath ||
    officialPage
  ) {
    return (
      <Card style={{ width: "60%" }} border="warning">
        <Card.Header
          style={{ backgroundColor: "rgba(66, 61, 61,0.2)", color: "dark" }}
        >
          <Card.Title>
            <Imagen width="18%" src={logoPath} /> {title}
          </Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Text>{desc}</Card.Text>
          <Overley npmCLone={npmClone} githubClone={githubClone} />
        </Card.Body>
        <Card.Footer style={{ backgroundColor: "rgba(255, 28, 28, 0.8)" }}>
          <Card.Link href={githubRepo}>
            {githubRepo && 
              <Icons.Github width="10%"/>
            }
          </Card.Link>
          <Card.Link href={npmRepo}>
            {npmRepo && 
            <Icons.Npm width="10%"/>
            }
            </Card.Link>
          <Card.Link href={officialPage}>
            {officialPage && 
              <Icons.Web width="10%" />
            }
          </Card.Link>
          <Card.Link href={docs}>
            {docs && 
            <Icons.Book width="10%"/>
            }
            </Card.Link>
        </Card.Footer>
      </Card>
    );
  } else return null;
}

function Overley(props) {
  if (props.npmClone || props.githubClone) {
    return (
      <>
        <OverlayTrigger
          trigger="click"
          placement={"bottom"}
          overlay={
            <Popover id={`popover-positioned-bottom`}>
              {props.npmClone && (
                <>
                  <Popover.Header as="h3">NPM</Popover.Header>
                  <Popover.Body>
                    <code>{props.npmClone}</code>
                    <CopyToClipboard text={props.npmClone}>
                      <span>
                        <Icons.Clipboard width="10%" code={props.npmClone} />
                      </span>
                    </CopyToClipboard>
                  </Popover.Body>
                </>
              )}
              {props.githubClone && (
                <>
                  <Popover.Header as="h3">Github</Popover.Header>
                  <Popover.Body>
                    <code>{props.githubClone}</code>
                    <CopyToClipboard text={props.githubClone}>
                      <span>
                        <Icons.Clipboard width="10%" code={props.githubClone} />
                      </span>
                    </CopyToClipboard>
                  </Popover.Body>
                </>
              )}
            </Popover>
          }
        >
          <Button
            variant="secondary"
            className="badge bg-danger"
            style={{ marginLeft: "60%" }}
          >
            Install
          </Button>
        </OverlayTrigger>
      </>
    );
  } else return null;
}