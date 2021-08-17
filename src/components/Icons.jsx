import React from "react";
import Image from "react-bootstrap/Image";

export default function Icons() {
  return <div></div>;
}
export function Inpm() {
  return (
    <ImagenRounded 
        path="/icon/npm.png"
        size="30px"
        margin="ms-3"
    />
  )
}
export function IofficialPage() {
  return (
    <ImagenRounded 
        path='/icon/planet-earth.png'
        size="30px"
        margin="ms-3"
    />
  )
}
export function Iicon(props) {
  if (props.path) {
    return (
      <ImagenRounded 
      path={props.path}
      size="60px"
      margin="me-2"
      />
    )
  } else return null;
}

export function Igithub() {
  return (
    <ImagenRounded 
    title="Github Repo" 
    path="/icon/github.png" 
    size="30px" 
    margin="ms-3"
    />
  );
}
export function Ibook() {
  return <ImagenRounded 
  title="Docs" 
  path="/icon/open-book.png" 
  size="30px" 
  margin="ms-3"
  />;
}
export function Irating(props) {
  const rating = props.rating;
  if (rating === 1) {
    return <Istart />;
  }
  if (rating === 2) {
    return (
      <div>
        <Istart />
        <Istart />
      </div>
    )
  } 
  if (rating === 3) {
    return (
      <div>
        <Istart />
        <Istart />
        <Istart />
      </div>
    )
  } 
  if (rating === 4) {
    return (
      <div>
        <Istart />
        <Istart />
        <Istart />
        <Istart />
      </div>
    )
  } 
  if (rating === 5) {
    return (
      <div>
        <Istart />
        <Istart />
        <Istart />
        <Istart />
        <Istart />
      </div>
    )
  } 
  else {
    return null;
  }
}
export function Istart() {
  return <ImagenRounded 
  title="Rating" 
  path="/icon/star.png" 
  size="15px" 
  margin="ms-3"
  />;
}
export class  Iclipboard extends React.Component {
  render () {
    return (
      <ImagenRounded
        title="Copy to Clipboard"
        path="/icon/clipboard.png"
        size="30px"
        margin="ms-3"
      />
    )};
}
function ImagenRounded(props) {
  return (
    <Image
      title={props.title}
      className={props.margin}
      src={process.env.PUBLIC_URL + props.path}
      style={{ width: props.size }}
      rounded
    />
  );
}
