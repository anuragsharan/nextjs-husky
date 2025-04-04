import React from "react";

interface TextComponentProps {
  text: string;
}

const Text = ({ text }: TextComponentProps) => <p>{text}</p>;

export default Text;
