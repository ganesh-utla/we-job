import ScreenHeaderBtn from "./common/header/ScreenHeaderBtn";
import Sidebutton from "./common/sidebutton/Sidebutton";

// home screen
import Welcome from "./home/welcome/Welcome";
import Nearbyjobs from "./home/nearby/Nearbyjobs";
import Popularjobs from "./home/popular/Popularjobs";
import Sidebar from "./home/sidebar/Sidebar";
import ProfileModal from "./home/profile/ProfileModal";

// job details screen
import Company from "./jobdetails/company/Company";
import { default as JobTabs } from "./jobdetails/tabs/Tabs";
import { default as JobAbout } from "./jobdetails/about/About";
import { default as JobFooter } from "./jobdetails/footer/Footer";
import Specifics from "./jobdetails/specifics/Specifics";

// favorites
import ClearModal from "./favorites/modals/ClearModal";
import FavoriteCard from "./favorites/cards/FavoriteCard";

// common
import NearbyJobCard from "./common/cards/nearby/NearbyJobCard";

export {
  ScreenHeaderBtn,
  Sidebutton,
  Welcome,
  Sidebar,
  Nearbyjobs,
  Popularjobs,
  Company,
  JobTabs,
  JobAbout,
  JobFooter,
  Specifics,
  NearbyJobCard,
  ClearModal,
  FavoriteCard,
  ProfileModal
};
