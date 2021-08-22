import React from "react";
import Image from "react-bootstrap/Image";

const Icons = {}

export default Icons();

Icons.npm = function() {
  return (
    <ImagenRounded 
        path="https://res.cloudinary.com/rick-rick-torrellas/image/upload/v1629322014/icons/npm_lcqxoe.svg"
        size="30px"
        margin="ms-3"
    />
  )
}
export function IofficialPage() {
  return (
    <ImagenRounded 
        path='https://res.cloudinary.com/rick-rick-torrellas/image/upload/v1629293147/earth-globe_p6d5xk.png'
        size="15%"
        title="Official Web"
    />
  )
}
export function Iicon(props) {
  if (props.path) {
    return (
      <ImagenRounded 
      path={props.path}
      size="15%"
      margin="me-2"
      />
    )
  } else return null;
}

export function Igithub() {
  return (
    <ImagenRounded 
    title="Github Repo" 
    path="https://res.cloudinary.com/rick-rick-torrellas/image/upload/v1629292989/github_e0hmvz.png" 
    size="15%"
    />
  );
}
export function Ibook() {
  return <ImagenRounded 
  title="Docs" 
  path="https://res.cloudinary.com/rick-rick-torrellas/image/upload/v1629301790/icons/open-book_fbfnip.png" 
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
  path="https://res.cloudinary.com/rick-rick-torrellas/image/upload/v1629302749/icons/star_zz2nlm.png" 
  size="15px" 
  margin="ms-3"
  />;
}
export class  Iclipboard extends React.Component {
  render () {
    return (
      <ImagenRounded
        title="Copy to Clipboard"
        path="https://res.cloudinary.com/rick-rick-torrellas/image/upload/v1629293285/clipboard_znfqlk.png"
        size="10%"
        margin="ms-3"
      />
    )};
}
export function Ilogo() {
  return (
    <ImagenRounded 
    size="15%"
    path="https://res.cloudinary.com/rick-rick-torrellas/image/upload/v1629292504/tools_urw6zg.png"
    margin="me-5"
    />
  )
}
function ImagenRounded(props) {
  return (
    <Image
      title={props.title}
      className={props.margin}
      src={props.path}
      style={{ width: props.size }}
      rounded
    />
  );
}
