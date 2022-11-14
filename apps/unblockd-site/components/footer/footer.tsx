/* eslint-disable-next-line */
export interface FooterProps {}

export function Footer(props: FooterProps) {
  return (
    <div className="text-my-light-text dark:text-my-dark-text bg-my-light-component dark:bg-my-dark-component border-my-light-border dark:border-my-dark-border flex justify-center items-center border-t">
      <h1>Made with ❤️ </h1>
    </div>
  );
}

export default Footer;
