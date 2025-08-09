import TabBar from "./components/TabBar.js";
import Content from "./components/Content.js";
import { request } from "./components/api.js";

export default function App($app) {
  this.state = {
    currentTab: "all",
    photos: [],
  };

  //tabBar
  const tabBar = new TabBar({
    $app,
    initialState: "",
    onClick: async (name) => {
      this.setState({
        ...this.state,
        currentTab: name,
        photos: await request(name === "all" ? "" : name),
      });
    },
  });

  //content
  const content = new Content({
    $app,
    initialState: [],
  });

  //state
  this.setState = (newState) => {
    this.state = newState;
    tabBar.setState(this.state.currentTab);
    content.setState(this.state.photos);
  };

  const init = async () => {
    try {
      const initialPhotes = await request();
      this.setState({
        ...this.state,
        photos: initialPhotes,
      });
    } catch (err) {
      console.log(err);
    }
  };

  init();
}
