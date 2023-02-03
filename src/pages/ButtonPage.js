import {
  GoBell,
  GoTools,
  GoTasklist,
  GoMarkGithub,
  GoMegaphone,
} from "react-icons/go";
import Button from "../components/Button";

const ButtonPage = () => {
  const handleClick = () => {
    // console.log("Clicked")
  };

  return (
    <div className="my-2 mx-1">
      <div>
        <Button success rounded outline className="mb-2" onClick={handleClick}>
          <GoBell />
          Click me!!
        </Button>
      </div>
      <div>
        <Button danger onClick={handleClick}>
          <GoMegaphone />
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning>
          <GoTools />
          See Deal!
        </Button>
      </div>
      <div>
        <Button secondary>
          <GoTasklist />
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button primary rounded>
          <GoMarkGithub />
          primary!
        </Button>
      </div>
    </div>
  );
};

export default ButtonPage;
