import React from "react";
import Image from "react-bootstrap/Image";
import config from "./../config";

const Icons = {}

Icons.Npm = function(props) {
  const title = props.title ? props.title : "NPM";
  const src = props.src ? props.src : config.icons.npm;
  const width = props.width;
  const height = props.height;
  const margin = props.margin;
  const padding = props.padding;
  return (
    < Imagen
      title={title}
      src={src}
      width={width}
      height={height}
      margin={margin}
      padding={padding}
    />
  );
}
Icons.Logo = function(props) {
  const title = props.title;
  const src = props.src ? props.src : config.icons.logo;
  const width = props.width;
  const height = props.height;
  const margin = props.margin;
  const padding = props.padding;
  return (
    < Imagen
      title={title}
      src={src}
      width={width}
      height={height}
      margin={margin}
      padding={padding}
    />
  );
}
Icons.Github = function(props) {
  const title = props.title ? props.title : "Github";
  const src = props.src ? props.src : config.icons.github;
  const width = props.width;
  const height = props.height;
  const margin = props.margin;
  const padding = props.padding;
  return (
    < Imagen
      title={title}
      src={src}
      width={width}
      height={height}
      margin={margin}
      padding={padding}
    />
  );
}
Icons.Book = function(props) {
  const title = props.title ? props.title : "Docs";
  const src = props.src ? props.src : config.icons.book;
  const width = props.width;
  const height = props.height;
  const margin = props.margin;
  const padding = props.padding;
  return (
    < Imagen
      title={title}
      src={src}
      width={width}
      height={height}
      margin={margin}
      padding={padding}
    />
  );
}
Icons.Rating = function(props) {
  const rating = props.rating;
  if (rating === 1) {
    return <Icons.Start />;
  }
  if (rating === 2) {
    return (
      <div>
        <Icons.Start />
        <Icons.Start />
      </div>
    )
  } 
  if (rating === 3) {
    return (
      <div>
        <Icons.Start />
        <Icons.Start />
        <Icons.Start />
      </div>
    )
  } 
  if (rating === 4) {
    return (
      <div>
        <Icons.Start />
        <Icons.Start />
        <Icons.Start />
        <Icons.Start />
      </div>
    )
  } 
  if (rating === 5) {
    return (
      <div>
        <Icons.Start />
        <Icons.Start />
        <Icons.Start />
        <Icons.Start />
        <Icons.Start />
      </div>
    )
  } 
  else {
    return null;
  }
}
Icons.Start = function(props) {
  const title = props.title;
  const src = props.src ? props.src : config.icons.star;
  const width = props.width;
  const height = props.height;
  const margin = props.margin;
  const padding = props.padding;
  return (
    < Imagen
      title={title}
      src={src}
      width={width}
      height={height}
      margin={margin}
      padding={padding}
    />
  );
}
Icons.Clipboard =  function(props) {
  const title = props.title ? props.title : "Copy to Clipboard";
  const src = props.src ? props.src : config.icons.clipboard;
  const width = props.width;
  const height = props.height;
  const margin = props.margin;
  const padding = props.padding;
  return (
    < Imagen
      title={title}
      src={src}
      width={width}
      height={height}
      margin={margin}
      padding={padding}
    />
  );
}
Icons.Youtube = function(props) {
  const title = props.title ? props.title : "Youtube";
  const src = props.src ? props.src : config.icons.youtubeu;
  const width = props.width;
  const height = props.height;
  const margin = props.margin;
  const padding = props.padding;
  return (
    < Imagen
      title={title}
      src={src}
      width={width}
      height={height}
      margin={margin}
      padding={padding}
    />
    )
}
Icons.Web = function(props) {
  const title = props.title ? props.title : "Official Web";
  const src = props.src ? props.src : config.icons.web;
  const width = props.width;
  const height = props.height;
  const margin = props.margin;
  const padding = props.padding;
  return (
    < Imagen
      title={title}
      src={src}
      width={width}
      height={height}
      margin={margin}
      padding={padding}
    />
  )
}
export function Imagen(props) {
  const title = props.title;
  const src = props.src ? props.src : config.icons.noIcon;
  const width = props.width ? props.width : "50%";
  const height = props.height ? props.height : "20%";
  const padding = props.padding ? props.padding : "0";
  const margin = props.margin ? props.margin : "0";
  return (
    <Image
      title={title}
      src={src}
      style={{ width: width ,height: height,margin: margin,padding: padding}}
    />
  );
}

export default Icons;