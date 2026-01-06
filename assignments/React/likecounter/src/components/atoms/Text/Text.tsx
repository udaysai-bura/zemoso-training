type TextProps = {
  value: string;
};

export const Text = ({ value }: TextProps) => {
  return <h2>{value}</h2>;
};
