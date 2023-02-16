import { render, router } from "./lib";
import Add from "./pages/admin/add";
import HomePage from "./pages/admin/home";
import Project from "./pages/home/project";

const app = document.querySelector("#app");

router.on("/", () => render(HomePage, app));
router.on("/Add", () => render(Add, app));
router.on("/Project", () => render(Project, app));


router.notFound(() => render(NotFoundPage, app));
router.resolve();